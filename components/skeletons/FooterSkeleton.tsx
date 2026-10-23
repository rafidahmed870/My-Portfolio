import { Skeleton } from "@/components/ui/skeleton";

export default function FooterSkeleton() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Decorative SVG line */}
        <Skeleton className="h-6 w-full rounded-none bg-white/[0.05]" />

        <div className="flex flex-col items-center pt-6">
          {/* Avatar */}
          <Skeleton className="h-20 w-20 rounded-full bg-white/[0.08]" />

          {/* TechText name — desktop */}
          <Skeleton className="mt-3 hidden h-[120px] w-full max-w-[760px] bg-white/[0.06] md:block" />

          {/* Name — mobile */}
          <div className="mt-3 flex flex-col items-center gap-2 md:hidden">
            <Skeleton className="h-8 w-24 bg-white/[0.08]" />
            <Skeleton className="h-3 w-16 bg-white/[0.06]" />
          </div>

          {/* Nav links */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-16 bg-white/[0.06]" />
            ))}
          </div>

          {/* Social icons */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-10 rounded-xl bg-white/[0.07]" />
            ))}
          </div>

          {/* Copyright */}
          <div className="mt-6 w-full border-t border-white/10 pt-4 text-center">
            <Skeleton className="mx-auto h-4 w-56 bg-white/[0.06]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
