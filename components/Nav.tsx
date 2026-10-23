"use client";

import NAV_ITEMS from "@/data/nav-items";
import { useState } from "react";




export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-3 sm:px-6">
        <div className="mx-auto max-w-6xl pointer-events-auto">
          <nav className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-[#0d0d10]/80 px-3 py-2.5 shadow-[0_18px_48px_rgba(0,0,0,0.45)] ring-1 ring-white/5 backdrop-blur-2xl sm:px-4 lg:px-5">
            <a
              href="/#home"
              className="flex flex-col items-start justify-center leading-none text-white transition hover:text-[color:var(--secondary)] md:items-start cursor-pointer"
            >
              <span className="font-instrument-serif text-[1.9rem] leading-[0.8] tracking-[-0.06em] text-[color:var(--secondary)] sm:text-[2.1rem]">
                Rafid
              </span>
              <span className="ml-0.5 text-[8px] font-medium uppercase tracking-[0.38em] text-white/70 sm:text-[9px]">
                Ahmed
              </span>
            </a>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition hover:border-white/20 hover:text-white"
              >
                <span className="flex flex-col gap-1.5">
                  <span className="block h-px w-4 rounded-full bg-current" />
                  <span className="block h-px w-4 rounded-full bg-current" />
                  <span className="block h-px w-4 rounded-full bg-current" />
                </span>
              </button>
            </div>

            <div className="hidden items-center gap-6 text-[10px] font-medium uppercase tracking-[0.24em] text-white/70 md:flex">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center gap-2.5 text-white/70 transition duration-200 hover:text-primary"
                  >
                    <Icon
                      className="h-4 w-4 transition-colors duration-200 group-hover:text-primary"
                      strokeWidth={2.2}
                    />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              className="hidden rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-[8px] font-medium uppercase tracking-[0.18em] text-white transition hover:border-[color:var(--primary)]/60 hover:bg-[color:var(--primary)]/10 hover:text-[color:var(--secondary)] sm:px-3.5 sm:text-[9px] md:inline-flex"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </header>

      {isOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[80%] max-w-[300px] transform border-l border-white/10 bg-[#0d0d10]/95 p-5 shadow-2xl backdrop-blur-2xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex flex-col leading-none text-white">
            <span className="font-[family-name:var(--font-instrument-serif)] text-[1.8rem] leading-[0.8] tracking-[-0.06em] text-[color:var(--secondary)]">
              Rafid
            </span>
            <span className="ml-0.5 text-[8px] font-medium uppercase tracking-[0.38em] text-white/70">
              Ahmed
            </span>
          </div>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/80 transition hover:border-white/20 hover:text-white"
          >
            ✕
          </button>
        </div>

        <nav className="mt-6 flex flex-col">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="group">
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/80 transition hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <Icon
                      className="h-4 w-4 text-white/70 transition group-hover:text-primary"
                      strokeWidth={2.2}
                    />
                    <span>{item.label}</span>
                  </span>
                </a>
                <div className="h-px w-full bg-white/8" />
              </div>
            );
          })}
        </nav>

        <div className="mt-6 pt-5">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition hover:border-[color:var(--primary)]/60 hover:bg-[color:var(--primary)]/10 hover:text-[color:var(--secondary)]"
          >
            Book a Call
          </a>
        </div>
      </aside>
    </>
  );
}
