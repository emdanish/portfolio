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
  role: "Full Stack Developer · Indie Hacker · Founder",
  /** facts.md allows splitting this typographically across lines. */
  heroStatement: [
    "I build AI products end to end,",
    "and I care about what they refuse to do.",
  ],
  /** Substring of the second statement line that carries the amber marker. */
  heroHighlight: "refuse to do.",
  location: "Pakistan (open to remote worldwide)",
  availability: "Open to full-time roles and freelance projects",
  email: "muhammadd03@gmail.com",
  github: "https://github.com/emdanish",
  linkedin: "https://www.linkedin.com/in/emdanish",
  /** Portfolio this site replaces; used only as canonical-domain fallback. */
  previousSite: "https://emdanish.vercel.app",
  /** facts.md: new domain not purchased; deploy URL is decided at deploy time. */
  domain: null as string | null,
  cv: {
    /** Served from /public, copied from the repo-root PDF. */
    path: "/Muhammad-Danish-CV.pdf",
    label: "Download CV",
  },
} as const;

/**
 * The Experience metric strip. Each real number appears at most twice on the
 * page and never twice in adjacent sections: the ~50% lives only in the
 * flagship spotlight and case study (its canonical home); ~25% here and in
 * the RemoteFlow role line; ~5 hrs only here. The project count is padded to
 * echo the section numerals and is countable from this very page.
 */
export const metrics = [
  { value: 25, prefix: "~", suffix: "%", label: "reduction in key page load times at RemoteFlow" },
  { value: 5, prefix: "~", suffix: " hrs", label: "saved weekly by automation workflows" },
  { value: 6, prefix: "0", suffix: "", label: "production projects" },
] as const;

/** Status line for the footer. Sources: Variorum, the Arken roles, and the essay. */
export const currently =
  "Currently: building Variorum, my engineering memory layer for GitHub, shipping Recruitimate and Zovo at Arken Systems, and writing about responsible AI.";

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  stack: readonly string[];
  /** Only links that exist in facts.md. Private repos / non-live apps are omitted. */
  links: readonly ProjectLink[];
  /** null while the artwork is still being generated: the card renders a
   *  quiet solid block instead of a broken image. */
  image: { src: string; alt: string } | null;
};

/**
 * Variorum, the flagship founder project. Gets the largest treatment on the
 * homepage and its own case study at /variorum. All copy traces to the
 * Variorum brief recorded in facts.md.
 */
export const variorum = {
  slug: "variorum",
  title: "Variorum",
  headline: "The memory your codebase never had.",
  oneLiner:
    "An AI-powered engineering memory layer for GitHub repositories. It preserves the decisions, the history, and the reasoning around your code, so context does not disappear when engineers move on.",
  role: "Founder and builder.",
  problem:
    "Code is version-controlled. The reasoning behind it is not. Why a decision was made, why a workaround exists, which docs are stale, and what is risky to touch all live in people's heads, scattered commits, and old pull requests. That knowledge erodes as teams grow and people leave, and new engineers lose days rebuilding context that used to exist.",
  why:
    "I built Variorum because I kept hitting this problem myself. Joining an unfamiliar codebase, the code and the git history were always there, but the why was gone. Variorum is my attempt to make that reasoning durable and queryable.",
  how:
    "Install the GitHub App on a repository and Variorum indexes the code, docs, and history. From there you can ask how something works and get a cited answer, plan a change and see what it will affect, and get automatic insight on every pull request, with a weekly health digest in Slack.",
  audience:
    "It is built for teams and individual developers who maintain codebases that outlive the people who wrote them. Onboarding, code review, and safe refactoring are the moments it targets.",
  highlights: [
    {
      title: "Cited answers from your real codebase",
      body: "Ask in plain English and get an answer grounded in the actual code, docs, and pull requests, with citations that link to the exact lines and PRs.",
    },
    {
      title: "Change-risk analysis before you code",
      body: "Plan a change and see the files it touches, how risky each one is, who owns it, and which tests are missing.",
    },
    {
      title: "Docs that fix themselves",
      body: "When documentation drifts from the code, Variorum detects it and opens a fix pull request with the evidence attached.",
    },
    {
      title: "Insight where you already work",
      body: "Risk-scored briefings on every pull request, untested scenarios surfaced, and a weekly health digest in Slack.",
    },
  ],
  rule: "Variorum proposes, humans decide.",
  philosophy:
    "Coding assistants help you write the next line. Variorum understands the code that already exists and keeps that knowledge alive. It does not generate your features; it builds the cited memory around them and surfaces it when you need it. It never auto-merges and never force-pushes.",
  hardPart:
    "The hard part was the AI engineering: turning a whole repository into something a model can reason about reliably, and citing every claim back to a source.",
  retrieval:
    "Retrieval is a hybrid of keyword and semantic search over embeddings, blending code, docs, and engineering history into one cited answer. The emphasis is on grounding and reducing hallucination, not just calling an LLM.",
  stackClusters: [
    {
      label: "Frontend",
      stack: "Next.js (App Router), React, TypeScript strict, Tailwind CSS",
      reason: "a fast, typed, product-grade dashboard",
    },
    {
      label: "Backend",
      stack: "FastAPI, Python, Pydantic, SQLAlchemy, Alembic",
      reason: "async IO-heavy AI and GitHub workloads with typed models and real migrations",
    },
    {
      label: "Data",
      stack: "PostgreSQL, full-text search, optional pgvector",
      reason: "hybrid retrieval today, semantic search at scale when it is needed",
    },
    {
      label: "Code understanding",
      stack: "tree-sitter",
      reason: "a real structural map of files, functions, and classes instead of fragile regex",
    },
    {
      label: "AI architecture",
      stack: "Provider-agnostic layer over Gemini, DeepSeek, and Perplexity",
      reason: "automatic fallback, so one outage or quota limit never breaks the product",
    },
    {
      label: "Integration",
      stack: "GitHub App",
      reason: "least-privilege, per-installation tokens and verified webhooks",
    },
  ],
  links: {
    live: { label: "Visit variorum.dev", href: "https://variorum.dev" },
    source: { label: "Source code", href: "https://github.com/emdanish/variorum" },
  },
  caseStudyPath: "/variorum",
  /** Cover image slot; wired in once the user provides the file. */
  image: null as { src: string; alt: string } | null,
} as const;

export const recruitimate = {
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
  /** Approved metric, split for display: big figure + soft-worded caption. */
  outcome: {
    figure: "~50%",
    detail: "less manual shortlisting effort in internal trials",
  },
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
  links: [{ label: "Live demo", href: "https://recruitimate.app/" }],
  /** facts.md: repo is private, so no repo link is rendered anywhere. */
  caseStudyPath: "/recruitimate",
  image: {
    src: "/images/projects/recruitimate.png",
    alt: "Editorial illustration for Recruitimate, the hiring platform that scores candidates on what they actually say: stacks of interview transcripts weighed on a balance scale, with face-scanning tools crossed out beside it.",
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
    /** Connective framing for the case study; the claims trace to the CV's
     * "consistent, explainable" language and the linked essay. */
    reflection:
      "That refusal is a product decision, not a disclaimer. It is what makes the scores explainable to the hiring teams who act on them. I wrote about the reasoning in",
  },
} as const;

export const projects: readonly Project[] = [
  {
    slug: "zovo",
    title: "Zovo",
    oneLiner:
      "An enterprise marketing and campaign management platform where agencies run influencer campaigns, digital advertising, and finance workflows from a single dashboard.",
    stack: ["Next.js", "React", "TypeScript", "Appwrite", "MariaDB", "Docker"],
    // facts.md: repo is private; only the live link renders.
    links: [{ label: "Live demo", href: "https://zovo.i-o.digital/" }],
    image: {
      src: "/images/projects/zovo.png",
      alt: "Editorial illustration for Zovo, the enterprise marketing platform: scattered campaign threads carrying megaphones, coins, and charts weaving into one ordered switchboard console.",
    },
  },
  {
    slug: "fyp-idea-generator",
    title: "FYP Idea Generator",
    oneLiner:
      "A research-grounded idea engine that generates final year project ideas backed by real academic literature.",
    stack: ["Next.js", "React", "Mistral AI", "CORE Research API", "Supabase", "Tailwind CSS"],
    links: [
      { label: "Live demo", href: "https://fypideagen.vercel.app/" },
      { label: "Source code", href: "https://github.com/emdanish/fyp-idea-generator" },
    ],
    image: {
      src: "/images/projects/fyp-idea-generator.png",
      alt: "Editorial illustration for FYP Idea Generator, the idea engine backed by real academic literature: a stream of research papers flowing into a single bright bulb of folded paper.",
    },
  },
  {
    slug: "radiant-thought",
    title: "Radiant Thought",
    oneLiner: "An AI journaling app that turns entries into reflective insight.",
    stack: ["React", "TypeScript", "Supabase", "Gemini API", "Tailwind CSS"],
    links: [
      { label: "Live demo", href: "https://radiantthought.vercel.app/" },
      { label: "Source code", href: "https://github.com/emdanish/radiant-thought-scribe" },
    ],
    image: {
      src: "/images/projects/radiant-thought.png",
      alt: "Editorial illustration for Radiant Thought, the AI journaling app that turns entries into reflective insight: an open journal with rays and reflective forms rising from its pages.",
    },
  },
  {
    slug: "blog-platform",
    title: "Blog Platform",
    oneLiner: "A full-stack publishing platform with an admin CMS.",
    stack: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
    links: [
      // facts.md: not live; only the repo link exists.
      { label: "Source code", href: "https://github.com/emdanish75/blog-app-using-react-and-mongodb" },
    ],
    image: {
      src: "/images/projects/blog-platform.png",
      alt: "Editorial illustration for Blog Platform, the full-stack publishing platform: printed pages arranging themselves into ordered publishing columns, one page highlighted in amber.",
    },
  },
];

export const writing = {
  title: "We Taught Our Hiring AI to Ignore Your Face",
  oneLiner:
    "Why our AI interviewer scores only what candidates say, the thousand-study review behind that decision, and why the EU now bans what half the industry was selling.",
  href: "https://www.linkedin.com/pulse/we-taught-our-hiring-ai-ignore-your-face-muhammad-danish-panuf/",
  outlet: "LinkedIn",
  published: "24 July 2026",
  /** The article runs about 1,550 words; roughly 225 wpm. */
  readingTime: "7 min read",
} as const;

export type Role = {
  company: string;
  /** Company website (or LinkedIn page where no site exists), from facts.md. */
  companyUrl: string;
  title: string;
  /** Mono-font display dates, verbatim from facts.md. */
  period: string;
  summary: string;
};

export const experience: readonly Role[] = [
  {
    company: "Arken Systems",
    companyUrl: "https://arkensystems.com/",
    title: "Junior Software Engineer",
    period: "Feb 2026 to Present",
    summary:
      "Building AI-integrated products across React, Next.js, TypeScript, Node.js, Python (FastAPI), and PostgreSQL; core engineer on Recruitimate.",
  },
  {
    company: "RemoteFlow",
    companyUrl: "https://remoteflow.io/",
    title: "Frontend Engineer",
    period: "Feb 2025 to Jun 2026",
    summary:
      "Responsive, reusable UI in Next.js, React, TypeScript, and GraphQL for an AI-powered job automation platform; cut key page load times by ~25%.",
  },
  {
    company: "Baccalytics",
    companyUrl: "https://baccalytics.com/",
    title: "Full Stack Developer",
    period: "Jun 2025 to Sep 2025",
    summary:
      "Multi-tenant EdTech platform for IB schools on Next.js and Supabase, with role-based access control and core LMS features.",
  },
  {
    company: "Alabtaal Developers",
    companyUrl: "https://www.linkedin.com/company/al-abtaal",
    title: "Junior Software Developer",
    period: "May 2024 to Dec 2024",
    summary:
      "Records management and reporting system in Java Spring Boot; Docker deployment, Jira, agile workflow.",
  },
];

export const education = {
  school: "Air University",
  schoolUrl: "https://www.au.edu.pk/",
  degree: "BS Computer Science (BSCS)",
  period: "Sep 2022 to Jun 2026",
  detail: "CGPA 3.59",
} as const;

export type SkillGroup = { label: string; items: readonly string[] };

/** facts.md: keep grouped and visually quiet, no percentage bars ever. */
export const skillGroups: readonly SkillGroup[] = [
  { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "FastAPI (Python)", "REST", "GraphQL", "WebSockets", "LiveKit"],
  },
  {
    label: "AI",
    items: [
      "Claude API",
      "Gemini API",
      "Mistral AI",
      "AssemblyAI",
      "CORE Research API",
      "RAG",
      "Prompt engineering",
      "Streaming",
    ],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "MariaDB", "Supabase", "Appwrite", "pgvector"],
  },
  { label: "Practices", items: ["Git", "Docker", "CI/CD", "Vercel", "Code review", "Testing"] },
];

export type Testimonial = { quote: string; name: string; role: string };

/**
 * facts.md: NONE YET. Real quotes will be added later; the section renders
 * nothing while this list is empty. Never fabricate entries.
 */
export const testimonials: readonly Testimonial[] = [];

/**
 * About copy, written strictly from facts.md and the CV in first person
 * (~130 words). Sources for each claim: CV "ships production features end to
 * end, from schema and API design through Vercel deployment", the
 * transcript-only principle, prior roles, and education. Kept deliberately
 * free of sentences that also appear in the Selected Work section.
 */
export const about: readonly string[] = [
  "I'm Muhammad Danish, a full stack developer and indie hacker in Pakistan. I build developer-focused SaaS products whole, from schema and API design through prompt pipelines and streaming interfaces to the deploy that ships them. Variorum, my engineering memory layer for GitHub repositories, is where all of that comes together; I'm its founder and builder.",
  "The part I care about most is deciding what a product should refuse to do. Recruitimate scores candidates only on what they say in the transcript, never on their face or voice, in step with the EU AI Act. Variorum reviews, explains, and opens pull requests, but merging stays a human decision. I wrote about this thinking, and I keep drawing the same line.",
  "Alongside Variorum, I ship production features at Arken Systems. Before that I made key page loads meaningfully faster at RemoteFlow, built a multi-tenant EdTech platform at Baccalytics, and shipped a Spring Boot records system at Alabtaal Developers. I finished my BSCS at Air University in June 2026.",
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

/** Section mastheads and editorial framing copy (UI voice, not facts). */
export const sections = {
  work: { eyebrow: "Selected Work", title: "Variorum, and five more." },
  writing: {
    eyebrow: "Writing",
    title: "Notes from the build.",
    lede: "On the decisions behind the products, starting with the one we refused to make.",
  },
  experience: { eyebrow: "Experience", title: "Where I've worked." },
  about: { eyebrow: "About", title: "The person behind the work." },
  testimonials: { eyebrow: "Testimonials", title: "What people say." },
  contact: {
    heading: "Tell me what you're building.",
    lede: "The fastest way to reach me is email. I read everything.",
  },
} as const;

/** Search/social description used by metadata across the site. */
export const seoDescription =
  "Muhammad Danish is a full stack developer, indie hacker, and founder building developer-focused SaaS products. Founder of Variorum, an AI-powered engineering memory layer for GitHub repositories, and core engineer on Recruitimate. Open to full-time roles and freelance projects.";
