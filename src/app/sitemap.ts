import type { MetadataRoute } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/site";

/**
 * Indexable routes only. lastModified is the deploy/build time: content
 * ships with releases, so this is the best accurate signal available without
 * a CMS. Bing uses lastmod when prioritizing recrawl for AI search.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/variorum"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/recruitimate"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
