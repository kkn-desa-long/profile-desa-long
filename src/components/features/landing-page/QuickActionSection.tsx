import { Card, CardContent } from "@/components/ui/card";
import { ChartNoAxesCombined, Images, Landmark } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function QuickActionSection() {
  return (
    <section className="py-6 px-4 md:py-12 md:px-12 lg:py-24 lg:px-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Link href={"/profil"}>
          <Card className="hover:shadow-lg transition-shadow text-slate-500 hover:text-slate-700 cursor-pointer">
            <CardContent className="flex flex-col items-center gap-4">
              <Landmark className="w-16 h-16" />
              <h3 className="text-2xl font-semibold">Profil Desa</h3>
            </CardContent>
          </Card>
        </Link>
        <Link href={"/infografis"}>
          <Card className="hover:shadow-lg transition-shadow text-slate-500 hover:text-slate-700 cursor-pointer">
            <CardContent className="flex flex-col items-center gap-4">
              <ChartNoAxesCombined className="w-16 h-16" />
              <h3 className="text-2xl font-semibold">Infografis</h3>
            </CardContent>
          </Card>
        </Link>
        <Link href={"/galeri"}>
          <Card className="hover:shadow-lg transition-shadow text-slate-500 hover:text-slate-700 cursor-pointer">
            <CardContent className="flex flex-col items-center gap-4">
              <Images className="w-16 h-16" />
              <h3 className="text-2xl font-semibold">Galeri</h3>
            </CardContent>
          </Card>
        </Link>
      </div>
    </section>
  );
}
