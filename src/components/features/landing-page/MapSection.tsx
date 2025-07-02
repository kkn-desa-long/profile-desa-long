import React from "react";

export default function CTASection() {
  return (
    <section className="py-24 px-24 relative flex flex-col items-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
      <div className="text-center relative z-10">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Peta{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Desa
          </span>
        </h2>
      </div>
      <iframe
        src="https://www.google.com/maps/d/u/5/embed?mid=1nUzH2Cz1q3BaJb9yrim2hiqqBPufx5E&ehbc=2E312F"
        className="w-1/2 h-128"
      ></iframe>
    </section>
  );
}
