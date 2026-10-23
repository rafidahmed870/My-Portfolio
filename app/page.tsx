import type { Metadata } from "next";
import { Suspense } from "react";

import { BASE_URL, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/constants";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import AboutSkeleton from "@/components/skeletons/AboutSkeleton";
import ServicesSkeleton from "@/components/skeletons/ServicesSkeleton";
import WorkSkeleton from "@/components/skeletons/WorkSkeleton";
import ContactSkeleton from "@/components/skeletons/ContactSkeleton";
import FooterSkeleton from "@/components/skeletons/FooterSkeleton";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DockNavWrapper from "@/components/DockNavWrapper";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: SITE_TITLE,
    description:
      "Full-stack developer from Dhaka building modern web apps, SaaS products, and scalable backend systems. Let's build your next digital edge.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
        type: "image/png",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <main className="w-full bg-black text-white">
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<AboutSkeleton />}>
          <About />
        </Suspense>

        <Suspense fallback={<ServicesSkeleton />}>
          <Services />
        </Suspense>

        <Suspense fallback={<WorkSkeleton />}>
          <Work />
        </Suspense>

        <Suspense fallback={<ContactSkeleton />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>

      <DockNavWrapper />
    </>
  );
}
