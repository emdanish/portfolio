import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { education, experience, sections } from "@/content";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={sections.experience.eyebrow} title={sections.experience.title} />
        <ol role="list" className="mt-16 list-none">
          {experience.map((role, i) => (
            <li key={`${role.company}-${role.period}`} className="border-t border-line last:border-b">
              <Reveal delay={i * 0.05}>
                <div className="grid gap-2 py-8 sm:grid-cols-12 sm:gap-6">
                  <p className="font-mono text-xs text-subtle uppercase sm:col-span-3 sm:pt-1.5">
                    {role.period}
                  </p>
                  <div className="sm:col-span-9">
                    <h3 className="font-display text-title text-balance text-ink">
                      {role.title} <span aria-hidden="true">·</span>{" "}
                      <span className="text-subtle">{role.company}</span>
                    </h3>
                    <p className="mt-2 max-w-2xl text-pretty">{role.summary}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal className="mt-12">
          <div className="grid gap-2 sm:grid-cols-12 sm:gap-6">
            <p className="font-mono text-xs text-subtle uppercase sm:col-span-3">
              {education.period}
            </p>
            <p className="sm:col-span-9 text-pretty">
              <span className="text-ink">{education.degree}</span>, {education.school} —{" "}
              <span className="font-mono text-sm tabular-nums">{education.detail}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
