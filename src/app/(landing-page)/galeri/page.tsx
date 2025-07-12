import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PLACEHOLDER_IMG_URL } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <section className="py-12 px-24 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Galeri</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <Link key={item} href={`/galeri/${item}`}>
            <Card className="">
              <CardHeader>
                <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                  <Image
                    src={PLACEHOLDER_IMG_URL}
                    fill
                    alt="gambar"
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-2xl font-semibold">Judul</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Layanan administrasi digital 24/7 untuk kemudahan akses
                  dokumen kependudukan
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
