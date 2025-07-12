import HistorySection from "@/components/features/landing-page/profil/HistorySection";
import LocationSection from "@/components/features/landing-page/profil/LocationSection";
import OrganizationSection from "@/components/features/landing-page/profil/OrganizationSection";

export default function Component() {
  return (
    <section className="py-6 px-4 md:py-12 md:px-12 lg:px-24 space-y-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Profil Desa Long</h1>
      <HistorySection />
      <OrganizationSection />
      <LocationSection />
    </section>
  );
}
