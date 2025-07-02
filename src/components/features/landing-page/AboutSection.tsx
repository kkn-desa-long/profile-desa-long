import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PLACEHOLDER_IMG_URL } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 px-24 py-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <Image
            src={PLACEHOLDER_IMG_URL}
            alt="Kehidupan Modern di Desa"
            width={600}
            height={500}
            className="relative z-10 rounded-3xl shadow-2xl"
          />
        </div>
        <div className="space-y-8">
          <div>
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 px-4 py-2 text-sm font-medium mb-6">
              🏡 Tentang Desa Kami
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Profil
              </span>
              Desa Long
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Sejarah singkatnya nanti...
            </p>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-xl px-8 py-4 text-lg group"
          >
            Detail
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
