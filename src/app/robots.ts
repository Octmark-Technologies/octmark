import type { MetadataRoute } from "next";

// Full-site version (allow list + per-section rules) is saved for restoration
// once the rest of the site is pushed — see scratchpad/robots.full.ts.bak.
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://octmarktechnologies.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
