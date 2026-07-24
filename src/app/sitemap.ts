import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // No trailing slash: byte-matches the canonical Next emits for "/".
    { url: SITE_URL, priority: 1 },
    { url: `${SITE_URL}/recruitimate`, priority: 0.8 },
  ];
}
