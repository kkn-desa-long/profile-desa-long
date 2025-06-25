import React from "react";
import { Users, ArrowRight, Star, Award } from "lucide-react";
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
              🌿 Selamat Datang di Desa Long
            </Badge>
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Desa
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Modern
                </span>
                <span className="text-4xl lg:text-5xl text-slate-600">
                  yang Berkelanjutan
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum. Sed consectetur
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
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg"
              >
                Tonton Video
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-slate-600">
                  2,450+ Penduduk Bahagia
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-slate-700">
                  4.9/5 Rating Kepuasan
                </span>
              </div>
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
