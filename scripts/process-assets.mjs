// Curate + compress portfolio source assets from the user's Desktop into /public.
// Missing sources are logged and skipped so the build never blocks on them.
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

sharp.cache(false);
sharp.concurrency(1);

const HOME = "C:/Users/nishu";
const DESKTOP = "C:/Users/nishu/OneDrive/Desktop";
const OUT = path.resolve(process.cwd(), "public");
const FRIM = `${DESKTOP}/FRIMFLIDATA`;
const PKG = `${DESKTOP}/frimflix-website-package/assets`;
const SUKH = `${DESKTOP}/SUKHMANI CONSTRUCTION BHOPAL/files/sukhmani-construction-site/sukhmani-construction-site/assets/images`;
const URV = `${DESKTOP}/URVARAM WEBSITE`;

// [source, outRelPath, targetWidth, quality]
const IMAGES = [
  // Posters / campaigns
  [`${FRIM}/Bhopal.jpg.jpeg`, "work/bhopal.webp", 1500, 80],
  [`${FRIM}/sikkim.png`, "work/sikkim.webp", 1500, 78],
  [`${FRIM}/Ladakh.jpg.jpeg`, "work/ladakh.webp", 1500, 80],
  [`${FRIM}/udaipur flyr-1.jpg (1).jpeg`, "work/udaipur.webp", 1500, 80],
  [`${PKG}/editorial/morning-poster-01.png`, "work/morning-01.webp", 1500, 82],
  [`${PKG}/editorial/morning-poster-02.png`, "work/morning-02.webp", 1500, 82],
  // Branding / identity
  [`${FRIM}/designt.png`, "work/design-tomorrow.webp", 1500, 82],
  [`${FRIM}/FINAL LOGO.png`, "work/dt-mark.webp", 1500, 85],
  [`${FRIM}/shared_id_card.png`, "work/dt-idcard.webp", 1500, 82],
  [`${FRIM}/shared_letterpress.png`, "work/dt-letterpress.webp", 1400, 82],
  [`${FRIM}/shared_thermal.png`, "work/dt-thermal.webp", 1400, 82],
  [`${FRIM}/Picsart_26-07-05_23-24-07-712.png`, "dt-icon.webp", 512, 90],
  [`${PKG}/work/sukhmani-constructions.png`, "work/sukhmani.webp", 1500, 82],
  [`${SUKH}/logo.png`, "work/sukhmani-logo.webp", 900, 88],
  [`${PKG}/work/haathi-homes.png`, "work/haathi-homes.webp", 1500, 82],
  [`${FRIM}/HAATHIHOMES.png`, "work/haathi-poster.webp", 1500, 80],
  [`${PKG}/work/just-one-bite.jpg`, "work/just-one-bite.webp", 1500, 82],
  [`${URV}/Urvaram Logo.png`, "work/urvaram-logo.webp", 900, 88],
  [`${FRIM}/TEJASVRMA1 (1).jpg (1).jpeg`, "work/tejas.webp", 1500, 80],
  [`${FRIM}/Tejas Vr.jpg.jpeg`, "work/tejas-2.webp", 1500, 80],
  // Editorial / layout
  [`${FRIM}/Black and Grey Modern Fashion Photography Article Page Document.jpg`, "work/fashion-editorial.webp", 1400, 82],
  [`${FRIM}/Orange and White Modern Photo Collage Fashion Moodboard A4 Document.jpg`, "work/fashion-moodboard.webp", 1400, 82],
  [`${PKG}/editorial/build-human-brands.jpg`, "work/build-human-brands.webp", 1500, 82],
  // Product / UI
  [`${FRIM}/#02.png`, "work/niss-ui.webp", 1400, 82],
  // Photography
  [`${FRIM}/20250322_163456.jpg`, "photo/01.webp", 1600, 80],
  [`${FRIM}/IMG_20241230_145807.jpg`, "photo/02.webp", 1600, 80],
  [`${FRIM}/IMG_6612.jpg`, "photo/03.webp", 1600, 80],
  [`${FRIM}/20241020_221248 (1).jpg`, "photo/04.webp", 1600, 80],
  [`${FRIM}/IMG-20241125-WA0009 (1).jpg`, "photo/05.webp", 1600, 80],
  [`${FRIM}/IMG-20250601-WA0014.jpg`, "photo/06.webp", 1600, 80],
  // About portrait — designed collage cut-out (paper + blue scribbles)
  [`${DESKTOP}/WhatsApp Image 2026-08-31 at 7.16.04 PM.jpeg`, "about-portrait.webp", 1100, 72],
];

const VIDEOS = [[`${FRIM}/Scene.mp4`, "video/scene.mp4"]];

const manifest = {};

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function run() {
  let ok = 0, skip = 0;
  for (const [src, rel, width, quality] of IMAGES) {
    const dest = path.join(OUT, rel);
    if (!(await exists(src))) { console.warn("skip (missing):", src); skip++; continue; }
    await fs.mkdir(path.dirname(dest), { recursive: true });
    try {
      const img = sharp(src, { limitInputPixels: false, failOn: "none" }).rotate();
      const meta = await img.metadata();
      const pipeline = img.resize({ width, withoutEnlargement: true }).webp({ quality });
      const info = await pipeline.toFile(dest);
      const key = rel.replace(/^work\//, "").replace(/\.webp$/, "");
      manifest[rel] = { w: info.width, h: info.height };
      manifest[key] = { w: info.width, h: info.height };
      console.log(`ok  ${rel}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB  (src ${meta.width}x${meta.height})`);
      ok++;
    } catch (e) {
      console.error("FAIL:", src, e.message);
      skip++;
    }
  }
  for (const [src, rel] of VIDEOS) {
    const dest = path.join(OUT, rel);
    if (!(await exists(src))) { console.warn("skip (missing):", src); skip++; continue; }
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(src, dest);
    console.log("ok  copied", rel);
    ok++;
  }
  await fs.writeFile(path.join(OUT, "work/manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(`\nDone. ${ok} processed, ${skip} skipped.`);
}

run().catch((e) => { console.error(e); process.exit(1); });
