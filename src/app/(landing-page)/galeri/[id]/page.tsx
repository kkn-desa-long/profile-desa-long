import { PLACEHOLDER_IMG_URL } from "@/constants";
import { db } from "@/lib/supabase/api";
import Image from "next/image";

export default async function Component({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { data: gallery } = await db.gallery.getById((await params).id);
  return (
    <section className="py-6 px-4 md:py-12 md:px-12 lg:px-24">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
            <Image
              src={gallery?.img_url || PLACEHOLDER_IMG_URL}
              alt={gallery?.title || ""}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-tight">{gallery?.title}</h1>
          <div className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              {gallery?.description || "Tidak ada deskripsi"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
