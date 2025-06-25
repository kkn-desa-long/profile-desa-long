import { Badge } from "@/components/ui/badge";
import { PLACEHOLDER_IMG_URL } from "@/constants";
import { Calendar, Leaf, TreePine, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 px-24 py-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-3xl transform rotate-3"></div>
          <Image
            src={PLACEHOLDER_IMG_URL}
            alt="Kehidupan Modern di Desa"
            width={600}
            height={500}
            className="relative z-10 rounded-3xl shadow-2xl"
          />
          <div className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-2xl shadow-xl z-20">
            <Calendar className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 px-4 py-2 text-sm font-medium mb-6">
              🏡 Tentang Desa Kami
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Inovasi Bertemu
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Tradisi
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Desa Long menggabungkan teknologi modern dengan kearifan lokal
              untuk menciptakan ekosistem yang berkelanjutan dan inovatif.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">
                  Smart Farming
                </h4>
                <p className="text-slate-600">
                  Teknologi IoT dan AI untuk optimalisasi hasil pertanian
                  berkelanjutan
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">
                  Digital Community
                </h4>
                <p className="text-slate-600">
                  Platform digital untuk menghubungkan dan memberdayakan
                  masyarakat
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">
                  Eco Tourism
                </h4>
                <p className="text-slate-600">
                  Wisata ramah lingkungan dengan pengalaman autentik dan
                  edukatif
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
