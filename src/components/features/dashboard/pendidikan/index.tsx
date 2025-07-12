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
import CreateEducation from "./Create";
import UpdateEducation from "./Update";
import DeleteEducation from "./Delete";
import ActionModal from "../components/ActionModal";
import { createEducation, deleteEducation, updateEducation } from "./actions";
import { toast } from "sonner";

export default function EducationIndex({
  educations,
}: {
  educations: Tables<"education">[];
}) {
  const [createModalOpen, setCreateModalOpen] = React.useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = React.useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] =
    React.useState<Tables<"education"> | null>(null);
  const [updateForm, setUpdateForm] = React.useState<TablesUpdate<"education">>(
    {
      id: "",
      name: "",
    }
  );

  const [
    createEducationState,
    createEducationAction,
    isPendingCreateEducation,
  ] = React.useActionState(createEducation, {
    status: "idle",
  });
  const [
    updateEducationState,
    updateEducationAction,
    isPendingUpdateEducation,
  ] = React.useActionState(updateEducation, {
    status: "idle",
  });
  const [
    deleteEducationState,
    deleteEducationAction,
    isPendingDeleteEducation,
  ] = React.useActionState(deleteEducation, {
    status: "idle",
  });

  React.useEffect(() => {
    if (createEducationState.status === "success") {
      setCreateModalOpen(false);
      setSelectedItem(null);

      toast.success(createEducationState.message);
    }

    if (
      createEducationState.status === "error" ||
      createEducationState.status === "validation_error"
    ) {
      console.error(createEducationState.message);
    }
  }, [createEducationState]);

  React.useEffect(() => {
    if (updateEducationState.status === "success") {
      setUpdateModalOpen(false);
      setSelectedItem(null);

      toast.success(updateEducationState.message);
    }

    if (
      updateEducationState.status === "error" ||
      updateEducationState.status === "validation_error"
    ) {
      console.error(updateEducationState.message);
    }
  }, [updateEducationState]);

  React.useEffect(() => {
    if (deleteEducationState.status === "success") {
      setDeleteModalOpen(false);
      setSelectedItem(null);

      toast.success(deleteEducationState.message);
    }

    if (
      deleteEducationState.status === "error" ||
      deleteEducationState.status === "validation_error"
    ) {
      console.error(deleteEducationState.message);
    }
  }, [deleteEducationState]);

  const handleClickCreate = () => {
    setCreateModalOpen(true);
  };

  const handleClickUpdate = (item: Tables<"education">) => {
    setSelectedItem(item);
    setUpdateForm({
      id: item.id,
      name: item.name,
    });
    setUpdateModalOpen(true);
  };

  const handleClickDelete = (item: Tables<"education">) => {
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
                Manajemen Daftar Pendidikan
              </CardTitle>
              <CardDescription>Kelola daftar pendidikan</CardDescription>
            </div>
            <Button
              onClick={handleClickCreate}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Tambah Pendidikan Baru
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">No</TableHead>
                  <TableHead>Nama Pendidikan</TableHead>
                  <TableHead className="w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {educations.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-24 text-muted-foreground italic text-center"
                    >
                      Tidak ada data
                    </TableCell>
                  </TableRow>
                )}

                {educations.map((item, index) => (
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
        title="Tambahkan Item Pendidikan Baru"
        description="Isi formulir di bawah ini untuk menambahkan item pendidikan baru."
      >
        <CreateEducation
          state={createEducationState}
          formAction={createEducationAction}
          isPending={isPendingCreateEducation}
          onCancel={() => setCreateModalOpen(false)}
        />
      </ActionModal>

      {/* Update Modal */}
      <ActionModal
        size="md"
        isOpen={updateModalOpen}
        onOpenChange={setUpdateModalOpen}
        title="Perbarui Item Pendidikan"
        description="Buat perubahan pada formulir di bawah ini untuk memperbarui item pendidikan."
      >
        <UpdateEducation
          state={updateEducationState}
          formAction={updateEducationAction}
          isPending={isPendingUpdateEducation}
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
        title="Hapus Item Pendidikan"
        description={`Apakah Anda yakin ingin menghapus "${selectedItem?.name}"?
              Tindakan ini tidak dapat dibatalkan.`}
      >
        {selectedItem && (
          <DeleteEducation
            selectedItem={selectedItem}
            state={deleteEducationState}
            formAction={deleteEducationAction}
            isPending={isPendingDeleteEducation}
            onCancel={() => setDeleteModalOpen(false)}
          />
        )}
      </ActionModal>
    </div>
  );
}
