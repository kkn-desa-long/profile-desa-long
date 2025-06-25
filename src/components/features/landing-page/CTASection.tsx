import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

export default function CTASection() {
  return (
    <section className="py-24 px-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
      <div className="container mx-auto text-center relative z-10">
        <Badge className="bg-white/10 text-white hover:bg-white/10 px-4 py-2 text-sm font-medium mb-6">
          🌟 Bergabung dengan Kami
        </Badge>
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Masa Depan Desa
          <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Dimulai Hari Ini
          </span>
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Jadilah bagian dari transformasi digital desa yang berkelanjutan.
          Rasakan pengalaman hidup yang harmonis antara teknologi dan alam.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-4 text-lg font-semibold shadow-xl"
          >
            Kunjungi Desa Kami
          </Button>
        </div>
      </div>
    </section>
  );
}
