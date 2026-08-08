import type { MetadataRoute } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/site";

/**
 * Allow full crawl of the public portfolio. No CSS/JS disallow — the App
 * Router needs those assets for rendering. Sitemap is fully qualified so
 * Googlebot and Bingbot can discover every indexable URL.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE_URL,
  };
}
