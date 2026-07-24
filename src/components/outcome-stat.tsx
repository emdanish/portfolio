import { flagship } from "@/content";
import { cn } from "@/lib/utils";

/** The flagship's approved outcome metric: big figure, soft-worded caption. */
export function OutcomeStat({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className={cn("font-display text-display font-semibold text-ink tabular-nums")}>
        {flagship.outcome.figure}
      </p>
      <p className="mt-1 max-w-xs text-pretty text-subtle">{flagship.outcome.detail}</p>
    </div>
  );
}
