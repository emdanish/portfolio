import { identity } from "@/content";

/**
 * Canonical site origin. facts.md: no new domain purchased yet, so this
 * falls back to the Vercel deployment this site replaces. Override with
 * NEXT_PUBLIC_SITE_URL once the production URL is known.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? identity.domain ?? identity.previousSite;
