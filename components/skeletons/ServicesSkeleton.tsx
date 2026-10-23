import { Skeleton } from "@/components/ui/skeleton";

export default function ServicesSkeleton() {
  return (
    <section className="relative overflow-hidden bg-background px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-10 max-w-3xl">
          <Skeleton className="mb-4 h-3 w-20 bg-white/[0.07]" />
          <Skeleton className="h-[clamp(2.8rem,4vw,5rem)] w-[85%] max-w-[520px] bg-white/[0.09]" />
        </div>

        {/* Cards grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-[1.6rem] border border-white/10 bg-[rgba(17,17,20,0.96)] p-5"
            >
              {/* Icon + top spacer */}
              <div className="mb-8 flex items-center justify-between">
                <Skeleton className="h-12 w-12 rounded-xl bg-white/[0.08]" />
              </div>
              {/* Title */}
              <Skeleton className="mb-4 h-7 w-[70%] bg-white/[0.09]" />
              {/* Description */}
              <Skeleton className="h-4 w-full bg-white/[0.06]" />
              <Skeleton className="mt-2 h-4 w-[80%] bg-white/[0.06]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
