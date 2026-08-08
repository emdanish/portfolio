import { identity } from "@/content";

/**
 * Canonical production origin (no trailing slash). Used by metadataBase,
 * sitemap, robots, Open Graph absolute URLs, and JSON-LD.
 *
 * Prefer NEXT_PUBLIC_SITE_URL in deploy environments; normalize aggressively
 * so a trailing slash in env (a common Vercel mistake) cannot produce
 * `https://emdanish.dev//path` in crawlable outputs.
 */
function normalizeSiteUrl(raw: string): string {
  const trimmed = raw.trim();
  try {
    const url = new URL(trimmed.includes("://") ? trimmed : `https://${trimmed}`);
    url.hash = "";
    url.search = "";
    // Origin only (protocol + host); drop path/query that would break joins.
    return url.origin;
  } catch {
    return trimmed.replace(/\/+$/, "");
  }
}

const configured =
  process.env.NEXT_PUBLIC_SITE_URL ?? identity.domain ?? identity.previousSite;

export const SITE_URL = normalizeSiteUrl(configured);

/** Absolute URL helper for schema and non-Metadata-API joins. */
export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
