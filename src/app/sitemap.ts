import type { MetadataRoute } from "next";

// Simplified for now — only the coming-soon page is pushed. Expand into
// the full route list (services, products, results, articles, etc.) once
// the rest of the site is added back.
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://octmarktechnologies.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    {
      url: `${BASE_URL}/digital-marketing-for-realtors`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
