import { identity } from "@/content";
import { cn } from "@/lib/utils";

type MonogramProps = {
  className?: string;
  /** Hide from assistive tech when the mark is pure decoration (footer). */
  decorative?: boolean;
};

/**
 * The identity mark, identical to the favicon: display-serif "MD" in ink
 * navy on the amber square. Used in the nav and footer so all three read as
 * one design.
 */
export function Monogram({ className, decorative = false }: MonogramProps) {
  return (
    <span
      aria-hidden={decorative || undefined}
      className={cn(
        "flex size-8 shrink-0 items-center justify-center bg-amber font-display text-sm font-semibold text-ink-on-amber select-none",
        className,
      )}
    >
      {identity.monogram}
    </span>
  );
}
