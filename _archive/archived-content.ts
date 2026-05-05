// _archive/archived-content.ts
// Snippets removed from the live site. Restore by copying back into lib/data.ts and lib/hooks.ts.

// ── From lib/data.ts › taglines ──────────────────────────────────────────────
// Removed tagline:
//   "board game night instigator 🎲",

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
