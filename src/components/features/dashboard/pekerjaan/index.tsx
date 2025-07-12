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
import CreateJob from "./Create";
import UpdateJob from "./Update";
import DeleteJob from "./Delete";
import ActionModal from "../components/ActionModal";
import { createJob, deleteJob, updateJob } from "./actions";
import { toast } from "sonner";

export default function JobIndex({ jobs }: { jobs: Tables<"jobs">[] }) {
  const [createModalOpen, setCreateModalOpen] = React.useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = React.useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<Tables<"jobs"> | null>(
    null
  );
  const [updateForm, setUpdateForm] = React.useState<TablesUpdate<"jobs">>({
    id: "",
    name: "",
  });

  const [createJobState, createJobAction, isPendingCreateJob] =
    React.useActionState(createJob, {
      status: "idle",
    });
  const [updateJobState, updateJobAction, isPendingUpdateJob] =
    React.useActionState(updateJob, {
      status: "idle",
    });
  const [deleteJobState, deleteJobAction, isPendingDeleteJob] =
    React.useActionState(deleteJob, {
      status: "idle",
    });

  React.useEffect(() => {
    if (createJobState.status === "success") {
      setCreateModalOpen(false);
      setSelectedItem(null);

      toast.success(createJobState.message);
    }

    if (
      createJobState.status === "error" ||
      createJobState.status === "validation_error"
    ) {
      console.error(createJobState.message);
    }
  }, [createJobState]);

  React.useEffect(() => {
    if (updateJobState.status === "success") {
      setUpdateModalOpen(false);
      setSelectedItem(null);

      toast.success(updateJobState.message);
    }

    if (
      updateJobState.status === "error" ||
      updateJobState.status === "validation_error"
    ) {
      console.error(updateJobState.message);
    }
  }, [updateJobState]);

  React.useEffect(() => {
    if (deleteJobState.status === "success") {
      setDeleteModalOpen(false);
      setSelectedItem(null);

      toast.success(deleteJobState.message);
    }

    if (
      deleteJobState.status === "error" ||
      deleteJobState.status === "validation_error"
    ) {
      console.error(deleteJobState.message);
    }
  }, [deleteJobState]);

  const handleClickCreate = () => {
    setCreateModalOpen(true);
  };

  const handleClickUpdate = (item: Tables<"jobs">) => {
    setSelectedItem(item);
    setUpdateForm({
      id: item.id,
      name: item.name,
    });
    setUpdateModalOpen(true);
  };

  const handleClickDelete = (item: Tables<"jobs">) => {
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
                Manajemen Daftar Pekerjaan
              </CardTitle>
              <CardDescription>Kelola daftar pekerjaan</CardDescription>
            </div>
            <Button
              onClick={handleClickCreate}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Tambah Pekerjaan Baru
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">No</TableHead>
                  <TableHead>Nama Pekerjaan</TableHead>
                  <TableHead className="w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-24 text-muted-foreground italic text-center"
                    >
                      Tidak ada data
                    </TableCell>
                  </TableRow>
                )}

                {jobs.map((item, index) => (
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
        title="Tambahkan Item Pekerjaan Baru"
        description="Isi formulir di bawah ini untuk menambahkan item pekerjaan baru."
      >
        <CreateJob
          state={createJobState}
          formAction={createJobAction}
          isPending={isPendingCreateJob}
          onCancel={() => setCreateModalOpen(false)}
        />
      </ActionModal>

      {/* Update Modal */}
      <ActionModal
        size="md"
        isOpen={updateModalOpen}
        onOpenChange={setUpdateModalOpen}
        title="Perbarui Item Pekerjaan"
        description="Buat perubahan pada formulir di bawah ini untuk memperbarui item pekerjaan."
      >
        <UpdateJob
          state={updateJobState}
          formAction={updateJobAction}
          isPending={isPendingUpdateJob}
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
        title="Hapus Item Pekerjaan"
        description={`Apakah Anda yakin ingin menghapus "${selectedItem?.name}"?
              Tindakan ini tidak dapat dibatalkan.`}
      >
        {selectedItem && (
          <DeleteJob
            selectedItem={selectedItem}
            state={deleteJobState}
            formAction={deleteJobAction}
            isPending={isPendingDeleteJob}
            onCancel={() => setDeleteModalOpen(false)}
          />
        )}
      </ActionModal>
    </div>
  );
}
