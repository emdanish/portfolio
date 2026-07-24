import { cn } from "@/lib/utils";

type EyebrowRuleProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * The site's masthead device: a mono eyebrow against a hairline rule running
 * to the container edge. Wrap in a heading element at the call site when the
 * eyebrow is structural.
 */
export function EyebrowRule({ children, className }: EyebrowRuleProps) {
  return (
    <div className={cn("flex items-baseline gap-4", className)}>
      <span className="shrink-0 font-mono text-sm text-subtle uppercase">{children}</span>
      <span aria-hidden="true" className="h-px w-full translate-y-[-0.2em] bg-line" />
    </div>
  );
}
