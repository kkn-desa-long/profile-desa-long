"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/supabase/api";

export type AgeRangeState = {
  status: "idle" | "success" | "error" | "validation_error";
  message?: string;
  errors?: {
    id?: string[];
    name?: string[];
  };
};

const AgeRangeSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: "Nama rentang usia harus diisi" }),
});

const CreateAgeRangeSchema = AgeRangeSchema.omit({ id: true });

const DeleteAgeRangeSchema = AgeRangeSchema.pick({ id: true });

async function createAgeRange(
  _prevState: AgeRangeState,
  formData: FormData
): Promise<AgeRangeState> {
  const validatedFields = CreateAgeRangeSchema.safeParse({
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
    const { error } = await db.ageRange.create({
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

  revalidatePath("/dashboard/master/rentang-usia", "layout");

  return {
    status: "success",
    message: "Berhasil Membuat Rentang Usia!",
  };
}

async function updateAgeRange(
  _prevState: AgeRangeState,
  formData: FormData
): Promise<AgeRangeState> {
  const validatedFields = AgeRangeSchema.safeParse({
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
    const { error } = await db.ageRange.update(id, {
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

  revalidatePath("/dashboard/master/rentang-usia", "layout");

  return {
    status: "success",
    message: "Berhasil Memperbaharui Rentang Usia!",
  };
}

async function deleteAgeRange(
  _prevState: AgeRangeState,
  formData: FormData
): Promise<AgeRangeState> {
  const validatedFields = DeleteAgeRangeSchema.safeParse({
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
    const { error } = await db.ageRange.delete(id);

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

  revalidatePath("/dashboard/master/rentang-usia", "layout");

  return {
    status: "success",
    message: "Berhasil Menghapus Rentang Usia!",
  };
}

export { createAgeRange, updateAgeRange, deleteAgeRange };
