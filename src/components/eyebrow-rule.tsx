import { cn } from "@/lib/utils";

type EyebrowRuleProps = {
  children: React.ReactNode;
  className?: string;
  /** Oversized ghost numeral at the rule's far end (e.g. "01"). */
  number?: string;
};

/**
 * The site's masthead device: a mono eyebrow against a hairline rule running
 * to the container edge, optionally closed by an oversized section numeral.
 * Wrap in a heading element at the call site when the eyebrow is structural.
 */
export function EyebrowRule({ children, className, number }: EyebrowRuleProps) {
  return (
    <div className={cn("flex items-baseline gap-4", className)}>
      <span className="shrink-0 font-mono text-sm text-subtle uppercase">{children}</span>
      <span aria-hidden="true" className="h-px w-full translate-y-[-0.2em] bg-line" />
      {number ? (
        <span aria-hidden="true" className="shrink-0 font-mono text-5xl text-line tabular-nums select-none">
          {number}
        </span>
      ) : null}
    </div>
  );
}
