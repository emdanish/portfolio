/**
 * Visual QA screenshots via system Chrome (headless).
 * Usage: node shoot.mjs <baseURL> <outDir>
 */
import { chromium } from "playwright";
import path from "node:path";
import { mkdir } from "node:fs/promises";

const [base = "http://localhost:52395", outDir = "./shots"] = process.argv.slice(2);
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ channel: "chrome", headless: true });

async function shoot(name, { width, height, dark = false, url = "/", fullPage = false, reducedMotion = "no-preference" }) {
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    reducedMotion,
    colorScheme: dark ? "dark" : "light",
  });
  const page = await ctx.newPage();
  if (dark) {
    await page.addInitScript(() => localStorage.setItem("theme", "dark"));
  }
  await page.goto(base + url, { waitUntil: "networkidle" });
  // Walk the page so whileInView reveals fire before a full-page capture.
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = "auto";
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += innerHeight * 0.7) {
      scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 400));
  });
  await page.waitForTimeout(700);
  await page.screenshot({ path: path.join(outDir, `${name}.png`), fullPage });
  await ctx.close();
  console.log("shot:", name);
}

// Hero viewports (what a recruiter sees in 5 seconds)
await shoot("home-desktop-hero", { width: 1440, height: 900 });
await shoot("home-mobile-hero", { width: 375, height: 812 });
await shoot("home-desktop-dark-hero", { width: 1440, height: 900, dark: true });
// Full pages
await shoot("home-desktop-full", { width: 1440, height: 900, fullPage: true });
await shoot("home-mobile-full", { width: 375, height: 812, fullPage: true });
await shoot("home-tablet-full", { width: 768, height: 1024, fullPage: true });
await shoot("home-desktop-dark-full", { width: 1440, height: 900, dark: true, fullPage: true });
await shoot("case-desktop-full", { width: 1440, height: 900, url: "/recruitimate", fullPage: true });
await shoot("case-mobile-full", { width: 375, height: 812, url: "/recruitimate", fullPage: true });

await browser.close();
console.log("done");
