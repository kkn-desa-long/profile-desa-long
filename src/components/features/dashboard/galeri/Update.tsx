import React from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bucket } from "@/lib/supabase/bucket";
import { Button } from "@/components/ui/button";
import { PLACEHOLDER_IMG_URL } from "@/constants";
import { Textarea } from "@/components/ui/textarea";
import { TablesUpdate } from "@/lib/supabase/types";
import { createImageSignedUrl } from "@/lib/supabase/storage";
import { uploadFileToSignedUrl } from "@/lib/supabase/client";
import { AlertDialogFooter } from "@/components/ui/alert-dialog";

interface UpdateGalleryProps {
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
  updateForm: TablesUpdate<"gallery">;
  setUpdateForm: React.Dispatch<React.SetStateAction<TablesUpdate<"gallery">>>;
}

export default function UpdateGallery({
  state,
  formAction,
  isPending,
  onCancel,
  updateForm,
  setUpdateForm,
}: UpdateGalleryProps) {
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
        setUpdateForm((prev) => ({ ...prev, img_url: imageUrl }));
        toast.success("Galeri berhasil diupload!");
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <form action={formAction} className="grid gap-4 mt-4">
      <input type="hidden" name="id" value={updateForm.id} />
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          name="title"
          value={updateForm.title}
          onChange={(e) =>
            setUpdateForm((prev) => ({ ...prev, title: e.target.value }))
          }
          placeholder="Enter image title"
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
          value={updateForm.description ?? ""}
          onChange={(e) =>
            setUpdateForm((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          placeholder="Enter image description"
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
          placeholder="Pilih file"
          accept="image/*"
          onChange={handleChangeImage}
          disabled={isUploading || isPending}
        />
        {state.errors?.img_url && (
          <p className="text-sm text-destructive">{state.errors.img_url[0]}</p>
        )}
      </div>
      {updateForm.img_url && (
        <>
          <input type="hidden" name="img_url" value={updateForm.img_url} />
          <div className="grid gap-2">
            <Label>Preview</Label>
            <div className="relative w-full h-32 rounded-md overflow-hidden bg-muted">
              <Image
                src={updateForm.img_url || PLACEHOLDER_IMG_URL}
                alt="Preview"
                fill
                className="object-cover"
              />
            </div>
            <Link
              href={updateForm.img_url}
              className="text-sm text-blue-400 hover:underline"
            >
              {updateForm.img_url.split("/").pop()}
            </Link>
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
