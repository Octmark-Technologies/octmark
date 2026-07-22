import { NextResponse } from "next/server";
import { isZohoConfigured } from "@/lib/zoho/auth";

/**
 * Lightweight deploy smoke-check. Reports whether integrations are configured
 * WITHOUT exposing any secret values, safe to call from monitoring.
 */
export async function GET() {
  return NextResponse.json({
    status: "ok",
    zoho: isZohoConfigured(),
    turnstile: Boolean(process.env.TURNSTILE_SECRET_KEY),
    timestamp: new Date().toISOString(),
  });
}
