import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { sections, writing } from "@/content";

export function Writing() {
  return (
    <section id="writing" className="scroll-mt-24 px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={sections.writing.eyebrow}
          title={sections.writing.title}
          lede={sections.writing.lede}
        />
        <Reveal className="mt-16">
          <a
            href={writing.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card-lift group block border border-line bg-surface p-8 sm:p-12 lg:p-16"
          >
            <p className="font-mono text-xs text-subtle uppercase">Essay · {writing.outlet}</p>
            <h3 className="mt-6 max-w-3xl font-display text-display text-balance text-ink">
              {writing.title}
            </h3>
            <p className="mt-6 max-w-2xl text-lg text-pretty">{writing.oneLiner}</p>
            <p className="mt-10 inline-flex items-center gap-1.5 font-mono text-xs text-ink uppercase">
              Read on {writing.outlet}
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              />
            </p>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
