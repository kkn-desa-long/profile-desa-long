import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AlertDialogFooter } from "@/components/ui/alert-dialog";

interface CreateEducationProps {
  state: {
    status: string;
    errors?: {
      name?: string[];
    };
  };
  formAction: (payload: FormData) => void;
  isPending: boolean;
  onCancel?: () => void;
}

export default function CreateEducation({
  state,
  formAction,
  isPending,
  onCancel,
}: CreateEducationProps) {
  return (
    <form action={formAction} className="grid gap-4 mt-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Nama</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Masukkan nama pendidikan"
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
