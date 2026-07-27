import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ExternalLink } from "@/components/external-link";
import { EyebrowRule } from "@/components/eyebrow-rule";
import { OutcomeStat } from "@/components/outcome-stat";
import { Reveal } from "@/components/reveal";
import { StackTags } from "@/components/stack-tags";
import { recruitimate, identity, writing } from "@/content";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recruitimate Case Study",
  description: recruitimate.oneLiner,
  alternates: { canonical: "/recruitimate" },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/recruitimate`,
    siteName: identity.name,
    title: "Recruitimate Case Study",
    description: recruitimate.oneLiner,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `Portfolio of ${identity.name}` }],
  },
};

const buildChapters = [
  { label: "The platform", body: recruitimate.caseStudy.platform },
  { label: "Real-time interviews", body: recruitimate.caseStudy.interviews },
  { label: "Prompt pipelines", body: recruitimate.caseStudy.prompts },
  { label: "Resume screening", body: recruitimate.caseStudy.screening },
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
              <p className="font-mono text-xs text-subtle uppercase">Case study</p>
              <h1 className="mt-6 font-display text-hero font-semibold text-balance text-ink">
                {recruitimate.title}
              </h1>
              <p className="mt-6 text-lg text-pretty">{recruitimate.oneLiner}</p>
              <dl className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-xs text-subtle uppercase">My role</dt>
                  <dd className="mt-1.5 text-sm text-pretty">{recruitimate.role}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-subtle uppercase">Live</dt>
                  <dd className="mt-1.5">
                    {recruitimate.links.map((link) => (
                      <ExternalLink
                        key={link.href}
                        href={link.href}
                        className="text-sm text-ink normal-case"
                      >
                        {link.label}
                        <span className="sr-only"> of {recruitimate.title}</span>
                      </ExternalLink>
                    ))}
                  </dd>
                </div>
              </dl>
            </header>
          </Reveal>

          <Reveal className="mt-16">
            <section aria-labelledby="cs-problem">
              <h2 id="cs-problem" className="sr-only">
                The problem
              </h2>
              <EyebrowRule>The problem</EyebrowRule>
              <p className="mt-6 font-display text-title text-pretty text-ink">
                {recruitimate.problem}
              </p>
            </section>
          </Reveal>

          <Reveal className="mt-16">
            <section aria-labelledby="cs-principle">
              <h2 id="cs-principle" className="sr-only">
                The constraint we chose
              </h2>
              <EyebrowRule>The constraint we chose</EyebrowRule>
              <blockquote className="mt-6 border-l-2 border-amber pl-6 font-display text-display text-pretty text-ink">
                {recruitimate.principle}
              </blockquote>
              <p className="mt-6 text-pretty">{recruitimate.caseStudy.responsibleAI}</p>
              <p className="mt-4 text-pretty">
                {recruitimate.caseStudy.reflection}{" "}
                <a
                  href={writing.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink"
                >
                  &ldquo;{writing.title}&rdquo;
                </a>
                .
              </p>
            </section>
          </Reveal>

          <Reveal className="mt-16">
            <section aria-labelledby="cs-build">
              <h2 id="cs-build" className="sr-only">
                What I built
              </h2>
              <EyebrowRule>What I built</EyebrowRule>
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
              <h2 id="cs-outcome" className="sr-only">
                Outcome
              </h2>
              <EyebrowRule>Outcome</EyebrowRule>
              <OutcomeStat className="mt-8" />
            </section>
          </Reveal>

          <Reveal className="mt-16">
            <section aria-labelledby="cs-stack">
              <h2 id="cs-stack" className="sr-only">
                Stack
              </h2>
              <EyebrowRule>Stack</EyebrowRule>
              <StackTags items={recruitimate.stack} className="mt-6 text-sm leading-relaxed" />
            </section>
          </Reveal>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
