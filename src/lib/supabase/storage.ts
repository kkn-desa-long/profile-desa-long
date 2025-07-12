import { Bucket } from "./bucket";
import { createClient } from "./client";

export async function createImageSignedUrl(bucket: Bucket) {
  const supabase = createClient();

  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUploadUrl(`${Date.now()}.jpeg`);

  if (error) throw error;

  return data;
}
