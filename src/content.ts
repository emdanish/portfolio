/**
 * Single source of truth for all site content.
 *
 * Every value in this file is transcribed from `facts.md` (which wins on any
 * conflict) or the CV PDF in the repo root. Do not add data that is not in
 * those sources. Missing values are typed as `null` and must render as a
 * visible TODO, never as invented content.
 */

export const identity = {
  name: "Muhammad Danish",
  /** Short monogram used for the favicon, nav mark, and footer. */
  monogram: "MD",
  role: "Full-Stack Developer, AI-Powered Applications",
  /** facts.md allows splitting this typographically across lines. */
  heroStatement: [
    "I build AI products end to end,",
    "and I care about what they refuse to do.",
  ],
  location: "Pakistan (open to remote worldwide)",
  availability: "Open to full-time roles and freelance projects",
  email: "muhammadd03@gmail.com",
  github: "https://github.com/emdanish75",
  linkedin: "https://www.linkedin.com/in/emdanish",
  /** Portfolio this site replaces; used only as canonical-domain fallback. */
  previousSite: "https://emdanish.vercel.app",
  /** facts.md: new domain not purchased — deploy URL is decided at deploy time. */
  domain: null as string | null,
  cv: {
    /** Served from /public — copied from the repo-root PDF. */
    path: "/Muhammad-Danish-CV.pdf",
    label: "Download CV",
  },
} as const;

/**
 * Metrics approved for publishing. facts.md: use ONLY these numbers, with
 * this soft wording ("roughly", "approximately").
 */
export const approvedMetrics = {
  shortlisting: "roughly 50% less manual shortlisting effort in internal trials",
  pageLoad: "key page load times reduced by approximately 25% at RemoteFlow",
  automation: "automation workflows save the team roughly 5 hours per week",
} as const;

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  stack: readonly string[];
  /** Only links that exist in facts.md. Private repos / non-live apps are omitted. */
  links: readonly ProjectLink[];
  image: {
    src: string;
    alt: string;
    /** True once the user has generated and placed the real artwork. */
    available: boolean;
  };
};

export const flagship = {
  slug: "recruitimate",
  title: "Recruitimate",
  oneLiner:
    "An AI-native hiring platform that screens resumes, runs structured interviews, and scores candidates on what they actually say.",
  role: "Core engineer at Arken Systems, owning features end to end.",
  problem:
    "Hiring teams drown in resumes, and the AI interview tools that promise to help by scoring faces and tone are scientifically weak and now banned in EU hiring.",
  build:
    "Next.js and TypeScript frontend; FastAPI backend on multi-tenant PostgreSQL; real-time interviews over LiveKit (WebRTC) with AssemblyAI streaming transcription; LLM scoring through the Claude and Gemini APIs using tool use and structured rubrics; retrieve-then-rerank resume screening on pgvector.",
  principle:
    "Candidate scoring is grounded strictly in interview transcripts, with no facial or vocal affect inference, aligned with the EU AI Act.",
  outcome: "Roughly 50% less manual shortlisting effort in internal trials.",
  stack: [
    "Next.js",
    "TypeScript",
    "FastAPI",
    "PostgreSQL",
    "pgvector",
    "LiveKit",
    "AssemblyAI",
    "Claude API",
    "Gemini API",
  ],
  links: [{ label: "Visit recruitimate.app", href: "https://recruitimate.app/" }],
  /** facts.md: repo is private — no repo link is rendered anywhere. */
  caseStudyPath: "/recruitimate",
  image: {
    src: "/images/projects/recruitimate.png",
    alt: "Editorial illustration for Recruitimate: interview transcripts being weighed on a scale.",
    available: false,
  },
  /**
   * Case-study detail, sourced from the CV's Arken Systems section and
   * facts.md. Each block is verbatim-faithful to those sources.
   */
  caseStudy: {
    interviews:
      "Multi-step interview intelligence workflows combine real-time audio over LiveKit (WebRTC), streaming transcription with AssemblyAI, and structured LLM scoring through tool use and function calling.",
    prompts:
      "Token-efficient prompt pipelines across the Claude and Gemini APIs cover system prompt design, conversation history and context window management, streaming responses, and cost-aware model selection.",
    screening:
      "Retrieval-augmented resume screening runs an embedding-based retrieve-then-rerank pipeline on PostgreSQL with pgvector, cutting manual shortlisting effort by roughly half in internal trials.",
    responsibleAI:
      "Scoring is grounded strictly in transcript content and excludes facial and vocal affect inference, keeping outputs consistent, explainable, and aligned with emerging AI hiring regulation such as the EU AI Act.",
    platform:
      "A Next.js and TypeScript frontend and a FastAPI backend on a multi-tenant PostgreSQL architecture, with features owned end to end.",
  },
} as const;

export const projects: readonly Project[] = [
  {
    slug: "fyp-idea-generator",
    title: "FYP Idea Generator",
    oneLiner:
      "A research-grounded idea engine that generates final year project ideas backed by real academic literature.",
    stack: ["Next.js", "React", "Mistral AI", "CORE Research API", "Supabase", "Tailwind CSS"],
    links: [
      { label: "Live", href: "https://fypideagen.vercel.app/" },
      { label: "Repo", href: "https://github.com/emdanish/fyp-idea-generator" },
    ],
    image: {
      src: "/images/projects/fyp-idea-generator.png",
      alt: "Editorial illustration for FYP Idea Generator: academic papers flowing into a single bright idea.",
      available: false,
    },
  },
  {
    slug: "radiant-thought",
    title: "Radiant Thought",
    oneLiner: "An AI journaling app that turns entries into reflective insight.",
    stack: ["React", "TypeScript", "Supabase", "Gemini API", "Tailwind CSS"],
    links: [
      { label: "Live", href: "https://radiantthought.vercel.app/" },
      { label: "Repo", href: "https://github.com/emdanish/radiant-thought-scribe" },
    ],
    image: {
      src: "/images/projects/radiant-thought.png",
      alt: "Editorial illustration for Radiant Thought: handwritten journal lines unfolding into radiant reflections.",
      available: false,
    },
  },
  {
    slug: "blog-platform",
    title: "Blog Platform",
    oneLiner: "A full-stack publishing platform with an admin CMS.",
    stack: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
    links: [
      // facts.md: not live — only the repo link exists.
      { label: "Repo", href: "https://github.com/emdanish75/blog-app-using-react-and-mongodb" },
    ],
    image: {
      src: "/images/projects/blog-platform.png",
      alt: "Editorial illustration for Blog Platform: printed pages arranged into ordered publishing columns.",
      available: false,
    },
  },
];

export const writing = {
  title: "We Taught Our Hiring AI to Ignore Your Face",
  oneLiner:
    "Why our AI interviewer scores only what candidates say, the thousand-study review behind that decision, and why the EU now bans what half the industry was selling.",
  href: "https://www.linkedin.com/pulse/we-taught-our-hiring-ai-ignore-your-face-muhammad-danish-panuf/",
  outlet: "LinkedIn",
} as const;

export type Role = {
  company: string;
  title: string;
  /** Mono-font display dates, verbatim from facts.md. */
  period: string;
  summary: string;
};

export const experience: readonly Role[] = [
  {
    company: "Arken Systems",
    title: "Junior Software Engineer",
    period: "Feb 2026 — Present",
    summary:
      "Building AI-integrated products across React, Next.js, TypeScript, Node.js, Python (FastAPI), and PostgreSQL; core engineer on Recruitimate.",
  },
  {
    company: "RemoteFlow",
    title: "Frontend Engineer",
    period: "Feb 2025 — Jun 2026",
    summary:
      "Responsive, reusable UI in Next.js, React, TypeScript, and GraphQL for an AI-powered job automation platform; cut key page load times by ~25%.",
  },
  {
    company: "Baccalytics",
    title: "Full Stack Developer",
    period: "Jun 2025 — Sep 2025",
    summary:
      "Multi-tenant EdTech platform for IB schools on Next.js and Supabase, with role-based access control and core LMS features.",
  },
  {
    company: "Alabtaal Developers",
    title: "Junior Software Developer",
    period: "May 2024 — Dec 2024",
    summary:
      "Records management and reporting system in Java Spring Boot; Docker deployment, Jira, agile workflow.",
  },
];

export const education = {
  school: "Air University",
  degree: "BS Computer Science (BSCS)",
  period: "Sep 2022 — Jun 2026",
  detail: "CGPA 3.59",
} as const;

export type SkillGroup = { label: string; items: readonly string[] };

/** facts.md: keep grouped and visually quiet, no percentage bars ever. */
export const skillGroups: readonly SkillGroup[] = [
  { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "FastAPI (Python)", "REST", "GraphQL", "WebSockets"],
  },
  { label: "AI", items: ["Claude API", "Gemini API", "RAG", "Prompt engineering", "Streaming"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "pgvector"] },
  { label: "Practices", items: ["Git", "Docker", "CI/CD", "Vercel", "Code review", "Testing"] },
];

export type Testimonial = { quote: string; name: string; role: string };

/**
 * facts.md: NONE YET — real quotes will be added later. The section renders
 * nothing while this list is empty. Never fabricate entries.
 */
export const testimonials: readonly Testimonial[] = [];

/**
 * About copy, written strictly from facts.md and the CV in first person
 * (~150 words). Sources for each claim: hero statement, Arken/Recruitimate
 * build details, transcript-only principle, RemoteFlow/Baccalytics/Alabtaal
 * roles, education, and availability.
 */
export const about: readonly string[] = [
  "I'm Muhammad Danish, a full-stack developer in Pakistan building AI products end to end. At Arken Systems I'm a core engineer on Recruitimate, an AI-native hiring platform: Next.js and TypeScript up front, FastAPI on multi-tenant PostgreSQL behind, real-time interviews over LiveKit with streaming transcription, and LLM scoring through the Claude and Gemini APIs.",
  "The part I care about most is deciding what the product should refuse to do. Recruitimate scores candidates only on what they say in the transcript — no facial or vocal affect inference — a line we drew deliberately, aligned with the EU AI Act. I wrote about that decision, and I'd draw the same line again.",
  "Before this, I cut key page load times by roughly 25% at RemoteFlow, built a multi-tenant EdTech platform at Baccalytics, and shipped a Spring Boot records system at Alabtaal Developers. I finished my BSCS at Air University in June 2026, and I'm open to full-time roles and freelance projects.",
];

/** Site chrome and shared UI strings, kept here so copy lives in one file. */
export const ui = {
  nav: [
    { label: "Work", href: "#work" },
    { label: "Writing", href: "#writing" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  cta: {
    primary: "Get in touch",
    secondary: "View selected work",
  },
  builtWith: "Built with Next.js, Tailwind, and Motion",
} as const;
