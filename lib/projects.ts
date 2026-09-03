import manifest from "@/public/work/manifest.json";

export type Category = "Campaign" | "Identity" | "Editorial" | "Product";

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: Category;
  role: string[];
  blurb: string;
  cover: string;
  gallery: string[];
  tags: string[];
}

type Dim = { w: number; h: number };
const dims = manifest as Record<string, Dim>;

/** aspect-ratio string for a /public path, falling back to 4/5 */
export function ratio(src: string): string {
  const key = src.replace(/^\//, "");
  const d = dims[key] ?? dims[key.replace(/\.webp$/, "")];
  return d ? `${d.w} / ${d.h}` : "4 / 5";
}

export const projects: Project[] = [
  {
    slug: "dance-webseries-audition",
    title: "The Dance Webseries Audition",
    client: "The Great Natraj Dance Company",
    year: "2026",
    category: "Campaign",
    role: ["Art Direction", "Poster System", "Typography"],
    blurb:
      "An all-India audition tour for a dance webseries. A flexible poster system — city editions (Bhopal, Sikkim) and judge reveals — sharing liquid-chrome display type, heavy condensed headlines and a fixed contact lockup.",
    cover: "/work/bhopal.webp",
    gallery: ["/work/bhopal.webp", "/work/sikkim.webp", "/work/tejas.webp", "/work/tejas-2.webp"],
    tags: ["Campaign", "Poster", "Type"],
  },
  {
    slug: "design-tomorrow-brand",
    title: "Design Tomorrow Brand",
    client: "FRIMFLIX — Studio Identity",
    year: "2026",
    category: "Identity",
    role: ["Brand Identity", "Wordmark", "Guidelines"],
    blurb:
      "Identity system for a creative studio: a hand-drawn wordmark, a purple / cream / black palette, a Space Grotesk pairing, brand elements and applications across can, business card and tote.",
    cover: "/work/design-tomorrow.webp",
    gallery: ["/work/design-tomorrow.webp"],
    tags: ["Identity", "Guidelines", "Packaging"],
  },
  {
    slug: "dt-personal-mark",
    title: "dT — Personal Mark",
    client: "Self-initiated",
    year: "2026",
    category: "Identity",
    role: ["Logo", "Monogram", "Print"],
    blurb:
      "A monogram for my own practice, pressure-tested across letterpress, thermal receipt, embroidery and ID cards before locking the final construction.",
    cover: "/work/dt-idcard.webp",
    gallery: ["/work/dt-idcard.webp", "/work/dt-mark.webp", "/work/dt-letterpress.webp", "/work/dt-thermal.webp"],
    tags: ["Logo", "Monogram", "Print"],
  },
  {
    slug: "build-human-brands",
    title: "Build Human Brands",
    client: "FRIMFLIX",
    year: "2026",
    category: "Campaign",
    role: ["Poster", "Type", "Image-making"],
    blurb:
      "A studio manifesto poster — acid display type torn across a halftone portrait. Built for feed and for print at A2.",
    cover: "/work/build-human-brands.webp",
    gallery: ["/work/build-human-brands.webp"],
    tags: ["Poster", "Type"],
  },
  {
    slug: "brands-morning",
    title: "Brand's Morning — Poster Series",
    client: "FRIMFLIX",
    year: "2026",
    category: "Campaign",
    role: ["Poster Series", "Layout"],
    blurb:
      "A poster pair for a studio campaign about mornings, cities and starting again — condensed grotesque headlines on a soft daylight grid.",
    cover: "/work/morning-01.webp",
    gallery: ["/work/morning-01.webp", "/work/morning-02.webp"],
    tags: ["Poster", "Series"],
  },
  {
    slug: "sukhmani-constructions",
    title: "Sukhmani Constructions Bhopal",
    client: "Sukhmani Constructions",
    year: "2025",
    category: "Identity",
    role: ["Logo", "Identity", "Tagline"],
    blurb:
      "Identity for a Bhopal construction firm — a house-and-‘S’ mark and a plain-spoken promise: Pehle Kaam. Phir Daam. No Advance.",
    cover: "/work/sukhmani-logo.webp",
    gallery: ["/work/sukhmani-logo.webp", "/work/sukhmani.webp"],
    tags: ["Logo", "Identity"],
  },
  {
    slug: "haathi-homes",
    title: "Haathi Homes",
    client: "Haathi Homes",
    year: "2025",
    category: "Identity",
    role: ["Brand", "Launch Key Art"],
    blurb:
      "Brand and launch key art for a real-estate plot-viewer product — a confident mark and a poster built to sit on hoardings.",
    cover: "/work/haathi-poster.webp",
    gallery: ["/work/haathi-poster.webp", "/work/haathi-homes.webp"],
    tags: ["Brand", "Key Art"],
  },
  {
    slug: "just-one-bite",
    title: "Just One Bite",
    client: "Just One Bite",
    year: "2026",
    category: "Identity",
    role: ["Logo", "Packaging Direction"],
    blurb: "Logo and packaging direction for an F&B concept — friendly, hungry, and legible at thumbnail size.",
    cover: "/work/just-one-bite.webp",
    gallery: ["/work/just-one-bite.webp"],
    tags: ["Logo", "F&B"],
  },
  {
    slug: "urvaram",
    title: "Urvaram",
    client: "Urvaram",
    year: "2025",
    category: "Identity",
    role: ["Wordmark", "Identity"],
    blurb: "A wordmark and identity for an agri / wellness brand rooted in the idea of fertile ground.",
    cover: "/work/urvaram-logo.webp",
    gallery: ["/work/urvaram-logo.webp"],
    tags: ["Wordmark"],
  },
  {
    slug: "fashion-photography-editorial",
    title: "Fashion Photography — Editorial Spread",
    client: "Editorial study",
    year: "2025",
    category: "Editorial",
    role: ["Layout", "Typesetting"],
    blurb:
      "A newspaper-format editorial: a serif masthead, drop caps, justified two-column body and full-bleed image blocks.",
    cover: "/work/fashion-editorial.webp",
    gallery: ["/work/fashion-editorial.webp"],
    tags: ["Editorial", "Layout"],
  },
  {
    slug: "fashion-moodboard",
    title: "Fashion — Moodboard & Art Direction",
    client: "Art-direction study",
    year: "2025",
    category: "Editorial",
    role: ["Art Direction", "Moodboard"],
    blurb: "A collage moodboard setting tone, palette and styling references for a fashion shoot.",
    cover: "/work/fashion-moodboard.webp",
    gallery: ["/work/fashion-moodboard.webp"],
    tags: ["Art Direction", "Collage"],
  },
  {
    slug: "niss-portfolio-concept",
    title: "Niss — Portfolio Concept",
    client: "Concept",
    year: "2025",
    category: "Product",
    role: ["UI", "Layout"],
    blurb:
      "A dark / light portfolio-site concept for a product-designer persona — one accent, a hard grid and a rounded container language.",
    cover: "/work/niss-ui.webp",
    gallery: ["/work/niss-ui.webp"],
    tags: ["UI", "Concept"],
  },
  {
    slug: "travel-key-art",
    title: "Ladakh / Udaipur — Travel Key Art",
    client: "Self-initiated",
    year: "2025",
    category: "Campaign",
    role: ["Poster", "Type"],
    blurb: "Travel key art experiments — big place-names, torn photography and a single hot accent.",
    cover: "/work/udaipur.webp",
    gallery: ["/work/udaipur.webp", "/work/ladakh.webp"],
    tags: ["Poster", "Travel"],
  },
];

export const photos: string[] = [
  "/photo/01.webp",
  "/photo/02.webp",
  "/photo/03.webp",
  "/photo/04.webp",
  "/photo/05.webp",
  "/photo/06.webp",
];

export const categories: Array<"All" | Category> = ["All", "Campaign", "Identity", "Editorial", "Product"];
