import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#09090d] px-4 text-white selection:bg-primary/30">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* 404 number */}
        <p className="font-[family-name:var(--font-instrument-serif)] text-[clamp(6rem,20vw,14rem)] leading-none tracking-[-0.06em] text-primary/20 select-none">
          404
        </p>

        {/* Headline */}
        <h1 className="mt-[-1rem] font-[family-name:var(--font-instrument-serif)] text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-[-0.04em] text-[#f3e9dc]">
          Page not found
        </h1>

        {/* Divider */}
        <div className="mt-5 flex items-center gap-3">
          <span className="h-px w-12 bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
          <span className="h-px w-12 bg-white/20" />
        </div>

        {/* Description */}
        <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/60 font-[family-name:var(--font-dm-sans)]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full border border-primary/35 bg-primary/10 px-6 py-3 text-[10px] uppercase tracking-[0.18em] text-[#f3e9dc] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition hover:border-primary/70 hover:bg-primary/20"
          >
            ← Back to home
          </Link>

          <Link
            href="/#contact"
            className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-[10px] uppercase tracking-[0.18em] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition hover:border-primary/40 hover:bg-primary/8 hover:text-white"
          >
            Contact me →
          </Link>
        </div>

        {/* Bottom label */}
        <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-white/30">
          Rafid Ahmed · Studio
        </p>
      </div>
    </main>
  );
}
