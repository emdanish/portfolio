import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Page not found",
  // Do not inherit the homepage canonical: a 404 has no preferred URL.
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <SiteNav />
      <main id="main" className="mx-auto flex w-full max-w-6xl grow flex-col items-start justify-center px-5 py-24">
        <p className="font-mono text-xs text-subtle uppercase">404</p>
        <h1 className="mt-6 font-display text-hero font-semibold text-balance text-ink">
          Nothing here.
        </h1>
        <p className="mt-6 max-w-md text-lg text-pretty">
          This page refused to exist. On brand, honestly.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/">Back to the homepage</Link>
        </Button>
      </main>
      <SiteFooter />
    </div>
  );
}
