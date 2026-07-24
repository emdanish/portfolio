import { identity } from "@/content";
import { cn } from "@/lib/utils";

/**
 * The availability line with the amber status square. The square is reserved
 * for this one meaning across the site — availability — so the accent keeps
 * its signal value.
 */
export function Availability({ className }: { className?: string }) {
  return (
    <p className={cn("flex items-center gap-2.5 font-mono text-xs text-subtle uppercase", className)}>
      <span aria-hidden="true" className="size-2 bg-amber" />
      {identity.availability}
    </p>
  );
}
