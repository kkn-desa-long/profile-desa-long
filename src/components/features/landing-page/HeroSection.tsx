import React from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PLACEHOLDER_IMG_URL } from "@/constants";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-6 px-4 md:py-12 md:px-12 lg:py-24 lg:px-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 px-4 py-2 text-sm font-medium">
            🌿 Selamat Datang di
          </Badge>
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900">
              Desa <span className="text-teal-600">Long</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              Kecamatan Dampelas, Kabupaten Donggala, Sulawesi Tengah.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={"/profil"}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 text-lg group"
              >
                Lihat Profil
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4 border-2">
          <Image
            src={PLACEHOLDER_IMG_URL}
            fill
            alt="gambar"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
