"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/supabase/api";

export type TribesState = {
  status: "idle" | "success" | "error" | "validation_error";
  message?: string;
  errors?: {
    id?: string[];
    name?: string[];
  };
};

const TribesSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: "Nama suku harus diisi" }),
});

const CreateTribesSchema = TribesSchema.omit({ id: true });

const DeleteTribesSchema = TribesSchema.pick({ id: true });

async function createTribes(
  _prevState: TribesState,
  formData: FormData
): Promise<TribesState> {
  const validatedFields = CreateTribesSchema.safeParse({
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
    const { error } = await db.tribes.create({
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

  revalidatePath("/dashboard/master/suku", "layout");

  return {
    status: "success",
    message: "Berhasil Membuat Suku!",
  };
}

async function updateTribes(
  _prevState: TribesState,
  formData: FormData
): Promise<TribesState> {
  const validatedFields = TribesSchema.safeParse({
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
    const { error } = await db.tribes.update(id, {
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

  revalidatePath("/dashboard/master/suku", "layout");

  return {
    status: "success",
    message: "Berhasil Memperbaharui Suku!",
  };
}

async function deleteTribes(
  _prevState: TribesState,
  formData: FormData
): Promise<TribesState> {
  const validatedFields = DeleteTribesSchema.safeParse({
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
    const { error } = await db.tribes.delete(id);

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

  revalidatePath("/dashboard/master/suku", "layout");

  return {
    status: "success",
    message: "Berhasil Menghapus Suku!",
  };
}

export { createTribes, updateTribes, deleteTribes };
