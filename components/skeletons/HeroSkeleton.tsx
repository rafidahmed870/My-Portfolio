import { Skeleton } from "@/components/ui/skeleton";

export default function HeroSkeleton() {
  return (
    <div className="relative isolate min-h-screen overflow-clip text-white">
      {/* Background image placeholder */}
      <div className="pointer-events-none fixed inset-0 z-0 flex h-[100svh] w-full items-center justify-center">
        <Skeleton className="relative mt-6 h-[55vh] min-h-[360px] w-full bg-white/[0.06] sm:h-[65vh] sm:w-[75vw] sm:max-w-[520px] md:mt-0 md:h-[72vh] md:min-h-[440px] md:w-[32vw] md:min-w-[280px] rounded-none" />
      </div>

      <div className="relative z-10">
        <div className="relative flex min-h-[100svh] flex-col justify-end pb-10 pt-10 sm:pb-12 md:pb-14">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[72%] bg-gradient-to-b from-transparent via-black/60 to-black/95 md:h-[58%]" />

          <div className="relative z-10 mx-auto w-full max-w-[1400px] -translate-y-32 px-3 text-center sm:-translate-y-12 md:translate-y-0 md:px-0">
            {/* Subtitle line */}
            <Skeleton className="mx-auto mb-3 h-3 w-48 bg-white/[0.08]" />

            {/* Main name heading */}
            <div className="flex flex-col items-center gap-3">
              <Skeleton className="h-[clamp(3.5rem,12vw,9rem)] w-[80%] max-w-[700px] bg-white/[0.08] rounded-lg lg:h-[12rem]" />
            </div>

            {/* Divider + subtitle */}
            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
              <Skeleton className="h-px w-8 bg-white/20 sm:w-16" />
              <Skeleton className="h-4 w-[360px] max-w-[80vw] bg-white/[0.08]" />
              <Skeleton className="h-px w-8 bg-white/20 sm:w-16" />
            </div>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-7">
              <Skeleton className="h-10 w-40 rounded-full bg-white/[0.08]" />
              <Skeleton className="h-10 w-44 rounded-full bg-white/[0.08]" />
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="relative z-10 bg-card">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={`flex min-h-[124px] flex-col justify-center border border-white/10 px-3 py-4 sm:min-h-[136px] sm:px-5 md:min-h-[152px] md:px-6 ${
                  i % 2 === 1 ? "border-l-0" : ""
                } ${i >= 2 ? "border-t-0" : ""} md:border-t md:border-l-0 ${i === 0 ? "md:border-l" : ""}`}
              >
                <Skeleton className="h-10 w-16 bg-white/[0.08]" />
                <Skeleton className="mt-2 h-3 w-24 bg-white/[0.06]" />
                <Skeleton className="mt-3 h-3 w-32 bg-white/[0.05]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
