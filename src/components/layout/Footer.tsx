import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-24">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-4 mb-6">
            <Image
              src="/donggalakab_logo.png"
              width={45}
              height={45}
              alt="donggala logo"
            />
            <div>
              <h3 className="text-2xl font-bold">Desa Long</h3>
              <p className="text-slate-400">Kabupaten Donggala</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Kontak</h4>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span className="text-slate-400">
                Jln. Trans Provinsi Dsn. II Desa Long
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-slate-400">+62 21 1234-5678</span>
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
              <span>Sabtu - Minggu</span>
              <span>Tutup</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-400">
          © 2025 Desa Long. KKN UNTAD 112.
        </p>
      </div>
    </footer>
  );
}
