"use client";

import { useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Bookings?: {
      inlineEmbed: (opts: { url: string; parent: string; height: string }) => void;
    };
  }
}

const PORTAL_URL = "https://octmark.zohobookings.in/portal-embed#/472360000000034003";

interface BookingEmbedProps {
  /** "card": default light card, for use on light-canvas pages.
   *  "glow": elevated white card with a brand glow ring, for dark hero canvases. */
  frame?: "card" | "glow";
  /** Widget height, passed straight through to Bookings.inlineEmbed. */
  height?: string;
}

export default function BookingEmbed({ frame = "card", height = "600px" }: BookingEmbedProps) {
  const [ready, setReady] = useState(false);

  function mount() {
    window.Bookings?.inlineEmbed({
      url: PORTAL_URL,
      parent: "#inline-container",
      height,
    });
    setReady(true);
  }

  const wrapperClass =
    frame === "glow"
      ? "relative rounded-2xl bg-white p-2 md:p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_-20px_rgba(1,69,132,0.55)]"
      : "rounded-xl border border-[#E0E5EC] bg-white p-2 md:p-3 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)]";

  return (
    <div className={wrapperClass}>
      {frame === "glow" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-70 blur-xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(1,69,132,0.9), rgba(254,167,129,0.6))",
          }}
        />
      )}
      {!ready && (
        <div className="flex items-center justify-center rounded-[8px] bg-[#F8F9FC]" style={{ height }}>
          <div className="flex flex-col items-center gap-3">
            <span className="h-6 w-6 animate-spin rounded-full border-2 border-[#E0E5EC] border-t-[#014584]" />
            <span className="font-sans text-[13px] text-[#9AA3B2]">Loading available times…</span>
          </div>
        </div>
      )}
      <div
        id="inline-container"
        className="overflow-hidden rounded-[8px]"
        style={ready ? undefined : { position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0 }}
      />
      <Script
        src="https://bookings.nimbuspop.com/assets/embed.js"
        strategy="afterInteractive"
        onReady={mount}
      />
    </div>
  );
}
