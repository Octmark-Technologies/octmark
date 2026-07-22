/** Shared text helpers for form → Zoho field mapping. */

/**
 * Splits a single "name" field into first/last for Zoho records.
 * Zoho requires a last name; if only one token is given it becomes the last name.
 */
export function splitName(name: string): { firstName: string; lastName: string } {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: "", lastName: "Unknown" };
  if (parts.length === 1) return { firstName: "", lastName: parts[0] };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

/** Caps free-text fields to a safe maximum length before sending to Zoho. */
export function clampText(value: string, max: number): string {
  const trimmed = value.trim();
  return trimmed.length > max ? `${trimmed.slice(0, max)}…` : trimmed;
}
