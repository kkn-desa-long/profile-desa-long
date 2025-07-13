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
import CreateHamlets from "./Create";
import UpdateHamlets from "./Update";
import DeleteHamlets from "./Delete";
import ActionModal from "../components/ActionModal";
import { createHamlets, deleteHamlets, updateHamlets } from "./actions";
import { toast } from "sonner";

export default function HamletsIndex({
  hamlets,
}: {
  hamlets: Tables<"hamlets">[];
}) {
  const [createModalOpen, setCreateModalOpen] = React.useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = React.useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] =
    React.useState<Tables<"hamlets"> | null>(null);
  const [updateForm, setUpdateForm] = React.useState<TablesUpdate<"hamlets">>({
    id: "",
    name: "",
  });

  const [createHamletsState, createHamletsAction, isPendingCreateHamlets] =
    React.useActionState(createHamlets, {
      status: "idle",
    });
  const [updateHamletsState, updateHamletsAction, isPendingUpdateHamlets] =
    React.useActionState(updateHamlets, {
      status: "idle",
    });
  const [deleteHamletsState, deleteHamletsAction, isPendingDeleteHamlets] =
    React.useActionState(deleteHamlets, {
      status: "idle",
    });

  React.useEffect(() => {
    if (createHamletsState.status === "success") {
      setCreateModalOpen(false);
      setSelectedItem(null);

      toast.success(createHamletsState.message);
    }

    if (
      createHamletsState.status === "error" ||
      createHamletsState.status === "validation_error"
    ) {
      console.error(createHamletsState.message);
    }
  }, [createHamletsState]);

  React.useEffect(() => {
    if (updateHamletsState.status === "success") {
      setUpdateModalOpen(false);
      setSelectedItem(null);

      toast.success(updateHamletsState.message);
    }

    if (
      updateHamletsState.status === "error" ||
      updateHamletsState.status === "validation_error"
    ) {
      console.error(updateHamletsState.message);
    }
  }, [updateHamletsState]);

  React.useEffect(() => {
    if (deleteHamletsState.status === "success") {
      setDeleteModalOpen(false);
      setSelectedItem(null);

      toast.success(deleteHamletsState.message);
    }

    if (
      deleteHamletsState.status === "error" ||
      deleteHamletsState.status === "validation_error"
    ) {
      console.error(deleteHamletsState.message);
    }
  }, [deleteHamletsState]);

  const handleClickCreate = () => {
    setCreateModalOpen(true);
  };

  const handleClickUpdate = (item: Tables<"hamlets">) => {
    setSelectedItem(item);
    setUpdateForm({
      id: item.id,
      name: item.name,
    });
    setUpdateModalOpen(true);
  };

  const handleClickDelete = (item: Tables<"hamlets">) => {
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
                Manajemen Daftar Dusun
              </CardTitle>
              <CardDescription>Kelola daftar dusun</CardDescription>
            </div>
            <Button
              onClick={handleClickCreate}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Tambah Dusun Baru
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">No</TableHead>
                  <TableHead>Nama Dusun</TableHead>
                  <TableHead className="w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hamlets.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-24 text-muted-foreground italic text-center"
                    >
                      Tidak ada data
                    </TableCell>
                  </TableRow>
                )}

                {hamlets.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
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
        title="Tambahkan Item Dusun Baru"
        description="Isi formulir di bawah ini untuk menambahkan item dusun baru."
      >
        <CreateHamlets
          state={createHamletsState}
          formAction={createHamletsAction}
          isPending={isPendingCreateHamlets}
          onCancel={() => setCreateModalOpen(false)}
        />
      </ActionModal>

      {/* Update Modal */}
      <ActionModal
        size="md"
        isOpen={updateModalOpen}
        onOpenChange={setUpdateModalOpen}
        title="Perbarui Item Dusun"
        description="Buat perubahan pada formulir di bawah ini untuk memperbarui item dusun."
      >
        <UpdateHamlets
          state={updateHamletsState}
          formAction={updateHamletsAction}
          isPending={isPendingUpdateHamlets}
          onCancel={() => setUpdateModalOpen(false)}
          updateForm={updateForm}
          setUpdateForm={setUpdateForm}
        />
      </ActionModal>

      {/* Delete Confirmation Modal */}
      <ActionModal
        size="md"
        isOpen={deleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        title="Hapus Item Dusun"
        description={`Apakah Anda yakin ingin menghapus "${selectedItem?.name}"?
              Tindakan ini tidak dapat dibatalkan.`}
      >
        {selectedItem && (
          <DeleteHamlets
            selectedItem={selectedItem}
            state={deleteHamletsState}
            formAction={deleteHamletsAction}
            isPending={isPendingDeleteHamlets}
            onCancel={() => setDeleteModalOpen(false)}
          />
        )}
      </ActionModal>
    </div>
  );
}
