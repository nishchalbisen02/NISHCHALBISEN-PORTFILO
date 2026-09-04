import type { MetadataRoute } from "next";
import { caseStudySlugs } from "@/data/projects";

const BASE = "https://nishchalbisen.com"; // TODO: set real domain

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/tech", "/ai", "/design", "/film", "/about", "/contact"];
  const now = new Date();

  return [
    ...routes.map((r) => ({
      url: `${BASE}${r}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r === "" ? 1 : 0.7,
    })),
    ...caseStudySlugs.map((slug) => ({
      url: `${BASE}/work/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
