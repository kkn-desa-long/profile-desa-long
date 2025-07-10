"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { login } from "./actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [state, formAction, isPending] = React.useActionState(login, {
    status: "idle",
  });

  React.useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
      setTimeout(() => router.push("/dashboard"), 500);
    } else if (state.status === "error") {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Selamat Datang Kembali</CardTitle>
          <CardDescription>Masuk dengan akun anda</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="grid gap-6">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="admin@long.com"
                  required
                />
                {state.errors?.email && (
                  <p className="text-sm text-destructive">
                    {state.errors.email[0]}
                  </p>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Kata Sandi</Label>
                <Input id="password" type="password" name="password" required />
                {state.errors?.password && (
                  <p className="text-sm text-destructive">
                    {state.errors.password[0]}
                  </p>
                )}
              </div>
              <Button type="submit" loading={isPending}>
                Masuk
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
