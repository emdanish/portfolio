import { identity, ui } from "@/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <p className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center bg-amber font-display text-sm font-semibold text-[#16324a]"
          >
            {identity.monogram}
          </span>
          <span className="font-mono text-xs text-subtle">
            © {new Date().getFullYear()} {identity.name}
          </span>
        </p>
        <p className="font-mono text-xs text-subtle">{ui.builtWith}</p>
        <a href="#top" className="link-underline font-mono text-xs text-subtle uppercase hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
