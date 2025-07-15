import HeroSection from "@/components/features/landing-page/HeroSection";
import GallerySection from "@/components/features/landing-page/GallerySection";
import MapSection from "@/components/features/landing-page/MapSection";
import QuickActionSection from "@/components/features/landing-page/QuickActionSection";
import StatsSection from "@/components/features/landing-page/StatsSection";
import { db } from "@/lib/supabase/api";

export default async function Component() {
  const { data: gallery } = await db.gallery.getAll();
  return (
    <>
      <HeroSection />
      <QuickActionSection />
      <StatsSection />
      <GallerySection gallery={gallery || []} />
      <MapSection />
    </>
  );
}
