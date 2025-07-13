import React from "react";
import { Tables } from "@/lib/supabase/types";
import { Button } from "@/components/ui/button";
import { AlertDialogFooter } from "@/components/ui/alert-dialog";

interface DeleteTribesProps {
  selectedItem: Tables<"tribes">;
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

export default function DeleteTribes({
  selectedItem,
  state,
  formAction,
  isPending,
  onCancel,
}: DeleteTribesProps) {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-4 p-4 border rounded-lg">
        <h4 className="font-medium truncate">{selectedItem.name}</h4>
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
