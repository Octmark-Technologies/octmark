import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Content-Security-Policy.
// - Turnstile requires challenges.cloudflare.com in script/frame/connect.
// - next/font self-hosts fonts → font-src 'self'.
// - 'unsafe-inline' is required for Next's inline bootstrap + Tailwind inline
//   styles (nonce-based CSP is a future hardening step).
// - Dev needs 'unsafe-eval' (HMR) and ws: (live reload).
const csp = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com${isDev ? " 'unsafe-eval'" : ""}`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' data: https:`,
  `font-src 'self' data:`,
  `frame-src https://challenges.cloudflare.com`,
  `connect-src 'self' https://challenges.cloudflare.com${isDev ? " ws:" : ""}`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `frame-ancestors 'none'`,
  ...(isDev ? [] : [`upgrade-insecure-requests`]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // HSTS only matters over HTTPS (production).
  ...(isDev
    ? []
    : [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]),
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    // Products section moved from /platform to /products. Permanent (301) so
    // any old links and indexed URLs pass authority to the new paths.
    return [
      { source: "/platform", destination: "/products", permanent: true },
      { source: "/platform/:slug", destination: "/products/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
