import { createBrowserClient } from "@supabase/ssr";
import { Database } from "./types";
import { Bucket } from "./bucket";

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ROLE_KEY!
  );
}

export async function uploadFileToSignedUrl({
  file,
  path,
  token,
  bucket,
}: {
  file: File;
  path: string;
  token: string;
  bucket: Bucket;
}) {
  const supabase = createClient();

  try {
    const result = await supabase.storage
      .from(bucket)
      .uploadToSignedUrl(path, token, file);

    if (result.error) throw result.error;
    if (!result.data) throw new Error("No data");

    const fileurl = supabase.storage
      .from(bucket)
      .getPublicUrl(result.data.path);

    return fileurl.data.publicUrl;
  } catch (error) {
    throw error;
  }
}
