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
import CreateAgeRange from "./Create";
import UpdateAgeRange from "./Update";
import DeleteAgeRange from "./Delete";
import ActionModal from "../components/ActionModal";
import { createAgeRange, deleteAgeRange, updateAgeRange } from "./actions";
import { toast } from "sonner";

export default function AgeRangeIndex({
  ageRange,
}: {
  ageRange: Tables<"age_range">[];
}) {
  const [createModalOpen, setCreateModalOpen] = React.useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = React.useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] =
    React.useState<Tables<"age_range"> | null>(null);
  const [updateForm, setUpdateForm] = React.useState<TablesUpdate<"age_range">>(
    {
      id: "",
      name: "",
    }
  );

  const [createAgeRangeState, createAgeRangeAction, isPendingCreateAgeRange] =
    React.useActionState(createAgeRange, {
      status: "idle",
    });
  const [updateAgeRangeState, updateAgeRangeAction, isPendingUpdateAgeRange] =
    React.useActionState(updateAgeRange, {
      status: "idle",
    });
  const [deleteAgeRangeState, deleteAgeRangeAction, isPendingDeleteAgeRange] =
    React.useActionState(deleteAgeRange, {
      status: "idle",
    });

  React.useEffect(() => {
    if (createAgeRangeState.status === "success") {
      setCreateModalOpen(false);
      setSelectedItem(null);

      toast.success(createAgeRangeState.message);
    }

    if (
      createAgeRangeState.status === "error" ||
      createAgeRangeState.status === "validation_error"
    ) {
      console.error(createAgeRangeState.message);
    }
  }, [createAgeRangeState]);

  React.useEffect(() => {
    if (updateAgeRangeState.status === "success") {
      setUpdateModalOpen(false);
      setSelectedItem(null);

      toast.success(updateAgeRangeState.message);
    }

    if (
      updateAgeRangeState.status === "error" ||
      updateAgeRangeState.status === "validation_error"
    ) {
      console.error(updateAgeRangeState.message);
    }
  }, [updateAgeRangeState]);

  React.useEffect(() => {
    if (deleteAgeRangeState.status === "success") {
      setDeleteModalOpen(false);
      setSelectedItem(null);

      toast.success(deleteAgeRangeState.message);
    }

    if (
      deleteAgeRangeState.status === "error" ||
      deleteAgeRangeState.status === "validation_error"
    ) {
      console.error(deleteAgeRangeState.message);
    }
  }, [deleteAgeRangeState]);

  const handleClickCreate = () => {
    setCreateModalOpen(true);
  };

  const handleClickUpdate = (item: Tables<"age_range">) => {
    setSelectedItem(item);
    setUpdateForm({
      id: item.id,
      name: item.name,
    });
    setUpdateModalOpen(true);
  };

  const handleClickDelete = (item: Tables<"age_range">) => {
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
                Manajemen Daftar Rentang Usia
              </CardTitle>
              <CardDescription>Kelola daftar rentang usia</CardDescription>
            </div>
            <Button
              onClick={handleClickCreate}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Tambah Rentang Usia Baru
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">No</TableHead>
                  <TableHead>Nama Rentang Usia</TableHead>
                  <TableHead className="w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ageRange.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-24 text-muted-foreground italic text-center"
                    >
                      Tidak ada data
                    </TableCell>
                  </TableRow>
                )}

                {ageRange.map((item, index) => (
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
        title="Tambahkan Item Rentang Usia Baru"
        description="Isi formulir di bawah ini untuk menambahkan item rentang usia baru."
      >
        <CreateAgeRange
          state={createAgeRangeState}
          formAction={createAgeRangeAction}
          isPending={isPendingCreateAgeRange}
          onCancel={() => setCreateModalOpen(false)}
        />
      </ActionModal>

      {/* Update Modal */}
      <ActionModal
        size="md"
        isOpen={updateModalOpen}
        onOpenChange={setUpdateModalOpen}
        title="Perbarui Item Rentang Usia"
        description="Buat perubahan pada formulir di bawah ini untuk memperbarui item rentang usia."
      >
        <UpdateAgeRange
          state={updateAgeRangeState}
          formAction={updateAgeRangeAction}
          isPending={isPendingUpdateAgeRange}
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
        title="Hapus Item Rentang Usia"
        description={`Apakah Anda yakin ingin menghapus "${selectedItem?.name}"?
              Tindakan ini tidak dapat dibatalkan.`}
      >
        {selectedItem && (
          <DeleteAgeRange
            selectedItem={selectedItem}
            state={deleteAgeRangeState}
            formAction={deleteAgeRangeAction}
            isPending={isPendingDeleteAgeRange}
            onCancel={() => setDeleteModalOpen(false)}
          />
        )}
      </ActionModal>
    </div>
  );
}
