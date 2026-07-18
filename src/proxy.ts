import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Site-wide coming-soon gate. Set COMING_SOON_MODE=false in the environment
// once the rebuilt site is ready to go live — no code change needed.
const COMING_SOON = process.env.COMING_SOON_MODE !== "false";

export function proxy(request: NextRequest) {
  if (!COMING_SOON) return NextResponse.next();

  const { pathname } = request.nextUrl;
  if (pathname === "/coming-soon") return NextResponse.next();

  return NextResponse.rewrite(new URL("/coming-soon", request.url));
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml|opengraph-image).*)",
  ],
};
