import type { MetadataRoute } from "next";

// Full-site version (services, products, results, articles, etc.) is saved
// for restoration once the rest of the site is pushed — see
// scratchpad/sitemap.full.ts.bak.
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://octmarktechnologies.com";

// Required for output: "export" — this version of Next.js needs metadata
// route files to opt in to static rendering explicitly.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
  ];
}
