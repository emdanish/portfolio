import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { identity, seoDescription } from "@/content";
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

const siteTitle = `${identity.name} — ${identity.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: `%s — ${identity.name}`,
  },
  description: seoDescription,
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    siteName: identity.name,
    title: siteTitle,
    description: seoDescription,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${identity.name} — portfolio` }],
  },
  // Card-only: each page's twitter title/description/image autofill from its
  // own resolved Open Graph, so /recruitimate doesn't inherit homepage copy.
  twitter: { card: "summary_large_image" },
  icons: {
    // favicon.ico is injected automatically from src/app/favicon.ico.
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  // The site forces a light default (next-themes, enableSystem=false), so the
  // chrome color must not follow the OS scheme; the toggle updates this meta
  // tag client-side (see theme-toggle.tsx).
  themeColor: "#faf8f5",
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
      </body>
    </html>
  );
}
