const COUNTRIES = ["US", "CA", "GB", "AE", "IN"] as const;
export type CountryCode = (typeof COUNTRIES)[number];

interface FlagIconProps {
  country: CountryCode;
  size?: number;
  className?: string;
}

/** Circular, clipped country flag chip. Simplified but recognisable at small sizes. */
export default function FlagIcon({ country, size = 44, className = "" }: FlagIconProps) {
  const clipId = `flag-clip-${country}`;

  return (
    <span
      className={`relative inline-block shrink-0 rounded-full ring-1 ring-black/[0.06] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.08)] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 60 60" width={size} height={size} aria-hidden="true">
        <defs>
          <clipPath id={clipId}>
            <circle cx="30" cy="30" r="30" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>{renderFlag(country)}</g>
      </svg>
    </span>
  );
}

function renderFlag(country: CountryCode) {
  switch (country) {
    case "US":
      return (
        <>
          <rect width="60" height="60" fill="#FFFFFF" />
          {Array.from({ length: 13 }).map((_, i) => (
            <rect key={i} x={0} y={i * (60 / 13)} width="60" height={60 / 13} fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"} />
          ))}
          <rect x="0" y="0" width="26" height="28" fill="#3C3B6E" />
          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={4 + col * 4.6} cy={4 + row * 6.2} r="1" fill="#FFFFFF" />
            ))
          )}
        </>
      );
    case "CA":
      return (
        <>
          <rect width="60" height="60" fill="#FFFFFF" />
          <rect x="0" y="0" width="15" height="60" fill="#FF0000" />
          <rect x="45" y="0" width="15" height="60" fill="#FF0000" />
          <path
            d="M30 14 L32.5 22 L39 19 L36.5 26.5 L44 27 L37.5 31 L41 38 L33.5 36 L34 44 L30 38.5 L26 44 L26.5 36 L19 38 L22.5 31 L16 27 L23.5 26.5 L21 19 L27.5 22 Z"
            fill="#FF0000"
          />
        </>
      );
    case "GB":
      return (
        <>
          <rect width="60" height="60" fill="#00247D" />
          <line x1="0" y1="0" x2="60" y2="60" stroke="#FFFFFF" strokeWidth="12" />
          <line x1="60" y1="0" x2="0" y2="60" stroke="#FFFFFF" strokeWidth="12" />
          <line x1="0" y1="0" x2="60" y2="60" stroke="#CF142B" strokeWidth="5" />
          <line x1="60" y1="0" x2="0" y2="60" stroke="#CF142B" strokeWidth="5" />
          <rect x="0" y="24" width="60" height="12" fill="#FFFFFF" />
          <rect x="24" y="0" width="12" height="60" fill="#FFFFFF" />
          <rect x="0" y="27" width="60" height="6" fill="#CF142B" />
          <rect x="27" y="0" width="6" height="60" fill="#CF142B" />
        </>
      );
    case "AE":
      return (
        <>
          <rect x="0" y="0" width="60" height="20" fill="#00732F" />
          <rect x="0" y="20" width="60" height="20" fill="#FFFFFF" />
          <rect x="0" y="40" width="60" height="20" fill="#000000" />
          <rect x="0" y="0" width="18" height="60" fill="#FF0000" />
        </>
      );
    case "IN":
      return (
        <>
          <rect x="0" y="0" width="60" height="20" fill="#FF9933" />
          <rect x="0" y="20" width="60" height="20" fill="#FFFFFF" />
          <rect x="0" y="40" width="60" height="20" fill="#138808" />
          <circle cx="30" cy="30" r="7" fill="none" stroke="#000080" strokeWidth="1.2" />
          <circle cx="30" cy="30" r="1.2" fill="#000080" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x2 = 30 + 7 * Math.cos(angle);
            const y2 = 30 + 7 * Math.sin(angle);
            return <line key={i} x1="30" y1="30" x2={x2} y2={y2} stroke="#000080" strokeWidth="0.6" />;
          })}
        </>
      );
    default:
      return null;
  }
}
