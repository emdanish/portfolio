import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { identity } from "@/content";
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

const description =
  "Muhammad Danish is a full-stack developer building AI-powered applications end to end — Next.js, TypeScript, FastAPI, PostgreSQL, and the Claude and Gemini APIs. Open to full-time roles and freelance projects.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${identity.name} — Full-Stack Developer, AI-Powered Applications`,
    template: `%s — ${identity.name}`,
  },
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: identity.name,
    title: `${identity.name} — Full-Stack Developer, AI-Powered Applications`,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${identity.name} — portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${identity.name} — Full-Stack Developer, AI-Powered Applications`,
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0a121d" },
  ],
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
            className="sr-only z-50 bg-primary px-4 py-2 font-mono text-sm text-primary-foreground focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
