import { EyebrowRule } from "@/components/eyebrow-rule";
import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  /** Optional one-line framing sentence under the title. */
  lede?: string;
};

/**
 * Editorial section opener: mono eyebrow against a hairline rule, then a
 * Fraunces display title. Every section shares this masthead rhythm.
 */
export function SectionHeading({ eyebrow, title, lede }: SectionHeadingProps) {
  return (
    <Reveal>
      <EyebrowRule>{eyebrow}</EyebrowRule>
      <h2 className="mt-6 font-display text-display text-balance text-ink">{title}</h2>
      {lede ? <p className="mt-4 max-w-xl text-pretty text-subtle">{lede}</p> : null}
    </Reveal>
  );
}
