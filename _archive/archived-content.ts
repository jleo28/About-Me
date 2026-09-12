// _archive/archived-content.ts
// Snippets removed from the live site. Restore by copying back into lib/data.ts and lib/hooks.ts.

// ── From lib/data.ts › taglines ──────────────────────────────────────────────
// Removed tagline:
//   "board game night instigator 🎲",

// ── From app/page.tsx › skills section ───────────────────────────────────────
// Removed: <TagCloud id="skills" label="skills" items={skills} stagger={6} />
// skills array remains in lib/data.ts (still imported by terminal "skills" command).
// To restore: re-add the TagCloud line and the `skills` import in app/page.tsx,
// and re-add the { id: "skills", label: "skills" } entry to NavDots section lists.

// ── From lib/data.ts › projects (old structure) ──────────────────────────────
// Old ProjectEntry interface only had: name, description, githubUrl
// Old projects:
//   {
//     name: "Pokédex++",
//     description: "Full-stack Flask web app with interactive dashboards, ML-powered stat prediction (Linear Regression, Random Forest), and CSV persistence",
//     githubUrl: "https://github.com/jleo28/AppliedPythonFinalProject",
//   },
//   {
//     name: "TrailFinder",
//     description: "Social hiking platform with friends system, activity feeds, and JWT auth (Java, MySQL, React)",
//     githubUrl: "https://github.com/malachide2/CSCI201-Final-Project-Backend",
//   },

// ── From lib/hooks.ts › useGreeting ──────────────────────────────────────────
// Casual greeting logic (replaced with formal Good morning/afternoon/evening):
//   if (h >= 5 && h < 12)  setGreeting("Morning! I'm Joe 👋");
//   else if (h >= 12 && h < 17) setGreeting("Afternoon! I'm Joe 👋");
//   else if (h >= 17 && h < 21) setGreeting("Evening! I'm Joe 👋");
//   else setGreeting("Fellow night owl, I'm Joe 👋");

// ── From lib/data.ts › extracurriculars ──────────────────────────────────────
// Archived entries (ISA through AcceptED) — CCG and ACG remain on the site,
// reformatted with a logo + description like the currently/previously
// timeline. To restore one, add it back to the extracurriculars array in
// lib/data.ts:
//   {
//     role: "Co-Chair of Assembly Operations",
//     org: "International Students' Assembly (ISA)",
//   },
//   {
//     role: "Chair of Finance",
//     org: "Association of Indonesian Students at USC (ASIS)",
//   },
//   {
//     role: "Chair of Finance",
//     org: "USC Grand Challenge Scholars' Program (GCSP)",
//   },
//   {
//     role: "Educational Consultant",
//     org: "AcceptED",
//   },
//
// ── From app/globals.css › Extracurriculars ──────────────────────────────────
// Removed .ec-list/.ec-role/.ec-org/.ec-note rules (Extracurriculars.tsx now
// renders with the .tl-* Timeline classes instead). If any archived entry
// above is restored without a logo/company, the old rules were:
//   .ec-list { list-style: none; padding: 0; }
//   .ec-list li { padding: 0.55rem 0; border-bottom: 1px solid var(--border-light); font-size: 0.9rem; }
//   .ec-list li:last-child { border-bottom: none; }
//   .ec-role { font-weight: 600; }
//   .ec-org { color: var(--text-soft); }
//   .ec-note { font-size: 0.82rem; color: var(--text-muted); }
//
// ── From app/globals.css › Consuming ─────────────────────────────────────────
// Removed alongside the "currently consuming" section (see _archive/Consuming.tsx):
//   .consuming-list { list-style: none; padding: 0; }
//   .consuming-list li { font-size: 0.88rem; color: var(--text-soft); padding: 0.3rem 0; }
//   .consuming-list li em { font-style: normal; font-family: "IBM Plex Mono", monospace; font-size: 0.76rem; color: var(--text-muted); margin-right: 0.4rem; }
//   .consuming-list li a { color: var(--text-soft); text-decoration: none; border-bottom: 1px solid var(--border); transition: all 0.2s; }
//   .consuming-list li a:hover { color: var(--text); border-color: var(--text); }

// ── From components/Hero.tsx › hero-label ────────────────────────────────────
// Internship-seeking banner (removed when no longer actively looking):
//   <FadeIn stagger={0}>
//     <div className="hero-label">
//       <span className="dot" />
//       {" actively looking for "}
//       <span className="label-tag year">2026</span>
//       {" "}
//       <span className="label-tag summer">summer</span>
//       {" / "}
//       <span className="label-tag fall">fall</span>
//       {" internships!"}
//     </div>
//   </FadeIn>
//
// To restore: add back the FadeIn block in Hero.tsx and shift remaining stagger
// values up by 1 (stagger={1} → stagger={1}, etc. are already correct — the
// hero-label was stagger={0}, so restoration is a direct re-insert).
