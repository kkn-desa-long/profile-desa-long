"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/supabase/api";

export type EducationState = {
  status: "idle" | "success" | "error" | "validation_error";
  message?: string;
  errors?: {
    id?: string[];
    name?: string[];
  };
};

const EducationSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: "Nama pendidikan harus diisi" }),
});

const CreateEducationSchema = EducationSchema.omit({ id: true });

const DeleteEducationSchema = EducationSchema.pick({ id: true });

async function createEducation(
  _prevState: EducationState,
  formData: FormData
): Promise<EducationState> {
  const validatedFields = CreateEducationSchema.safeParse({
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
    const { error } = await db.educations.create({
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

  revalidatePath("/dashboard/pendidikan", "layout");

  return {
    status: "success",
    message: "Berhasil Membuat Pendidikan!",
  };
}

async function updateEducation(
  _prevState: EducationState,
  formData: FormData
): Promise<EducationState> {
  const validatedFields = EducationSchema.safeParse({
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
    const { error } = await db.educations.update(id, {
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

  revalidatePath("/dashboard/pendidikan", "layout");

  return {
    status: "success",
    message: "Berhasil Memperbaharui Pendidikan!",
  };
}

async function deleteEducation(
  _prevState: EducationState,
  formData: FormData
): Promise<EducationState> {
  const validatedFields = DeleteEducationSchema.safeParse({
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
    const { error } = await db.educations.delete(id);

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

  revalidatePath("/dashboard/pendidikan", "layout");

  return {
    status: "success",
    message: "Berhasil Menghapus Pendidikan!",
  };
}

export { createEducation, updateEducation, deleteEducation };
