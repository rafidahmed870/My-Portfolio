"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Dock from "@/components/Dock";
import SOCIAL_LINKS from "@/data/social-links";

const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function DockNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop social dock */}
      <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 md:block">
        <Dock
          items={SOCIAL_LINKS.map((link) => ({
            icon: link.icon,
            label: link.label,
            className: "!bg-transparent !shadow-none",
            onClick: () => openLink(link.url),
          }))}
          position="right"
          theme="dark"
          baseItemSize={108}
          magnification={160}
          panelHeight={140}
          gap={24}
          roundness={1}
          distance={340}
          showLabels
          showBadges={false}
          showIndicators={false}
          tiles
          className="shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
        />
      </div>

      {/* Mobile social links button */}
      <div className="fixed bottom-5 right-5 z-50 md:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Open social links"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#121218]/90 text-white shadow-[0_8px_24px_rgba(0,0,0,0.42)] backdrop-blur-xl transition hover:border-primary/60 hover:text-primary"
        >
          <ArrowUpRight className="h-5 w-5" strokeWidth={2.2} />
        </button>

        {mobileOpen && (
          <div className="absolute bottom-16 right-0 flex w-[190px] flex-col gap-2 rounded-2xl border border-white/10 bg-[#121218]/90 p-2 shadow-[0_18px_42px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 transition hover:border-primary/60 hover:text-primary"
              >
                <span className="flex items-center gap-2">
                  {link.icon}
                  <span>{link.label}</span>
                </span>
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
