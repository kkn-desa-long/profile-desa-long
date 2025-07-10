import { PLACEHOLDER_IMG_URL } from "@/constants";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 px-24 py-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-128 overflow-hidden rounded-lg mb-4">
          <Image
            src={PLACEHOLDER_IMG_URL}
            fill
            alt="gambar"
            className="object-cover"
          />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 leading-tight">
              Sambutan Kepala Desa Long
            </h2>
            <p className="text-2xl font-bold text-teal-600 mb-4">
              Moh. Rum A.CH
            </p>
            <p className="text-xl text-slate-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              optio aperiam sed commodi nulla eaque sapiente. Ut dolore corrupti
              nemo cupiditate sed cumque, voluptates natus nulla maxime
              repudiandae corporis dignissimos?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
