/**
 * Curated map for AI assistants at inference time (llmstxt.org proposal).
 * Not a Google ranking signal. Complements semantic HTML + structured data.
 * Serve at /llms.txt with plain text media type.
 */
import { NextResponse } from "next/server";
import { identity, recruitimate, seoDescription, variorum } from "@/content";
import { SITE_URL, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

function body() {
  return `# ${identity.name}

> ${seoDescription}

${identity.role}. ${identity.location}. ${identity.availability}.

## Pages

- [Portfolio homepage](${SITE_URL}/): Selected work, experience, about, contact
- [Variorum case study](${absoluteUrl("/variorum")}): ${variorum.oneLiner}
- [Recruitimate case study](${absoluteUrl("/recruitimate")}): ${recruitimate.oneLiner}

## Products & code

- [Variorum product](${variorum.links.live.href}): Live product
- [Variorum source](${variorum.links.source.href}): Public repository
- [Recruitimate demo](${recruitimate.links[0]?.href}): Live demo

## Profiles

- [GitHub](${identity.github})
- [LinkedIn](${identity.linkedin})
- [Email](mailto:${identity.email})
- [CV PDF](${absoluteUrl(identity.cv.path)})

## Optional

- [Sitemap](${absoluteUrl("/sitemap.xml")})
- [Robots](${absoluteUrl("/robots.txt")})
`;
}

export function GET() {
  return new NextResponse(body(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
