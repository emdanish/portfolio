/** Keyboard-only command palette + round-2 feature checks. */
import { chromium } from "playwright";
const base = process.argv[2] ?? "http://localhost:52395";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto(base, { waitUntil: "load" });
const out = {};

// 1. open with Ctrl+K, type to filter, Enter to run "go to contact"
await page.keyboard.press("Control+k");
await page.waitForTimeout(400);
out.paletteOpen = await page.evaluate(() => !!document.querySelector("[cmdk-root]"));
out.focusInInput = await page.evaluate(() => document.activeElement?.hasAttribute("cmdk-input") ?? false);
await page.keyboard.type("contact");
await page.waitForTimeout(200);
await page.keyboard.press("Enter");
await page.waitForTimeout(1000);
out.hashAfterEnter = await page.evaluate(() => location.hash);
out.paletteClosedAfterRun = await page.evaluate(() => !document.querySelector("[cmdk-root]"));

// 2. Escape closes
await page.keyboard.press("Control+k");
await page.waitForTimeout(300);
await page.keyboard.press("Escape");
await page.waitForTimeout(300);
out.closedByEscape = await page.evaluate(() => !document.querySelector("[cmdk-root]"));

// 3. focus trap: open, Tab several times, focus stays inside dialog
await page.keyboard.press("Control+k");
await page.waitForTimeout(300);
for (let i = 0; i < 5; i++) await page.keyboard.press("Tab");
out.focusStaysInDialog = await page.evaluate(() => {
  const dialog = document.querySelector("[cmdk-dialog], [role=dialog]");
  return dialog ? dialog.contains(document.activeElement) : false;
});
await page.keyboard.press("Escape");

// 4. count-up values render final numbers after scroll
await page.evaluate(() => { document.documentElement.style.scrollBehavior = "auto"; document.getElementById("experience").scrollIntoView(); });
await page.waitForTimeout(1800);
out.metrics = await page.evaluate(() =>
  [...document.querySelectorAll("#experience li p:first-child")].slice(0, 3).map((p) => p.textContent),
);

// 5. local time line
await page.evaluate(() => document.getElementById("contact").scrollIntoView());
await page.waitForTimeout(600);
out.localTime = await page.evaluate(() => {
  const el = [...document.querySelectorAll("#contact p")].find((p) => p.textContent.includes("Pakistan"));
  return el?.textContent ?? null;
});

// 6. 404 page
await page.goto(base + "/definitely-not-a-page", { waitUntil: "load" });
out.notFound = await page.evaluate(() => document.querySelector("h1")?.textContent);

console.log(JSON.stringify(out, null, 1));
await browser.close();
