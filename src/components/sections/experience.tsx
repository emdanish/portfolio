import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { education, experience, metrics, sections } from "@/content";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={sections.experience.eyebrow} title={sections.experience.title} number="03" />
        {/* The three approved metrics, counting up once on first view. */}
        <Reveal className="mt-14">
          <ul role="list" className="grid list-none gap-x-8 gap-y-6 sm:grid-cols-3">
            {metrics.map((metric) => (
              <li key={metric.label} className="border-t border-line pt-4">
                <p className="font-mono text-3xl text-ink">
                  <CountUp value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                </p>
                <p className="mt-1.5 max-w-xs text-sm text-pretty text-subtle">{metric.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
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
        {/* Education is set apart from employment: a mono tag where the
            roles carry dates, so the timeline reads as two distinct kinds. */}
        <Reveal className="mt-12">
          <div className="grid gap-2 sm:grid-cols-12 sm:gap-6">
            <p className="sm:col-span-3">
              <span className="inline-block border border-line px-2 py-0.5 font-mono text-xs text-subtle uppercase">
                Education
              </span>
            </p>
            <div className="sm:col-span-9">
              <h3 className="font-display text-title text-balance text-ink">
                {education.degree} <span aria-hidden="true">·</span>{" "}
                <span className="text-subtle">{education.school}</span>
              </h3>
              <p className="mt-2 font-mono text-xs text-subtle uppercase">
                {education.period} · <span className="tabular-nums">{education.detail}</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
