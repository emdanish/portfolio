import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Extra classes for the arrow, e.g. group-driven nudges. */
  iconClassName?: string;
};

/** Outbound link with the shared arrow affordance and safe rel defaults. */
export function ExternalLink({ href, children, className, iconClassName }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "link-underline inline-flex items-center gap-1 font-mono text-xs text-subtle uppercase transition-colors hover:text-ink",
        className,
      )}
    >
      {children}
      <ArrowUpRight aria-hidden="true" className={cn("size-3.5", iconClassName)} />
    </a>
  );
}
