import type { NextConfig } from "next";

// Static export for GitHub Pages — no server, so headers()/redirects()/proxy
// aren't available here (see next.config.full.ts.bak for the CSP + security
// headers and the /platform→/products redirect to restore once this moves
// to a Node-capable host, e.g. Vercel).
//
// TEMPORARY: basePath/assetPrefix make asset URLs resolve correctly at
// https://octmark-technologies.github.io/octmark/ before the custom domain
// is live. Once octmarktechnologies.com DNS + the Pages custom domain are
// set up, GitHub Pages serves from the domain root, so remove both lines
// below (the root-relative paths already used elsewhere assume no basePath).
const basePath = "/octmark";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: `${basePath}/`,
  // next/image doesn't auto-prefix basePath onto string src when
  // images.unoptimized is true, so page.tsx reads this to prefix manually.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
