import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "40px",
          background: "linear-gradient(135deg, #120f1b 0%, #09090d 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "3px solid rgba(139,92,246,0.4)",
        }}
      >
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          }}
        />
        <span
          style={{
            fontSize: "110px",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#8b5cf6",
            fontFamily: "serif",
            lineHeight: 1,
            letterSpacing: "-0.05em",
          }}
        >
          R
        </span>
      </div>
    ),
    { ...size },
  );
}
