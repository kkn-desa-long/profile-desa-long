import { Mail, MapPin, Phone, TreePine } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-24">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <TreePine className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Desa Long</h3>
              <p className="text-slate-400">Kabupaten Harmoni</p>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed max-w-md mb-6">
            Menggabungkan inovasi teknologi dengan kearifan tradisional untuk
            menciptakan masa depan yang berkelanjutan.
          </p>
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
              <span className="text-sm font-bold">f</span>
            </div>
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
              <span className="text-sm font-bold">ig</span>
            </div>
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
              <span className="text-sm font-bold">tw</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Kontak</h4>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span className="text-slate-400">
                Jl. Desa Long No. 123, Kab. Harmoni, Indonesia
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-slate-400">+62 21 1234-5678</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-slate-400">hello@desaLong.id</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Jam Pelayanan</h4>
          <div className="space-y-3 text-slate-400">
            <div className="flex justify-between">
              <span>Senin - Jumat</span>
              <span>08:00 - 16:00</span>
            </div>
            <div className="flex justify-between">
              <span>Sabtu</span>
              <span>08:00 - 12:00</span>
            </div>
            <div className="flex justify-between">
              <span>Minggu</span>
              <span>Tutup</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-400">
          © {new Date().getFullYear()} Desa Long. Semua hak cipta dilindungi.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link
            href="#"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Kebijakan Privasi
          </Link>
          <Link
            href="#"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Syarat &amp; Ketentuan
          </Link>
        </div>
      </div>
    </footer>
  );
}
