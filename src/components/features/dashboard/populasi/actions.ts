"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/supabase/api";

export type PopulationState = {
  status: "idle" | "success" | "error" | "validation_error";
  message?: string;
  errors?: {
    id?: string[];
    number_of_male?: string[];
    number_of_female?: string[];
    number_of_head_family?: string[];
    number_of_family_member?: string[];
    hamlet_id?: string[];
  };
};

const PopulationSchema = z.object({
  id: z.string().uuid(),
  number_of_male: z.number(),
  number_of_female: z.number(),
  number_of_head_family: z.number(),
  number_of_family_member: z.number(),
  hamlet_id: z.string().uuid(),
});

const CreatePopulationSchema = PopulationSchema.omit({ id: true });

const DeletePopulationSchema = PopulationSchema.pick({ id: true });

async function createPopulation(
  _prevState: PopulationState,
  formData: FormData
): Promise<PopulationState> {
  const validatedFields = CreatePopulationSchema.safeParse({
    number_of_male: parseInt(formData.get("number_of_male") as string),
    number_of_female: parseInt(formData.get("number_of_female") as string),
    number_of_head_family: parseInt(
      formData.get("number_of_head_family") as string
    ),
    number_of_family_member: parseInt(
      formData.get("number_of_family_member") as string
    ),
    hamlet_id: formData.get("hamlet_id"),
  });

  if (!validatedFields.success) {
    return {
      status: "validation_error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const {
    number_of_male,
    number_of_family_member,
    number_of_female,
    number_of_head_family,
    hamlet_id,
  } = validatedFields.data;

  try {
    const { error } = await db.population.create({
      hamlet_id,
      number_of_family_member,
      number_of_female,
      number_of_head_family,
      number_of_male,
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

async function updatePopulation(
  _prevState: PopulationState,
  formData: FormData
): Promise<PopulationState> {
  const validatedFields = PopulationSchema.safeParse({
    id: formData.get("id"),
    number_of_male: parseInt(formData.get("number_of_male") as string),
    number_of_female: parseInt(formData.get("number_of_female") as string),
    number_of_head_family: parseInt(
      formData.get("number_of_head_family") as string
    ),
    number_of_family_member: parseInt(
      formData.get("number_of_family_member") as string
    ),
    hamlet_id: formData.get("hamlet_id"),
  });

  if (!validatedFields.success) {
    return {
      status: "validation_error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const {
    number_of_male,
    number_of_family_member,
    number_of_female,
    number_of_head_family,
    hamlet_id,
    id,
  } = validatedFields.data;

  try {
    const { error } = await db.population.update(id, {
      hamlet_id,
      number_of_family_member,
      number_of_female,
      number_of_head_family,
      number_of_male,
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

async function deletePopulation(
  _prevState: PopulationState,
  formData: FormData
): Promise<PopulationState> {
  const validatedFields = DeletePopulationSchema.safeParse({
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
    const { error } = await db.population.delete(id);

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

export { createPopulation, updatePopulation, deletePopulation };
