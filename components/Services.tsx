import BlurText from "@/components/BlurText";
import {
  BriefcaseBusiness,
  ClipboardList,
  Megaphone,
  MonitorSmartphone,
  Presentation,
  Server,
  ShoppingBag,
} from "lucide-react";

const services = [
  {
    title: "Digital Business Support",
    description:
      "Practical support for online business operations, from planning to execution.",
    icon: BriefcaseBusiness,
  },
  {
    title: "eCommerce Solutions",
    description:
      "Product listings, order flow, and customer experience for online stores.",
    icon: ShoppingBag,
  },
  {
    title: "Project Coordination",
    description:
      "Keeping tasks, timelines, and communication organized across a project.",
    icon: ClipboardList,
  },
  {
    title: "Digital Product Presentation",
    description:
      "Presenting products and services clearly for an online audience.",
    icon: Presentation,
  },
  {
    title: "Basic Technology & Server Support",
    description:
      "Working knowledge of VPS environments and telephony infrastructure.",
    icon: Server,
  },
  {
    title: "Social Media & Online Business Support",
    description:
      "Day-to-day support for online business and social presence.",
    icon: Megaphone,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-primary">
            Services
          </p>

          <BlurText
            text="Built for modern SaaS and ecommerce brands"
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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[1.6rem] border border-primary/15 bg-[linear-gradient(180deg,rgba(17,17,20,0.96),rgba(10,10,14,0.98))] p-5 shadow-[0_18px_38px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/70"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/5 text-primary shadow-[inset_0_0_18px_rgba(139,92,246,0.12)]">
                  {(() => {
                    const Icon = service.icon;
                    return <Icon className="h-6 w-6" strokeWidth={1.8} />;
                  })()}
                </div>
              </div>

              <h3 className="mb-4 text-[1.7rem] font-instrument-serif leading-tight tracking-[-0.05em] text-white">
                {service.title}
              </h3>

              <p className="text-[1.02rem] leading-relaxed text-slate-300 font-dm-sans">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}