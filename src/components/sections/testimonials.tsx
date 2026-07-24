import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { sections, testimonials } from "@/content";

/**
 * Renders nothing while the testimonials list in src/content.ts is empty —
 * facts.md forbids fabricating quotes. The layout activates on its own once
 * real recommendations are added.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="scroll-mt-24 px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={sections.testimonials.eyebrow} title={sections.testimonials.title} />
        <ul role="list" className="mt-16 grid list-none gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <Reveal delay={i * 0.08} className="h-full">
                <figure className="flex h-full flex-col gap-6 border border-line bg-surface p-8">
                  <blockquote className="font-display text-title text-pretty text-ink">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-auto font-mono text-xs text-subtle">
                    {t.name} — {t.role}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
