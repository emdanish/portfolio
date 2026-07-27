import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { impact, sections } from "@/content";

/**
 * Numeric proof plus capability statements. Every count here is verifiable
 * from the projects shown on this page (see the impact notes in content.ts);
 * nothing is a business vanity number.
 */
export function Impact() {
  return (
    <section id="impact" className="scroll-mt-24 px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={sections.impact.eyebrow} title={sections.impact.title} number="02" />
        <Reveal className="mt-14">
          <ul role="list" className="grid list-none gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {impact.stats.map((stat) => (
              <li key={stat.label} className="border-t border-line pt-4">
                <p className="font-mono text-3xl text-ink">
                  <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-1.5 text-sm text-pretty text-subtle">{stat.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="mt-14" delay={0.06}>
          <div className="grid gap-8 lg:grid-cols-2">
            {impact.statements.map((statement) => (
              <p key={statement.slice(0, 24)} className="max-w-xl font-display text-title text-pretty text-ink">
                {statement}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
