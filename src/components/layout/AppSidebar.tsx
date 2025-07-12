"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";
import { usePathname, useRouter } from "next/navigation";

interface NavItem {
  title: string;
  url: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const SIDEBAR_NAV: NavGroup[] = [
  {
    label: "Pemerintahan Desa",
    items: [
      {
        title: "Struktur Pemerintahan",
        url: "/pemerintahan",
      },
      {
        title: "Sambutan Kepala Desa",
        url: "/sambutan-kepala-desa",
      },
    ],
  },
  {
    label: "Statistik Kependudukan",
    items: [
      {
        title: "Populasi",
        url: "/statistik/populasi",
      },
      {
        title: "Pendidikan",
        url: "/statistik/pendidikan",
      },
      {
        title: "Kelompok Umur",
        url: "/statistik/usia",
      },
      {
        title: "Pekerjaan",
        url: "/statistik/pekerjaan",
      },
      {
        title: "Status Perkawinan",
        url: "/statistik/perkawinan",
      },
      {
        title: "Suku",
        url: "/statistik/suku",
      },
    ],
  },
  {
    label: "Data Master",
    items: [
      {
        title: "Data Pendidikan",
        url: "/master/pendidikan",
      },
      {
        title: "Data Rentang Usia",
        url: "/master/rentang-usia",
      },
      {
        title: "Data Pekerjaan",
        url: "/master/pekerjaan",
      },
      {
        title: "Data Status Perkawinan",
        url: "/master/status-perkawinan",
      },
      {
        title: "Data Suku",
        url: "/master/suku",
      },
      {
        title: "Data Dusun",
        url: "/master/dusun",
      },
    ],
  },
  {
    label: "Aset Desa",
    items: [
      {
        title: "Galeri",
        url: "/galeri",
      },
    ],
  },
];

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function handleSignOut() {
    const supabase = createClient();

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();

      if (error) throw error;

      toast.success("Berhasil Keluar");
      router.push("/login");
    } catch (err) {
      console.error(err);
      toast.error("Gagal Keluar");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader className="mb-2">
        <Link href="/">
          <div className="flex items-center space-x-2 p-1">
            <Image
              src="/donggalakab_logo.png"
              width={36}
              height={36}
              alt="donggala logo"
              className="-mb-1.5"
            />
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Desa Long</h1>
              <p className="text-sm text-slate-600">Kabupaten Donggala</p>
            </div>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {SIDEBAR_NAV.map((navGroup) => (
          <SidebarGroup key={navGroup.label}>
            <SidebarGroupLabel>{navGroup.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navGroup.items.map((navItem) => (
                  <SidebarMenuItem key={navItem.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname.includes("/dashboard" + navItem.url)}
                      className="hover:bg-emerald-500 hover:text-white data-[active=true]:bg-emerald-600 data-[active=true]:text-white"
                    >
                      <Link href={"/dashboard" + navItem.url}>
                        {navItem.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Button
                variant="destructive"
                className="hover:bg-destructive hover:text-white hover:opacity-70"
                onClick={handleSignOut}
                loading={isLoading}
              >
                <LogOut />
                Keluar
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
