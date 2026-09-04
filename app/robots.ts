import type { MetadataRoute } from "next";

const BASE = "https://nishchalbisen.com"; // TODO: set real domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
