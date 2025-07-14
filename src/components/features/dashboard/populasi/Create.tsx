import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AlertDialogFooter } from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tables } from "@/lib/supabase/types";

interface CreateTribesProps {
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
  hamlets: Tables<"hamlets">[];
  onCancel?: () => void;
}

export default function CreatePopulation({
  state,
  formAction,
  isPending,
  onCancel,
  hamlets = [],
}: CreateTribesProps) {
  return (
    <form action={formAction} className="grid gap-4 mt-4">
      <div className="grid gap-2">
        <Label htmlFor="number_of_male">Jumlah Laki-Laki</Label>
        <Input
          type="text"
          id="number_of_male"
          name="number_of_male"
          required
          placeholder="Masukkan jumlah laki-laki"
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
          required
          placeholder="Masukkan jumlah perempuan"
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
          required
          placeholder="Masukkan jumlah kepala keluarga"
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
          required
          placeholder="Masukkan jumlah anggota keluarga"
        />
        {state.errors?.number_of_family_member && (
          <p className="text-sm text-destructive">
            {state.errors.number_of_family_member[0]}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="hamlet_id">Dusun</Label>
        <Select name="hamlet_id" required>
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
