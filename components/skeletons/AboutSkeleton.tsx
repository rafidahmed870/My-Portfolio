import { Skeleton } from "@/components/ui/skeleton";

export default function AboutSkeleton() {
  return (
    <section className="relative overflow-hidden bg-background px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left — image with border rings */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative flex w-full max-w-[420px] items-center justify-center">
              {/* Decorative rings */}
              <div className="absolute inset-4 border border-white/[0.06]" />
              <div className="absolute inset-8 border border-white/[0.06]" />
              <div className="absolute inset-12 border border-white/[0.06]" />
              <div className="absolute inset-16 border border-white/[0.06]" />
              <Skeleton className="h-[280px] w-[280px] rounded-none bg-white/[0.07] sm:h-[320px] sm:w-[320px]" />
            </div>
          </div>

          {/* Right — text content */}
          <div>
            {/* "About Me" label */}
            <Skeleton className="mb-5 h-3 w-20 bg-white/[0.07]" />

            {/* Heading "I am" */}
            <Skeleton className="h-[clamp(3rem,5vw,6rem)] w-24 bg-white/[0.09]" />
            {/* Heading "Rafid Ahmed" italic */}
            <Skeleton className="mt-2 h-[clamp(3rem,5vw,6rem)] w-64 bg-white/[0.09]" />

            {/* Body paragraphs */}
            <div className="mt-7 space-y-3">
              <Skeleton className="h-4 w-full bg-white/[0.06]" />
              <Skeleton className="h-4 w-[90%] bg-white/[0.06]" />
              <Skeleton className="h-4 w-full bg-white/[0.06]" />
              <Skeleton className="h-4 w-[75%] bg-white/[0.06]" />
            </div>

            {/* Stats counters */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border-t border-white/10 pt-4">
                  <Skeleton className="h-10 w-16 bg-white/[0.09]" />
                  <Skeleton className="mt-2 h-3 w-24 bg-white/[0.06]" />
                </div>
              ))}
            </div>

            {/* Skill chips */}
            <div className="mt-8">
              <Skeleton className="mb-3 h-3 w-24 bg-white/[0.06]" />
              <div className="flex flex-wrap gap-3">
                {Array.from({ length: 15 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className="h-9 w-16 rounded-xl bg-white/[0.06]"
                    style={{ width: `${60 + (i % 4) * 14}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
