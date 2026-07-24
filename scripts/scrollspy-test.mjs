/**
 * Functional check for the nav scroll-spy: scroll to a section, confirm the
 * URL hash and aria-current follow; scroll home, confirm the hash clears;
 * visit /recruitimate with a hash, confirm it survives hydration.
 * Usage: node scripts/scrollspy-test.mjs <baseURL>
 */
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:52395";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

await page.goto(base, { waitUntil: "load" });
await page.evaluate(() => {
  document.documentElement.style.scrollBehavior = "auto";
  document.getElementById("experience").scrollIntoView();
});
await page.waitForTimeout(800);
const atSection = await page.evaluate(() => ({
  hash: location.hash,
  current: [...document.querySelectorAll('a[aria-current="true"]')].map((a) => a.getAttribute("href")),
}));

await page.evaluate(() => scrollTo(0, 0));
await page.waitForTimeout(800);
const atTop = await page.evaluate(() => location.hash);

await page.goto(`${base}/recruitimate#cs-outcome`, { waitUntil: "load" });
await page.waitForTimeout(800);
const caseStudy = await page.evaluate(() => location.hash);

console.log(JSON.stringify({ atSection, hashAtTop: atTop, caseStudyHashPreserved: caseStudy }, null, 1));
await browser.close();
