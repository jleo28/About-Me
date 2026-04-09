// lib/data.ts
// ─────────────────────────────────────────────
// All site content lives here. Edit this file
// to update your portfolio without touching
// any component code.
// ─────────────────────────────────────────────

export const siteMetadata = {
  title: "Joseph Leo",
  description:
    "CS + Business Administration @ USC. Three internships shipping production chatbots, financial NLP pipelines, and internal tools across teams spanning three continents.",
  url: "https://jleo.me",
};

export const socialLinks = {
  email: "jaleo@usc.edu",
  linkedin: "https://linkedin.com/in/josephleo05",
  github: "https://github.com/jleo28",
  twitter: "https://x.com/josephandrewleo",
};

export const taglines = [
  "currently fueled by ceremonial matcha \u{1F375}",
  "probably mid-volley somewhere in LA",
  "sand-brewed coffee evangelist \u2615",
  "night drive with no destination type",
  "couch co-op > online multiplayer, always \u{1F3AE}",
  "walking someone's dog right now, probably \u{1F436}",
  "food crawl planner in a past life \u{1F356}",
  "jazz piano hours \u{1F3B5}",
  "board game night instigator \u{1F3B2}",
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

export const aboutText = `<strong>CS</strong> + <strong>Business Administration</strong> @ <a href="https://usc.edu/" target="_blank" rel="noopener noreferrer">USC</a>. Three internships shipping production chatbots, financial NLP pipelines, and internal tools across teams spanning three continents. I gravitate towards <em>the messy middle</em> between engineering and business and love work where you can trace a line from the code to the impact.`;

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
    role: "Digital Systems Student Worker Manager",
    date: "Feb 2025 \u2013 Present",
    company: "USC Mann School of Pharmacy DHBB",
    companyUrl: "https://mann.usc.edu",
    logoUrl: "https://www.google.com/s2/favicons?domain=usc.edu&sz=128",
    description:
      "leading a team of 6, building geo-tracking attendance systems, coordinating 15+ events/semester",
  },
];

export const previousRoles: TimelineEntry[] = [
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
  description: string;
  githubUrl?: string;
}

export const projects: ProjectEntry[] = [
  {
    name: "Pok\u00E9dex++",
    description:
      "Full-stack Flask web app with interactive dashboards, ML-powered stat prediction (Linear Regression, Random Forest), and CSV persistence",
    githubUrl: "https://github.com/jleo28/AppliedPythonFinalProject",
  },
  {
    name: "TrailFinder",
    description:
      "Social hiking platform with friends system, activity feeds, and JWT auth (Java, MySQL, React)",
    githubUrl:
      "https://github.com/malachide2/CSCI201-Final-Project-Backend",
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
}

export const extracurriculars: ExtracurricularEntry[] = [
  {
    role: "Project Manager",
    org: "Core Consulting Club (CCG)",
    note: "Led 5 consultants for Ohana Subleasing Co. ($11.5M raised, $20M+ earned by hosts, backed by Zillow co-founder & ex-Airbnb execs)",
  },
  {
    role: "Business Analyst",
    org: "Avenues Consulting Group (ACG)",
    note: "For CodeNinjas",
  },
  {
    role: "Co-Chair of Assembly Operations",
    org: "International Students\u2019 Assembly (ISA)",
  },
  {
    role: "Chair of Finance",
    org: "Association of Indonesian Students at USC (ASIS)",
  },
  {
    role: "Chair of Finance",
    org: "USC Grand Challenge Scholars\u2019 Program (GCSP)",
  },
  {
    role: "Educational Consultant",
    org: "AcceptED",
  },
];

export interface ConsumingEntry {
  label: string;
  text: string;
  url?: string;
}

export const currentlyConsuming: ConsumingEntry[] = [
  {
    label: "listening to:",
    text: "Luv (sic) pt6 Uyama Hiroto Remix \u2014 Nujabes, Uyama Hiroto",
    url: "https://open.spotify.com/track/4x7z7PwjRpbtFNKXihsHRr",
  },
  {
    label: "watching:",
    text: "A Knight of the Seven Kingdoms S1",
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