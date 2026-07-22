const NODES = [
  {
    label: "Attract",
    tip: "We map your best acquisition channels against lead quality, not just volume, then build the system that scales what actually works.",
    link: "/how-we-work#attract",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "Engage",
    tip: "We build the CRM architecture and sequences that move qualified interest into active pipeline.",
    link: "/how-we-work#engage",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Convert",
    tip: "We close the gap between intent and decision, pipeline velocity, sales enablement, objection infrastructure.",
    link: "/how-we-work#convert",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    label: "Deliver",
    tip: "We build the delivery operations that fulfil the promise. Most growth agencies don't come this far.",
    link: "/how-we-work#deliver",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    label: "Retain",
    tip: "We build lifetime value architecture, health scoring, renewal triggers, referral systems, after the first win.",
    link: "/how-we-work#retain",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function GrowthViz() {
  return (
    <div
      className="rounded-xl overflow-hidden border border-white/10"
      style={{
        background: "#0D1426",
        boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      {/* Browser chrome bar */}
      <div
        className="h-8 flex items-center px-3 gap-3 border-b border-white/[0.07]"
        style={{ background: "#162035" }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[rgba(231,76,60,0.80)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[rgba(243,156,18,0.80)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[rgba(46,204,113,0.80)]" />
        </div>
        <span className="font-mono text-[10px] text-[#4E5A6C] tracking-[0.04em] flex-1 text-center uppercase">
          app.octmarktechnologies.com / growth-dashboard
        </span>
      </div>

      {/* GrowthViz nodes */}
      <div className="p-8 flex justify-center" style={{ background: "#0A1020" }}>
        <div className="flex flex-col items-center relative">
          {NODES.map((node, i) => (
            <div key={node.label}>
              <div
                className="group relative flex items-center w-[200px] h-11 rounded-lg px-3.5 gap-2.5 cursor-default
                  transition-all duration-150
                  hover:border-[rgba(77,159,224,0.78)] hover:bg-[rgba(1,69,132,0.15)]"
                style={{
                  background: "rgba(1,69,132,0.09)",
                  border: "1px solid rgba(77,159,224,0.50)",
                  boxShadow: "0 0 10px rgba(77,159,224,0.22), 0 0 0 1px rgba(77,159,224,0.10)",
                }}
                tabIndex={0}
                role="button"
                aria-label={`${node.label}, hover for detail`}
              >
                <span className="text-[#4D9FE0] flex-shrink-0">{node.icon}</span>
                <span className="font-mono text-[11px] uppercase text-[#EEF1F7] tracking-[0.06em] flex-1">
                  {node.label}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#4D9FE0]"
                  style={{ boxShadow: "0 0 6px rgba(77,159,224,0.9)" }}
                />

                {/* Tooltip */}
                <div
                  className="absolute left-[calc(100%+16px)] top-1/2 -translate-y-1/2 w-44
                    rounded-lg p-2.5 z-10 pointer-events-none
                    opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-150"
                  style={{
                    background: "#0D1426",
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.50)",
                  }}
                  role="tooltip"
                >
                  <p className="text-[13px] text-[#EEF1F7] leading-relaxed mb-1">{node.tip}</p>
                  <span className="text-[12px] text-[#4D9FE0]">See {node.label} →</span>
                </div>
              </div>

              {i < NODES.length - 1 && (
                <div
                  className="w-px h-7 mx-auto"
                  style={{
                    background: "rgba(77,159,224,0.38)",
                    boxShadow: "0 0 4px rgba(77,159,224,0.25)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
