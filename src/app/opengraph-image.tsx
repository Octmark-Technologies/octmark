import { ImageResponse } from "next/og";

// Default site-wide Open Graph / social share image (1200×630).
// Generated programmatically so no static asset is required. Pages without their
// own opengraph-image inherit this one. Twitter cards fall back to og:image.

export const alt = "Octmark, Growth Operations Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070D1A",
          backgroundImage:
            "radial-gradient(ellipse 900px 500px at 80% 0%, rgba(1,69,132,0.35) 0%, transparent 60%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 700,
            color: "#EEF1F7",
            letterSpacing: "0.04em",
          }}
        >
          OCTMARK
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#EEF1F7",
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Growth Operations Partner
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              color: "#8A96A8",
              maxWidth: 820,
            }}
          >
            Build the systems that compound. Fewer guesses. More growth.
          </div>
        </div>
        <div style={{ display: "flex", height: 8, width: 160, background: "#014584" }} />
      </div>
    ),
    { ...size }
  );
}
