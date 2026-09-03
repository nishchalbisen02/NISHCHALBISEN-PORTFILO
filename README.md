# Nishchal Bisen — Portfolio

Next.js 15 (App Router) · TypeScript · plain CSS. Bold editorial / Swiss.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
```

```bash
npm run build && npm run start    # production
```

> Don't run `npm run build` while `npm run dev` is live — it can corrupt the dev
> cache. If the dev server throws a webpack module error, stop it, delete `.next`,
> and start again.

## Editing content

Everything text-based lives in two files — no component edits needed:

| What | File |
| --- | --- |
| Name, role, tagline, bio, email, socials, capabilities, clients, tools | `lib/site.ts` |
| Projects (title, client, year, category, blurb, images, tags) | `lib/projects.ts` |

Items marked `// TODO` in `lib/site.ts` are guesses — start year, Behance /
LinkedIn URLs.

## Images

Source files are pulled from the Desktop, compressed to WebP, and written into
`public/` by:

```bash
npm run assets
```

Edit the `IMAGES` list in `scripts/process-assets.mjs` to add/replace/re-crop.
`public/work/manifest.json` (auto-generated) holds each image's dimensions.

Not yet used: `public/video/scene.mp4` (copied, ready for a showreel section).
`0615.mov` was skipped — 61 MB, needs compressing to MP4/WebM first (no ffmpeg
was available here).

## Structure

```
app/            layout, globals.css, page (single-page site)
components/      Nav, Hero, Marquee, Work (filter + lightbox), About, Contact, Footer, Reveal
lib/            site.ts, projects.ts
public/work/     compressed project images + manifest.json
public/photo/    photography strip
scripts/         process-assets.mjs
```
