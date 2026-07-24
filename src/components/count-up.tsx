"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
};

/**
 * Counts from 0 to `value` once, when scrolled into view. The final value is
 * server-rendered, so reduced-motion visitors (and crawlers) always see the
 * real number with no animation.
 */
export function CountUp({ value, prefix = "", suffix = "" }: CountUpProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const rootRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(rootRef, { once: true, margin: "0px 0px -10% 0px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const node = numberRef.current;
    if (!node) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => {
        node.textContent = String(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <span ref={rootRef} className="tabular-nums">
      {prefix}
      <span ref={numberRef}>{value}</span>
      {suffix}
    </span>
  );
}
