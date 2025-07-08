import { Bucket } from "./bucket";
import { createClient } from "./client";

export async function createImageSignedUrl() {
  const supabase = createClient();

  const { data, error } = await supabase.storage
    .from(Bucket.Gallery)
    .createSignedUploadUrl(`${Date.now()}.jpeg`);

  if (error) throw error;

  return data;
}
