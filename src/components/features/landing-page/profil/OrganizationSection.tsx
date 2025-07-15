import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Tables } from "@/lib/supabase/types";

export default async function OrganizationSection({data}: {data: Tables<"village_government">[]}) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Bagan Desa</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="organisasi-desa">
          <ScrollArea className="pb-2">
            <TabsList>
              {data?.map((item) => (
                <TabsTrigger
                  key={item.id}
                  value={item.title}
                  className="text-lg font-semibold"
                >
                  {item.title}
                </TabsTrigger>
              )) || (
                <TabsTrigger value="organisasi-desa">
                  Organisasi Desa
                </TabsTrigger>
              )}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          {data?.map((item) => (
            <TabsContent key={item.id} value={item.title}>
              <a href={item.img_url} target="_blank" rel="noopener noreferrer">
                <div className="border-2 relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                  <Image
                    src={item.img_url}
                    fill
                    alt={item.title}
                    className="object-cover"
                  />
                </div>
              </a>
            </TabsContent>
          )) || (
            <TabsContent value="organisasi-desa">
              <a
                href="https://example.com/default-image.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border-2 relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/aparat.png"
                    fill
                    alt="Default Image"
                    className="object-cover"
                  />
                </div>
              </a>
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
}
