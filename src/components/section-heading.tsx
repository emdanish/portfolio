import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  /** Optional one-line framing sentence under the title. */
  lede?: string;
};

/**
 * Editorial section opener: mono eyebrow against a hairline rule, then a
 * Fraunces display title. The rule runs to the container edge, giving each
 * section the same quiet masthead rhythm.
 */
export function SectionHeading({ eyebrow, title, lede }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4">
        <span className="shrink-0 font-mono text-sm text-subtle uppercase">{eyebrow}</span>
        <span aria-hidden="true" className="h-px w-full translate-y-[-0.2em] bg-line" />
      </div>
      <h2 className="mt-6 font-display text-display text-balance text-ink">{title}</h2>
      {lede ? <p className="mt-4 max-w-xl text-pretty text-subtle">{lede}</p> : null}
    </Reveal>
  );
}
