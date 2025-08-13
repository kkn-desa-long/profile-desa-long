"use client";

import React from "react";
import { Edit, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tables, TablesUpdate } from "@/lib/supabase/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CreatePopulation from "./Create";
import UpdatePopulation from "./Update";
import DeletePopulation from "./Delete";
import ActionModal from "../components/ActionModal";
import {
  createPopulation,
  deletePopulation,
  updatePopulation,
} from "./actions";
import { toast } from "sonner";

export default function PopulationIndex({
  population,
  hamlets,
}: {
  population: Tables<"villagers_population">[];
  hamlets: Tables<"hamlets">[];
}) {
  console.log(population);
  const [createModalOpen, setCreateModalOpen] = React.useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = React.useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] =
    React.useState<Tables<"villagers_population"> | null>(null);
  const [updateForm, setUpdateForm] = React.useState<
    TablesUpdate<"villagers_population">
  >({
    id: "",
    number_of_male: 0,
    number_of_female: 0,
    number_of_family_member: 0,
    number_of_head_family: 0,
    hamlet_id: "",
  });

  const [
    createPopulationState,
    createPopulationAction,
    isPendingCreatePopulation,
  ] = React.useActionState(createPopulation, {
    status: "idle",
  });
  const [
    updatePopulationState,
    updatePopulationAction,
    isPendingUpdatePopulation,
  ] = React.useActionState(updatePopulation, {
    status: "idle",
  });
  const [
    deletePopulationState,
    deletePopulationAction,
    isPendingDeletePopulation,
  ] = React.useActionState(deletePopulation, {
    status: "idle",
  });

  React.useEffect(() => {
    if (createPopulationState.status === "success") {
      setCreateModalOpen(false);
      setSelectedItem(null);

      toast.success(createPopulationState.message);
    }

    if (
      createPopulationState.status === "error" ||
      createPopulationState.status === "validation_error"
    ) {
      console.error(createPopulationState.message);
    }
  }, [createPopulationState]);

  React.useEffect(() => {
    if (updatePopulationState.status === "success") {
      setUpdateModalOpen(false);
      setSelectedItem(null);

      toast.success(updatePopulationState.message);
    }

    if (
      updatePopulationState.status === "error" ||
      updatePopulationState.status === "validation_error"
    ) {
      console.error(updatePopulationState.message);
    }
  }, [updatePopulationState]);

  React.useEffect(() => {
    if (deletePopulationState.status === "success") {
      setDeleteModalOpen(false);
      setSelectedItem(null);

      toast.success(deletePopulationState.message);
    }

    if (
      deletePopulationState.status === "error" ||
      deletePopulationState.status === "validation_error"
    ) {
      console.error(deletePopulationState.message);
    }
  }, [deletePopulationState]);

  const handleClickCreate = () => {
    setCreateModalOpen(true);
  };

  const handleClickUpdate = (item: Tables<"villagers_population">) => {
    setSelectedItem(item);
    setUpdateForm({
      id: item.id,
      number_of_male: item.number_of_male,
      number_of_female: item.number_of_female,
      number_of_family_member: item.number_of_family_member,
      number_of_head_family: item.number_of_head_family,
      hamlet_id: item.hamlet_id,
    });
    setUpdateModalOpen(true);
  };

  const handleClickDelete = (item: Tables<"villagers_population">) => {
    setSelectedItem(item);
    setDeleteModalOpen(true);
  };

  return (
    <div className="w-full mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">
                Manajemen Daftar Populasi
              </CardTitle>
              <CardDescription>Kelola daftar populasi</CardDescription>
            </div>
            <Button
              onClick={handleClickCreate}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Tambah Populasi Baru
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">No</TableHead>
                  <TableHead>Laki-laki</TableHead>
                  <TableHead>Perempuan</TableHead>
                  <TableHead>Kepala Keluarga</TableHead>
                  <TableHead>Anggota Keluarga</TableHead>
                  <TableHead>Dusun</TableHead>
                  <TableHead className="w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {population.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-24 text-muted-foreground italic text-center"
                    >
                      Tidak ada data
                    </TableCell>
                  </TableRow>
                )}

                {population.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-medium">
                      {item.number_of_male}
                    </TableCell>
                    <TableCell className="font-medium">
                      {item.number_of_female}
                    </TableCell>
                    <TableCell className="font-medium">
                      {item.number_of_head_family}
                    </TableCell>
                    <TableCell className="font-medium">
                      {item.number_of_family_member}
                    </TableCell>
                    <TableCell className="font-medium">
                      {item.hamlets.name}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          onClick={() => handleClickUpdate(item)}
                          className="h-8 w-8 bg-yellow-600 hover:bg-yellow-600/60"
                        >
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Update</span>
                        </Button>
                        <Button
                          size="icon"
                          onClick={() => handleClickDelete(item)}
                          className="h-8 w-8 bg-destructive hover:bg-destructive/60"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Create Modal */}
      <ActionModal
        isOpen={createModalOpen}
        onOpenChange={setCreateModalOpen}
        title="Tambahkan Item Populasi Baru"
        description="Isi formulir di bawah ini untuk menambahkan item populasi baru."
      >
        <CreatePopulation
          state={createPopulationState}
          hamlets={hamlets}
          formAction={createPopulationAction}
          isPending={isPendingCreatePopulation}
          onCancel={() => setCreateModalOpen(false)}
        />
      </ActionModal>

      {/* Update Modal */}
      <ActionModal
        size="md"
        isOpen={updateModalOpen}
        onOpenChange={setUpdateModalOpen}
        title="Perbarui Item Populasi"
        description="Buat perubahan pada formulir di bawah ini untuk memperbarui item populasi."
      >
        <UpdatePopulation
          state={updatePopulationState}
          formAction={updatePopulationAction}
          isPending={isPendingUpdatePopulation}
          onCancel={() => setUpdateModalOpen(false)}
          updateForm={updateForm}
          setUpdateForm={setUpdateForm}
          hamlets={hamlets}
        />
      </ActionModal>

      {/* Delete Confirmation Modal */}
      <ActionModal
        size="md"
        isOpen={deleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        title="Hapus Item Populasi"
        description={`Apakah Anda yakin ingin menghapus data ini?
              Tindakan ini tidak dapat dibatalkan.`}
      >
        {selectedItem && (
          <DeletePopulation
            selectedItem={selectedItem}
            state={deletePopulationState}
            formAction={deletePopulationAction}
            isPending={isPendingDeletePopulation}
            onCancel={() => setDeleteModalOpen(false)}
          />
        )}
      </ActionModal>
    </div>
  );
}
