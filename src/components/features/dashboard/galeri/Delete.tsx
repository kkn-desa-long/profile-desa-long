import React from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Tables } from "@/lib/supabase/types";
import { Button } from "@/components/ui/button";
import { PLACEHOLDER_IMG_URL } from "@/constants";
import { AlertDialogFooter } from "@/components/ui/alert-dialog";
import { deleteGallery } from "./actions";

interface DeleteGalleryProps {
  selectedItem: Tables<"gallery">;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteGallery({
  selectedItem,
  onCancel,
  onConfirm,
}: DeleteGalleryProps) {
  const [isPending, startTransition] = React.useTransition();

  if (!selectedItem) return null;

  const handleConfirmDelete = () => {
    startTransition(async () => {
      const result = await deleteGallery(selectedItem.id);

      if (result.status === "success") {
        toast.success(result.message);
        onConfirm();
      } else {
        toast.error(result.message);
      }
    });
  };

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
      <AlertDialogFooter className="mt-4">
        <Button variant="outline" onClick={onCancel}>
          Batal
        </Button>
        <Button
          variant="destructive"
          onClick={handleConfirmDelete}
          loading={isPending}
        >
          Hapus
        </Button>
      </AlertDialogFooter>
    </div>
  );
}
