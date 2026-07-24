# Image Generation Prompts (archive)

All four project images have been generated and shipped. These prompts are
kept as the record of the art direction, for regenerating or extending the
set later. Each file lives at the exact path shown, at 1920x1080.

**Shared art direction (already baked into every prompt below):** editorial
illustration of the product's concept, never a fake UI screenshot; warm paper
background (#FAF8F5); ink navy (#16324A) and amber (#F6C453) palette with deep
charcoal detailing; flat-modern vector style with subtle paper grain; no text,
letters, numbers, logos, or watermarks anywhere in the image.

---

## 1. Recruitimate, `public/images/projects/recruitimate.png` (1920x1080)

> Editorial flat-modern vector illustration, 1920x1080, 16:9. A large
> old-fashioned balance scale rendered in ink navy (#16324A) stands centered on
> a warm paper background (#FAF8F5). On its weighing pans sit neat stacks of
> speech-bubble-shaped transcript sheets in white and amber (#F6C453),
> conversation being weighed on its own merit. To one side, faint ghosted
> outlines of a camera and a face-scanning frame lie discarded and crossed out
> in pale charcoal, clearly rejected. Generous negative space, subtle paper
> grain texture, minimal geometric shapes, confident magazine-illustration
> composition. Ink navy, amber, and deep charcoal palette only. Absolutely no
> text, letters, numbers, logos, or UI elements.

## 2. FYP Idea Generator, `public/images/projects/fyp-idea-generator.png` (1920x1080)

> Editorial flat-modern vector illustration, 1920x1080, 16:9. A stream of
> academic papers, flat white sheets with abstract ink-navy (#16324A) line
> patterns suggesting dense research text, flows in a gentle arc from the left
> side across a warm paper background (#FAF8F5), converging and funneling into
> a single glowing amber (#F6C453) lightbulb-shaped form on the right built
> from folded-paper facets. Small charcoal citation-mark shapes trail the
> papers like a comet tail. Generous negative space, subtle paper grain,
> minimal geometry, magazine-illustration composition. Ink navy, amber, and
> deep charcoal palette only. Absolutely no text, letters, numbers, logos, or
> UI elements.

## 3. Radiant Thought, `public/images/projects/radiant-thought.png` (1920x1080)

> Editorial flat-modern vector illustration, 1920x1080, 16:9. An open journal
> drawn in ink navy (#16324A) lies flat on a warm paper background (#FAF8F5),
> its pages carrying abstract wavy line marks suggesting handwriting. From the
> journal's spine, soft amber (#F6C453) rays fan upward and outward like a
> quiet sunrise, and within the rays float simple geometric forms, a circle, a
> spiral, a leaf shape, representing themes and patterns surfacing from the
> entries. Deep charcoal accents ground the composition. Generous negative
> space, subtle paper grain, flat-modern minimal geometry, contemplative
> magazine-illustration mood. Ink navy, amber, and deep charcoal palette only.
> Absolutely no text, letters, numbers, logos, or UI elements.

## 4. Blog Platform, `public/images/projects/blog-platform.png` (1920x1080)

> Editorial flat-modern vector illustration, 1920x1080, 16:9. Printed
> broadsheet pages rendered as flat white and ink-navy (#16324A) rectangles
> with abstract column-rule line patterns arrange themselves from a loose
> scattered pile on the left into a crisp ordered grid of publishing columns on
> the right, across a warm paper background (#FAF8F5). One page in the grid is
> highlighted in amber (#F6C453); a small paper-plane form in deep charcoal
> glides above the grid, suggesting a story being sent to subscribers.
> Generous negative space, subtle paper grain, minimal geometry,
> magazine-illustration composition. Ink navy, amber, and deep charcoal palette
> only. Absolutely no text, letters, numbers, logos, or UI elements.

## 5. Zovo, `public/images/projects/zovo.png` (1920x1080)

> Editorial flat-modern vector illustration, 1920x1080, 16:9. A single wide
> switchboard console rendered in ink navy (#16324A) sits centered on a warm
> paper background (#FAF8F5), its face carrying an ordered row of amber
> (#F6C453) and navy toggles and dials. From the left and right edges, many
> loose charcoal and navy threads drift inward, each thread carrying one
> small flat marketing shape: a megaphone, a coin, an envelope, a bar chart,
> a handshake. The threads meet the console and emerge beneath it woven into
> one straight, tidy amber cord running off the bottom edge, many scattered
> workflows becoming a single managed operation. Generous negative space,
> subtle paper grain, minimal geometry, confident magazine-illustration
> composition. Ink navy, amber, and deep charcoal palette only. Absolutely no
> text, letters, numbers, logos, or UI elements.

After placing the file at `public/images/projects/zovo.png`, replace
`image: null` in the Zovo entry of `src/content.ts` with:

```ts
image: {
  src: "/images/projects/zovo.png",
  alt: "Editorial illustration for Zovo, the enterprise marketing platform: scattered campaign threads weaving into one ordered switchboard console.",
},
```

---

## Optional 6. Abstract hero/about background texture, `public/images/texture-paper.png` (1920x1080)

Only generate this if you want an extra layer of warmth behind the hero; the
site ships without it and does not reference it yet.

> Extremely subtle full-frame paper texture, 1920x1080. Warm off-white paper
> (#FAF8F5) with the faintest fibrous grain and two or three barely-visible
> wide amber (#F6C453) arcs sweeping across at 2 to 3% opacity, like light falling
> on a desk. No shapes with hard edges, no text, no vignette. It must read as
> nearly blank paper, texture, not artwork.
