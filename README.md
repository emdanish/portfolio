# Muhammad Danish · Portfolio

The personal site of **Muhammad Danish**, a full-stack developer building
AI-powered applications end to end with Next.js, TypeScript, FastAPI,
PostgreSQL, and the Claude and Gemini APIs. Open to full-time roles and
freelance projects.

**Live site:** [emdanish.vercel.app](https://emdanish.dev) ·
**Email:** [muhammadd03@gmail.com](mailto:muhammadd03@gmail.com) ·
**GitHub:** [@emdanish](https://github.com/emdanish) ·
**LinkedIn:** [in/emdanish](https://www.linkedin.com/in/emdanish)

## What's on the site

A single editorial page (hero, selected work, writing, experience, about,
contact) plus a full case study at `/recruitimate` on Recruitimate, an
AI-native hiring platform that scores candidates strictly on what they say in
interview transcripts, never on their face or voice. The Writing section
links the essay behind that decision: *We Taught Our Hiring AI to Ignore
Your Face*.

## Design

A minimal editorial system: warm paper ground, ink navy display type, and a
single amber accent, set in Fraunces (display serif), Schibsted Grotesk
(body), and JetBrains Mono (labels and dates). Light by default with a dark
mode that inverts to near-black navy paper. The MD monogram in the nav,
footer, and favicon are one generated mark.

Details worth a closer look:

- **Ctrl/Cmd + K command palette** (cmdk, lazy-loaded): jump to sections,
  copy the email address, download the CV, toggle the theme
- Scroll-spy navigation with a sliding amber indicator and URL hash sync
- Hero reveal built in pure CSS keyframes, so the headline paints before any
  JavaScript loads
- Metrics that count up once in view, a live Pakistan local-time line, and a
  designed 404
- Full `prefers-reduced-motion` support, keyboard navigability, AA contrast
  in both themes, and fully static output (every route prerendered)

## Stack

Next.js (App Router) · TypeScript (strict) · Tailwind CSS v4 · shadcn/ui ·
Motion · Lucide · next-themes · next/font · Vercel Analytics + Speed Insights

## How content works

Everything rendered on the site comes from one typed file,
[`src/content.ts`](src/content.ts), transcribed from
[`facts.md`](facts.md), the single source of truth for every word, number,
and link. Nothing is invented: metrics use only approved figures with soft
wording, and the testimonials section renders nothing until real quotes
exist. To change site content, edit `facts.md`, mirror it in
`src/content.ts`, and touch no components.

## Structure

```
src/
  content.ts            all site content, typed, in one place
  app/                  layout (fonts, metadata, theme), page, /recruitimate,
                        not-found, robots.ts, sitemap.ts, globals.css (tokens)
  components/
    sections/           hero, work, flagship spotlight, writing, experience,
                        about, testimonials, contact
    ui/                 shadcn primitives
    ...                 nav, footer, palette, shared editorial primitives
  images/               statically imported photo crop (generated)
scripts/
  generate-assets.mjs   regenerates favicons, OG card, grain tile, photo crop
public/                 favicons, OG image, CV, project artwork
```

Project artwork in `public/images/projects/` is a set of 1920x1080 editorial
illustrations, one per project, sharing the site's palette.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build` produces the fully static
production build; `npm run lint` should always report zero warnings.

## Deployment

Deployed on Vercel with the default Next.js preset. One environment variable
matters: `NEXT_PUBLIC_SITE_URL`, the canonical origin (for example
`https://emdanish.vercel.app`, no trailing slash), which metadata, the
sitemap, robots, and JSON-LD all derive from.
