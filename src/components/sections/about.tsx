import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StackTags } from "@/components/stack-tags";
import { about, identity, sections, skillGroups } from "@/content";
import portrait from "@/images/portrait-about.jpg";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={sections.about.eyebrow} title={sections.about.title} number="05" />
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            {/* Editorial art direction: 4:5 crop, thin ink border, offset amber frame. */}
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div aria-hidden="true" className="absolute -right-3 -bottom-3 size-full bg-amber sm:-right-4 sm:-bottom-4" />
              <Image
                src={portrait}
                alt={`${identity.name}, standing outdoors with arms crossed in front of autumn foliage.`}
                sizes="(min-width: 1024px) 35vw, (min-width: 640px) 24rem, 90vw"
                placeholder="blur"
                className="relative border border-ink/40 dark:border-line"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-5 text-pretty leading-relaxed">
              {about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-20">
          <h3 className="font-mono text-xs text-subtle uppercase">What I work with</h3>
          <dl className="mt-6 grid gap-x-8 gap-y-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <dt className="font-display text-lg text-ink">{group.label}</dt>
                <dd>
                  <StackTags items={group.items} className="mt-2 font-mono text-xs text-subtle leading-relaxed" />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
