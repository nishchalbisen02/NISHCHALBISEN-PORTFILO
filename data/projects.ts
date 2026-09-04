import type { DisciplineId } from "./disciplines";

export type ProjectStatus =
  | "professional"
  | "freelance"
  | "self-initiated"
  | "study"
  | "concept";

export type Project = {
  title: string;
  slug: string;
  /** primary discipline — decides where it lives */
  discipline: DisciplineId;
  /** cross-listed disciplines (project also shows on these pages) */
  disciplines?: DisciplineId[];
  categories: string[];
  client: string;
  year: string;
  role: string[];
  /** one line, used on cards */
  description: string;
  featured: boolean;
  /** has a /work/[slug] case study page */
  caseStudy: boolean;
  status: ProjectStatus;
  /** completed as part of the IBT professional experience */
  experience?: "ibt";
  /** card layout hint */
  layout?: "full" | "wide" | "tall" | "standard";

  cover?: string;
  images?: string[];
  video?: string;
  poster?: string;
  liveUrl?: string;

  /** true = no real visuals yet, render a labelled placeholder (never fake imagery) */
  placeholder?: boolean;

  // ---- case-study fields — any left empty are hidden on the page ----
  overview?: string;
  challenge?: string;
  myRole?: string;
  whatIDid?: string[];
  process?: string[];
  services?: string[];
  tools?: string[];
  result?: string;
};

export const projects: Project[] = [
  // ==========================================================
  // IBT — PROFESSIONAL EXPERIENCE
  // ==========================================================
  {
    title: "Kopal International School",
    slug: "kopal-institute",
    discipline: "tech",
    disciplines: ["tech", "design"],
    categories: ["Web Design", "Development", "Education"],
    client: "Kopal International School",
    year: "2026", // TODO: confirm
    role: ["Web Design", "Frontend", "Build"],
    description:
      "Complete website — design and build — for an international school in Bhopal.",
    featured: true,
    caseStudy: true,
    status: "professional",
    experience: "ibt",
    layout: "full",
    cover: "/work/kopal-cover.webp",
    images: [
      "/work/kopal-01.webp",
      "/work/kopal-02.webp",
      "/work/kopal-03.webp",
      "/work/kopal-04.webp",
    ],
    services: ["Web Design", "Frontend Development", "Responsive Build"],
    tools: ["Next.js", "React", "CSS", "Figma"], // TODO: confirm stack
    overview:
      "A full website project delivered at IBT for Kopal International School — information architecture, visual design and a responsive front-end build.",
  },
  {
    title: "The Smile Diary",
    slug: "the-smile-diary",
    discipline: "tech",
    disciplines: ["tech", "design"],
    categories: ["Web Design", "Development", "Healthcare"],
    client: "The Smile Diary",
    year: "2026", // TODO: confirm
    role: ["Web Design", "Frontend"],
    description:
      "Website for a dental clinic — calm, trustworthy, and built to convert enquiries.",
    featured: true,
    caseStudy: true,
    status: "professional",
    experience: "ibt",
    layout: "wide",
    cover: "/work/smilediary-cover.webp",
    images: ["/work/smilediary-01.webp", "/work/smilediary-02.webp"],
    liveUrl: "https://thesmilediary.in", // TODO: confirm
    services: ["Web Design", "Frontend Development"],
  },
  {
    title: "Radiora — Skincare",
    slug: "radiora-skincare",
    discipline: "design",
    disciplines: ["design", "tech"],
    categories: ["Branding", "Digital Creative", "E-commerce"],
    client: "Radiora",
    year: "2026", // TODO: confirm
    role: ["Brand", "Digital Design", "Art Direction"],
    description:
      "Visual and digital work for a skincare brand — editorial, product-led, made for commerce.",
    featured: true,
    caseStudy: true,
    status: "professional",
    experience: "ibt",
    layout: "wide",
    cover: "/work/radiora-cover.webp",
    images: [
      "/work/radiora-01.webp",
      "/work/radiora-02.webp",
      "/work/radiora-03.webp",
    ],
    services: ["Brand Visuals", "Digital Creative", "E-commerce Design"],
  },
  {
    title: "FlowAI",
    slug: "flowai",
    discipline: "ai",
    disciplines: ["ai", "tech", "film"],
    categories: ["AI Product", "AI Video", "Creative Workflows"],
    client: "FlowAI",
    year: "2026", // TODO: confirm
    role: ["AI Product", "Creative Technology"],
    description:
      "An AI product for generating commercial video and creative — AI used as the medium, end to end.",
    featured: true,
    caseStudy: true,
    status: "professional",
    experience: "ibt",
    layout: "full",
    cover: "/work/flowai-cover.webp",
    images: [
      "/work/flowai-01.webp",
      "/work/flowai-02.webp",
      "/work/flowai-03.webp",
      "/work/flowai-04.webp",
    ],
    liveUrl: "https://github.com/nishchalbisen02/flowai", // TODO: confirm
    services: ["AI Product", "AI Video Workflows", "Web"],
    tools: ["AI Video", "AI Image", "Next.js"],
  },
  {
    title: "Club ZAZA",
    slug: "club-zaza",
    discipline: "design",
    disciplines: ["design", "film"],
    categories: ["Branding", "Campaign", "Advertising"],
    client: "Club ZAZA",
    year: "2026", // TODO: confirm
    role: ["Branding", "Creative", "Art Direction"],
    description:
      "Branding, campaign and creative visual work for a nightlife brand.",
    featured: true,
    caseStudy: true,
    status: "professional",
    experience: "ibt",
    layout: "tall",
    placeholder: true,
    services: ["Brand Identity", "Campaign", "Advertising Creative"],
  },
  {
    title: "Virat Electronics",
    slug: "virat-electronics",
    discipline: "film",
    disciplines: ["film", "design"],
    categories: ["Commercial", "Video", "Advertising"],
    client: "Virat Electronics",
    year: "2026", // TODO: confirm
    role: ["Direction", "Production", "Edit"],
    description:
      "A commercial advertising film for a consumer-electronics retailer.",
    featured: true,
    caseStudy: true,
    status: "professional",
    experience: "ibt",
    layout: "full",
    placeholder: true,
    services: ["Creative Direction", "Video Production", "Post"],
  },
  {
    title: "IBT — Brand & Digital",
    slug: "ibt-brand-digital",
    discipline: "design",
    disciplines: ["tech", "ai", "design", "film"],
    categories: ["Brand", "Marketing", "AI", "Web"],
    client: "Innovative Business Technologies",
    year: "2026", // TODO: confirm
    role: ["Brand", "Web", "Marketing", "AI"],
    description:
      "Ongoing work on IBT's own website, identity, marketing creative, AI solutions, social campaigns and visual communication.",
    featured: false,
    caseStudy: true,
    status: "professional",
    experience: "ibt",
    layout: "wide",
    placeholder: true,
    services: ["Brand", "Web", "Marketing", "AI Solutions", "Social"],
  },

  // ==========================================================
  // FREELANCE
  // ==========================================================
  {
    title: "Sukhmani Constructions",
    slug: "sukhmani-constructions",
    discipline: "design",
    disciplines: ["design", "tech"],
    categories: ["Identity", "Web", "Real Estate"],
    client: "Sukhmani Constructions, Bhopal",
    year: "2025",
    role: ["Identity", "Website"],
    description:
      "Identity and website for a Bhopal construction firm — a house-and-'S' mark and a plain-spoken promise.",
    featured: false,
    caseStudy: true,
    status: "freelance",
    layout: "standard",
    cover: "/work/sukhmani-logo.webp",
    images: ["/work/sukhmani-logo.webp", "/work/sukhmani.webp"],
    liveUrl: "https://sukhmaniconstruction.com", // TODO: confirm
  },
  {
    title: "Urvaram",
    slug: "urvaram",
    discipline: "design",
    disciplines: ["design", "tech"],
    categories: ["Brand", "Web", "Real Estate"],
    client: "Urvaram",
    year: "2025",
    role: ["Wordmark", "Identity", "Website"],
    description: "Wordmark, identity and brand website for a real-estate venture.",
    featured: false,
    caseStudy: true,
    status: "freelance",
    layout: "standard",
    cover: "/work/urvaram-logo.webp",
    images: ["/work/urvaram-logo.webp"],
    liveUrl: "https://urvaram.com", // TODO: confirm
  },
  {
    title: "Haathi Homes",
    slug: "haathi-homes",
    discipline: "tech",
    disciplines: ["tech", "design"],
    categories: ["Product", "Web", "Real Estate"],
    client: "Haathi Homes",
    year: "2025",
    role: ["Brand", "Product", "Frontend"],
    description:
      "Brand and an interactive plot-viewer product for a real-estate developer.",
    featured: false,
    caseStudy: true,
    status: "freelance",
    layout: "wide",
    cover: "/work/haathi-poster.webp",
    images: ["/work/haathi-poster.webp", "/work/haathi-homes.webp"],
    liveUrl: "https://github.com/nishchalbisen02/livemap-realesate", // TODO: confirm
  },
  {
    title: "AIshura",
    slug: "aishura",
    discipline: "tech",
    disciplines: ["tech", "ai"],
    categories: ["Web Platform", "UI/UX", "Frontend"],
    client: "AIshura",
    year: "2025",
    role: ["Frontend", "UI/UX"],
    description:
      "Frontend and UI/UX for a career-assistant web platform — responsive, user-focused interfaces.",
    featured: false,
    caseStudy: true,
    status: "freelance",
    layout: "standard",
    placeholder: true,
    liveUrl: "https://aishura.com", // TODO: confirm
    services: ["Frontend Development", "UI/UX"],
  },
  {
    title: "Just One Bite",
    slug: "just-one-bite",
    discipline: "design",
    categories: ["Logo", "F&B", "Packaging"],
    client: "Just One Bite",
    year: "2026",
    role: ["Logo", "Packaging Direction"],
    description:
      "Logo and packaging direction for an F&B concept — friendly, hungry, legible at thumbnail size.",
    featured: false,
    caseStudy: false,
    status: "freelance",
    layout: "standard",
    cover: "/work/just-one-bite.webp",
    images: ["/work/just-one-bite.webp"],
  },

  // ==========================================================
  // DESIGN / FILM — selected independent & studio work
  // ==========================================================
  {
    title: "The Dance Webseries Audition",
    slug: "dance-webseries-audition",
    discipline: "film",
    disciplines: ["film", "design"],
    categories: ["Campaign", "Key Art", "Poster System"],
    client: "The Great Natraj Dance Company",
    year: "2026",
    role: ["Art Direction", "Poster System", "Typography"],
    description:
      "A flexible poster and key-art system for an all-India dance-webseries audition tour.",
    featured: false,
    caseStudy: true,
    status: "self-initiated",
    layout: "full",
    cover: "/work/bhopal.webp",
    images: [
      "/work/bhopal.webp",
      "/work/sikkim.webp",
      "/work/tejas.webp",
      "/work/tejas-2.webp",
    ],
  },
  {
    title: "Design Tomorrow Brand",
    slug: "design-tomorrow-brand",
    discipline: "design",
    categories: ["Identity", "Guidelines", "Packaging"],
    client: "FRIMFLIX — studio identity",
    year: "2026",
    role: ["Brand Identity", "Wordmark", "Guidelines"],
    description:
      "A studio identity system — wordmark, palette, type pairing, brand elements and applications.",
    featured: false,
    caseStudy: true,
    status: "self-initiated",
    layout: "standard",
    cover: "/work/design-tomorrow.webp",
    images: ["/work/design-tomorrow.webp"],
  },
  {
    title: "dT — Personal Mark",
    slug: "dt-personal-mark",
    discipline: "design",
    categories: ["Logo", "Monogram", "Print"],
    client: "Self-initiated",
    year: "2026",
    role: ["Logo", "Monogram", "Print"],
    description:
      "A monogram pressure-tested across letterpress, thermal receipt, embroidery and ID.",
    featured: false,
    caseStudy: true,
    status: "self-initiated",
    layout: "standard",
    cover: "/work/dt-idcard.webp",
    images: [
      "/work/dt-idcard.webp",
      "/work/dt-mark.webp",
      "/work/dt-letterpress.webp",
      "/work/dt-thermal.webp",
    ],
  },
  {
    title: "Build Human Brands",
    slug: "build-human-brands",
    discipline: "design",
    categories: ["Poster", "Type", "Image-making"],
    client: "FRIMFLIX",
    year: "2026",
    role: ["Poster", "Type"],
    description:
      "A studio manifesto poster — acid display type torn across a halftone portrait.",
    featured: false,
    caseStudy: false,
    status: "self-initiated",
    layout: "tall",
    cover: "/work/build-human-brands.webp",
    images: ["/work/build-human-brands.webp"],
  },
  {
    title: "Brand's Morning",
    slug: "brands-morning",
    discipline: "design",
    categories: ["Poster Series", "Layout"],
    client: "FRIMFLIX",
    year: "2026",
    role: ["Poster Series"],
    description:
      "A poster pair for a studio campaign about mornings, cities and starting again.",
    featured: false,
    caseStudy: false,
    status: "self-initiated",
    layout: "standard",
    cover: "/work/morning-01.webp",
    images: ["/work/morning-01.webp", "/work/morning-02.webp"],
  },
  {
    title: "Fashion Photography — Editorial",
    slug: "fashion-editorial",
    discipline: "design",
    disciplines: ["design", "film"],
    categories: ["Editorial", "Layout", "Art Direction"],
    client: "Editorial study",
    year: "2025",
    role: ["Layout", "Typesetting"],
    description:
      "A newspaper-format editorial spread — masthead, drop caps, two-column grid, full-bleed image blocks.",
    featured: false,
    caseStudy: false,
    status: "study",
    layout: "tall",
    cover: "/work/fashion-editorial.webp",
    images: ["/work/fashion-editorial.webp", "/work/fashion-moodboard.webp"],
  },
  {
    title: "Niss — Portfolio Concept",
    slug: "niss-concept",
    discipline: "tech",
    disciplines: ["tech", "design"],
    categories: ["UI", "Product", "Concept"],
    client: "Concept",
    year: "2025",
    role: ["UI", "Layout"],
    description:
      "A dark / light portfolio-site concept for a product-designer persona — one accent, hard grid.",
    featured: false,
    caseStudy: false,
    status: "concept",
    layout: "standard",
    cover: "/work/niss-ui.webp",
    images: ["/work/niss-ui.webp"],
  },
  {
    title: "Travel Key Art — Ladakh / Udaipur",
    slug: "travel-key-art",
    discipline: "design",
    disciplines: ["design", "film"],
    categories: ["Poster", "Travel", "Type"],
    client: "Self-initiated",
    year: "2025",
    role: ["Poster", "Type"],
    description:
      "Travel key-art experiments — big place-names, torn photography and a single hot accent.",
    featured: false,
    caseStudy: false,
    status: "self-initiated",
    layout: "standard",
    cover: "/work/udaipur.webp",
    images: ["/work/udaipur.webp", "/work/ladakh.webp"],
  },
];

// ---- derived helpers ----

export const featuredProjects = projects.filter((p) => p.featured);

export const ibtProjects = projects.filter((p) => p.experience === "ibt");

export function projectsByDiscipline(id: DisciplineId): Project[] {
  return projects.filter(
    (p) => p.discipline === id || p.disciplines?.includes(id)
  );
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const caseStudySlugs = projects
  .filter((p) => p.caseStudy)
  .map((p) => p.slug);

/** photography set for the Film page — real frames, shown as a gallery */
export const photography: string[] = [
  "/photo/01.webp",
  "/photo/02.webp",
  "/photo/03.webp",
  "/photo/04.webp",
  "/photo/05.webp",
  "/photo/06.webp",
];
