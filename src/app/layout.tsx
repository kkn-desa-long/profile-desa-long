import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desa Long | Kabupaten Donggala",
  description: "Situs Informasi & Profil Desa Long Kabupaten Donggala",
  keywords: [
    "Desa Long",
    "Kecamatan Dampelas",
    "Kabupaten Donggala",
    "Sulawesi Tengah",
    "Pemerintah Desa Long",
    "Website Desa Long",
    "Situs Desa Long",
    "Informasi Desa Long",
    "Profil Desa Long",
    "Long Village",
    "Dampelas",
    "Donggala",
    "website desa",
  ],
  authors: [
    {
      name: "Mahasiswa KKN 112 Universitas Tadulako | Desa Long Kabupaten Donggala",
      url: "https://www.desalong.web.id",
    },
  ],
  creator:
    "Mahasiswa KKN 112 Universitas Tadulako | Desa Long Kabupaten Donggala",
  publisher:
    "Mahasiswa KKN 112 Universitas Tadulako | Desa Long Kabupaten Donggala",
  metadataBase: new URL("https://www.desalong.web.id"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Situs Resmi Desa Long - Kecamatan Dampelas, Kabupaten Donggala",
    description:
      "Situs resmi Pemerintah Desa Long, Kecamatan Dampelas, Kabupaten Donggala. Temukan informasi terbaru seputar informasi dan profil desa.cc",
    url: "https://www.desalong.web.id",
    siteName: "Website Resmi Desa Long",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Pemandangan Desa Long, Kecamatan Dampelas",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
