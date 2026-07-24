import { chromium } from "playwright";
const base = process.argv[2] ?? "http://localhost:52395";
const browser = await chromium.launch({ channel: "chrome", headless: true });

// 1. Reduced motion: hero content must be fully visible with no pending transforms
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, reducedMotion: "reduce" });
const page = await ctx.newPage();
await page.goto(base, { waitUntil: "load" });
await page.waitForTimeout(1200);
const rm = await page.evaluate(() => {
  const h1 = document.querySelector("h1");
  const s = getComputedStyle(h1);
  const sections = [...document.querySelectorAll("main > section")].map(sec => {
    const cs = getComputedStyle(sec.firstElementChild ?? sec);
    return { id: sec.id || sec.getAttribute("aria-label"), opacity: cs.opacity };
  });
  return { h1Opacity: s.opacity, heroVisible: h1.getBoundingClientRect().height > 0, sections: sections.slice(0, 3) };
});
await ctx.close();

// 2. Keyboard: tab order + visible focus outline
const ctx2 = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page2 = await ctx2.newPage();
await page2.goto(base, { waitUntil: "load" });
const order = [];
for (let i = 0; i < 6; i++) {
  await page2.keyboard.press("Tab");
  const info = await page2.evaluate(() => {
    const el = document.activeElement;
    const cs = getComputedStyle(el);
    return {
      text: (el.getAttribute("aria-label") || el.textContent || el.tagName).trim().slice(0, 40),
      outline: cs.outlineStyle !== "none" ? `${cs.outlineWidth} ${cs.outlineColor}` : cs.boxShadow !== "none" ? "ring" : "NONE",
    };
  });
  order.push(info);
}
console.log(JSON.stringify({ reducedMotion: rm, tabOrder: order }, null, 1));
await browser.close();
