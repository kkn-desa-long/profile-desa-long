import React from "react";
import PopulationTabs from "@/components/features/landing-page/infografis/PopulationTabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function InfographyPage() {
  return (
    <section className="py-6 px-4 md:py-12 md:px-12 lg:px-24">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Infografis Desa Long
      </h1>
      <Tabs defaultValue="penduduk" className="w-full">
        <TabsList>
          <TabsTrigger value="penduduk" className="text-lg font-semibold">
            Penduduk
          </TabsTrigger>
        </TabsList>
        <TabsContent value="penduduk" className="space-y-4">
          <PopulationTabs />
        </TabsContent>
      </Tabs>
    </section>
  );
}
