import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import AboutSkeleton from "@/components/skeletons/AboutSkeleton";
import ServicesSkeleton from "@/components/skeletons/ServicesSkeleton";
import WorkSkeleton from "@/components/skeletons/WorkSkeleton";
import ContactSkeleton from "@/components/skeletons/ContactSkeleton";
import FooterSkeleton from "@/components/skeletons/FooterSkeleton";

export default function Loading() {
  return (
    <>
      <main className="w-full bg-black text-white">
        <HeroSkeleton />
        <AboutSkeleton />
        <ServicesSkeleton />
        <WorkSkeleton />
        <ContactSkeleton />
      </main>
      <FooterSkeleton />
    </>
  );
}
