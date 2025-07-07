"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { AuthError } from "@supabase/supabase-js";

export type LoginState = {
  status: "idle" | "success" | "error" | "validation_error";
  message?: string;
  errors?: {
    email?: string[];
    password?: string[];
  };
};

const LoginSchema = z.object({
  email: z.string().email({ message: "Masukkan email yang valid!" }),
  password: z.string(),
});

export async function login(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      status: "validation_error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;
  const supabase = await createClient();

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error(error);
    if (error instanceof AuthError) {
      return {
        status: "error",
        message:
          error.code === "invalid_credentials"
            ? "Email atau kata sandi salah"
            : error.message,
      };
    }

    return {
      status: "error",
      message: "Terjadi kesalahan. Silakan coba lagi nanti",
    };
  }

  revalidatePath("/dashboard", "layout");

  return {
    status: "success",
    message: "Berhasil Masuk! Selamat Datang",
  };
}
