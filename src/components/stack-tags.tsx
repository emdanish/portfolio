import { Fragment } from "react";
import { cn } from "@/lib/utils";

/**
 * Quiet mono list of technologies, separated by interpuncts — facts.md asks
 * for grouped, visually quiet skills (never bars or meters).
 */
export function StackTags({ items, className }: { items: readonly string[]; className?: string }) {
  return (
    <p className={cn("font-mono text-xs text-subtle", className)}>
      {items.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && <span aria-hidden="true"> · </span>}
          <span className="whitespace-nowrap">{item}</span>
        </Fragment>
      ))}
    </p>
  );
}
