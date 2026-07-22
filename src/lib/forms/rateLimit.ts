/**
 * Lightweight in-memory fixed-window rate limiter.
 *
 * Per the approved plan, V1 deliberately avoids external infrastructure
 * (no Redis). This is best-effort: state lives in a single server instance's
 * memory and resets on cold start / does not coordinate across instances,
 * appropriate for current marketing-form traffic. It raises the cost of abuse
 * without pretending to be a distributed limiter.
 */

interface Bucket {
  count: number;
  resetAt: number; // epoch ms
}

const buckets = new Map<string, Bucket>();

export interface RateLimitResult {
  ok: boolean;
  retryAfterSec: number;
}

/**
 * Records a hit for `key` and reports whether it is within `limit` per
 * `windowMs`. Opportunistically evicts expired buckets to bound memory.
 */
export function rateLimit(
  key: string,
  opts: { limit: number; windowMs: number }
): RateLimitResult {
  const now = Date.now();

  // Opportunistic cleanup (cheap; runs roughly every call under low traffic).
  if (buckets.size > 500) {
    for (const [k, b] of buckets) if (b.resetAt <= now) buckets.delete(k);
  }

  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + opts.windowMs });
    return { ok: true, retryAfterSec: 0 };
  }

  if (bucket.count < opts.limit) {
    bucket.count += 1;
    return { ok: true, retryAfterSec: 0 };
  }

  return { ok: false, retryAfterSec: Math.ceil((bucket.resetAt - now) / 1000) };
}

/** Test/maintenance helper. */
export function resetRateLimits(): void {
  buckets.clear();
}
