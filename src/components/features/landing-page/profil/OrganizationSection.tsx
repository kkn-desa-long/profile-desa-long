import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
                Struktur Pemerintah Desa (RT)
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
            <a href={"/aparat.png"} target="_blank">
              <div className="border-2 relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src={"/aparat.png"}
                  fill
                  alt="gambar"
                  className="object-cover"
                />
              </div>
            </a>
          </TabsContent>
          <TabsContent value="bpd">
            <a href={"/bpd.png"} target="_blank">
              <div className="border-2 relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src={"/bpd.png"}
                  fill
                  alt="gambar"
                  className="object-cover"
                />
              </div>
            </a>
          </TabsContent>
          <TabsContent value="pemerintah-desa">
            <a href={"/rt.png"} target="_blank">
              <div className="border-2 relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src={"/rt.png"}
                  fill
                  alt="gambar"
                  className="object-cover"
                />
              </div>
            </a>
          </TabsContent>
          <TabsContent value="lpm">
            <a href={"/lpm.png"} target="_blank">
              <div className="border-2 relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src={"/lpm.png"}
                  fill
                  alt="gambar"
                  className="object-cover"
                />
              </div>
            </a>
          </TabsContent>
          <TabsContent value="pkk">
            <a href={"/pkk.png"} target="_blank">
              <div className="border-2 relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src={"/pkk.png"}
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
