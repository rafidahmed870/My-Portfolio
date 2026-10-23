import Image from "next/image";
import rafidImage from "@/assets/rafid.png";
import BlurText from "@/components/BlurText";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <div className="relative flex w-full max-w-[420px] items-center justify-center">
              <div className="absolute inset-4 border border-primary/50" />
              <div className="absolute inset-8 border border-primary/50" />
              <div className="absolute inset-12 border border-primary/50" />
              <div className="absolute inset-16 border border-primary/50" />

              <div className="relative h-[280px] w-[280px] overflow-hidden border border-primary/50 bg-[#120f1b] sm:h-[320px] sm:w-[320px]">
                <Image
                  src={rafidImage}
                  alt="Rafid Ahmed"
                  fill
                  priority
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-center grayscale-[0.3] contrast-[1.08]"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.28em] text-primary">
              About Me
            </p>

            <h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(3rem,5vw,6rem)] leading-[0.9] tracking-[-0.05em] text-white">
              <BlurText
                text="I am"
                className="block text-white"
                delay={120}
                animateBy="words"
                direction="top"
                effect="blur"
                blur={8}
                distance={18}
                trigger="view"
                threshold={0.2}
                color="var(--foreground)"
              />
              <BlurText
                text="Rafid Ahmed"
                className="mt-2 block italic text-secondary"
                delay={180}
                animateBy="words"
                direction="top"
                effect="blur"
                blur={8}
                distance={24}
                trigger="view"
                threshold={0.2}
                color="var(--secondary)"
              />
            </h2>

            <div className="mt-7 max-w-[680px] space-y-5 text-[15px] leading-[1.8] text-white/80 sm:text-[18px] lg:text-[20px] font-dm-sans">
              
<p>
  I build modern, responsive, and high-performance web applications
  with clean design and seamless user experiences.
</p>
<p>
  Using modern technologies, I turn ideas into scalable digital
  solutions focused on performance and usability.
</p>

            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: "2+", label: "Active years" },
                { value: "13+", label: "Live Projects" },
                { value: "4+", label: "Global clients" },
              ].map((item) => (
                <div key={item.label} className="border-t border-white/10 pt-4">
                  <p className="text-4xl font-medium tracking-[-0.05em] text-primary sm:text-5xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-white/50">
                Experience
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node",
                  "Express",
                  "NestJS",
                  "MySQL",
                  "PostgreSQL",
                  "Redis",
                  "Docker",
                  "AWS",
                  "Git",
                  "Linux",
                  "CI/CD",
                  "Tailwind CSS",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex cursor-default items-center justify-center rounded-xl border border-white/10 bg-card px-3 py-3 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-white/80 transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
