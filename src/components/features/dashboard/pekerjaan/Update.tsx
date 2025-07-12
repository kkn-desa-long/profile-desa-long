import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TablesUpdate } from "@/lib/supabase/types";
import { AlertDialogFooter } from "@/components/ui/alert-dialog";

interface UpdateJobProps {
  state: {
    status: string;
    errors?: {
      name?: string[];
    };
  };
  formAction: (payload: FormData) => void;
  isPending: boolean;
  onCancel?: () => void;
  updateForm: TablesUpdate<"jobs">;
  setUpdateForm: React.Dispatch<React.SetStateAction<TablesUpdate<"jobs">>>;
}

export default function UpdateJob({
  state,
  formAction,
  isPending,
  onCancel,
  updateForm,
  setUpdateForm,
}: UpdateJobProps) {
  return (
    <form action={formAction} className="grid gap-4 mt-4">
      <input type="hidden" name="id" value={updateForm.id} />
      <div className="grid gap-2">
        <Label htmlFor="name">Nama Pekerjaan</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={updateForm.name}
          onChange={(e) =>
            setUpdateForm((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder="Masukkan nama pekerjaan"
        />
        {state.errors?.name && (
          <p className="text-sm text-destructive">{state.errors.name[0]}</p>
        )}
      </div>
      <AlertDialogFooter>
        <Button type="reset" variant="outline" onClick={onCancel}>
          Batal
        </Button>
        <Button type="submit" loading={isPending}>
          Simpan Perubahan
        </Button>
      </AlertDialogFooter>
    </form>
  );
}
