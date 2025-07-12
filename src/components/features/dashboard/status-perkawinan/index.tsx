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
import CreateMarriageStatus from "./Create";
import UpdateMarriageStatus from "./Update";
import DeleteMarriageStatus from "./Delete";
import ActionModal from "../components/ActionModal";
import {
  createMarriageStatus,
  deleteMarriageStatus,
  updateMarriageStatus,
} from "./actions";
import { toast } from "sonner";

export default function MarriageStatusIndex({
  marriageStatus,
}: {
  marriageStatus: Tables<"marriage_status">[];
}) {
  const [createModalOpen, setCreateModalOpen] = React.useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = React.useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] =
    React.useState<Tables<"marriage_status"> | null>(null);
  const [updateForm, setUpdateForm] = React.useState<
    TablesUpdate<"marriage_status">
  >({
    id: "",
    name: "",
  });

  const [
    createMarriageStatusState,
    createMarriageStatusAction,
    isPendingCreateMarriageStatus,
  ] = React.useActionState(createMarriageStatus, {
    status: "idle",
  });
  const [
    updateMarriageStatusState,
    updateMarriageStatusAction,
    isPendingUpdateMarriageStatus,
  ] = React.useActionState(updateMarriageStatus, {
    status: "idle",
  });
  const [
    deleteMarriageStatusState,
    deleteMarriageStatusAction,
    isPendingDeleteMarriageStatus,
  ] = React.useActionState(deleteMarriageStatus, {
    status: "idle",
  });

  React.useEffect(() => {
    if (createMarriageStatusState.status === "success") {
      setCreateModalOpen(false);
      setSelectedItem(null);

      toast.success(createMarriageStatusState.message);
    }

    if (
      createMarriageStatusState.status === "error" ||
      createMarriageStatusState.status === "validation_error"
    ) {
      console.error(createMarriageStatusState.message);
    }
  }, [createMarriageStatusState]);

  React.useEffect(() => {
    if (updateMarriageStatusState.status === "success") {
      setUpdateModalOpen(false);
      setSelectedItem(null);

      toast.success(updateMarriageStatusState.message);
    }

    if (
      updateMarriageStatusState.status === "error" ||
      updateMarriageStatusState.status === "validation_error"
    ) {
      console.error(updateMarriageStatusState.message);
    }
  }, [updateMarriageStatusState]);

  React.useEffect(() => {
    if (deleteMarriageStatusState.status === "success") {
      setDeleteModalOpen(false);
      setSelectedItem(null);

      toast.success(deleteMarriageStatusState.message);
    }

    if (
      deleteMarriageStatusState.status === "error" ||
      deleteMarriageStatusState.status === "validation_error"
    ) {
      console.error(deleteMarriageStatusState.message);
    }
  }, [deleteMarriageStatusState]);

  const handleClickCreate = () => {
    setCreateModalOpen(true);
  };

  const handleClickUpdate = (item: Tables<"marriage_status">) => {
    setSelectedItem(item);
    setUpdateForm({
      id: item.id,
      name: item.name,
    });
    setUpdateModalOpen(true);
  };

  const handleClickDelete = (item: Tables<"marriage_status">) => {
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
                Manajemen Daftar Status Perkawinan
              </CardTitle>
              <CardDescription>Kelola daftar status perkawinan</CardDescription>
            </div>
            <Button
              onClick={handleClickCreate}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Tambah Status Perkawinan Baru
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">No</TableHead>
                  <TableHead>Status Perkawinan</TableHead>
                  <TableHead className="w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {marriageStatus.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-24 text-muted-foreground italic text-center"
                    >
                      Tidak ada data
                    </TableCell>
                  </TableRow>
                )}

                {marriageStatus.map((item, index) => (
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
        title="Tambahkan Item Status Perkawinan Baru"
        description="Isi formulir di bawah ini untuk menambahkan item status perkawinan baru."
      >
        <CreateMarriageStatus
          state={createMarriageStatusState}
          formAction={createMarriageStatusAction}
          isPending={isPendingCreateMarriageStatus}
          onCancel={() => setCreateModalOpen(false)}
        />
      </ActionModal>

      {/* Update Modal */}
      <ActionModal
        size="md"
        isOpen={updateModalOpen}
        onOpenChange={setUpdateModalOpen}
        title="Perbarui Item Status Perkawinan"
        description="Buat perubahan pada formulir di bawah ini untuk memperbarui item status perkawinan."
      >
        <UpdateMarriageStatus
          state={updateMarriageStatusState}
          formAction={updateMarriageStatusAction}
          isPending={isPendingUpdateMarriageStatus}
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
        title="Hapus Item Status Perkawinan"
        description={`Apakah Anda yakin ingin menghapus "${selectedItem?.name}"?
              Tindakan ini tidak dapat dibatalkan.`}
      >
        {selectedItem && (
          <DeleteMarriageStatus
            selectedItem={selectedItem}
            state={deleteMarriageStatusState}
            formAction={deleteMarriageStatusAction}
            isPending={isPendingDeleteMarriageStatus}
            onCancel={() => setDeleteModalOpen(false)}
          />
        )}
      </ActionModal>
    </div>
  );
}
