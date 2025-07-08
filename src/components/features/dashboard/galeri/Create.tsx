import React from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bucket } from "@/lib/supabase/bucket";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createImageSignedUrl } from "@/lib/supabase/storage";
import { uploadFileToSignedUrl } from "@/lib/supabase/client";
import { AlertDialogFooter } from "@/components/ui/alert-dialog";

interface CreateGalleryProps {
  state: {
    status: string;
    errors?: {
      title?: string[];
      description?: string[];
      img_url?: string[];
    };
  };
  formAction: (payload: FormData) => void;
  isPending: boolean;
  onCancel?: () => void;
}

export default function CreateGallery({
  state,
  formAction,
  isPending,
  onCancel,
}: CreateGalleryProps) {
  const [imgUrl, setImgUrl] = React.useState<string | null>(null);
  const [isUploading, setIsUploading] = React.useState<boolean>(false);

  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files?.length > 0) {
      const file = files[0];
      if (!file) return;

      setIsUploading(true);

      try {
        const { path, token } = await createImageSignedUrl();
        const imageUrl = await uploadFileToSignedUrl({
          bucket: Bucket.Gallery,
          file,
          path,
          token,
        });
        setImgUrl(imageUrl);
        toast.success("Galeri berhasil diupload!");
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <form action={formAction} className="grid gap-4 mt-4">
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Masukkan judul galeri"
        />
        {state.errors?.title && (
          <p className="text-sm text-destructive">{state.errors.title[0]}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Masukkan deskripsi galeri"
          rows={3}
        />
        {state.errors?.description && (
          <p className="text-sm text-destructive">
            {state.errors.description[0]}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="img_url">Image URL</Label>
        <Input
          type="file"
          id="img_url"
          required
          placeholder="Pilih file"
          accept="image/*"
          onChange={handleChangeImage}
          disabled={isUploading || isPending}
        />
        {state.errors?.img_url && (
          <p className="text-sm text-destructive">{state.errors.img_url[0]}</p>
        )}
      </div>
      {imgUrl && (
        <>
          <input type="hidden" name="img_url" value={imgUrl} />
          <div className="grid gap-2">
            <Label>Preview</Label>
            <div className="relative w-full h-32 rounded-md overflow-hidden bg-muted">
              <Image src={imgUrl} alt="imgUrl" fill className="object-cover" />
            </div>
          </div>
        </>
      )}
      <AlertDialogFooter>
        <Button type="reset" variant="outline" onClick={onCancel}>
          Batal
        </Button>
        <Button type="submit" loading={isUploading || isPending}>
          Simpan Perubahan
        </Button>
      </AlertDialogFooter>
    </form>
  );
}
