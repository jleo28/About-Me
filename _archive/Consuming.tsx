// _archive/Consuming.tsx
// Removed: "currently consuming" section archived off the live site.
// To restore: copy back to components/Consuming.tsx, re-add the
// `<Consuming stagger={11} />` line + import in app/page.tsx, re-add the
// `{ id: "consuming", label: "currently consuming" }` entry to NavDots.tsx,
// re-add the ConsumingEntry interface + currentlyConsuming array to
// lib/data.ts (see below), and restore the .consuming-list rules in
// app/globals.css (see _archive/archived-content.ts).

import { currentlyConsuming } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Consuming({ stagger }: { stagger?: number }) {
  return (
    <FadeIn id="consuming" className="section" stagger={stagger}>
      <div className="section-label">currently consuming</div>
      <ul className="consuming-list">
        {currentlyConsuming.map((c, i) => (
          <li key={i}>
            <em>{c.label}</em>{" "}
            {c.url ? (
              <a href={c.url} target="_blank" rel="noopener noreferrer">
                {c.text}
              </a>
            ) : (
              c.text
            )}
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}

// ── lib/data.ts › ConsumingEntry + currentlyConsuming ────────────────────────
// export interface ConsumingEntry {
//   label: string;
//   text: string;
//   url?: string;
// }
//
// export const currentlyConsuming: ConsumingEntry[] = [
//   {
//     label: "listening to:",
//     text: "Luv (sic) pt6 Uyama Hiroto Remix — Nujabes, Uyama Hiroto",
//     url: "https://open.spotify.com/track/4x7z7PwjRpbtFNKXihsHRr",
//   },
//   {
//     label: "watching:",
//     text: "A Knight of the Seven Kingdoms S1",
//   },
// ];
