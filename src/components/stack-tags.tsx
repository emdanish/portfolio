import { Fragment } from "react";

/**
 * Quiet mono list of technologies, separated by interpuncts — facts.md asks
 * for grouped, visually quiet skills (never bars or meters).
 */
export function StackTags({ items, className }: { items: readonly string[]; className?: string }) {
  return (
    <p className={className ?? "font-mono text-xs text-subtle"}>
      {items.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && <span aria-hidden="true"> · </span>}
          <span className="whitespace-nowrap">{item}</span>
        </Fragment>
      ))}
    </p>
  );
}
