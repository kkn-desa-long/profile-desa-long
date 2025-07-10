import { Card, CardContent } from "@/components/ui/card";
import { ChartNoAxesCombined, Images, Landmark } from "lucide-react";
import React from "react";

export default function QuickActionSection() {
  return (
    <section className="py-24 px-24 bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="hover:shadow-lg transition-shadow text-slate-500 hover:text-slate-700 cursor-pointer">
          <CardContent className="flex flex-col items-center gap-4">
            <Landmark className="w-16 h-16" />
            <h3 className="text-2xl font-semibold">
              Profil Desa
            </h3>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow text-slate-500 hover:text-slate-700 cursor-pointer">
          <CardContent className="flex flex-col items-center gap-4">
            <ChartNoAxesCombined className="w-16 h-16" />
            <h3 className="text-2xl font-semibold">
              Infografis
            </h3>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow text-slate-500 hover:text-slate-700 cursor-pointer">
          <CardContent className="flex flex-col items-center gap-4">
            <Images className="w-16 h-16" />
            <h3 className="text-2xl font-semibold">Galeri</h3>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
