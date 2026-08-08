import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { identity, seoDescription, seoTitle } from "@/content";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  display: "swap",
});

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: seoTitle,
    template: `%s · ${identity.name}`,
  },
  description: seoDescription,
  applicationName: `${identity.name} Portfolio`,
  authors: [{ name: identity.name, url: SITE_URL }],
  creator: identity.name,
  publisher: identity.name,
  category: "technology",
  keywords: [
    "Muhammad Danish",
    "full stack developer",
    "full stack engineer",
    "software engineer Pakistan",
    "Next.js developer",
    "TypeScript developer",
    "Python FastAPI",
    "AI engineer",
    "AI SaaS",
    "Variorum",
    "Recruitimate",
    "emdanish",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: identity.name,
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${identity.name} — full stack developer building AI-powered SaaS products`,
      },
    ],
  },
  // Card-only defaults: page-level twitter title/description/image resolve
  // from each page's Open Graph so case studies keep their own previews.
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["/og.png"],
  },
  icons: {
    // favicon.ico is injected automatically from src/app/favicon.ico.
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: { canonical: "/" },
  other: {
    "theme-color": "#faf8f5",
  },
};

export const viewport: Viewport = {
  // The site forces a light default (next-themes, enableSystem=false), so the
  // chrome color must not follow the OS scheme; the toggle updates this meta
  // tag client-side (see theme-toggle.tsx).
  themeColor: "#faf8f5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${grotesk.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <a
            href="#main"
            className="sr-only z-50 bg-primary px-4 py-2 font-mono text-sm text-primary-foreground focus:not-sr-only focus:fixed focus:top-[max(--spacing(2),env(safe-area-inset-top))] focus:left-[max(--spacing(2),env(safe-area-inset-left))]"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
