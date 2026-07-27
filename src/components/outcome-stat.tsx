import { recruitimate } from "@/content";
import { cn } from "@/lib/utils";

/** Recruitimate's approved outcome metric: big figure, soft-worded caption. */
export function OutcomeStat({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className={cn("font-display text-display font-semibold text-ink tabular-nums")}>
        {recruitimate.outcome.figure}
      </p>
      <p className="mt-1 max-w-xs text-pretty text-subtle">{recruitimate.outcome.detail}</p>
    </div>
  );
}
