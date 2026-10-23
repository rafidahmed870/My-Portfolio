import Image from "next/image";
import rafidImage from "@/assets/rafid.png";
import BlurText from "@/components/BlurText";

const stats = [
  { value: "02", label: "Active Years", detail: "2 years of experience" },
  { value: "07", label: "Live Projects", detail: "Total projects delivered" },
  { value: "04", label: "Global Clients", detail: "Happy customers worldwide" },
  {
    value: "24/7",
    label: "Problem Solver",
    detail: "Always finding better solutions",
  },
];

export default function Hero() {
  return (
    <main className="relative isolate min-h-screen overflow-clip text-white selection:bg-primary/30">
      <section id="home" className="relative isolate overflow-hidden">
        <div className="pointer-events-none fixed inset-0 z-0 flex h-[100svh] w-full items-center justify-center">
          <div className="relative mt-6 h-[55vh] min-h-[360px] w-full overflow-hidden sm:h-[65vh] sm:w-[75vw] sm:max-w-[520px] md:mt-0 md:h-[72vh] md:min-h-[440px] md:w-[32vw] md:min-w-[280px]">
            <Image
              src={rafidImage}
              alt="Rafid Ahmed — Full-Stack Developer"
              fill
              priority
              sizes="(max-width: 639px) 100vw, (max-width: 767px) 75vw, 520px"
              className="object-cover object-center grayscale-[0.25] contrast-[1.05] opacity-90"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-[48vh] bg-gradient-to-b from-transparent via-black/65 to-black" />
        </div>

        <div className="relative z-10">
          <div className="relative flex min-h-[100svh] flex-col justify-end pb-10 pt-10 sm:pb-12 md:pb-14">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[72%] bg-gradient-to-b from-transparent via-black/60 to-black/95 md:h-[58%]" />
            <div className="pointer-events-none absolute left-5 top-[35%] hidden -translate-y-1/2 flex-col gap-5 text-[10px] uppercase tracking-[0.24em] text-white/75 md:flex lg:left-10">
              <div className="flex items-center gap-3 text-primary">
                <span>01 /</span>
                <span>Presence</span>
              </div>

              <div className="flex h-5 items-center gap-3">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary">+</span>
              </div>

              <div className="space-y-2 leading-relaxed text-white/70">
                <p>Engineering</p>
                <p>Web Development</p>
                <p>Product Building</p>
              </div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1400px] -translate-y-32 px-3 text-center sm:-translate-y-12 md:translate-y-0 md:px-0">
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/60 sm:tracking-[0.3em] md:text-xs">
                A human perspective on technology
              </p>

              <BlurText
                text="Rafid Ahmed"
                className="w-full justify-center text-center font-instrument-serif text-[clamp(3.5rem,12vw,9rem)] leading-[0.8] tracking-[-0.06em] text-secondary lg:text-[12rem]"
                delay={120}
                animateBy="words"
                direction="top"
                effect="blur"
                blur={8}
                distance={28}
                trigger="load"
                color="var(--secondary)"
              />

              <div className="mx-auto mt-5 flex items-center justify-center gap-3 text-white/80 sm:gap-4">
                <div className="h-px w-8 shrink-0 bg-white/30 sm:w-16" />

                <p className="max-w-[540px] text-[12px] leading-relaxed sm:text-[15px] md:text-[17px]">
                  I build modern web applications, scalable SaaS products, and
                  reliable backend systems.
                </p>

                <div className="h-px w-8 shrink-0 bg-white/30 sm:w-16" />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-7 sm:gap-4">
                <a
                  href="#projects"
                  className="rounded-full border border-white/20 bg-white/[0.06] px-5 py-3 text-[10px] uppercase tracking-[0.12em] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition hover:border-primary/60 hover:bg-primary/10 sm:px-6 sm:tracking-[0.18em]"
                >
                  Explore my work ↓
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-primary/35 bg-primary/10 px-5 py-3 text-[10px] uppercase tracking-[0.12em] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition hover:border-primary/70 hover:bg-primary/20 sm:px-6 sm:tracking-[0.18em]"
                >
                  Start a conversation →
                </a>
              </div>
            </div>
          </div>

          <section className="relative z-10 bg-card">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex min-h-[124px] min-w-0 flex-col justify-center border border-white/10 px-3 py-4 sm:min-h-[136px] sm:px-5 md:min-h-[152px] md:px-6 ${
                    index % 2 === 1 ? "border-l-0" : ""
                  } ${
                    index >= 2 ? "border-t-0" : ""
                  } md:border-t md:border-l-0 ${index === 0 ? "md:border-l" : ""}`}
                >
                  <p className="font-[family-name:var(--font-instrument-serif)] text-[2.25rem] leading-none tracking-[-0.055em] text-secondary sm:text-[2.75rem] md:text-[3rem]">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-primary sm:text-[11px]">
                    {stat.label}
                  </p>

                  <p className="mt-3 max-w-[240px] text-[10px] leading-relaxed text-white/60 sm:text-[11px]">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
