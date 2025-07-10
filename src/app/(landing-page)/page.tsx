import HeroSection from "@/components/features/landing-page/HeroSection";
import WelcomeSection from "@/components/features/landing-page/WelcomeSection";
import GallerySection from "@/components/features/landing-page/GallerySection";
import MapSection from "@/components/features/landing-page/MapSection";
import QuickActionSection from "@/components/features/landing-page/QuickActionSection";
import StatsSection from "@/components/features/landing-page/StatsSection";

export default function Component() {
  return (
    <>
      <HeroSection />
      <QuickActionSection />
      <WelcomeSection />
      <StatsSection />
      <GallerySection />
      <MapSection />
    </>
  );
}
