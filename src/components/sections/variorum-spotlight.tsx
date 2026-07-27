"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { ProjectArt } from "@/components/project-art";
import { variorum } from "@/content";

/**
 * The flagship spread. Signature motion moment #2 lives here: the cover
 * image drifts gently against the scroll direction while a soft amber
 * spotlight slides across it. Both layers move on transform only and stay
 * still under reduced motion.
 */
export function VariorumSpotlight() {
  const artRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: artRef,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const sweep = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <article>
      <p className="font-mono text-xs text-subtle uppercase">Flagship · Founder project</p>
      <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2">
        <h3 className="font-display text-display text-balance text-ink">
          <Link href={variorum.caseStudyPath} className="transition-colors hover:text-subtle">
            {variorum.title}
          </Link>
        </h3>
        <p className="font-display text-title text-subtle">{variorum.headline}</p>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <p className="max-w-2xl text-lg text-pretty">{variorum.oneLiner}</p>
          <p className="mt-6 max-w-2xl text-pretty">{variorum.problem}</p>

          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {variorum.highlights.map((h) => (
              <div key={h.title} className="border-t border-line pt-4">
                <dt className="font-display text-lg text-ink">{h.title}</dt>
                <dd className="mt-1.5 text-sm text-pretty">{h.body}</dd>
              </div>
            ))}
          </dl>

          <blockquote className="mt-10 border-l-2 border-amber pl-5">
            <p className="font-display text-title text-pretty text-ink">{variorum.rule}</p>
            <p className="mt-2 max-w-2xl text-sm text-pretty text-subtle">
              It never auto-merges and never force-pushes. It builds the cited memory around
              your code and surfaces it when you need it.
            </p>
          </blockquote>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-5">
          <div ref={artRef} className="relative overflow-hidden">
            <motion.div style={reduceMotion ? undefined : { y: drift }} className="lg:-my-7">
              <ProjectArt
                image={variorum.image}
                title={variorum.title}
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </motion.div>
            {!reduceMotion && (
              <motion.div
                aria-hidden="true"
                style={{ x: sweep }}
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_40%,var(--amber)_0%,transparent_70%)] opacity-15"
              />
            )}
          </div>

          <dl className="space-y-3">
            {variorum.stackClusters.map((cluster) => (
              <div key={cluster.label} className="grid grid-cols-12 gap-3">
                <dt className="col-span-4 font-mono text-xs text-subtle uppercase">
                  {cluster.label}
                </dt>
                <dd className="col-span-8 font-mono text-xs text-pretty text-body">
                  {cluster.stack}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild>
              <a href={variorum.links.live.href} target="_blank" rel="noopener noreferrer">
                {variorum.links.live.label}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={variorum.links.source.href} target="_blank" rel="noopener noreferrer">
                {variorum.links.source.label}
                <span className="sr-only"> of {variorum.title}</span>
              </a>
            </Button>
          </div>
          <Link
            href={variorum.caseStudyPath}
            className="link-underline inline-flex items-center gap-1.5 self-start font-mono text-xs text-subtle uppercase transition-colors hover:text-ink"
          >
            Read the full case study
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
