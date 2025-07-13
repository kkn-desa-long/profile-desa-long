import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PLACEHOLDER_IMG_URL } from "@/constants";
import { db } from "@/lib/supabase/api";
import Image from "next/image";
import Link from "next/link";

export default async function Component({
  params,
}: {
  params: { id: string };
}) {
  const { data: gallery } = await db.gallery.getById(params.id);
  return (
    <section className="py-6 px-4 md:py-12 md:px-12 lg:px-24">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
            <Image
              src={gallery.img_url || PLACEHOLDER_IMG_URL}
              alt={gallery.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-tight">{gallery.title}</h1>
          <div className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              {gallery.description || "Tidak ada deskripsi"}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Terbaru</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  <CardTitle className="text-2xl font-semibold">
                    Judul
                  </CardTitle>
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
      </div>
    </section>
  );
}
