interface DotGridProps {
  className?: string;
  /** Dot colour. Defaults to a faint light dot (for dark canvases). */
  color?: string;
  /** Grid cell size in px. */
  size?: number;
  /** Dot radius in px. */
  dot?: number;
}

/**
 * Brand dot-grid texture motif. Absolutely positioned decorative layer,
 * the same pattern used across the dark sections, extracted for reuse.
 */
export default function DotGrid({
  className = "",
  color = "rgba(255,255,255,0.025)",
  size = 32,
  dot = 1,
}: DotGridProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at ${dot}px ${dot}px, ${color} ${dot}px, transparent 0)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}
