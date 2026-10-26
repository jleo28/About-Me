// Records short silent preview clips of each live project for the
// project cards on jleo.me. Run by .github/workflows/record-demos.yml.
//
//   node scripts/record-demos.mjs            # record every project
//   node scripts/record-demos.mjs litmus     # record only the named ones
//
// Output: public/projects/<slug>/preview.mp4 and poster.jpg

import { chromium } from "playwright";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const W = 1280;
const H = 720;
const pause = (page, ms) => page.waitForTimeout(ms);

async function smoothScroll(page, px, steps = 30) {
  for (let i = 0; i < steps; i++) {
    await page.mouse.wheel(0, px / steps);
    await pause(page, 40);
  }
}

async function clickText(page, text, opts = {}) {
  await page.getByRole("button", { name: text, exact: opts.exact ?? true }).first().click();
}

const FLOWS = {
  porttable: {
    url: "https://portable-ten.vercel.app",
    async run(page) {
      // The dashboard scrolls inside its own panel, so walk the sidebar instead.
      await pause(page, 3000);
      for (const section of ["Live operations", "Security review", "Resource planning", "Dashboard"]) {
        await page.getByText(section, { exact: true }).first().click().catch(() => {});
        await pause(page, 2600);
      }
    },
  },

  litmus: {
    url: "https://litmus-cyan.vercel.app",
    async run(page) {
      await pause(page, 1500);
      await clickText(page, "Sample A");
      await pause(page, 900);
      await clickText(page, "Undergraduate");
      await pause(page, 400);
      await clickText(page, "Senior");
      await pause(page, 400);
      await clickText(page, "No");
      await pause(page, 600);
      await clickText(page, "Check this offer.");
      await page.waitForURL(/confirm/, { timeout: 15000 });
      await pause(page, 1800);
      await clickText(page, "Run the check.");
      await page.waitForURL(/results/, { timeout: 15000 });
      await pause(page, 2000);
      await smoothScroll(page, 700);
      await pause(page, 2000);
    },
  },

  trailfinder: {
    url: "https://trailfinder-gamma.vercel.app",
    async run(page) {
      await pause(page, 2500);
      await page.getByRole("button", { name: /Try as guest/ }).first().click();
      await page.waitForURL(/\/feed/, { timeout: 30000 });
      await pause(page, 2000);
      await smoothScroll(page, 700);
      await pause(page, 1500);
      await smoothScroll(page, 700);
      await pause(page, 1500);
      await page.goto("https://trailfinder-gamma.vercel.app/trails", { waitUntil: "networkidle" }).catch(() => {});
      await pause(page, 3000);
    },
  },

  pokedex: {
    url: "https://pokedexpp.vercel.app/pokedex",
    async run(page) {
      await pause(page, 2000);
      await smoothScroll(page, 900, 40);
      await pause(page, 1000);
      await page.goto("https://pokedexpp.vercel.app/pokedex/charizard");
      await pause(page, 2500);
      await smoothScroll(page, 500);
      await pause(page, 1200);
      await page.goto("https://pokedexpp.vercel.app/lab/predict");
      await pause(page, 1200);
      await clickText(page, "Predict");
      await page.getByText(/PREDICTED BST/i).waitFor({ timeout: 40000 });
      await pause(page, 2500);
    },
  },

  inbite: {
    url: "https://inbite-ecru.vercel.app",
    async run(page) {
      await pause(page, 2500);
      await page.getByRole("button", { name: /Try as guest/ }).first().click();
      await page.waitForURL(/\/events/, { timeout: 30000 });
      await pause(page, 2000);
      await page.getByRole("link", { name: /Friday Dinner Party/ }).first().click();
      await pause(page, 2500);
      await smoothScroll(page, 600);
      await pause(page, 2000);
    },
  },
};

const wanted = process.argv.slice(2);
const slugs = wanted.length ? wanted : Object.keys(FLOWS);
const browser = await chromium.launch();
const failures = [];

for (const slug of slugs) {
  const flow = FLOWS[slug];
  if (!flow) { console.error(`unknown project: ${slug}`); failures.push(slug); continue; }
  const videoDir = mkdtempSync(join(tmpdir(), `rec-${slug}-`));
  const context = await browser.newContext({
    viewport: { width: W, height: H },
    deviceScaleFactor: 1,
    colorScheme: "light",
    recordVideo: { dir: videoDir, size: { width: W, height: H } },
  });
  const page = await context.newPage();
  try {
    console.log(`recording ${slug}…`);
    // Warm the site first so the clip doesn't open on a cold-start spinner.
    const warm = await context.request.get(flow.url, { timeout: 60000 }).catch(() => null);
    console.log(`  warm-up ${warm ? warm.status() : "failed"}`);
    await page.goto(flow.url, { waitUntil: "networkidle", timeout: 60000 }).catch(() => {});
    const start = Date.now();
    await flow.run(page);
    const seconds = (Date.now() - start) / 1000;
    await context.close();

    const raw = join(videoDir, readdirSync(videoDir).find((f) => f.endsWith(".webm")));
    const outDir = join("public", "projects", slug);
    mkdirSync(outDir, { recursive: true });
    // Trim the blank page-load at the start; keep the scripted part.
    const total = Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", raw]).toString());
    const skip = Math.max(0, total - seconds - 0.3).toFixed(2);
    execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-ss", skip, "-i", raw,
      "-vf", "scale=960:-2,fps=24", "-c:v", "libx264", "-profile:v", "main", "-pix_fmt", "yuv420p",
      "-crf", "30", "-preset", "slow", "-movflags", "+faststart", "-an", join(outDir, "preview.mp4")]);
    execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-ss", "1", "-i", join(outDir, "preview.mp4"),
      "-frames:v", "1", "-q:v", "4", join(outDir, "poster.jpg")]);
    console.log(`  saved ${outDir}/preview.mp4 (${seconds.toFixed(1)}s)`);
  } catch (err) {
    // ::error:: lines show up as annotations on the run page without signing in.
    console.error(`::error title=${slug}::${String(err.message).split("\n")[0]}`);
    failures.push(slug);
    await context.close().catch(() => {});
  } finally {
    rmSync(videoDir, { recursive: true, force: true });
  }
}

await browser.close();
if (failures.length) console.error(`failed: ${failures.join(", ")}`);
process.exit(failures.length === slugs.length ? 1 : 0);
