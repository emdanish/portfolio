"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Command } from "cmdk";
import {
  ArrowDownToLine,
  BookOpen,
  Copy,
  FileText,
  Hash,
  Moon,
  Sun,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { identity, recruitimate, ui, variorum, writing } from "@/content";

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const itemClass =
  "flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2.5 text-sm text-body data-[selected=true]:bg-secondary data-[selected=true]:text-ink [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-subtle data-[selected=true]:[&_svg]:text-ink";

const groupClass =
  "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-subtle";

/**
 * Ctrl/Cmd+K palette, the site's signature frontend detail. cmdk provides
 * the filtering and roving focus; the Dialog underneath traps focus and
 * closes on Escape. Styled to the editorial system: paper panel, hairline
 * borders, mono group labels, no glass.
 */
export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  function run(action: () => void) {
    onOpenChange(false);
    action();
  }

  function download(path: string) {
    const anchor = document.createElement("a");
    anchor.href = path;
    anchor.download = "";
    anchor.click();
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label="Command palette"
      overlayClassName="fixed inset-0 z-50 bg-ink/25 dark:bg-black/60"
      contentClassName="fixed top-[18%] left-1/2 z-50 w-[min(92vw,34rem)] max-w-[calc(100vw-env(safe-area-inset-left)-env(safe-area-inset-right)-2rem)] -translate-x-1/2 border border-line bg-paper shadow-lg"
    >
      <Command.Input
        placeholder="Type a command or search…"
        className="w-full border-b border-line bg-transparent px-5 py-4 font-mono text-sm text-ink outline-none placeholder:text-subtle"
      />
      <Command.List className="max-h-80 overflow-y-auto overscroll-contain p-2">
        <Command.Empty className="px-3 py-8 text-center font-mono text-xs text-subtle">
          NOTHING MATCHES. Try &ldquo;work&rdquo;, &ldquo;theme&rdquo;, or &ldquo;cv&rdquo;.
        </Command.Empty>

        <Command.Group heading="Go to" className={groupClass}>
          {ui.nav.map((item) => (
            <Command.Item
              key={item.href}
              className={itemClass}
              onSelect={() => run(() => router.push(`/${item.href}`))}
            >
              <Hash aria-hidden="true" />
              {item.label}
            </Command.Item>
          ))}
          <Command.Item
            className={itemClass}
            onSelect={() => run(() => router.push(variorum.caseStudyPath))}
          >
            <FileText aria-hidden="true" />
            Variorum case study
          </Command.Item>
          <Command.Item
            className={itemClass}
            onSelect={() => run(() => router.push(recruitimate.caseStudyPath))}
          >
            <FileText aria-hidden="true" />
            Recruitimate case study
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Actions" className={groupClass}>
          <Command.Item
            className={itemClass}
            onSelect={() =>
              run(() =>
                // If the clipboard write is denied, fall back to the mail
                // client so the action never silently fails.
                navigator.clipboard.writeText(identity.email).catch(() => {
                  window.location.href = `mailto:${identity.email}`;
                }),
              )
            }
          >
            <Copy aria-hidden="true" />
            Copy email address
          </Command.Item>
          <Command.Item className={itemClass} onSelect={() => run(() => download(identity.cv.path))}>
            <ArrowDownToLine aria-hidden="true" />
            Download CV
          </Command.Item>
          <Command.Item
            className={itemClass}
            onSelect={() => run(() => setTheme(resolvedTheme === "dark" ? "light" : "dark"))}
          >
            {resolvedTheme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            Toggle theme
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Elsewhere" className={groupClass}>
          <Command.Item
            className={itemClass}
            onSelect={() =>
              run(() => window.open(variorum.links.live.href, "_blank", "noopener,noreferrer"))
            }
          >
            <Hash aria-hidden="true" />
            Variorum live site
          </Command.Item>
          <Command.Item
            className={itemClass}
            onSelect={() => run(() => window.open(identity.github, "_blank", "noopener,noreferrer"))}
          >
            <GitHubIcon aria-hidden="true" />
            GitHub
          </Command.Item>
          <Command.Item
            className={itemClass}
            onSelect={() => run(() => window.open(identity.linkedin, "_blank", "noopener,noreferrer"))}
          >
            <LinkedInIcon aria-hidden="true" />
            LinkedIn
          </Command.Item>
          <Command.Item
            className={itemClass}
            onSelect={() => run(() => window.open(writing.href, "_blank", "noopener,noreferrer"))}
          >
            <BookOpen aria-hidden="true" />
            Read the essay
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
