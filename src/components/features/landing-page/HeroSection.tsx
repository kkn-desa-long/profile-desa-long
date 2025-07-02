import React from "react";
import { Users, ArrowRight, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PLACEHOLDER_IMG_URL } from "@/constants";

export default function HeroSection() {
  return (
    <section className="relative py-24 px-24 overflow-hidden">
      <div className="relative z-10 ">
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
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-xl px-8 py-4 text-lg group"
              >
                Jelajahi Desa
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-0">
              <Image
                src={PLACEHOLDER_IMG_URL}
                alt="Desa Modern Long"
                width={700}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    Desa Terbaik
                  </p>
                  <p className="text-slate-600">Penghargaan 2024</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-2xl shadow-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
