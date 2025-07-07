import { db } from "@/lib/supabase/api";

export default async function GalleryPage() {
  const { data: gallery } = await db.gallery.getAll();

  return <div>{JSON.stringify(gallery)}</div>;
}
