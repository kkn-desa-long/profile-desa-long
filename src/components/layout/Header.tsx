import { TreePine } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
      <div className="px-24 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <TreePine className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Desa Long</h1>
              <p className="text-sm text-slate-600">Kabupaten Donggala</p>
            </div>
          </div>
          <nav className="hidden lg:flex space-x-8">
            <Link
              href="#beranda"
              className="text-slate-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="#profil"
              className="text-slate-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Profil Desa
            </Link>
            <Link
              href="#layanan"
              className="text-slate-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Layanan
            </Link>
            <Link
              href="#berita"
              className="text-slate-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Berita
            </Link>
            <Link
              href="#kontak"
              className="text-slate-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Kontak
            </Link>
          </nav>
          <Button className="hidden md:flex bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </header>
  );
}
