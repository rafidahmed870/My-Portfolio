import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "8px",
          background: "linear-gradient(135deg, #120f1b 0%, #09090d 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1.5px solid rgba(139,92,246,0.5)",
        }}
      >
        <span
          style={{
            fontSize: "20px",
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
