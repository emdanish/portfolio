"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Availability } from "@/components/availability";
import { identity, ui } from "@/content";

/** Wrap `highlight` (if present) in an amber marker span. */
function withHighlight(line: string, highlight: string, reduceMotion: boolean) {
  const at = line.indexOf(highlight);
  if (at === -1) return line;
  return (
    <>
      {line.slice(0, at)}
      <span className="relative inline-block">
        <motion.span
          aria-hidden="true"
          // In dark mode the marker drops below the baseline as a thin
          // underline so light glyphs never sit on full amber.
          className="absolute inset-x-0 bottom-[0.08em] h-[0.24em] origin-left bg-amber dark:-bottom-[0.06em] dark:h-[0.12em]"
          initial={reduceMotion ? { opacity: 0 } : { scaleX: 0 }}
          animate={reduceMotion ? { opacity: 1 } : { scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
        />
        <span className="relative">{line.slice(at, at + highlight.length)}</span>
      </span>
      {line.slice(at + highlight.length)}
    </>
  );
}

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
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  const nameLines = identity.name.split(" ");
  const [statementOpen, statementClose] = identity.heroStatement;

  return (
    <section
      id="intro"
      aria-label="Introduction"
      className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-6xl flex-col justify-center px-5 py-20"
    >
      <motion.div initial="hidden" animate="visible" variants={container}>
        <motion.div variants={rise}>
          <Availability />
        </motion.div>

        <h1 className="mt-8 font-display text-hero font-semibold text-balance text-ink">
          {nameLines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              {i > 0 && " "}
              <motion.span variants={rise} className="block">
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p variants={rise} className="mt-6 font-mono text-sm text-subtle">
          {identity.role}
        </motion.p>

        <motion.p variants={rise} className="mt-10 max-w-2xl font-display text-title text-pretty text-ink">
          {/* facts.md: the statement may split typographically, one clause per line. */}
          <span className="sm:block">{statementOpen} </span>
          <span className="sm:block">
            {withHighlight(statementClose, identity.heroHighlight, reduceMotion ?? false)}
          </span>
        </motion.p>

        <motion.div variants={rise} className="mt-12 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <a href="#work">{ui.cta.secondary}</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`mailto:${identity.email}`}>{ui.cta.primary}</a>
          </Button>
        </motion.div>

        <motion.div variants={rise} className="mt-5">
          <CopyEmailButton />
        </motion.div>

        <motion.p variants={rise} className="mt-12 font-mono text-xs text-subtle">
          {identity.location}
        </motion.p>
      </motion.div>
    </section>
  );
}
