import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LocationSection() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Peta & Lokasi Desa</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Alamat Lengkap:</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Desa Long</li>
            <li>Kecamatan Dampelas</li>
            <li>Kabupaten Donggala</li>
            <li>Provinsi Sulawesi Tengah</li>
            <li>Kode Pos: 94357</li>
          </ul>
        </div>
        <iframe
          src="https://www.google.com/maps/d/u/5/embed?mid=1nUzH2Cz1q3BaJb9yrim2hiqqBPufx5E&ehbc=2E312F"
          className="w-full h-72 lg:h-184 col-span-3"
        ></iframe>
      </CardContent>
    </Card>
  );
}
