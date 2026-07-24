"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { identity, ui } from "@/content";
import { cn } from "@/lib/utils";
import avatar from "@/images/avatar.jpg";

const sectionIds = ui.nav.map((item) => item.href.slice(1));

/** Track which page section is in view and mirror it into the URL hash. */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A slim horizontal band around the reader's eyeline decides the
      // active section, so exactly one section wins at a time.
      { rootMargin: "-35% 0px -60% 0px" },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (active === null) return;
    const hash = `#${active}`;
    if (window.location.hash !== hash) {
      history.replaceState(null, "", hash);
    }
  }, [active]);

  return active;
}

export function SiteNav() {
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 px-[max(--spacing(5),env(safe-area-inset-left))] backdrop-blur-sm">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label={`${identity.name} — back to top`}
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={avatar}
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-full border border-line"
            priority
          />
          <span className="font-display text-lg font-semibold text-ink">{identity.monogram}</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {ui.nav.map((item) => (
            <li key={item.href}>
              <a
                href={`/${item.href}`}
                aria-current={active === item.href.slice(1) ? "true" : undefined}
                className={cn(
                  "link-underline font-mono text-xs uppercase transition-colors",
                  active === item.href.slice(1) ? "text-ink after:scale-x-100 after:bg-amber" : "text-subtle hover:text-ink",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm">
            <a href={`mailto:${identity.email}`}>{ui.cta.primary}</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </nav>

      {/* Mobile disclosure — in-flow panel, not a modal, so focus stays natural. */}
      <nav
        id="mobile-menu"
        ref={menuRef}
        aria-label="Sections"
        className={cn("border-t border-line pb-3 md:hidden", menuOpen ? "block" : "hidden")}
      >
        <ul className="mx-auto max-w-6xl">
          {ui.nav.map((item) => (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <a
                href={`/${item.href}`}
                aria-current={active === item.href.slice(1) ? "true" : undefined}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "block py-3 font-display text-xl",
                  active === item.href.slice(1) ? "text-ink" : "text-subtle",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
