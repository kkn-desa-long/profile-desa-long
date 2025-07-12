"use client";

import React from "react";
import Image from "next/image";
import { Edit, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PLACEHOLDER_IMG_URL } from "@/constants";
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
import CreateVillageGovernment from "./Create";
import UpdateVillageGovernment from "./Update";
import DeleteVillageGovernment from "./Delete";
import ActionModal from "../components/ActionModal";
import {
  createVillageGovernment,
  deleteVillageGovernment,
  updateVillageGovernment,
} from "./actions";
import { toast } from "sonner";

export default function VillageGovernmentIndex({
  villageGovernment,
}: {
  villageGovernment: Tables<"village_government">[];
}) {
  const [createModalOpen, setCreateModalOpen] = React.useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = React.useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] =
    React.useState<Tables<"village_government"> | null>(null);
  const [updateForm, setUpdateForm] = React.useState<
    TablesUpdate<"village_government">
  >({
    id: "",
    title: "",
    description: "",
    img_url: "",
  });

  const [
    createVillageGovernmentState,
    createVillageGovernmentAction,
    isPendingCreateVillageGovernment,
  ] = React.useActionState(createVillageGovernment, {
    status: "idle",
  });
  const [
    updateVillageGovernmentState,
    updateVillageGovernmentAction,
    isPendingUpdateVillageGovernment,
  ] = React.useActionState(updateVillageGovernment, {
    status: "idle",
  });
  const [
    deleteVillageGovernmentState,
    deleteVillageGovernmentAction,
    isPendingDeleteVillageGovernment,
  ] = React.useActionState(deleteVillageGovernment, {
    status: "idle",
  });

  React.useEffect(() => {
    if (createVillageGovernmentState.status === "success") {
      setCreateModalOpen(false);
      setSelectedItem(null);

      toast.success(createVillageGovernmentState.message);
    }

    if (
      createVillageGovernmentState.status === "error" ||
      createVillageGovernmentState.status === "validation_error"
    ) {
      console.error(createVillageGovernmentState.message);
    }
  }, [createVillageGovernmentState]);

  React.useEffect(() => {
    if (updateVillageGovernmentState.status === "success") {
      setUpdateModalOpen(false);
      setSelectedItem(null);

      toast.success(updateVillageGovernmentState.message);
    }

    if (
      updateVillageGovernmentState.status === "error" ||
      updateVillageGovernmentState.status === "validation_error"
    ) {
      console.error(updateVillageGovernmentState.message);
    }
  }, [updateVillageGovernmentState]);

  React.useEffect(() => {
    if (deleteVillageGovernmentState.status === "success") {
      setDeleteModalOpen(false);
      setSelectedItem(null);

      toast.success(deleteVillageGovernmentState.message);
    }

    if (
      deleteVillageGovernmentState.status === "error" ||
      deleteVillageGovernmentState.status === "validation_error"
    ) {
      console.error(deleteVillageGovernmentState.message);
    }
  }, [deleteVillageGovernmentState]);

  const handleClickCreate = () => {
    setCreateModalOpen(true);
  };

  const handleClickUpdate = (item: Tables<"village_government">) => {
    setSelectedItem(item);
    setUpdateForm({
      id: item.id,
      title: item.title,
      description: item.description,
      img_url: item.img_url,
    });
    setUpdateModalOpen(true);
  };

  const handleClickDelete = (item: Tables<"village_government">) => {
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
                Manajemen Struktur Pemerintahan Desa
              </CardTitle>
              <CardDescription>
                Kelola struktur pemerintahan desa
              </CardDescription>
            </div>
            <Button
              onClick={handleClickCreate}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Tambah Struktur Pemerintahan Desa
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">No</TableHead>
                  <TableHead className="w-24">Gambar</TableHead>
                  <TableHead>Judul</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Deskripsi
                  </TableHead>
                  <TableHead className="w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {villageGovernment.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-24 text-muted-foreground italic text-center"
                    >
                      Tidak ada data
                    </TableCell>
                  </TableRow>
                )}

                {villageGovernment.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>
                      <div className="relative w-16 h-16 rounded-md overflow-hidden bg-muted">
                        <Image
                          src={item.img_url || PLACEHOLDER_IMG_URL}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell className="hidden md:table-cell max-w-xs">
                      <p className="truncate text-muted-foreground">
                        {item.description}
                      </p>
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
        title="Tambahkan Item Struktur Pemerintahan Desa"
        description="Isi formulir di bawah ini untuk menambahkan item struktur pemerintahan desa."
      >
        <CreateVillageGovernment
          state={createVillageGovernmentState}
          formAction={createVillageGovernmentAction}
          isPending={isPendingCreateVillageGovernment}
          onCancel={() => setCreateModalOpen(false)}
        />
      </ActionModal>

      {/* Update Modal */}
      <ActionModal
        size="md"
        isOpen={updateModalOpen}
        onOpenChange={setUpdateModalOpen}
        title="Perbarui Item Struktur Pemerintahan Desa"
        description="Buat perubahan pada formulir di bawah ini untuk memperbarui item struktur pemerintahan desa."
      >
        <UpdateVillageGovernment
          state={updateVillageGovernmentState}
          formAction={updateVillageGovernmentAction}
          isPending={isPendingUpdateVillageGovernment}
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
        title="Hapus Item Struktur Pemerintahan Desa"
        description={`Apakah Anda yakin ingin menghapus "${selectedItem?.title}"?
              Tindakan ini tidak dapat dibatalkan.`}
      >
        {selectedItem && (
          <DeleteVillageGovernment
            selectedItem={selectedItem}
            state={deleteVillageGovernmentState}
            formAction={deleteVillageGovernmentAction}
            isPending={isPendingDeleteVillageGovernment}
            onCancel={() => setDeleteModalOpen(false)}
          />
        )}
      </ActionModal>
    </div>
  );
}
