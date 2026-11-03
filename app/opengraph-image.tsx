import { ImageResponse } from "next/og";

export const alt = "Nkenfa Brandon — Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#0b1220",
          color: "#edf2ff",
          padding: "60px 72px",
          borderLeft: "12px solid #3154db",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", fontSize: 56, fontWeight: 700 }}>
            nb<span style={{ color: "#91aaff" }}>.</span>
          </div>
          <div style={{ display: "flex", fontSize: 25, color: "#a5b2cc" }}>
            nkenfa.dev
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: "-3px",
            }}
          >
            Nkenfa Brandon
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 38,
              color: "#91aaff",
              marginTop: 12,
            }}
          >
            Full-Stack Software Engineer
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 25,
            color: "#a5b2cc",
            borderTop: "1px solid #293a56",
            paddingTop: 26,
          }}
        >
          React · Next.js · React Native · Node.js · Google Cloud
        </div>
      </div>
    ),
    size
  );
}
