import { Button } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Availability } from "@/components/availability";
import { identity, ui } from "@/content";

/** Inline custom property that sequences the CSS stagger. */
const order = (n: number) => ({ "--rise-order": n }) as React.CSSProperties;

/** Wrap `highlight` (if present) in the amber marker span. */
function withHighlight(line: string, highlight: string) {
  const at = line.indexOf(highlight);
  if (at === -1) return line;
  return (
    <>
      {line.slice(0, at)}
      <span className="relative inline-block">
        <span
          aria-hidden="true"
          // In dark mode the marker drops below the baseline as a thin
          // underline so light glyphs never sit on full amber.
          className="hero-mark absolute inset-x-0 bottom-[0.08em] h-[0.24em] bg-amber dark:-bottom-[0.06em] dark:h-[0.12em]"
        />
        <span className="relative">{line.slice(at, at + highlight.length)}</span>
      </span>
      {line.slice(at + highlight.length)}
    </>
  );
}

/**
 * Signature motion moment #1: a staggered, masked-line reveal of the
 * headline on load. Pure CSS keyframes (see globals.css), so the headline
 * paints immediately on first render, animates without JavaScript, and
 * falls back to a static layout under prefers-reduced-motion.
 */
export function Hero() {
  const nameLines = identity.name.split(" ");
  const [statementOpen, statementClose] = identity.heroStatement;

  return (
    <section
      id="intro"
      aria-label="Introduction"
      className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-6xl flex-col justify-center px-5 py-20"
    >
      <div className="hero-rise" style={order(0)}>
        <Availability />
      </div>

      <h1 className="mt-8 font-display text-hero font-semibold text-balance text-ink">
        {nameLines.map((line, i) => (
          <span key={line} className="block overflow-hidden">
            {i > 0 && " "}
            <span className="hero-mask-rise block" style={order(1 + i)}>
              {line}
            </span>
          </span>
        ))}
      </h1>

      <p className="hero-rise mt-6 font-mono text-sm text-subtle" style={order(3)}>
        {identity.role}
      </p>

      <p
        className="hero-rise-move mt-10 max-w-2xl font-display text-title text-pretty text-ink"
        style={order(4)}
      >
        {/* facts.md: the statement may split typographically, one clause per line. */}
        <span className="sm:block">{statementOpen} </span>
        <span className="sm:block">{withHighlight(statementClose, identity.heroHighlight)}</span>
      </p>

      <div className="hero-rise mt-12 flex flex-wrap items-center gap-4" style={order(5)}>
        <Button asChild size="lg">
          <a href="#work">{ui.cta.secondary}</a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={`mailto:${identity.email}`}>{ui.cta.primary}</a>
        </Button>
      </div>

      <div className="hero-rise mt-5" style={order(6)}>
        <CopyEmailButton />
      </div>

      <p className="hero-rise mt-12 font-mono text-xs text-subtle" style={order(7)}>
        {identity.location}
      </p>
    </section>
  );
}
