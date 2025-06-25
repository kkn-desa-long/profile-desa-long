import { Home, Leaf, MapPin, Users } from "lucide-react";
import React from "react";

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Home className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-2">650</h3>
            <p className="text-slate-600 font-medium">Kepala Keluarga</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-2">1,200</h3>
            <p className="text-slate-600 font-medium">Hektar Lahan Hijau</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-2">15</h3>
            <p className="text-slate-600 font-medium">Komunitas Aktif</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-2">25</h3>
            <p className="text-slate-600 font-medium">Km dari Kota</p>
          </div>
        </div>
      </div>
    </section>
  );
}
