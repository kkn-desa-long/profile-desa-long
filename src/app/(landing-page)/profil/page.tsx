import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PLACEHOLDER_IMG_URL } from "@/constants";
import Image from "next/image";

export default function Component() {
  return (
    <section className="py-12 px-24 space-y-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Profil Desa Long</h1>
      <Card className="">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sejarah Desa</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem
            illum odio hic. Laborum minus velit minima eveniet, maiores
            corporis!
          </p>
        </CardContent>
      </Card>
      <Card className="">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Bagan Desa</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs>
            <TabsList>
              <TabsTrigger
                value="organisasi-desa"
                className="text-lg font-semibold"
              >
                Struktur Organisasi Desa
              </TabsTrigger>
              <TabsTrigger value="bpd" className="text-lg font-semibold">
                Struktur BPD
              </TabsTrigger>
              <TabsTrigger
                value="pemerintah-desa"
                className="text-lg font-semibold"
              >
                Struktur Pemerintah Desa
              </TabsTrigger>
              <TabsTrigger value="lpm" className="text-lg font-semibold">
                Struktur LPM
              </TabsTrigger>
              <TabsTrigger value="pkk" className="text-lg font-semibold">
                Struktur TP. PKK
              </TabsTrigger>
            </TabsList>
            <TabsContent value="organisasi-desa">
              <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src={PLACEHOLDER_IMG_URL}
                  fill
                  alt="gambar"
                  className="object-cover"
                />
              </div>
            </TabsContent>
            <TabsContent value="bpd">b</TabsContent>
            <TabsContent value="pemerintah-desa">c</TabsContent>
            <TabsContent value="lpm">d</TabsContent>
            <TabsContent value="pkk">e</TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <Card className="">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Peta & Lokasi Desa
          </CardTitle>
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
            className="w-full h-184 col-span-3"
          ></iframe>
        </CardContent>
      </Card>
    </section>
  );
}
