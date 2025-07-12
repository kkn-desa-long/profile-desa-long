"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/supabase/api";

export type GalleryState = {
  status: "idle" | "success" | "error" | "validation_error";
  message?: string;
  errors?: {
    id?: string[];
    title?: string[];
    description?: string[];
    img_url?: string[];
  };
};

const GallerySchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, { message: "Judul harus diisi" }),
  description: z.string(),
  img_url: z.string(),
});

const CreateGallerySchema = GallerySchema.omit({ id: true });

const DeleteGallerySchema = GallerySchema.pick({ id: true });

async function createGallery(
  _prevState: GalleryState,
  formData: FormData
): Promise<GalleryState> {
  const validatedFields = CreateGallerySchema.safeParse({
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
    const { error } = await db.gallery.create({
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

  revalidatePath("/dashboard/galeri", "layout");

  return {
    status: "success",
    message: "Berhasil Membuat Galeri!",
  };
}

async function updateGallery(
  _prevState: GalleryState,
  formData: FormData
): Promise<GalleryState> {
  const validatedFields = GallerySchema.safeParse({
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
    const { error } = await db.gallery.update(id, {
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

  revalidatePath("/dashboard/galeri", "layout");

  return {
    status: "success",
    message: "Berhasil Memperbaharui Galeri!",
  };
}

async function deleteGallery(
  _prevState: GalleryState,
  formData: FormData
): Promise<GalleryState> {
  const validatedFields = DeleteGallerySchema.safeParse({
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
    const { error } = await db.gallery.delete(id);

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

  revalidatePath("/dashboard/galeri", "layout");

  return {
    status: "success",
    message: "Berhasil Menghapus Galeri!",
  };
}

export { createGallery, updateGallery, deleteGallery };
