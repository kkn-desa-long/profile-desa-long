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
import CreateTribes from "./Create";
import UpdateTribes from "./Update";
import DeleteTribes from "./Delete";
import ActionModal from "../components/ActionModal";
import { createTribes, deleteTribes, updateTribes } from "./actions";
import { toast } from "sonner";

export default function TribesIndex({
  tribes,
}: {
  tribes: Tables<"tribes">[];
}) {
  const [createModalOpen, setCreateModalOpen] = React.useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = React.useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] =
    React.useState<Tables<"tribes"> | null>(null);
  const [updateForm, setUpdateForm] = React.useState<TablesUpdate<"tribes">>({
    id: "",
    name: "",
  });

  const [createTribesState, createTribesAction, isPendingCreateTribes] =
    React.useActionState(createTribes, {
      status: "idle",
    });
  const [updateTribesState, updateTribesAction, isPendingUpdateTribes] =
    React.useActionState(updateTribes, {
      status: "idle",
    });
  const [deleteTribesState, deleteTribesAction, isPendingDeleteTribes] =
    React.useActionState(deleteTribes, {
      status: "idle",
    });

  React.useEffect(() => {
    if (createTribesState.status === "success") {
      setCreateModalOpen(false);
      setSelectedItem(null);

      toast.success(createTribesState.message);
    }

    if (
      createTribesState.status === "error" ||
      createTribesState.status === "validation_error"
    ) {
      console.error(createTribesState.message);
    }
  }, [createTribesState]);

  React.useEffect(() => {
    if (updateTribesState.status === "success") {
      setUpdateModalOpen(false);
      setSelectedItem(null);

      toast.success(updateTribesState.message);
    }

    if (
      updateTribesState.status === "error" ||
      updateTribesState.status === "validation_error"
    ) {
      console.error(updateTribesState.message);
    }
  }, [updateTribesState]);

  React.useEffect(() => {
    if (deleteTribesState.status === "success") {
      setDeleteModalOpen(false);
      setSelectedItem(null);

      toast.success(deleteTribesState.message);
    }

    if (
      deleteTribesState.status === "error" ||
      deleteTribesState.status === "validation_error"
    ) {
      console.error(deleteTribesState.message);
    }
  }, [deleteTribesState]);

  const handleClickCreate = () => {
    setCreateModalOpen(true);
  };

  const handleClickUpdate = (item: Tables<"tribes">) => {
    setSelectedItem(item);
    setUpdateForm({
      id: item.id,
      name: item.name,
    });
    setUpdateModalOpen(true);
  };

  const handleClickDelete = (item: Tables<"tribes">) => {
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
                Manajemen Daftar Suku
              </CardTitle>
              <CardDescription>Kelola daftar suku</CardDescription>
            </div>
            <Button
              onClick={handleClickCreate}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Tambah Suku Baru
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">No</TableHead>
                  <TableHead>Nama Suku</TableHead>
                  <TableHead className="w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tribes.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-24 text-muted-foreground italic text-center"
                    >
                      Tidak ada data
                    </TableCell>
                  </TableRow>
                )}

                {tribes.map((item, index) => (
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
        title="Tambahkan Item Suku Baru"
        description="Isi formulir di bawah ini untuk menambahkan item suku baru."
      >
        <CreateTribes
          state={createTribesState}
          formAction={createTribesAction}
          isPending={isPendingCreateTribes}
          onCancel={() => setCreateModalOpen(false)}
        />
      </ActionModal>

      {/* Update Modal */}
      <ActionModal
        size="md"
        isOpen={updateModalOpen}
        onOpenChange={setUpdateModalOpen}
        title="Perbarui Item Suku"
        description="Buat perubahan pada formulir di bawah ini untuk memperbarui item suku."
      >
        <UpdateTribes
          state={updateTribesState}
          formAction={updateTribesAction}
          isPending={isPendingUpdateTribes}
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
        title="Hapus Item Suku"
        description={`Apakah Anda yakin ingin menghapus "${selectedItem?.name}"?
              Tindakan ini tidak dapat dibatalkan.`}
      >
        {selectedItem && (
          <DeleteTribes
            selectedItem={selectedItem}
            state={deleteTribesState}
            formAction={deleteTribesAction}
            isPending={isPendingDeleteTribes}
            onCancel={() => setDeleteModalOpen(false)}
          />
        )}
      </ActionModal>
    </div>
  );
}
