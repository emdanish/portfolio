# Muhammad Danish Portfolio

A minimal-editorial personal site for a full-stack developer building AI
products. Single page (`/`) with anchored sections plus a flagship case study
at `/recruitimate`. Fully static, deployed on Vercel, with a Ctrl/Cmd+K
command palette (cmdk), scroll-spy navigation with a sliding amber indicator,
counting metrics, a live Pakistan-time line, and a designed 404.

**Design system:** warm paper `#FAF8F5` · ink navy `#16324A` · one amber
accent `#F6C453` · Fraunces (display) + Schibsted Grotesk (body) +
JetBrains Mono (labels). Dark mode inverts to near-black navy paper with the
same amber, toggled via `next-themes` (light default).

## Stack

Next.js (App Router, TypeScript strict) · Tailwind CSS v4 · shadcn/ui
primitives · Motion (`motion/react`) · Lucide · next/font · next-themes.

## Content lives in one file

**All copy, links, metrics, and project data live in
[`src/content.ts`](src/content.ts)**, transcribed from
[`facts.md`](facts.md) (which wins over the CV on any conflict). To change
anything on the site, edit `facts.md`, mirror it in `src/content.ts`, and
never invent data. Missing values render as visible TODOs.

Testimonials: `testimonials` in `src/content.ts` is empty by design. The
section renders nothing until real quotes are added.

Project artwork lives in `public/images/projects/` as 1920x1080 editorial
illustrations, one per project, referenced from each project's `image` entry
in `src/content.ts`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other commands:

```bash
npm run build   # production build (all routes static)
npm run lint    # eslint, zero warnings expected
node scripts/generate-assets.mjs   # regenerate favicons, OG image, photo crop
```

`scripts/generate-assets.mjs` derives every identity asset from `Picture.jpg`
plus the design tokens: the About photo crop (`src/images/`), the MD
monogram favicons (`public/`, `src/app/favicon.ico`), the 1200x630 Open
Graph card (`public/og.png`), and the paper-grain mask tile
(`public/noise.png`).

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel: **Add New → Project**, import the repo. Framework preset:
   Next.js. No configuration needed, defaults are correct.
3. Set one environment variable (Production):
   `NEXT_PUBLIC_SITE_URL` = the site's canonical origin, e.g.
   `https://emdanish.vercel.app` (no trailing slash). Metadata, sitemap,
   robots, and JSON-LD all derive from it; without it, the fallback in
   `src/lib/site.ts` is used.
4. Deploy. Then verify: the OG card via https://www.opengraph.xyz (or
   X/LinkedIn share debuggers), `/sitemap.xml`, `/robots.txt`, and the
   `/Muhammad-Danish-CV.pdf` download.
5. When a custom domain is purchased, add it in Vercel → Domains and update
   `NEXT_PUBLIC_SITE_URL` to match, then redeploy.

## Structure

```
src/
  content.ts            single source of truth for all site content
  app/                  layout (fonts, metadata, theme), page, /recruitimate,
                        robots.ts, sitemap.ts, globals.css (design tokens)
  components/
    sections/           hero, work, flagship-spotlight, writing, experience,
                        about, testimonials (empty-safe), contact
    ui/                 shadcn primitives (button)
    …                   nav, footer, shared editorial primitives
  images/               statically imported photo crop (generated)
scripts/                asset generation
public/                 favicons, OG image, CV, project artwork
```

Motion is budgeted to three signature moments (hero stagger, flagship
spotlight/parallax, scroll fade-ups) plus quiet hovers, all
compositor-only and disabled under `prefers-reduced-motion`.
