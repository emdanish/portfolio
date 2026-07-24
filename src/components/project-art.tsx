"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/content";

type ProjectArtProps = {
  image: Project["image"];
  title: string;
  /** next/image responsive hint, set by the surface this art sits in. */
  sizes: string;
};

/**
 * Project artwork: soft fade-and-settle reveal as it scrolls into view, and
 * a gentle 1.02 scale when the parent `group` card is hovered. Both effects
 * are transform/opacity only and collapse under prefers-reduced-motion.
 * While a project's artwork is null (not yet generated), a quiet solid block
 * holds the slot so the layout never shows a broken image.
 */
export function ProjectArt({ image, title, sizes }: ProjectArtProps) {
  const reduceMotion = useReducedMotion();

  if (image === null) {
    return (
      <div
        role="img"
        aria-label={`${title} artwork`}
        className="flex aspect-video items-end border border-line bg-secondary p-5"
      >
        <span className="font-mono text-xs text-subtle">{title}</span>
      </div>
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden border border-line bg-secondary">
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
        whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </motion.div>
    </div>
  );
}
