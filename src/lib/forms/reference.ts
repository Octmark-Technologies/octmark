/**
 * Customer-facing Octmark ticket reference: OCT-XXXXXX-XX.
 * Kept stable as the public reference even though Zoho Desk assigns its own
 * ticket number internally (decision: keep Octmark format customer-facing).
 */
import { randomInt } from "crypto";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no ambiguous 0/O/1/I

function randomBlock(length: number): string {
  let out = "";
  for (let i = 0; i < length; i++) {
    out += ALPHABET[randomInt(ALPHABET.length)];
  }
  return out;
}

/** Generates a reference like "OCT-7K9QF2-XD". */
export function generateOctReference(): string {
  return `OCT-${randomBlock(6)}-${randomBlock(2)}`;
}
