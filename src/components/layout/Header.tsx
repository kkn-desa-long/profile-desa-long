"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/profil", label: "Profil" },
    { href: "/infografis", label: "Infografis" },
    { href: "/galeri", label: "Galeri" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
      <div className="py-4 px-4 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-4">
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
          </Link>

          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href ? "text-emerald-600" : "text-slate-700"
                } hover:text-emerald-600 font-medium transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Buka menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="p-4">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`${
                          pathname === link.href
                            ? "text-emerald-600"
                            : "text-slate-700"
                        } hover:text-emerald-600 font-medium transition-colors text-lg`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
