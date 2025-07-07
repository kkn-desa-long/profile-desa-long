import Image from "next/image";
import LoginForm from "@/components/features/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="flex justify-center items-center space-x-4">
        <Image
          src="/donggalakab_logo.png"
          width={45}
          height={45}
          alt="donggala logo"
        />
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Desa Long</h1>
          <p className="text-sm text-slate-600">Kabupaten Donggala</p>
        </div>
      </div>
      <LoginForm />
    </div>
  );
}
