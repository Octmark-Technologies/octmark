import type { MetadataRoute } from "next";

// Full-site version (allow list + per-section rules) is saved for restoration
// once the rest of the site is pushed — see scratchpad/robots.full.ts.bak.
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://octmarktechnologies.com";

// Required for output: "export" — this version of Next.js needs metadata
// route files to opt in to static rendering explicitly.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
