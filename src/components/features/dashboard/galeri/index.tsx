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
import CreateGallery from "./Create";
import UpdateGallery from "./Update";
import DeleteGallery from "./Delete";
import ActionModal from "../components/ActionModal";
import { createGallery, deleteGallery, updateGallery } from "./actions";
import { toast } from "sonner";

export default function GaleriIndex({
  galleryItems,
}: {
  galleryItems: Tables<"gallery">[];
}) {
  const [createModalOpen, setCreateModalOpen] = React.useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = React.useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] =
    React.useState<Tables<"gallery"> | null>(null);
  const [updateForm, setUpdateForm] = React.useState<TablesUpdate<"gallery">>({
    id: "",
    title: "",
    description: "",
    img_url: "",
  });

  const [createGalleryState, createGalleryAction, isPendingCreateGallery] =
    React.useActionState(createGallery, {
      status: "idle",
    });
  const [updateGalleryState, updateGalleryAction, isPendingUpdateGallery] =
    React.useActionState(updateGallery, {
      status: "idle",
    });
  const [deleteGalleryState, deleteGalleryAction, isPendingDeleteGallery] =
    React.useActionState(deleteGallery, {
      status: "idle",
    });

  React.useEffect(() => {
    if (createGalleryState.status === "success") {
      setCreateModalOpen(false);
      setSelectedItem(null);

      toast.success(createGalleryState.message);
    }

    if (
      createGalleryState.status === "error" ||
      createGalleryState.status === "validation_error"
    ) {
      console.error(createGalleryState.message);
    }
  }, [createGalleryState]);

  React.useEffect(() => {
    if (updateGalleryState.status === "success") {
      setUpdateModalOpen(false);
      setSelectedItem(null);

      toast.success(updateGalleryState.message);
    }

    if (
      updateGalleryState.status === "error" ||
      updateGalleryState.status === "validation_error"
    ) {
      console.error(updateGalleryState.message);
    }
  }, [updateGalleryState]);

  React.useEffect(() => {
    if (deleteGalleryState.status === "success") {
      setDeleteModalOpen(false);
      setSelectedItem(null);

      toast.success(deleteGalleryState.message);
    }

    if (
      deleteGalleryState.status === "error" ||
      deleteGalleryState.status === "validation_error"
    ) {
      console.error(deleteGalleryState.message);
    }
  }, [deleteGalleryState]);

  const handleClickCreate = () => {
    setCreateModalOpen(true);
  };

  const handleClickUpdate = (item: Tables<"gallery">) => {
    setSelectedItem(item);
    setUpdateForm({
      id: item.id,
      title: item.title,
      description: item.description,
      img_url: item.img_url,
    });
    setUpdateModalOpen(true);
  };

  const handleClickDelete = (item: Tables<"gallery">) => {
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
                Manajemen Galeri
              </CardTitle>
              <CardDescription>
                Kelola galeri gambar, judul, dan deskripsi
              </CardDescription>
            </div>
            <Button
              onClick={handleClickCreate}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Tambah Galeri Baru
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
                {galleryItems.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-24 text-muted-foreground italic text-center"
                    >
                      Tidak ada data
                    </TableCell>
                  </TableRow>
                )}

                {galleryItems.map((item, index) => (
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
        title="Tambahkan Item Galeri Baru"
        description="Isi formulir di bawah ini untuk menambahkan item galeri baru."
      >
        <CreateGallery
          state={createGalleryState}
          formAction={createGalleryAction}
          isPending={isPendingCreateGallery}
          onCancel={() => setCreateModalOpen(false)}
        />
      </ActionModal>

      {/* Update Modal */}
      <ActionModal
        size="md"
        isOpen={updateModalOpen}
        onOpenChange={setUpdateModalOpen}
        title="Perbarui Item Galeri"
        description="Buat perubahan pada formulir di bawah ini untuk memperbarui item galeri."
      >
        <UpdateGallery
          state={updateGalleryState}
          formAction={updateGalleryAction}
          isPending={isPendingUpdateGallery}
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
        title="Hapus Item Galeri"
        description={`Apakah Anda yakin ingin menghapus "${selectedItem?.title}"?
              Tindakan ini tidak dapat dibatalkan.`}
      >
        {selectedItem && (
          <DeleteGallery
            selectedItem={selectedItem}
            state={deleteGalleryState}
            formAction={deleteGalleryAction}
            isPending={isPendingDeleteGallery}
            onCancel={() => setDeleteModalOpen(false)}
          />
        )}
      </ActionModal>
    </div>
  );
}
