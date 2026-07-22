import type { ReactNode } from "react";

interface BrowserFrameProps {
  children: ReactNode;
  /** Mono URL shown in the chrome bar. */
  url?: string;
  className?: string;
  /** Inner body background. Defaults to the product-dark canvas. */
  bodyClassName?: string;
}

/**
 * Product-UI browser chrome wrapper, the visual language established by
 * GrowthViz. Use to frame any dashboard/product mockup as a "real app".
 */
export default function BrowserFrame({
  children,
  url = "app.octmarktechnologies.com",
  className = "",
  bodyClassName = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-white/10 ${className}`}
      style={{
        background: "#0D1426",
        boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      {/* Chrome bar */}
      <div
        className="h-8 flex items-center px-3 gap-3 border-b border-white/[0.07]"
        style={{ background: "#162035" }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[rgba(231,76,60,0.80)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[rgba(243,156,18,0.80)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[rgba(46,204,113,0.80)]" />
        </div>
        <span className="font-mono text-[10px] text-[#4E5A6C] tracking-[0.04em] flex-1 text-center uppercase truncate">
          {url}
        </span>
      </div>

      {/* Body */}
      <div className={bodyClassName} style={{ background: "#0A1020" }}>
        {children}
      </div>
    </div>
  );
}
