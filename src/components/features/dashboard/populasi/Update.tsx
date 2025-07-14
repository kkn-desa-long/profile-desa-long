import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tables, TablesUpdate } from "@/lib/supabase/types";
import { AlertDialogFooter } from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UpdateTribesProps {
  state: {
    status: string;
    errors?: {
      number_of_male?: string[];
      number_of_female?: string[];
      number_of_head_family?: string[];
      number_of_family_member?: string[];
      hamlet_id?: string[];
    };
  };
  formAction: (payload: FormData) => void;
  isPending: boolean;
  onCancel?: () => void;
  updateForm: TablesUpdate<"villagers_population">;
  setUpdateForm: React.Dispatch<
    React.SetStateAction<TablesUpdate<"villagers_population">>
  >;
  hamlets: Tables<"hamlets">[];
}

export default function UpdatePopulation({
  state,
  formAction,
  isPending,
  onCancel,
  updateForm,
  setUpdateForm,
  hamlets = [],
}: UpdateTribesProps) {
  return (
    <form action={formAction} className="grid gap-4 mt-4">
      <input type="hidden" name="id" value={updateForm.id} />
      <div className="grid gap-2">
        <Label htmlFor="number_of_male">Jumlah Laki-laki</Label>
        <Input
          type="text"
          id="number_of_male"
          name="number_of_male"
          value={updateForm.number_of_male}
          onChange={(e) =>
            setUpdateForm((prev) => ({
              ...prev,
              number_of_male: parseInt(e.target.value),
            }))
          }
          placeholder="Masukkan jumlah "
        />
        {state.errors?.number_of_male && (
          <p className="text-sm text-destructive">
            {state.errors.number_of_male[0]}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="number_of_female">Jumlah Perempuan</Label>
        <Input
          type="text"
          id="number_of_female"
          name="number_of_female"
          value={updateForm.number_of_female}
          onChange={(e) =>
            setUpdateForm((prev) => ({
              ...prev,
              number_of_female: parseInt(e.target.value),
            }))
          }
          placeholder="Masukkan jumlah "
        />
        {state.errors?.number_of_female && (
          <p className="text-sm text-destructive">
            {state.errors.number_of_female[0]}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="number_of_head_family">Jumlah Kepala Keluarga</Label>
        <Input
          type="text"
          id="number_of_head_family"
          name="number_of_head_family"
          value={updateForm.number_of_head_family}
          onChange={(e) =>
            setUpdateForm((prev) => ({
              ...prev,
              number_of_head_family: parseInt(e.target.value),
            }))
          }
          placeholder="Masukkan jumlah "
        />
        {state.errors?.number_of_head_family && (
          <p className="text-sm text-destructive">
            {state.errors.number_of_head_family[0]}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="number_of_family_member">Jumlah Anggota Keluarga</Label>
        <Input
          type="text"
          id="number_of_family_member"
          name="number_of_family_member"
          value={updateForm.number_of_family_member}
          onChange={(e) =>
            setUpdateForm((prev) => ({
              ...prev,
              number_of_family_member: parseInt(e.target.value),
            }))
          }
          placeholder="Masukkan jumlah "
        />
        {state.errors?.number_of_family_member && (
          <p className="text-sm text-destructive">
            {state.errors.number_of_family_member[0]}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="hamlet_id">Dusun</Label>
        <Select name="hamlet_id" required defaultValue={updateForm.hamlet_id}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Dusun" />
          </SelectTrigger>
          <SelectContent>
            {hamlets?.map((hamlet) => (
              <SelectItem key={hamlet.id} value={hamlet.id}>
                {hamlet.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {state.errors?.hamlet_id && (
          <p className="text-sm text-destructive">
            {state.errors.hamlet_id[0]}
          </p>
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
