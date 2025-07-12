import React from "react";
import Image from "next/image";
import { Tables } from "@/lib/supabase/types";
import { Button } from "@/components/ui/button";
import { PLACEHOLDER_IMG_URL } from "@/constants";
import { AlertDialogFooter } from "@/components/ui/alert-dialog";

interface DeleteGalleryProps {
  selectedItem: Tables<"gallery">;
  state: {
    status: string;
    errors?: {
      id?: string[];
    };
  };
  formAction: (payload: FormData) => void;
  isPending: boolean;
  onCancel?: () => void;
}

export default function DeleteGallery({
  selectedItem,
  state,
  formAction,
  isPending,
  onCancel,
}: DeleteGalleryProps) {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-4 p-4 border rounded-lg">
        <div className="relative w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
          <Image
            src={selectedItem.img_url || PLACEHOLDER_IMG_URL}
            alt={selectedItem.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium truncate">{selectedItem.title}</h4>
          <p className="text-sm text-muted-foreground truncate">
            {selectedItem.description}
          </p>
        </div>
      </div>
      <form action={formAction}>
        <input type="hidden" id="id" name="id" value={selectedItem?.id} />
        {state.errors?.id && (
          <p className="text-sm text-destructive">{state.errors.id[0]}</p>
        )}
        <AlertDialogFooter className="mt-4">
          <Button variant="outline" onClick={onCancel}>
            Batal
          </Button>
          <Button type="submit" variant="destructive" loading={isPending}>
            Hapus
          </Button>
        </AlertDialogFooter>
      </form>
    </div>
  );
}
