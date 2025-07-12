"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/supabase/api";

export type HamletsState = {
  status: "idle" | "success" | "error" | "validation_error";
  message?: string;
  errors?: {
    id?: string[];
    name?: string[];
  };
};

const HamletsSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: "Nama dusun harus diisi" }),
});

const CreateHamletsSchema = HamletsSchema.omit({ id: true });

const DeleteHamletsSchema = HamletsSchema.pick({ id: true });

async function createHamlets(
  _prevState: HamletsState,
  formData: FormData
): Promise<HamletsState> {
  const validatedFields = CreateHamletsSchema.safeParse({
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
    const { error } = await db.hamlets.create({
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

  revalidatePath("/dashboard/master/dusun", "layout");

  return {
    status: "success",
    message: "Berhasil Membuat Dusun!",
  };
}

async function updateHamlets(
  _prevState: HamletsState,
  formData: FormData
): Promise<HamletsState> {
  const validatedFields = HamletsSchema.safeParse({
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
    const { error } = await db.hamlets.update(id, {
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

  revalidatePath("/dashboard/master/dusun", "layout");

  return {
    status: "success",
    message: "Berhasil Memperbaharui Dusun!",
  };
}

async function deleteHamlets(
  _prevState: HamletsState,
  formData: FormData
): Promise<HamletsState> {
  const validatedFields = DeleteHamletsSchema.safeParse({
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
    const { error } = await db.hamlets.delete(id);

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

  revalidatePath("/dashboard/master/dusun", "layout");

  return {
    status: "success",
    message: "Berhasil Menghapus Dusun!",
  };
}

export { createHamlets, updateHamlets, deleteHamlets };
