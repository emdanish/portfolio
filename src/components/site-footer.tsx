import { Monogram } from "@/components/monogram";
import { currently, identity, ui } from "@/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto mb-8 max-w-6xl border-b border-line pb-8">
        <p className="font-mono text-xs text-pretty text-subtle">{currently}</p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <p className="flex items-center gap-3">
          <Monogram decorative />
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
