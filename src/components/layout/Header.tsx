// import { TreePine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
      <div className="px-24 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-4">
              <Image
                src="/donggalakab_logo.png"
                width={45}
                height={45}
                alt="donggala logo"
              />
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Desa Long</h1>
                <p className="text-sm text-slate-600">Kabupaten Donggala</p>
              </div>
            </div>
          </Link>
          <nav className="hidden lg:flex space-x-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="/profil"
              className="text-slate-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Profil Desa
            </Link>
            <Link
              href="/infografis"
              className="text-slate-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Infografis
            </Link>
            <Link
              href="/galeri"
              className="text-slate-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Galeri
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
