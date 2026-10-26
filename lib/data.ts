// lib/data.ts
// ─────────────────────────────────────────────
// All site content lives here. Edit this file
// to update your portfolio without touching
// any component code.
// ─────────────────────────────────────────────

export const siteMetadata = {
  title: "Joseph Leo",
  description:
    "CS + Business Administration @ USC.",
  url: "https://jleo.me",
};

export const socialLinks = {
  email: "jaleo@usc.edu",
  linkedin: "https://linkedin.com/in/josephleo05",
  github: "https://github.com/jleo28",
  twitter: "https://x.com/josephandrewleo",
  resume: "/Joseph_Leo_Resume.pdf",
};

export const taglines = [
  "currently fueled by ceremonial matcha \u{1F375}",
  "probably mid-volley somewhere in LA",
  "sand-brewed coffee evangelist \u2615",
  "night drive with no destination type",
  "couch co-op > online multiplayer, always \u{1F3AE}",
  // "walking someone's dog right now, probably \u{1F436}",
  "food crawl planner in a past life \u{1F356}",
  "jazz piano hours \u{1F3B5}",
  "will leave a movie theater at 1am with no regrets \u{1F3AC}",
  "tennis forehand: a work in progress \u{1F3BE}",
];

export const cycleWords = [
  "intelligent",
  "useful",
  "thoughtful",
  "intentional",
  "purposeful",
];

export const aboutText = `<strong>CS</strong> + <strong>Business Administration</strong> @ <a href="https://usc.edu/" target="_blank" rel="noopener noreferrer">USC</a>. I gravitate towards <em>the messy middle</em> between engineering and business and love work where you can trace a line from the code to the impact.`;

export const skills = [
  "Python",
  "C++",
  "Java",
  "JavaScript",
  "Swift",
  "HTML/CSS",
  "PyTorch",
  "TensorFlow",
  "Scikit-Learn",
  "LangChain",
  "Google Vertex AI",
  "Docker",
  "MySQL",
  "Tableau",
  "Power BI",
  "Excel",
  "Matplotlib",
  "R",
];

export const languages = [
  "English (native)",
  "Indonesian (native)",
  "Japanese (native)",
  "Mandarin (professional)",
];

export interface TimelineEntry {
  role: string;
  date: string;
  description: string;
  company?: string;
  companyUrl?: string;
  logoUrl?: string;
}

export const currentRoles: TimelineEntry[] = [
  {
    role: "App Development Intern",
    date: "Aug 2026 \u2013 Present",
    company: "Keck Medicine of USC",
    companyUrl: "https://keckmedicine.org",
    logoUrl: "https://www.google.com/s2/favicons?domain=keckmedicine.org&sz=128",
    description:
      "building and supporting enterprise applications on the AppDev team within Information Services",
  },
];

export const previousRoles: TimelineEntry[] = [
  {
    role: "Digital Systems Student Worker Manager",
    date: "Feb 2025 \u2013 May 2026",
    company: "USC Mann School of Pharmacy DHBB",
    companyUrl: "https://mann.usc.edu",
    logoUrl: "https://www.google.com/s2/favicons?domain=usc.edu&sz=128",
    description:
      "leading a team of 6, building geo-tracking attendance systems, coordinating 15+ events/semester",
  },
  {
    role: "Gen. AI Engineer Intern",
    date: "May \u2013 Aug 2025",
    company: "Swing Phi",
    companyUrl: "https://swingphi.com",
    logoUrl: "/logos/SwingPhi_Logo.png",
    description:
      "end-to-end news sentiment pipeline (BERT, FinBERT, Claude LLM), 100+ daily articles, 85% event correlation accuracy",
  },
  {
    role: "AI/ML Systems Engineer Intern",
    date: "May \u2013 Aug 2024",
    company: "NTT Data Inc.",
    companyUrl: "https://nttdata.com",
    logoUrl: "https://www.google.com/s2/favicons?domain=nttdata.com&sz=128",
    description:
      "production RAG chatbot on Google Vertex AI, 30% reduction in manual reporting, cross-regional (Spain, APAC, NA)",
  },
  {
    role: "Dashboard & Analytics Intern",
    date: "May \u2013 Jul 2023",
    company: "IDN Media",
    companyUrl: "https://idntimes.com",
    logoUrl: "/logos/IDN_Logo.png",
    description:
      "Tableau dashboards from MySQL data, boosted Unilever Clear\u00AE ad engagement by 45%",
  },
  {
    role: "Research Assistant",
    date: "Aug 2022 \u2013 May 2023",
    company: "Trisakti University",
    companyUrl: "https://trisakti.ac.id/en/home-2/",
    logoUrl: "/logos/Trisakti_Logo.png",
    description:
      "consumer segmentation data-mining for Domino\u2019s Pizza (Na\u00EFve Bayes, Matplotlib, R)",
  },
];

export interface ProjectEntry {
  name: string;
  tag: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  imageUrl?: string;
  // Looping silent clip recorded by scripts/record-demos.mjs; imageUrl is the poster/fallback.
  previewVideo?: string;
  badge?: string;
  videoUrl?: string;
  devpostUrl?: string;
  caseStudyUrl?: string;
}

// Preview clips and posters live in public/projects/<slug>/ and are re-recorded
// by the "Record project previews" GitHub Action. InBite still uses a screenshot
// placeholder until its demo is back online.
export const projects: ProjectEntry[] = [
  {
    name: "PortTable",
    tag: "typescript · react · three.js · terminal49 api · vercel",
    badge: "Finalist · InnovateLA Dual-Use Hackathon 2026",
    description:
      "When a port terminal has a bad morning, PortTable tells the gate planner which containers can’t wait, why, and what to do, and flags cargo for security review.",
    liveUrl: "https://portable-ten.vercel.app",
    githubUrl: "https://github.com/tun-onraksa/port-porch-porsche",
    videoUrl: "https://youtu.be/ZJr4AeMTCKI",
    devpostUrl: "https://devpost.com/software/porttable",
    caseStudyUrl: "/projects/porttable",
    imageUrl: "/projects/porttable/poster.jpg",
    previewVideo: "/projects/porttable/preview.mp4",
  },
  {
    name: "Litmus",
    tag: "next.js · typescript · zustand",
    description:
      "A client-side tool for F-1 students to check job offers against their school's CPT rules, extracting key details and flagging issues before a DSO review.",
    liveUrl: "https://litmus-cyan.vercel.app",
    githubUrl: "https://github.com/jleo28/litmus",
    imageUrl: "/projects/litmus/poster.jpg",
    previewVideo: "/projects/litmus/preview.mp4",
  },
  {
    name: "TrailFinder",
    tag: "next.js \u00B7 supabase",
    description:
      "A map-first social hiking platform, rebuilt solo from a Java team project into a faster, friends-first experience.",
    liveUrl: "https://trailfinder-gamma.vercel.app",
    githubUrl: "https://github.com/jleo28/TrailFinder",
    imageUrl: "/projects/trailfinder/poster.jpg",
    previewVideo: "/projects/trailfinder/preview.mp4",
  },
  {
    name: "Pok\u00E9dex++",
    tag: "next.js \u00B7 scikit-learn",
    description:
      "A Pok\u00E9dex with built-in ML, predicting stats and matching similar Pok\u00E9mon across 386 data points.",
    liveUrl: "https://pokedexpp.vercel.app",
    githubUrl: "https://github.com/jleo28/pokedex-plus",
    imageUrl: "/projects/pokedex/poster.jpg",
    previewVideo: "/projects/pokedex/preview.mp4",
  },
  {
    name: "InBite",
    tag: "spring boot \u00B7 react",
    description:
      "A recipe and event app with auto-scaling shopping lists, built end-to-end with 95%+ test coverage.",
    liveUrl: "https://inbite-ecru.vercel.app",
    githubUrl: "https://github.com/jleo28/inbite",
    imageUrl:
      "https://image.thum.io/get/width/1280/crop/720/https://inbite-ecru.vercel.app",
  },
];

export interface HonorEntry {
  title: string;
  subtitle: string;
  description: string;
  logoUrl?: string;
}

export const honors: HonorEntry[] = [
  {
    title: "J&J Case Competition",
    subtitle: "2nd Place \u2013 Silver",
    description:
      "Represented Team USC at the national level against 11 schools",
    logoUrl: "https://www.google.com/s2/favicons?domain=jnj.com&sz=128",
  },
  {
    title: "Hackathon+ (Avenues Consulting)",
    subtitle: "1st Place \u2013 Gold",
    description:
      "Pitched TheraPioneer, an AI-driven therapist assistant platform",
    logoUrl: "/logos/ACG_Logo.png",
  },
  {
    title: "GSSC Pitch Competition",
    subtitle: "Semifinalist",
    description:
      "Pitched GurU, a student-faculty research matching platform",
    logoUrl: "/logos/GSSC_Logo.png",
  },
  {
    title: "The Wharton School \u2013 LBW",
    subtitle: "Full Merit-based Scholarship Recipient",
    description:
      "1 of 10 full rides to the Leadership in the Business World Summer Program",
    logoUrl:
      "https://www.google.com/s2/favicons?domain=upenn.edu&sz=128",
  },
  {
    title: "Dean\u2019s List (5\u00D7)",
    subtitle: "Recipient",
    description: "GPA \u2265 3.5",
    logoUrl: "https://www.google.com/s2/favicons?domain=usc.edu&sz=128",
  },
];

export interface ExtracurricularEntry {
  role: string;
  org: string;
  note?: string;
  company?: string;
  companyUrl?: string;
  logoUrl?: string;
}

export const extracurriculars: ExtracurricularEntry[] = [
  {
    role: "Project Manager",
    org: "Core Consulting Club (CCG)",
    company: "Ohana Subleasing Co.",
    companyUrl: "https://liveohana.ai",
    logoUrl: "https://www.google.com/s2/favicons?domain=liveohana.ai&sz=128",
    note: "Led 5 consultants through Core Consulting Club (CCG) \u2014 Ohana has raised $11.5M+ from investors including Zillow co-founder Spencer Rascoff and ex-Airbnb execs, seen $20M+ earned by hosts, and is on pace to process $60M in annual payment volume with intern-housing partnerships at Wells Fargo, eBay, and NVIDIA",
  },
  {
    role: "Business Analyst",
    org: "Avenues Consulting Group (ACG)",
    company: "Code Ninjas",
    companyUrl: "https://www.codeninjas.com",
    logoUrl: "https://www.google.com/s2/favicons?domain=codeninjas.com&sz=128",
    note: "Consulted through Avenues Consulting Group (ACG) \u2014 Code Ninjas is the largest kids\u2019 coding franchise, with 300+ locations across the US, Canada & UK, backed by private equity firm Eagle Merchant Partners",
  },
];

export const interests = [
  "\u{1F3BE} tennis",
  "\u{1F3D0} volleyball",
  "\u{1F356} food crawls",
  "\u{1F375} matcha (ceremonial)",
  "\u2615 sand-brewed coffee",
  "\u{1F3AE} couch multiplayer",
  "\u{1F436} dog-walks",
  "\u{1F9F1} legos",
  "\u{1F697} night drives",
  "\u{1F3B5} jazz piano",
  "\u{1F3AC} movie runs",
  "\u{1F3B2} board game nights",
];

export const terminalCommands: Record<string, string> = {
  help: "available commands: about, skills, languages, coffee, matcha, music, contact, night, clear, exit",
  about:
    "CS + Business @ USC. I like building things that matter. three internships deep and counting.",
  skills:
    "Python, C++, Java, JS, Swift, PyTorch, TensorFlow, Scikit-Learn, LangChain, Vertex AI, Docker, MySQL, Tableau, Power BI, R",
  languages:
    "English, Indonesian, Japanese, Mandarin \u2014 and Python.",
  coffee:
    "Sand-brewed > pour-over > espresso. Don't @ me. \u2615",
  matcha:
    "Ceremonial only. If it's culinary grade, I'm not interested. \u{1F375}",
  music:
    "on repeat: Luv (sic) pt6 Uyama Hiroto Remix \u2014 Nujabes, Uyama Hiroto \u{1F3B5}",
  contact:
    "jaleo@usc.edu | linkedin.com/in/josephleo05 | github.com/jleo28",
};
// ─────────────────────────────────────────────
// PortTable case study (/projects/porttable)
// Every number from the demo is labelled "in simulation":
// only 4 container records are real Terminal49 data.
// ─────────────────────────────────────────────

export interface CaseStudyScreenshot {
  src: string;
  caption: string;
}

export const portTableCaseStudy = {
  name: "PortTable",
  badge: "Finalist · InnovateLA Dual-Use Hackathon 2026",
  logoUrl: "/logos/PortTable_Logo.png",
  event:
    "InnovateLA x USC Viterbi Dual-Use Hackathon · LA Tech Week · Oct 16–18, 2026 · Ports & Logistics track (Terminal49)",
  team: "Elly Chong, Joseph Leo, Tun Onraksa, Shannon Sutiono",
  timeframe: "Built in about 24 hours, after pivoting to this idea on day 2.",
  summary:
    "When a port terminal has a bad morning (gate lanes down, customs holds, refrigerated containers warming), PortTable tells the gate planner which containers can’t wait, why, and what to do. It also flags cargo for security review.",
  tags: ["TypeScript", "React", "Three.js", "Terminal49 API", "Vercel"],
  links: [
    { label: "live demo", url: "https://portable-ten.vercel.app" },
    { label: "code", url: "https://github.com/tun-onraksa/port-porch-porsche" },
    { label: "video", url: "https://youtu.be/ZJr4AeMTCKI" },
    { label: "devpost", url: "https://devpost.com/software/porttable" },
  ],
  problem: [
    "When a terminal is disrupted (gate lanes down, customs holds, refrigerated containers warming), the gate planner has to decide quickly which containers move first and which can wait.",
    "A wrong call means warming reefers, trucks queuing for hours, and growing delay and handling charges. In a crisis, the same call decides how fast medicine, food and relief supplies get out.",
  ],
  dualUse:
    "The same prioritisation engine serves everyday commercial throughput and crisis response, and its inspection ranking supports port security.",
  built: [
    "<strong>Dashboard:</strong> a one-sentence situation summary, four key numbers, and “Decide next”: the five most urgent containers, each with its reason, suggested action and one-click approval. A person approves every action.",
    "<strong>Gate plan:</strong> compares the plan with “hold everything.” In simulation, it cut projected delay and handling charges by about 88%, left zero trucks waiting over 3 hours, and got all 11 priority containers out by 11:00.",
    "<strong>Security review:</strong> inspection cases ranked by an explainable review-priority score with a per-point breakdown (e.g. +40 for a declared-empty box that weighs 27,400 kg). Customs, USDA and VACIS holds can never be overridden.",
    "<strong>Terminal49 integration:</strong> a serverless API route that sends tracking requests with a server-side key, a “Look up a box” panel for container status and milestones, and a status light for the API connection. Real shipment data (EVER LAUREL, 4 containers) sits next to simulated data, always labelled.",
    "<strong>Rulebook:</strong> white-label priority rules with presets such as “Lifeline first” for a crisis. The queue re-ranks instantly, and the safety rules stay locked.",
    "<strong>3D terminal simulation and “Follow C184”:</strong> a guided demo that follows one refrigerated container through a data conflict, inspection and release.",
  ],
  role: [
    "I built the Terminal49 integration and deployed it on Vercel: the serverless proxy, key management, tracking requests and a read-back lookup with a labelled fallback.",
    "I designed and built the Dashboard redesign, which became the app’s home page: “Decide next” with expandable reasoning that routes to Security review or the 3D yard, the gate plan summary, the lane strip, and the Terminal49 panels and status light.",
    "I built the Rulebook (editable, white-label priority rules with locked safety rules) and the parcel-style container tracker, which works like a package-delivery tracker but continues through the terminal’s own steps.",
    "I integrated a teammate’s review-priority model into Security review.",
    "I managed branches, pull requests, merges and production deploys for the team repo, and wrote the demo script and parts of the pitch (feasibility, funding, responsible use).",
    "My teammates built the PortTable shell and 3D simulation, the Priority Lanes engine and the C184 demo.",
  ],
  outcome:
    "Finalist at the InnovateLA x USC Viterbi Dual-Use Hackathon. PortTable is a hackathon prototype, not a deployed production system.",
  honesty:
    "Only 4 container records are real Terminal49 data; the rest of the 112-container scenario is simulated. The free Terminal49 plan only allows creating tracking requests, so reading data back needs a paid key.",
  learned: [
    "Real data is often thin, so the craft is in building realistic simulated scenarios on top of it, and labelling clearly which is which.",
    "Operators trust a priority score they can read. Keep it explainable and modular so each port can plug in its own rules, then move to data-driven scoring.",
  ],
  screenshotsNote:
    "All screenshots show the simulated 112-container disruption scenario.",
  screenshots: [
    { src: "/projects/porttable/01-dashboard.webp", caption: "Dashboard: situation summary, key numbers, \u201CDecide next\u201D and the gate plan" },
    { src: "/projects/porttable/02-priority-queue.webp", caption: "Priority queue with holds, deadlines, lane slots and one-click approval" },
    { src: "/projects/porttable/03-security-review.webp", caption: "Security review with the \u201CWhy 100\u201D breakdown open" },
    { src: "/projects/porttable/04-follow-c184.webp", caption: "Live operations during \u201CFollow C184\u201D" },
    { src: "/projects/porttable/05-rulebook.webp", caption: "Rulebook with white-label presets and locked safety rules" },
  ] as CaseStudyScreenshot[],
};
