interface GradientOrbProps {
  className?: string;
  /** Brand tint. */
  tone?: "blue" | "coral" | "blend";
  /** Diameter in px. */
  size?: number;
  /** Peak opacity (0-1). */
  intensity?: number;
}

const TONE: Record<NonNullable<GradientOrbProps["tone"]>, string> = {
  blue: "rgba(1,69,132,VAR)",
  coral: "rgba(254,167,129,VAR)",
  blend: "rgba(77,159,224,VAR)",
};

/**
 * Luminous radial gradient orb, the brand's ambient hero/section glow.
 * Decorative only. Pair with <Parallax> for scroll-responsive drift.
 */
export default function GradientOrb({
  className = "",
  tone = "blue",
  size = 520,
  intensity = 0.5,
}: GradientOrbProps) {
  const core = TONE[tone].replace("VAR", String(intensity));
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[80px] ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${core} 0%, transparent 70%)`,
      }}
    />
  );
}
