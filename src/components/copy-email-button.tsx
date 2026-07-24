"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { identity } from "@/content";
import { cn } from "@/lib/utils";

/**
 * Click-to-copy fallback next to mailto actions, with an inline "Copied"
 * confirmation announced to screen readers.
 */
export function CopyEmailButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (permissions/old browser) — the adjacent
      // mailto link remains the primary path, so fail quietly.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex cursor-pointer items-center gap-1.5 font-mono text-xs text-subtle transition-colors hover:text-ink focus-visible:text-ink",
        className,
      )}
    >
      {copied ? (
        <Check aria-hidden="true" className="size-3.5 text-ink" />
      ) : (
        <Copy aria-hidden="true" className="size-3.5" />
      )}
      {copied ? "Copied" : "Copy email"}
      <span aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}
