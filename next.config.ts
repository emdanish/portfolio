import type { NextConfig } from "next";

/**
 * Security and SEO-adjacent delivery headers.
 * Prefer apex canonicalization in the Vercel project domain settings;
 * hosts here only protect against common mis-framing / MIME sniffing.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Helps browsers enforce HTTPS after first secure visit (Vercel already terminates TLS).
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Cache public static brand assets aggressively; content hashes live under /_next.
        source: "/og.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=2592000",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Prefer apex over the previous Vercel subdomain only when that host
      // is pointed here; otherwise this is a no-op. Kept for documented intent.
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
