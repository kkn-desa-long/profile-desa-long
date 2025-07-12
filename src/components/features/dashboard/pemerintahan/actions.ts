"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/supabase/api";

export type VillageGovernmentState = {
  status: "idle" | "success" | "error" | "validation_error";
  message?: string;
  errors?: {
    id?: string[];
    title?: string[];
    description?: string[];
    img_url?: string[];
  };
};

const VillageGovernmentSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, { message: "Judul harus diisi" }),
  description: z.string(),
  img_url: z.string(),
});

const CreateVillageGovernmentSchema = VillageGovernmentSchema.omit({
  id: true,
});

const DeleteVillageGovernmentSchema = VillageGovernmentSchema.pick({
  id: true,
});

async function createVillageGovernment(
  _prevState: VillageGovernmentState,
  formData: FormData
): Promise<VillageGovernmentState> {
  const validatedFields = CreateVillageGovernmentSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    img_url: formData.get("img_url"),
  });

  if (!validatedFields.success) {
    return {
      status: "validation_error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const { title, description, img_url } = validatedFields.data;

  try {
    const { error } = await db.villageGovernment.create({
      title,
      description,
      img_url,
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

  revalidatePath("/dashboard/pemerintahan", "layout");

  return {
    status: "success",
    message: "Berhasil Membuat Struktur Pemerintahan Desa!",
  };
}

async function updateVillageGovernment(
  _prevState: VillageGovernmentState,
  formData: FormData
): Promise<VillageGovernmentState> {
  const validatedFields = VillageGovernmentSchema.safeParse({
    id: formData.get("id"),
    title: formData.get("title"),
    description: formData.get("description"),
    img_url: formData.get("img_url"),
  });

  if (!validatedFields.success) {
    return {
      status: "validation_error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const { id, title, description, img_url } = validatedFields.data;

  try {
    const { error } = await db.villageGovernment.update(id, {
      title,
      description,
      img_url,
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

  revalidatePath("/dashboard/pemerintahan", "layout");

  return {
    status: "success",
    message: "Berhasil Memperbaharui Struktur Pemerintahan Desa!",
  };
}

async function deleteVillageGovernment(
  _prevState: VillageGovernmentState,
  formData: FormData
): Promise<VillageGovernmentState> {
  const validatedFields = DeleteVillageGovernmentSchema.safeParse({
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
    const { error } = await db.villageGovernment.delete(id);

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

  revalidatePath("/dashboard/pemerintahan", "layout");

  return {
    status: "success",
    message: "Berhasil Menghapus Struktur Pemerintahan Desa!",
  };
}

export {
  createVillageGovernment,
  updateVillageGovernment,
  deleteVillageGovernment,
};
