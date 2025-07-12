import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PLACEHOLDER_IMG_URL } from "@/constants";
import Image from "next/image";

export default function OrganizationSection() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Bagan Desa</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="organisasi-desa">
          <ScrollArea className="pb-2">
            <TabsList>
              <TabsTrigger
                value="organisasi-desa"
                className="text-lg font-semibold"
              >
                Struktur Organisasi Desa
              </TabsTrigger>
              <TabsTrigger value="bpd" className="text-lg font-semibold">
                Struktur BPD
              </TabsTrigger>
              <TabsTrigger
                value="pemerintah-desa"
                className="text-lg font-semibold"
              >
                Struktur Pemerintah Desa
              </TabsTrigger>
              <TabsTrigger value="lpm" className="text-lg font-semibold">
                Struktur LPM
              </TabsTrigger>
              <TabsTrigger value="pkk" className="text-lg font-semibold">
                Struktur TP. PKK
              </TabsTrigger>
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <TabsContent value="organisasi-desa">
            <a href={PLACEHOLDER_IMG_URL} target="_blank">
              <div className="border-2 relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src={PLACEHOLDER_IMG_URL}
                  fill
                  alt="gambar"
                  className="object-cover"
                />
              </div>
            </a>
          </TabsContent>
          <TabsContent value="bpd">
            <a href={PLACEHOLDER_IMG_URL} target="_blank">
              <div className="border-2 relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src={PLACEHOLDER_IMG_URL}
                  fill
                  alt="gambar"
                  className="object-cover"
                />
              </div>
            </a>
          </TabsContent>
          <TabsContent value="pemerintah-desa">
            <a href={PLACEHOLDER_IMG_URL} target="_blank">
              <div className="border-2 relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src={PLACEHOLDER_IMG_URL}
                  fill
                  alt="gambar"
                  className="object-cover"
                />
              </div>
            </a>
          </TabsContent>
          <TabsContent value="lpm">
            <a href={PLACEHOLDER_IMG_URL} target="_blank">
              <div className="border-2 relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src={PLACEHOLDER_IMG_URL}
                  fill
                  alt="gambar"
                  className="object-cover"
                />
              </div>
            </a>
          </TabsContent>
          <TabsContent value="pkk">
            <a href={PLACEHOLDER_IMG_URL} target="_blank">
              <div className="border-2 relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src={PLACEHOLDER_IMG_URL}
                  fill
                  alt="gambar"
                  className="object-cover"
                />
              </div>
            </a>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
