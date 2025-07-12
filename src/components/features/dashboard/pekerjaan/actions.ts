"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/supabase/api";

export type JobState = {
  status: "idle" | "success" | "error" | "validation_error";
  message?: string;
  errors?: {
    id?: string[];
    name?: string[];
  };
};

const JobSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: "Nama pekerjaan harus diisi" }),
});

const CreateJobSchema = JobSchema.omit({ id: true });

const DeleteJobSchema = JobSchema.pick({ id: true });

async function createJob(
  _prevState: JobState,
  formData: FormData
): Promise<JobState> {
  const validatedFields = CreateJobSchema.safeParse({
    name: formData.get("name"),
  });

  if (!validatedFields.success) {
    return {
      status: "validation_error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const { name } = validatedFields.data;

  try {
    const { error } = await db.jobs.create({
      name,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error(error);

    return {
      status: "error",
      message: "Terjadi kesalahan. Silakan coba lagi nanti",
    };
  }

  revalidatePath("/dashboard/master/pekerjaan", "layout");

  return {
    status: "success",
    message: "Berhasil Membuat Pekerjaan!",
  };
}

async function updateJob(
  _prevState: JobState,
  formData: FormData
): Promise<JobState> {
  const validatedFields = JobSchema.safeParse({
    id: formData.get("id"),
    name: formData.get("name"),
  });

  if (!validatedFields.success) {
    return {
      status: "validation_error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const { id, name } = validatedFields.data;

  try {
    const { error } = await db.jobs.update(id, {
      name,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error(error);

    return {
      status: "error",
      message: "Terjadi kesalahan. Silakan coba lagi nanti",
    };
  }

  revalidatePath("/dashboard/master/pekerjaan", "layout");

  return {
    status: "success",
    message: "Berhasil Memperbaharui Pekerjaan!",
  };
}

async function deleteJob(
  _prevState: JobState,
  formData: FormData
): Promise<JobState> {
  const validatedFields = DeleteJobSchema.safeParse({
    id: formData.get("id"),
  });

  if (!validatedFields.success) {
    return {
      status: "validation_error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const { id } = validatedFields.data;

  try {
    const { error } = await db.jobs.delete(id);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error(error);

    return {
      status: "error",
      message: "Gagal Menghapus! Silahkan Coba Beberapa Saat Lagi",
    };
  }

  revalidatePath("/dashboard/master/pekerjaan", "layout");

  return {
    status: "success",
    message: "Berhasil Menghapus Pekerjaan!",
  };
}

export { createJob, updateJob, deleteJob };
