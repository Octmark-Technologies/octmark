import type { Icon } from "@phosphor-icons/react";

interface FeatureIconProps {
  icon: Icon;
  /** Canvas the tile sits on. Controls fill + glow treatment. */
  tone?: "light" | "dark";
  /** Tile size in px. */
  size?: number;
  className?: string;
}

/**
 * Branded icon tile: a duotone Phosphor glyph inside a glassy, gradient-ring
 * tile. Light variant for light cards, dark variant (glowing) for dark canvases.
 */
export default function FeatureIcon({
  icon: Icon,
  tone = "light",
  size = 44,
  className = "",
}: FeatureIconProps) {
  const iconSize = Math.round(size * 0.5);
  const light = tone === "light";

  return (
    <span
      aria-hidden="true"
      className={`relative inline-block shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Gradient ring */}
      <span
        className="absolute inset-0 rounded-[13px]"
        style={{ background: "linear-gradient(135deg, rgba(1,69,132,0.65) 0%, rgba(254,167,129,0.50) 100%)" }}
      />
      {/* Glass inner */}
      <span
        className="absolute inset-[1.5px] rounded-[11.5px] flex items-center justify-center overflow-hidden"
        style={
          light
            ? {
                background: "linear-gradient(160deg, #FFFFFF 0%, #EAF0F8 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.85)",
              }
            : {
                background: "linear-gradient(160deg, #101B33 0%, #0A1020 100%)",
                boxShadow: "0 0 18px rgba(77,159,224,0.22), inset 0 1px 0 rgba(255,255,255,0.06)",
              }
        }
      >
        <Icon size={iconSize} weight="duotone" color={light ? "#014584" : "#4D9FE0"} />
      </span>
    </span>
  );
}
