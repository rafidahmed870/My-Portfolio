import { Skeleton } from "@/components/ui/skeleton";

export default function WorkSkeleton() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-background px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 max-w-3xl">
          <Skeleton className="mb-4 h-3 w-12 bg-white/[0.07]" />
          <Skeleton className="h-[clamp(2.8rem,4vw,5rem)] w-[60%] max-w-[400px] bg-white/[0.09]" />
        </div>

        {/* Project cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[1.3rem] border border-white/10 bg-[rgba(17,17,20,0.96)]"
            >
              {/* Project image */}
              <Skeleton className="h-52 w-full rounded-none bg-white/[0.07]" />

              {/* Card body */}
              <div className="p-4">
                {/* Title */}
                <Skeleton className="mb-3 h-8 w-[55%] bg-white/[0.09]" />
                {/* Description */}
                <Skeleton className="h-4 w-full bg-white/[0.06]" />
                <Skeleton className="mt-2 h-4 w-[90%] bg-white/[0.06]" />
                <Skeleton className="mt-2 h-4 w-[70%] bg-white/[0.06]" />
                {/* CTA */}
                <div className="mt-5">
                  <Skeleton className="h-8 w-28 rounded-full bg-white/[0.08]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
