# facts.md - Single Source of Truth for This Portfolio

> Claude Code: every piece of content on this site must come from this file, the CV PDF in the repo root, or the profile photo. facts.md wins over the CV if they conflict. If information is missing, leave a clearly visible TODO in the UI. NEVER invent names, numbers, testimonials, logos, or projects.

## Identity

- Name: Muhammad Danish
- Role headline: Full-Stack Developer, AI-Powered Applications
- Hero statement (may be typographically split across lines): I build AI products end to end, and I care about what they refuse to do.
- Location: Pakistan (open to remote worldwide)
- Availability: Open to full-time roles and freelance projects
- Email: muhammadd03@gmail.com
- GitHub: https://github.com/emdanish
- LinkedIn: https://www.linkedin.com/in/emdanish
- Current portfolio being replaced: https://emdanish.vercel.app
- New domain if purchased, otherwise leave blank: not purchased
- Profile photo: the editorial crop at src/images/portrait-about.jpg (derived from the original natural-background photo, which is kept out of the repo)
- CV: served from public/Muhammad-Danish-CV.pdf (linked for download as "Download CV")

## Metrics approved for publishing (use ONLY these numbers, with the soft wording shown)

- Resume screening pipeline cut manual shortlisting effort by roughly 50% in internal trials
- Reduced key page load times by approximately 25% at RemoteFlow
- Automation workflows save the team roughly 5 hours per week

## Projects (display order)

### 1. Recruitimate (flagship case study, gets the largest treatment)

- One-liner: An AI-native hiring platform that screens resumes, runs structured interviews, and scores candidates on what they actually say.
- My role: Core engineer at Arken Systems, owning features end to end.
- Problem: Hiring teams drown in resumes, and the AI interview tools that promise to help by scoring faces and tone are scientifically weak and now banned in EU hiring.
- Build: Next.js and TypeScript frontend; FastAPI backend on multi-tenant PostgreSQL; real-time interviews over LiveKit (WebRTC) with AssemblyAI streaming transcription; LLM scoring through the Claude and Gemini APIs using tool use and structured rubrics; retrieve-then-rerank resume screening on pgvector.
- Design principle worth featuring: candidate scoring is grounded strictly in interview transcripts, with no facial or vocal affect inference, aligned with the EU AI Act.
- Outcome: roughly 50% less manual shortlisting effort in internal trials.
- Stack tags: Next.js, TypeScript, FastAPI, PostgreSQL, pgvector, LiveKit, AssemblyAI, Claude API, Gemini API
- Live URL: https://recruitimate.app/
- Repo URL: private
- Image file: public/images/projects/recruitimate.png

### 2. Zovo

- One-liner: An enterprise marketing and campaign management platform where agencies run influencer campaigns, digital advertising, and finance workflows from a single dashboard.
- My role: Full-stack developer at Arken Systems, Feb 2026 to Present; built, secured, and tested production features.
- Build: Next.js 15 App Router frontend with React 19 and TypeScript; Next.js API routes on Node.js; Appwrite (authentication, storage) with MariaDB; role-based access control across roughly 10 user roles; Meta Ads OAuth integration; security hardening covering CSRF, stored XSS, IDOR prevention, and token encryption; a 16-batch automated testing process that identified 93 findings, all resolved with zero regressions before production readiness.
- Stack tags: Next.js, React, TypeScript, Appwrite, MariaDB, Docker
- Live URL: https://zovo.i-o.digital/
- Repo URL: private
- Image file: public/images/projects/zovo.png

### 3. FYP Idea Generator

- One-liner: A research-grounded idea engine that generates final year project ideas backed by real academic literature.
- Problem: Students pick recycled FYP ideas they cannot defend with citations.
- Build: Retrieves peer-reviewed papers through the CORE Research API and feeds them into a Mistral AI pipeline that outputs ideas with problem statements, methodologies, build plans, and real references. Grounding generation in retrieved sources keeps citations verifiable.
- Stack tags: Next.js, React, Mistral AI, CORE Research API, Supabase, Tailwind CSS
- Live URL: https://fypideagen.vercel.app/
- Repo URL: https://github.com/emdanish/fyp-idea-generator
- Image file: public/images/projects/fyp-idea-generator.png

### 4. Radiant Thought

- One-liner: An AI journaling app that turns entries into reflective insight.
- Build: Supabase authentication and storage; Gemini API generates entry titles and reflections covering themes, thought patterns, and values alignment; structured prompts return consistent JSON so the analysis renders cleanly; responsive interactive UI in React, TypeScript, Tailwind CSS.
- Stack tags: React, TypeScript, Supabase, Gemini API, Tailwind CSS
- Live URL: https://radiantthought.vercel.app/
- Repo URL: https://github.com/emdanish/radiant-thought-scribe
- Image file: public/images/projects/radiant-thought.png

### 5. Blog Platform

- One-liner: A full-stack publishing platform with an admin CMS.
- Build: Category-based post exploration, email subscriptions, social sharing, and an admin panel; API routes on the Node.js runtime with MongoDB persistence.
- Stack tags: Next.js, React, MongoDB, Tailwind CSS
- Live URL: not live
- Repo URL: https://github.com/emdanish75/blog-app-using-react-and-mongodb
- Image file: public/images/projects/blog-platform.png

## Writing

- Article title: We Taught Our Hiring AI to Ignore Your Face
- One-liner: Why our AI interviewer scores only what candidates say, the thousand-study review behind that decision, and why the EU now bans what half the industry was selling.
- URL: https://www.linkedin.com/pulse/we-taught-our-hiring-ai-ignore-your-face-muhammad-danish-panuf/
- Treatment: a first-class Writing section with an excerpt card linking out; this is the differentiator, do not bury it.

## Experience (real dates, keep descriptions to 1-2 lines each on the site)

- Arken Systems, Junior Software Engineer, Feb 2026 - Present. Building AI-integrated products across React, Next.js, TypeScript, Node.js, Python (FastAPI), and PostgreSQL; core engineer on Recruitimate.
- RemoteFlow, Frontend Engineer, Feb 2025 - Jun 2026. Responsive, reusable UI in Next.js, React, TypeScript, and GraphQL for an AI-powered job automation platform; cut key page load times by ~25%.
- Baccalytics, Full Stack Developer, Jun 2025 - Sep 2025. Multi-tenant EdTech platform for IB schools on Next.js and Supabase, with role-based access control and core LMS features.
- Alabtaal Developers, Junior Software Developer, May 2024 - Dec 2024. Records management and reporting system in Java Spring Boot; Docker deployment, Jira, agile workflow.
- Company links (company names on the site link out to these): Arken Systems https://arkensystems.com/, RemoteFlow https://remoteflow.io/, Baccalytics https://baccalytics.com/, Alabtaal Developers https://www.linkedin.com/company/al-abtaal

## Education

- Air University, BS Computer Science (BSCS), Sep 2022 - Jun 2026, CGPA 3.59

## Skills to display (keep grouped and visually quiet, no percentage bars ever)

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js, FastAPI (Python), REST, GraphQL, WebSockets, LiveKit
- AI: Claude API, Gemini API, Mistral AI, AssemblyAI, CORE Research API, RAG, prompt engineering, streaming
- Data: PostgreSQL, MongoDB, MySQL, MariaDB, Supabase, Appwrite, pgvector
- Practices: Git, Docker, CI/CD, Vercel, code review, testing

## Testimonials

- NONE YET. Do not fabricate. Real recommendation quotes will be added here later; build the section so it renders nothing until this list has entries.
