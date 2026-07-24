"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/copy-email-button";
import { identity, ui } from "@/content";

/**
 * Signature motion moment #1: a staggered, masked-line reveal of the
 * headline on load. Transform/opacity only; simple fades under
 * prefers-reduced-motion.
 */
export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.09 } },
  };
  const rise = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: "0.5em" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const [statementOpen, statementClose] = identity.heroStatement;

  return (
    <section aria-label="Introduction" className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-6xl flex-col justify-center px-5 py-20">
      <motion.div initial="hidden" animate="visible" variants={container}>
        <motion.p variants={rise} className="flex items-center gap-2.5 font-mono text-xs text-subtle uppercase">
          <span aria-hidden="true" className="size-2 bg-amber" />
          {identity.availability}
        </motion.p>

        <h1 className="mt-8 font-display text-hero font-semibold text-balance text-ink">
          <span className="block overflow-hidden">
            <motion.span variants={rise} className="block">
              Muhammad
            </motion.span>
          </span>{" "}
          <span className="block overflow-hidden">
            <motion.span variants={rise} className="block">
              Danish
            </motion.span>
          </span>
        </h1>

        <motion.p variants={rise} className="mt-6 font-mono text-sm text-subtle">
          {identity.role}
        </motion.p>

        <motion.p variants={rise} className="mt-10 max-w-2xl font-display text-title text-pretty text-ink">
          {statementOpen}{" "}
          <span className="relative inline-block">
            <motion.span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-[0.08em] h-[0.24em] origin-left bg-amber"
              initial={reduceMotion ? { opacity: 0 } : { scaleX: 0 }}
              animate={reduceMotion ? { opacity: 1 } : { scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
            />
            <span className="relative">{statementClose}</span>
          </span>
        </motion.p>

        <motion.div variants={rise} className="mt-12 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <a href="#work">{ui.cta.secondary}</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`mailto:${identity.email}`}>{ui.cta.primary}</a>
          </Button>
          <CopyEmailButton />
        </motion.div>

        <motion.p variants={rise} className="mt-14 font-mono text-xs text-subtle">
          {identity.location}
        </motion.p>
      </motion.div>
    </section>
  );
}
