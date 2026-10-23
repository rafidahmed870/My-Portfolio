import { ArrowUpRight } from "lucide-react";

import BlurText from "@/components/BlurText";
import Lanyard from "@/components/Lanyard";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MapPinIcon,
  TelephoneIcon,
  MailIcon,
} from "@/data/icons";
import Rafid from "@/assets/rafid.png";
import CardBack from "@/assets/card-back.png";

const socialChips = [
  { label: "GitHub", href: "https://github.com/rafidahmed870", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rafid-ahmed-76b777432", icon: LinkedInIcon },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_rafidahmed_/",
    icon: InstagramIcon,
  },
];

const contactOptions = [
  {
    label: "Email",
    value: "hello@rafidstudio.cloud",
    href: "mailto:hello@rafidstudio.cloud",
    icon: MailIcon,
  },
  {
    label: "Phone",
    value: "+880 1768-950155",
    href: "tel:+8801768950155",
    icon: TelephoneIcon,
  },
  {
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "https://maps.google.com/?q=Dhaka+Bangladesh",
    icon: MapPinIcon,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.28em] text-primary">
            Contact
          </p>
          <BlurText
            text="Let's build your next digital edge."
            className="mt-4 font-[family-name:var(--font-instrument-serif)] text-4xl leading-none tracking-[-0.06em] text-secondary sm:text-5xl lg:text-6xl"
            delay={120}
            animateBy="words"
            direction="top"
            effect="blur"
            blur={8}
            distance={28}
            trigger="load"
            color="var(--secondary)"
          />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.2fr]">
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute inset-8 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative h-[420px] w-full sm:h-[500px]">
              <Lanyard
                frontImage={Rafid.src}
                backImage={CardBack.src}
                imageFit="cover"
                cardColor="#f5f3ee"
                orientation="portrait"
                finish="glossy"
                cornerRadius={0.3}
                size={0.7}
                anchor="center"
                strapLength={0.5}
                strapColor="#111111"
                strapWidth={0.7}
                metal="silver"
                gravity={1}
                damping={0.5}
                elasticity={0.45}
                breeze={0.5}
                interactive
                intro
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 lg:p-7">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">
                Available for projects, collaborations, and product
                conversations
              </p>

              <div className="mt-6 space-y-3">
                {contactOptions.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-primary/40 hover:bg-primary/8"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                        {label}
                      </p>
                      <p className="mt-1 truncate text-sm font-medium text-secondary sm:text-base">
                        {value}
                      </p>
                    </div>

                    <ArrowUpRight className="h-4 w-4 shrink-0 text-white/45 transition group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialChips.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/70 transition hover:border-primary/40 hover:bg-primary/10 hover:text-secondary"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon />
                  </span>
                  {label}
                </a>
              ))}
            </div>

            <a
              href="mailto:hello@rafidstudio.cloud"
              className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-secondary transition hover:border-primary/70 hover:bg-primary/20"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
