import { Skeleton } from "@/components/ui/skeleton";

export default function ContactSkeleton() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-10 max-w-2xl">
          <Skeleton className="h-3 w-16 bg-white/[0.07]" />
          <Skeleton className="mt-4 h-[clamp(2.4rem,4vw,3.75rem)] w-[85%] max-w-[480px] bg-white/[0.09]" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.2fr]">
          {/* Left — Lanyard placeholder */}
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute inset-8 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative h-[420px] w-full sm:h-[500px] flex items-center justify-center">
              {/* Lanyard strap */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <Skeleton className="h-24 w-3 rounded-full bg-white/[0.08]" />
                {/* Metal clasp */}
                <Skeleton className="h-4 w-6 rounded bg-white/[0.1]" />
                {/* Strap continues */}
                <Skeleton className="h-20 w-3 rounded-full bg-white/[0.08]" />
              </div>
              {/* Card body */}
              <Skeleton className="mt-32 h-[260px] w-[180px] rounded-2xl bg-white/[0.08]" />
            </div>
          </div>

          {/* Right — contact card */}
          <div className="space-y-6">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:p-7">
              <Skeleton className="h-3 w-[70%] bg-white/[0.06]" />

              {/* Contact option rows */}
              <div className="mt-6 space-y-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <Skeleton className="h-11 w-11 rounded-full bg-white/[0.09] shrink-0" />
                    <div className="flex-1 min-w-0">
                      <Skeleton className="h-3 w-12 bg-white/[0.06]" />
                      <Skeleton className="mt-1.5 h-4 w-36 bg-white/[0.08]" />
                    </div>
                    <Skeleton className="h-4 w-4 bg-white/[0.06] shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Social chips */}
            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-9 w-28 rounded-full bg-white/[0.07]" />
              ))}
            </div>

            {/* CTA button */}
            <Skeleton className="h-10 w-44 rounded-full bg-white/[0.08]" />
          </div>
        </div>
      </div>
    </section>
  );
}
