"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const emptySubscribe = () => () => {};

// Kept in sync with --paper in globals.css for both themes.
const THEME_COLORS = { light: "#faf8f5", dark: "#0a121d" } as const;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // True only after hydration, when next-themes knows the real theme.
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const isDark = mounted && resolvedTheme === "dark";

  // The static <meta name="theme-color"> matches the light default; keep the
  // browser chrome in step when the visitor toggles.
  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isDark ? THEME_COLORS.dark : THEME_COLORS.light);
  }, [isDark]);

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {/* Render both icons and swap via CSS so the button is stable pre-hydration. */}
      <Sun aria-hidden="true" className="hidden dark:block" />
      <Moon aria-hidden="true" className="block dark:hidden" />
    </Button>
  );
}
