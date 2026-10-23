import BlurText from "@/components/BlurText";
import { ArrowUpRight } from "lucide-react";
import kynexAuthLogo from "@/assets/kynexauth.png";
import eternalShopLogo from "@/assets/eternalshopbd.png";
import pickycommerceLogo from "@/assets/pickycommerce.png";
import Image from "next/image";

const projects = [
  {
    title: "PickyCommerce",
    category: "E-commerce Management System",
    description:
      "A hosted e-commerce solution that empowers businesses to launch and manage their own online shops without the complexity of building and maintaining an e-commerce website from scratch.",
    image: pickycommerceLogo,
    link: "https://pickycommerce.com",
  },
  {
    title: "KynexAuth",
    category: "SaaS",
    description:
      " software authentication and licensing platform designed to help developers protect applications, manage user access, and handle software subscriptions through a centralized system.",
    image:
      kynexAuthLogo,
    link: "https://kynexauth.com",
  },
  {
    title: "Eternal Shop BD",
    category: "Landing Page",
    description:
      "A modern digital storefront concept for an online retail brand, focused on clear product presentation, engaging visual hierarchy, and a seamless path from product discovery to purchase.",
    image:
      eternalShopLogo,
    link: "https://eternalshopbd.com",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/10 bg-background px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-primary">
            Work
          </p>

          <BlurText
            text="Selected portfolio work"
            className="font-instrument-serif text-[clamp(2.8rem,4vw,5rem)] leading-[0.9] tracking-[-0.05em] text-secondary"
            delay={120}
            animateBy="words"
            direction="top"
            effect="blur"
            blur={8}
            distance={24}
            trigger="view"
            threshold={0.2}
            color="var(--secondary)"
          />
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,17,20,0.96),rgba(10,10,14,0.98))] shadow-[0_14px_28px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/70"
            >
              <div className="relative h-52 overflow-hidden border-b border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  placeholder="blur"
                  
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-[#09090d]/12 to-transparent" />

                <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/35 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              <div className="p-4.5">
                <h3 className="mb-2 font-instrument-serif text-[1.7rem] leading-none tracking-[-0.05em] text-white">
                  {project.title}
                </h3>

                <p className="text-[0.95rem] leading-relaxed text-slate-300 font-dm-sans">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 font-inter px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-[#08070d]"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
