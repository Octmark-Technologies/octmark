import type { NextConfig } from "next";

// Static export for GitHub Pages — no server, so headers()/redirects()/proxy
// aren't available here (see next.config.full.ts.bak for the CSP + security
// headers and the /platform→/products redirect to restore once this moves
// to a Node-capable host, e.g. Vercel).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
