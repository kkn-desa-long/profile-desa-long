import GaleriIndex from "@/components/features/dashboard/galeri";
import { db } from "@/lib/supabase/api";

export default async function Gallery() {
  const { data: gallery } = await db.gallery.getAll();
  
  return <GaleriIndex galleryItems={gallery || []} />;
}
