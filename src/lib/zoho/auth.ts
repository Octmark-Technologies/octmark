/**
 * Zoho OAuth 2.0 token manager + HTTP helper (shared by CRM and Desk).
 *
 * Pattern: a long-lived refresh token (env) is exchanged for short-lived
 * access tokens (~1 hour) at request time. Access tokens are cached in module
 * memory and refreshed ~5 minutes early. All Zoho domains are data-center
 * specific, this project targets the Zoho India DC (accounts.zoho.in,
 * www.zohoapis.in, desk.zoho.in), configured via env.
 *
 * Env is read lazily inside functions (never at module scope) so Next.js reads
 * it at runtime rather than bundling it at build time.
 */

/** Thrown when required Zoho env vars are absent (treated as "not configured"). */
export class ZohoConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ZohoConfigError";
  }
}

/** Thrown when Zoho returns a non-OK response. */
export class ZohoApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public body: string,
    public retryable: boolean
  ) {
    super(message);
    this.name = "ZohoApiError";
  }
}

/** Thrown for network/timeout failures (always retryable). */
export class ZohoNetworkError extends Error {
  retryable = true;
  constructor(message: string) {
    super(message);
    this.name = "ZohoNetworkError";
  }
}

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new ZohoConfigError(`Missing required env var: ${name}`);
  return value;
}

/** True when all shared OAuth env vars are present. Used for graceful degradation. */
export function isZohoConfigured(): boolean {
  return Boolean(
    process.env.ZOHO_ACCOUNTS_DOMAIN &&
      process.env.ZOHO_API_DOMAIN &&
      process.env.ZOHO_CLIENT_ID &&
      process.env.ZOHO_CLIENT_SECRET &&
      process.env.ZOHO_REFRESH_TOKEN
  );
}

// ── Access-token cache ──────────────────────────────────────────────
let cachedToken: { token: string; expiresAt: number } | null = null;
const REFRESH_SKEW_MS = 5 * 60 * 1000; // refresh 5 min early

/** Returns a valid access token, refreshing via the refresh token if needed. */
export async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + REFRESH_SKEW_MS) {
    return cachedToken.token;
  }

  const accountsDomain = requireEnv("ZOHO_ACCOUNTS_DOMAIN");
  const params = new URLSearchParams({
    refresh_token: requireEnv("ZOHO_REFRESH_TOKEN"),
    client_id: requireEnv("ZOHO_CLIENT_ID"),
    client_secret: requireEnv("ZOHO_CLIENT_SECRET"),
    grant_type: "refresh_token",
  });

  let res: Response;
  try {
    res = await rawFetch(
      `${accountsDomain}/oauth/v2/token?${params.toString()}`,
      { method: "POST" },
      10_000
    );
  } catch (err) {
    throw new ZohoNetworkError(`Token refresh failed: ${(err as Error).message}`);
  }

  const text = await res.text();
  if (!res.ok) {
    throw new ZohoApiError(
      "Token refresh returned an error",
      res.status,
      text,
      res.status === 429 || res.status >= 500
    );
  }

  const json = JSON.parse(text) as { access_token?: string; expires_in?: number; error?: string };
  if (!json.access_token) {
    // Zoho returns 200 with an `error` field for some failures (e.g. invalid refresh token)
    throw new ZohoApiError(`Token refresh error: ${json.error ?? "no access_token"}`, 200, text, false);
  }

  cachedToken = {
    token: json.access_token,
    expiresAt: Date.now() + (json.expires_in ?? 3600) * 1000,
  };
  return cachedToken.token;
}

/** Clears the cached token (used after a 401). Exported for tests. */
export function clearTokenCache(): void {
  cachedToken = null;
}

/** fetch with an AbortController timeout, translating aborts to ZohoNetworkError. */
async function rawFetch(url: string, init: RequestInit, timeoutMs: number): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } catch (err) {
    if ((err as Error).name === "AbortError") {
      throw new ZohoNetworkError(`Request timed out after ${timeoutMs}ms`);
    }
    throw new ZohoNetworkError((err as Error).message);
  } finally {
    clearTimeout(timer);
  }
}

interface ZohoFetchOptions {
  timeoutMs?: number;
  /** Extra headers (e.g. Desk orgId). Authorization is added automatically. */
  headers?: Record<string, string>;
}

/**
 * Authenticated Zoho request. Adds the OAuth header, applies a timeout, and
 * retries once on 401 (token expired mid-flight) with a fresh token.
 * Returns the raw Response, callers parse and decide on status codes.
 */
export async function zohoFetch(
  url: string,
  init: RequestInit = {},
  opts: ZohoFetchOptions = {}
): Promise<Response> {
  const { timeoutMs = 10_000, headers = {} } = opts;

  const buildHeaders = (token: string): Record<string, string> => ({
    ...headers,
    Authorization: `Zoho-oauthtoken ${token}`,
  });

  let token = await getAccessToken();
  let res = await rawFetch(url, { ...init, headers: buildHeaders(token) }, timeoutMs);

  if (res.status === 401) {
    clearTokenCache();
    token = await getAccessToken();
    res = await rawFetch(url, { ...init, headers: buildHeaders(token) }, timeoutMs);
  }

  return res;
}

/**
 * Runs an async operation with limited retries on transient failures
 * (network/timeout, 429, 5xx). Non-retryable errors throw immediately.
 * Lightweight: small attempt counts + jittered backoff, sized for low traffic.
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  opts: { retries: number; baseMs?: number } = { retries: 1 }
): Promise<T> {
  const { retries, baseMs = 400 } = opts;
  let lastErr: unknown;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      const retryable =
        err instanceof ZohoNetworkError ||
        (err instanceof ZohoApiError && err.retryable);
      if (!retryable || attempt === retries) break;
      const delay = baseMs * 2 ** attempt + Math.random() * 200;
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw lastErr;
}
