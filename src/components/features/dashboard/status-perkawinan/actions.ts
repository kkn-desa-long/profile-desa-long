"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/supabase/api";

export type MarriageStatusState = {
  status: "idle" | "success" | "error" | "validation_error";
  message?: string;
  errors?: {
    id?: string[];
    name?: string[];
  };
};

const MarriageStatusSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: "Status perkawinan harus diisi" }),
});

const CreateMarriageStatusSchema = MarriageStatusSchema.omit({ id: true });

const DeleteMarriageStatusSchema = MarriageStatusSchema.pick({ id: true });

async function createMarriageStatus(
  _prevState: MarriageStatusState,
  formData: FormData
): Promise<MarriageStatusState> {
  const validatedFields = CreateMarriageStatusSchema.safeParse({
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
    const { error } = await db.marriageStatus.create({
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

  revalidatePath("/dashboard/master/status-perkawinan", "layout");

  return {
    status: "success",
    message: "Berhasil Membuat Status Perkawinan!",
  };
}

async function updateMarriageStatus(
  _prevState: MarriageStatusState,
  formData: FormData
): Promise<MarriageStatusState> {
  const validatedFields = MarriageStatusSchema.safeParse({
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
    const { error } = await db.marriageStatus.update(id, {
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

  revalidatePath("/dashboard/master/status-perkawinan", "layout");

  return {
    status: "success",
    message: "Berhasil Memperbaharui Status Perkawinan!",
  };
}

async function deleteMarriageStatus(
  _prevState: MarriageStatusState,
  formData: FormData
): Promise<MarriageStatusState> {
  const validatedFields = DeleteMarriageStatusSchema.safeParse({
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
    const { error } = await db.marriageStatus.delete(id);

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

  revalidatePath("/dashboard/master/status-perkawinan", "layout");

  return {
    status: "success",
    message: "Berhasil Menghapus Status Perkawinan!",
  };
}

export { createMarriageStatus, updateMarriageStatus, deleteMarriageStatus };
