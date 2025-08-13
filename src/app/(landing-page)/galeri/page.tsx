import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PLACEHOLDER_IMG_URL } from "@/constants";
import { db } from "@/lib/supabase/api";
import Image from "next/image";
import Link from "next/link";

export default async function GalleryPage() {
  const { data: gallery } = await db.gallery.getAll();

  return (
    <section className="py-6 px-4 md:py-12 md:px-12 lg:px-24 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Galeri</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {gallery
          ? gallery?.map((item) => (
              <Link key={item.id} href={`/galeri/${item.id}`}>
                <Card className="">
                  <CardHeader>
                    <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                      <Image
                        src={item.img_url || PLACEHOLDER_IMG_URL}
                        fill
                        alt={item.title}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle className="text-2xl font-semibold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description || "Tidak ada deskripsi"}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))
          : "Tidak ada galeri yang tersedia"}
      </div>
    </section>
  );
}
