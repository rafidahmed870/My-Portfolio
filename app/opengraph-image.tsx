import { ImageResponse } from "next/og";
import { SITE_TITLE, BASE_URL } from "@/lib/constants";

export const alt = SITE_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px 72px",
          background: "linear-gradient(135deg, #0d0b14 0%, #09090d 60%, #120f1b 100%)",
          position: "relative",
          overflow: "hidden",
          fontFamily: "serif",
        }}
      >
        {/* Purple glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)",
          }}
        />
        {/* Purple glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-60px",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)",
          }}
        />

        {/* Top label */}
        <div
          style={{
            position: "absolute",
            top: "52px",
            left: "72px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#8b5cf6",
            }}
          />
          <span
            style={{
              fontSize: "13px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {BASE_URL.replace("https://", "")}
          </span>
        </div>

        {/* Thin horizontal rule */}
        <div
          style={{
            position: "absolute",
            top: "108px",
            left: "72px",
            right: "72px",
            height: "1px",
            background: "rgba(255,255,255,0.08)",
          }}
        />

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Tag line */}
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#8b5cf6",
            }}
          >
            Full-Stack Developer · SaaS Builder
          </span>

          {/* Name */}
          <div
            style={{
              fontSize: "96px",
              fontWeight: 400,
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              color: "#f3e9dc",
              fontStyle: "italic",
            }}
          >
            Rafid Ahmed
          </div>

          {/* Description */}
          <p
            style={{
              marginTop: "8px",
              fontSize: "22px",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.55)",
              maxWidth: "680px",
              fontFamily: "sans-serif",
              fontStyle: "normal",
            }}
          >
            Building modern web apps, scalable SaaS products, and reliable
            backend systems from Dhaka, Bangladesh.
          </p>

          {/* Bottom row */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            {["React", "Next.js", "TypeScript", "Node.js", "AWS"].map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(139,92,246,0.9)",
                  padding: "6px 14px",
                  border: "1px solid rgba(139,92,246,0.3)",
                  borderRadius: "999px",
                  fontFamily: "sans-serif",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
