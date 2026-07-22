import type { Icon } from "@phosphor-icons/react";

/**
 * Branded "cover" visual for an industry card. A dark gradient scene with a
 * glowing duotone sector icon, a ghosted large icon motif, a brand orb, and a
 * dot-grid. No stock photography, consistent with the site's product-UI style.
 */
export default function IndustryVisual({ icon: Icon, index = 0 }: { icon: Icon; index?: number }) {
  const orbClass = index % 2 === 0 ? "top-[-40px] right-[-30px]" : "bottom-[-40px] left-[-30px]";
  return (
    <div
      aria-hidden="true"
      className="relative h-[152px] overflow-hidden"
      style={{ background: "linear-gradient(150deg, #0D1426 0%, #070D1A 100%)" }}
    >
      {/* dot grid */}
      <span
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(77,159,224,0.10) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* brand orb */}
      <span
        className={`absolute w-[220px] h-[220px] rounded-full blur-[60px] ${orbClass}`}
        style={{ background: "radial-gradient(circle, rgba(1,69,132,0.55) 0%, transparent 70%)" }}
      />
      {/* coral accent */}
      <span
        className="absolute bottom-[-50px] right-[24%] w-[130px] h-[130px] rounded-full blur-[55px]"
        style={{ background: "radial-gradient(circle, rgba(254,167,129,0.16) 0%, transparent 70%)" }}
      />
      {/* ghosted large sector motif */}
      <span className="absolute -right-5 -bottom-7 opacity-[0.07]">
        <Icon size={150} weight="fill" color="#4D9FE0" />
      </span>
      {/* focal icon tile */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span
          className="inline-flex items-center justify-center w-[68px] h-[68px] rounded-2xl"
          style={{
            background: "rgba(1,69,132,0.28)",
            border: "1px solid rgba(77,159,224,0.4)",
            boxShadow: "0 0 32px rgba(77,159,224,0.28), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <Icon size={34} weight="duotone" color="#4D9FE0" />
        </span>
      </span>
    </div>
  );
}
