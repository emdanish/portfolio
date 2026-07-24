"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { ProjectArt } from "@/components/project-art";
import { StackTags } from "@/components/stack-tags";
import { flagship } from "@/content";

/**
 * Signature motion moment #2: the flagship artwork drifts gently against the
 * scroll direction while a soft amber spotlight slides across it. Both
 * layers move on transform only and stay still under reduced motion.
 */
export function FlagshipSpotlight() {
  const artRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: artRef,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const sweep = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <article className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-7">
        <p className="flex items-center gap-2.5 font-mono text-xs text-subtle uppercase">
          <span aria-hidden="true" className="size-2 bg-amber" />
          Flagship case study
        </p>
        <h3 className="mt-5 font-display text-display text-ink">
          <Link href={flagship.caseStudyPath} className="transition-colors hover:text-subtle">
            {flagship.title}
          </Link>
        </h3>
        <p className="mt-4 max-w-2xl text-lg text-pretty">{flagship.oneLiner}</p>

        <dl className="mt-10 space-y-8">
          <div>
            <dt className="font-mono text-xs text-subtle uppercase">The problem</dt>
            <dd className="mt-2 max-w-2xl text-pretty">{flagship.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-subtle uppercase">What I built</dt>
            <dd className="mt-2 max-w-2xl text-pretty">{flagship.build}</dd>
          </div>
          <div className="border-l-2 border-amber pl-5">
            <dt className="font-mono text-xs text-subtle uppercase">The design principle</dt>
            <dd className="mt-2 max-w-2xl font-display text-title text-pretty text-ink">
              {flagship.principle}
            </dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-col gap-8 lg:col-span-5">
        <div ref={artRef} className="relative overflow-hidden">
          <motion.div style={reduceMotion ? undefined : { y: drift }} className="lg:-my-7">
            <ProjectArt
              image={flagship.image}
              title={flagship.title}
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

        <div>
          <p className="font-display text-hero font-semibold text-ink tabular-nums">~50%</p>
          <p className="mt-1 max-w-xs text-pretty text-subtle">
            less manual shortlisting effort in internal trials
          </p>
        </div>

        <StackTags items={flagship.stack} />

        <div className="flex flex-wrap items-center gap-4">
          <Button asChild>
            <Link href={flagship.caseStudyPath}>Read the case study</Link>
          </Button>
          {flagship.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1 font-mono text-xs text-subtle uppercase transition-colors hover:text-ink"
            >
              {link.label}
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
