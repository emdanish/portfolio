import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { StackTags } from "@/components/stack-tags";
import { flagship, writing } from "@/content";

export const metadata: Metadata = {
  title: "Recruitimate — Case Study",
  description: flagship.oneLiner,
  alternates: { canonical: "/recruitimate" },
  openGraph: {
    type: "article",
    url: "/recruitimate",
    title: "Recruitimate — Case Study",
    description: flagship.oneLiner,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Muhammad Danish — portfolio" }],
  },
};

/** Mono label + hairline rule that opens each chapter of the study. */
function ChapterLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-4">
      <h2 className="shrink-0 font-mono text-sm text-subtle uppercase">{children}</h2>
      <span aria-hidden="true" className="h-px w-full translate-y-[-0.2em] bg-line" />
    </div>
  );
}

const buildChapters = [
  { label: "The platform", body: flagship.caseStudy.platform },
  { label: "Real-time interviews", body: flagship.caseStudy.interviews },
  { label: "Prompt pipelines", body: flagship.caseStudy.prompts },
  { label: "Resume screening", body: flagship.caseStudy.screening },
] as const;

export default function RecruitimateCaseStudy() {
  return (
    <div id="top">
      <SiteNav />
      <main id="main" className="px-5">
        <article className="mx-auto max-w-3xl py-16 sm:py-24">
          <Reveal>
            <Link
              href="/#work"
              className="link-underline inline-flex items-center gap-1.5 font-mono text-xs text-subtle uppercase hover:text-ink"
            >
              <ArrowLeft aria-hidden="true" className="size-3.5" />
              Back to selected work
            </Link>

            <header className="mt-12">
              <p className="flex items-center gap-2.5 font-mono text-xs text-subtle uppercase">
                <span aria-hidden="true" className="size-2 bg-amber" />
                Case study
              </p>
              <h1 className="mt-6 font-display text-hero font-semibold text-ink">
                {flagship.title}
              </h1>
              <p className="mt-6 text-lg text-pretty">{flagship.oneLiner}</p>
              <dl className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-xs text-subtle uppercase">My role</dt>
                  <dd className="mt-1.5 text-sm text-pretty">{flagship.role}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-subtle uppercase">Live</dt>
                  <dd className="mt-1.5">
                    {flagship.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline inline-flex items-center gap-1 text-sm text-ink"
                      >
                        {link.label}
                        <ArrowUpRight aria-hidden="true" className="size-3.5" />
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>
            </header>
          </Reveal>

          <Reveal className="mt-16">
            <section aria-labelledby="cs-problem">
              <ChapterLabel>
                <span id="cs-problem">The problem</span>
              </ChapterLabel>
              <p className="mt-6 font-display text-title text-pretty text-ink">
                {flagship.problem}
              </p>
            </section>
          </Reveal>

          <Reveal className="mt-16">
            <section aria-labelledby="cs-principle">
              <ChapterLabel>
                <span id="cs-principle">The constraint we chose</span>
              </ChapterLabel>
              <blockquote className="mt-6 border-l-2 border-amber pl-6 font-display text-display text-pretty text-ink">
                {flagship.principle}
              </blockquote>
              <p className="mt-6 text-pretty">{flagship.caseStudy.responsibleAI}</p>
              <p className="mt-4 text-pretty">
                That refusal is a product decision, not a disclaimer — it is what makes the
                scores defensible to the hiring teams who act on them. I wrote about the
                reasoning in{" "}
                <a
                  href={writing.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink"
                >
                  “{writing.title}”
                </a>
                .
              </p>
            </section>
          </Reveal>

          <Reveal className="mt-16">
            <section aria-labelledby="cs-build">
              <ChapterLabel>
                <span id="cs-build">What I built</span>
              </ChapterLabel>
              <div className="mt-8 space-y-10">
                {buildChapters.map((chapter) => (
                  <div key={chapter.label} className="grid gap-2 sm:grid-cols-12 sm:gap-6">
                    <h3 className="font-mono text-xs text-subtle uppercase sm:col-span-4 sm:pt-1">
                      {chapter.label}
                    </h3>
                    <p className="text-pretty sm:col-span-8">{chapter.body}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal className="mt-16">
            <section aria-labelledby="cs-outcome">
              <ChapterLabel>
                <span id="cs-outcome">Outcome</span>
              </ChapterLabel>
              <p className="mt-8 font-display text-hero font-semibold text-ink tabular-nums">
                ~50%
              </p>
              <p className="mt-2 max-w-md text-pretty text-subtle">
                less manual shortlisting effort in internal trials
              </p>
            </section>
          </Reveal>

          <Reveal className="mt-16">
            <section aria-labelledby="cs-stack">
              <ChapterLabel>
                <span id="cs-stack">Stack</span>
              </ChapterLabel>
              <StackTags items={flagship.stack} className="mt-6 font-mono text-sm text-subtle leading-relaxed" />
            </section>
          </Reveal>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
