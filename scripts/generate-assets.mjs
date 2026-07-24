/**
 * Generates every derived visual asset for the site from two inputs:
 *   - Picture.jpg (repo root)  -> editorial 4:5 about crop + square avatar
 *   - the design system        -> MD monogram favicons + Open Graph image
 *
 * Text is converted to real glyph outlines with fontkit (Fraunces for the
 * monogram/display, JetBrains Mono for labels), so output is identical on
 * any machine, with no system-font dependency.
 *
 * Run: node scripts/generate-assets.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";
import * as fontkit from "fontkit";
import pngToIco from "png-to-ico";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const CACHE = path.join(ROOT, "scripts", ".font-cache");

// Design tokens (kept in sync with src/app/globals.css)
const PAPER = "#FAF8F5";
const INK = "#16324A";
const AMBER = "#F6C453";
const CHARCOAL = "#374049";

const FONTS = {
  fraunces: {
    url: "https://raw.githubusercontent.com/google/fonts/main/ofl/fraunces/Fraunces%5BSOFT%2CWONK%2Copsz%2Cwght%5D.ttf",
    file: "Fraunces-variable.ttf",
  },
  mono: {
    url: "https://raw.githubusercontent.com/google/fonts/main/ofl/jetbrainsmono/JetBrainsMono%5Bwght%5D.ttf",
    file: "JetBrainsMono-variable.ttf",
  },
};

async function loadFont({ url, file }) {
  await mkdir(CACHE, { recursive: true });
  const cached = path.join(CACHE, file);
  if (!existsSync(cached)) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
    await writeFile(cached, Buffer.from(await res.arrayBuffer()));
  }
  return fontkit.openSync(cached);
}

/** Lay out `text` at `size`px and return an SVG path string plus advance width. */
function textPath(font, text, size, variation) {
  const instance = variation ? font.getVariation(variation) : font;
  const run = instance.layout(text);
  const scale = size / instance.unitsPerEm;
  let x = 0;
  let d = "";
  for (let i = 0; i < run.glyphs.length; i++) {
    const glyph = run.glyphs[i];
    const pos = run.positions[i];
    const gp = glyph.path.scale(scale, -scale).translate(x + pos.xOffset * scale, -pos.yOffset * scale);
    d += gp.toSVG();
    x += pos.xAdvance * scale;
  }
  return { d, width: x, ascent: instance.ascent * scale, capHeight: instance.capHeight * scale };
}

const group = (p, tx, ty, fill) => `<g transform="translate(${tx} ${ty})"><path d="${p}" fill="${fill}"/></g>`;

/** Amber square + Fraunces "MD" in ink: the identity mark. */
function monogramSvg(sizePx, fraunces) {
  const md = textPath(fraunces, "MD", sizePx * 0.44, { wght: 560, opsz: 144, SOFT: 0, WONK: 0 });
  const tx = (sizePx - md.width) / 2;
  const ty = sizePx / 2 + md.capHeight / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${sizePx}" height="${sizePx}" viewBox="0 0 ${sizePx} ${sizePx}">
  <rect width="${sizePx}" height="${sizePx}" fill="${AMBER}"/>
  ${group(md.d, tx, ty, INK)}
</svg>`;
}

function ogSvg(fraunces, mono) {
  const W = 1200;
  const H = 630;
  const M = 84; // left margin
  const name = textPath(fraunces, "Muhammad Danish", 92, { wght: 600, opsz: 144, SOFT: 0, WONK: 0 });
  const role = textPath(mono, "FULL-STACK DEVELOPER · AI-POWERED APPLICATIONS", 25, { wght: 500 });
  const line1 = textPath(fraunces, "I build AI products end to end,", 40, { wght: 420, opsz: 40, SOFT: 0, WONK: 0 });
  const line2 = textPath(fraunces, "and I care about what they refuse to do.", 40, { wght: 420, opsz: 40, SOFT: 0, WONK: 0 });
  const md = textPath(fraunces, "MD", 42, { wght: 560, opsz: 144, SOFT: 0, WONK: 0 });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${PAPER}"/>
  <rect x="${M}" y="72" width="96" height="96" fill="${AMBER}"/>
  ${group(md.d, M + (96 - md.width) / 2, 72 + 48 + md.capHeight / 2, INK)}
  ${group(line1.d, M, 268, INK)}
  ${group(line2.d, M, 322, INK)}
  <rect x="${M}" y="376" width="120" height="7" fill="${AMBER}"/>
  ${group(name.d, M, 490, INK)}
  ${group(role.d, M, 542, CHARCOAL)}
</svg>`;
}

async function generateIcons(fraunces) {
  await writeFile(path.join(PUBLIC, "favicon.svg"), monogramSvg(64, fraunces));
  const big = Buffer.from(monogramSvg(1024, fraunces));
  const png = (size) => sharp(big).resize(size, size).png().toBuffer();
  const [p16, p32, p48, p180, p192, p512] = await Promise.all([16, 32, 48, 180, 192, 512].map(png));
  await writeFile(path.join(ROOT, "src", "app", "favicon.ico"), await pngToIco([p16, p32, p48]));
  await writeFile(path.join(PUBLIC, "apple-touch-icon.png"), p180);
  await writeFile(path.join(PUBLIC, "icon-192.png"), p192);
  await writeFile(path.join(PUBLIC, "icon-512.png"), p512);
  console.log("icons: favicon.svg favicon.ico apple-touch-icon icon-192 icon-512");
}

async function generateOg(fraunces, mono) {
  const png = await sharp(Buffer.from(ogSvg(fraunces, mono))).png().toBuffer();
  await writeFile(path.join(PUBLIC, "og.png"), png);
  console.log("og: public/og.png (1200x630)");
}

/** 96px tile of alpha-channel gaussian noise, used as the paper-grain CSS mask. */
async function generateNoiseTile() {
  const raw = Buffer.alloc(96 * 96);
  for (let i = 0; i < raw.length; i++) {
    raw[i] = Math.max(0, Math.min(255, Math.round(128 + (Math.random() * 2 - 1) * 90)));
  }
  const alpha = await sharp(raw, { raw: { width: 96, height: 96, channels: 1 } }).png().toBuffer();
  const tile = await sharp({ create: { width: 96, height: 96, channels: 3, background: "#000" } })
    .joinChannel(alpha)
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(path.join(PUBLIC, "noise.png"), tile);
  console.log("noise.png: 96x96 alpha-noise mask tile");
}

async function generatePortraits() {
  const src = path.join(ROOT, "Picture.jpg");
  // Statically imported by components (not URL-served), so they live in
  // src/images where next/image derives dimensions and blur placeholders.
  const outDir = path.join(ROOT, "src", "images");
  await mkdir(outDir, { recursive: true });
  const meta = await sharp(src).metadata();
  const { width: W, height: H } = meta;
  console.log(`source photo: ${W}x${H}`);

  // Editorial 4:5 crop for the About section: keep the head in the upper
  // third, trim the excess below the folded arms.
  const aboutW = W;
  const aboutH = Math.min(H, Math.round((W * 5) / 4));
  const aboutTop = Math.min(H - aboutH, Math.round(H * 0.035));
  await sharp(src)
    .extract({ left: 0, top: aboutTop, width: aboutW, height: aboutH })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(outDir, "portrait-about.jpg"));
  console.log(`portrait-about.jpg: ${aboutW}x${aboutH} (4:5)`);

  // Tight square crop around the face for the nav/footer avatar.
  const side = Math.round(W * 0.62);
  const left = Math.round(W * 0.19);
  const top = Math.round(H * 0.06);
  await sharp(src)
    .extract({ left, top, width: side, height: side })
    .resize(512, 512)
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(outDir, "avatar.jpg"));
  console.log("avatar.jpg: 512x512");
}

await mkdir(PUBLIC, { recursive: true });
const fraunces = await loadFont(FONTS.fraunces);
const mono = await loadFont(FONTS.mono);
await generatePortraits();
await generateIcons(fraunces);
await generateOg(fraunces, mono);
await generateNoiseTile();
console.log("done");
