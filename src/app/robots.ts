import type { MetadataRoute } from "next";

// Site-wide crawling is still disallowed (left over from the coming-soon
// phase). /digital-marketing-for-realtors is allowed by name, as a deliberate
// single-page exception for SEO. Expand into a full allow-list once the
// rest of the site is ready to be indexed.
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://octmarktechnologies.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/digital-marketing-for-realtors",
      disallow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
