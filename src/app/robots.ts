import type { MetadataRoute } from "next";

// Simplified for now — only the coming-soon page is pushed, so there's
// nothing else to allow/index yet. Expand into an allow-list once the
// rest of the site (services, products, etc.) is added back.
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://octmarktechnologies.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
