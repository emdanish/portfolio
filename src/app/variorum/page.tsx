import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ExternalLink } from "@/components/external-link";
import { EyebrowRule } from "@/components/eyebrow-rule";
import { Reveal } from "@/components/reveal";
import { identity, variorum } from "@/content";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Variorum Case Study",
  description:
    "Variorum is an AI-powered engineering memory layer for GitHub repositories, built by Muhammad Danish. The decisions, history, and reasoning around your code, preserved and queryable.",
  alternates: { canonical: "/variorum" },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/variorum`,
    siteName: identity.name,
    title: "Variorum Case Study",
    description:
      "An AI-powered engineering memory layer for GitHub repositories: cited answers, change-risk analysis, and docs that fix themselves.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `Portfolio of ${identity.name}` }],
  },
};

export default function VariorumCaseStudy() {
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
              <p className="font-mono text-xs text-subtle uppercase">Case study · Founder project</p>
              <h1 className="mt-6 font-display text-hero font-semibold text-balance text-ink">
                {variorum.title}
              </h1>
              <p className="mt-4 font-display text-title text-subtle">{variorum.headline}</p>
              <p className="mt-6 text-lg text-pretty">{variorum.oneLiner}</p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <a href={variorum.links.live.href} target="_blank" rel="noopener noreferrer">
                    {variorum.links.live.label}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={variorum.links.source.href} target="_blank" rel="noopener noreferrer">
                    {variorum.links.source.label}
                    <span className="sr-only"> of {variorum.title}</span>
                  </a>
                </Button>
              </div>

              <dl className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-xs text-subtle uppercase">My role</dt>
                  <dd className="mt-1.5 text-sm text-pretty">{variorum.role}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-subtle uppercase">Built for</dt>
                  <dd className="mt-1.5 text-sm text-pretty">
                    Teams and developers maintaining codebases that outlive their authors.
                  </dd>
                </div>
              </dl>
            </header>
          </Reveal>

          <Reveal className="mt-16">
            <section aria-labelledby="vs-problem">
              <h2 id="vs-problem" className="sr-only">
                The problem
              </h2>
              <EyebrowRule>The problem</EyebrowRule>
              <p className="mt-6 font-display text-title text-pretty text-ink">
                Code is version-controlled. The reasoning behind it is not.
              </p>
              <p className="mt-4 text-pretty">
                Why a decision was made, why a workaround exists, which docs are stale, and what
                is risky to touch all live in people&rsquo;s heads, scattered commits, and old
                pull requests. That knowledge erodes as teams grow and people leave. New
                engineers lose days rebuilding context that used to exist.
              </p>
            </section>
          </Reveal>

          <Reveal className="mt-16">
            <section aria-labelledby="vs-why">
              <h2 id="vs-why" className="sr-only">
                Why I built it
              </h2>
              <EyebrowRule>Why I built it</EyebrowRule>
              <p className="mt-6 text-pretty">{variorum.why}</p>
              <p className="mt-4 text-pretty">{variorum.audience}</p>
            </section>
          </Reveal>

          <Reveal className="mt-16">
            <section aria-labelledby="vs-how">
              <h2 id="vs-how" className="sr-only">
                What it does
              </h2>
              <EyebrowRule>What it does</EyebrowRule>
              <p className="mt-6 text-pretty">{variorum.how}</p>
              <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {variorum.highlights.map((h) => (
                  <div key={h.title} className="border-t border-line pt-4">
                    <dt className="font-display text-lg text-ink">{h.title}</dt>
                    <dd className="mt-1.5 text-sm text-pretty">{h.body}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-pretty">
                Portfolio and expertise views round it out: knowledge health across
                repositories, and who actually knows each area.
              </p>
            </section>
          </Reveal>

          <Reveal className="mt-16">
            <section aria-labelledby="vs-rule">
              <h2 id="vs-rule" className="sr-only">
                The rule it follows
              </h2>
              <EyebrowRule>The rule it follows</EyebrowRule>
              <blockquote className="mt-6 border-l-2 border-amber pl-6 font-display text-display text-pretty text-ink">
                {variorum.rule}
              </blockquote>
              <p className="mt-6 text-pretty">{variorum.philosophy}</p>
            </section>
          </Reveal>

          <Reveal className="mt-16">
            <section aria-labelledby="vs-built">
              <h2 id="vs-built" className="sr-only">
                How it is built
              </h2>
              <EyebrowRule>How it is built</EyebrowRule>
              <div className="mt-8 space-y-8">
                {variorum.stackClusters.map((cluster) => (
                  <div key={cluster.label} className="grid gap-2 sm:grid-cols-12 sm:gap-6">
                    <h3 className="font-mono text-xs text-subtle uppercase sm:col-span-4 sm:pt-1">
                      {cluster.label}
                    </h3>
                    <div className="sm:col-span-8">
                      <p className="font-mono text-sm text-ink">{cluster.stack}</p>
                      <p className="mt-1 text-sm text-pretty text-subtle">For {cluster.reason}.</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-pretty">{variorum.retrieval}</p>
              <p className="mt-4 max-w-2xl font-display text-title text-pretty text-ink">
                {variorum.hardPart}
              </p>
            </section>
          </Reveal>

          <Reveal className="mt-16">
            <section aria-labelledby="vs-try">
              <h2 id="vs-try" className="sr-only">
                Try it
              </h2>
              <EyebrowRule>Try it</EyebrowRule>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <a href={variorum.links.live.href} target="_blank" rel="noopener noreferrer">
                    {variorum.links.live.label}
                  </a>
                </Button>
                <ExternalLink href={variorum.links.source.href}>
                  {variorum.links.source.label}
                  <span className="sr-only"> of {variorum.title}</span>
                </ExternalLink>
              </div>
            </section>
          </Reveal>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
