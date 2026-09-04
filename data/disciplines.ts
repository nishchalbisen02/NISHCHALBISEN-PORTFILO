export type DisciplineId = "tech" | "ai" | "design" | "film";

export type Discipline = {
  id: DisciplineId;
  index: string;
  title: string;
  label: string;
  href: string;
  line: string;
  blurb: string;
  capabilities: string[];
  /** informs the section's visual treatment — see components/discipline */
  visualLanguage: string;
};

export const disciplines: Discipline[] = [
  {
    id: "tech",
    index: "01",
    title: "Technology",
    label: "Tech",
    href: "/tech",
    line: "Digital products, built.",
    blurb:
      "Web design and development, frontend engineering, UI implementation, e-commerce, admin panels and product interfaces.",
    capabilities: [
      "Web Design & Development",
      "Frontend Engineering",
      "Responsive Websites",
      "E-commerce",
      "Admin Panels",
      "Digital Products",
      "UI Implementation",
      "Product Interfaces",
    ],
    visualLanguage: "grid / interface",
  },
  {
    id: "ai",
    index: "02",
    title: "Artificial Intelligence",
    label: "AI",
    href: "/ai",
    line: "AI as a medium, not a menu.",
    blurb:
      "AI as part of the creative and technical workflow — product development, visual creation, AI-assisted design, automation, agents, and AI + business solutions.",
    capabilities: [
      "AI Product Development",
      "AI Visual Creation",
      "AI-assisted Design",
      "AI Automation",
      "AI Agents",
      "AI-powered Workflows",
      "AI Experimentation",
      "AI + Business Solutions",
    ],
    visualLanguage: "experimental / abstract",
  },
  {
    id: "design",
    index: "03",
    title: "Design",
    label: "Design",
    href: "/design",
    line: "Brands and systems that hold.",
    blurb:
      "Brand identity, graphic design, social and advertising creative, UI/UX, visual systems, digital branding and art direction.",
    capabilities: [
      "Brand Identity",
      "Graphic Design",
      "Social Campaigns",
      "Advertising Creative",
      "UI/UX",
      "Visual Systems",
      "Digital Branding",
      "Art Direction",
    ],
    visualLanguage: "typography / branding",
  },
  {
    id: "film",
    index: "04",
    title: "Film + Photography",
    label: "Film",
    href: "/film",
    line: "Stories, shot.",
    blurb:
      "Film, commercials, video production, photography, cinematic visuals, visual storytelling and creative direction.",
    capabilities: [
      "Film",
      "Commercials",
      "Video Production",
      "Photography",
      "Cinematic Visuals",
      "Visual Storytelling",
      "Creative Direction",
    ],
    visualLanguage: "cinematic / fullscreen",
  },
];

export const disciplineById = Object.fromEntries(
  disciplines.map((d) => [d.id, d])
) as Record<DisciplineId, Discipline>;
