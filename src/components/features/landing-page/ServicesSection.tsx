import { Card, CardContent } from "@/components/ui/card";
import { Badge, Home, Leaf, Users } from "lucide-react";
import React from "react";

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 px-4 py-2 text-sm font-medium mb-6">
            🚀 Layanan Digital
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Pelayanan
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Terdepan
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Layanan digital terintegrasi untuk kemudahan akses dan transparansi
            dalam pelayanan publik
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-white to-emerald-50/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                E-Government
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Layanan administrasi digital 24/7 untuk kemudahan akses dokumen
                kependudukan
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                AgriTech Hub
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Platform teknologi pertanian untuk monitoring dan optimalisasi
                hasil panen
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-white to-purple-50/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Community App
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Aplikasi mobile untuk komunikasi, event, dan kolaborasi antar
                warga desa
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
