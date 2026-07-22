interface EscalationStripProps {
  heading: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  email?: string;
  phone?: string;
  /** "dark-mid" = #16161C (support), "dark-hero" = #070D1A (start footer CTA) */
  variant?: "dark-mid" | "dark-hero";
}

export default function EscalationStrip({
  heading,
  body,
  ctaLabel,
  ctaHref,
  email,
  phone,
  variant = "dark-mid",
}: EscalationStripProps) {
  const bg = variant === "dark-hero" ? "#070D1A" : "#16161C";

  return (
    <section
      aria-label="Direct contact"
      style={{ background: bg }}
      className="border-t border-[rgba(255,255,255,0.06)]"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-[20px] text-[#EEF1F7] leading-[1.3]">{heading}</p>
          {body && (
            <p className="text-[14px] text-[#8A96A8] font-sans mt-1 max-w-[420px]">{body}</p>
          )}
          {(email || phone) && (
            <div className="flex flex-wrap gap-5 mt-4">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-[14px] text-[#EEF1F7] font-sans hover:text-[#4D9FE0] transition-colors duration-150"
                >
                  {email}
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="text-[14px] text-[#EEF1F7] font-sans hover:text-[#4D9FE0] transition-colors duration-150"
                >
                  {phone}
                </a>
              )}
            </div>
          )}
        </div>
        <a
          href={ctaHref}
          target={ctaHref.startsWith("http") ? "_blank" : undefined}
          rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-flex items-center h-11 px-6 flex-shrink-0
            border border-[#FEA781] text-[#FEA781] rounded-lg
            font-display text-[14px] tracking-[0.03em]
            transition-all duration-150
            hover:bg-[#FEA781] hover:text-[#070D1A]"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
