import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/ui/carousel";
import { PLACEHOLDER_IMG_URL } from "@/constants";
import { Tables } from "@/lib/supabase/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GallerySection({
  gallery,
}: {
  gallery: Tables<"gallery">[];
}) {
  return (
    <section className="py-6 px-4 md:py-12 md:px-12 lg:py-24 lg:px-24 bg-white">
      <div className="flex flex-wrap gap-4 justify-between items-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
          Jelajahi Desa Kami
        </h2>
        <Link href={"/galeri"}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 text-lg group"
          >
            Lihat lebih banyak
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
      <Carousel>
        <CarouselContent className="-ml-1">
          {gallery?.map((value) => (
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3 px-2"
              key={value.id}
            >
              <Link href={`/galeri/${value.id}`}>
                <Card>
                  <CardHeader>
                    <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4 border-2">
                      <Image
                        src={value.img_url || PLACEHOLDER_IMG_URL}
                        fill
                        alt={value.title}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle className="text-2xl font-semibold">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed line-clamp-2">
                      {value.description || "Tidak ada deskripsi"}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2 mt-3">
          <CarouselNavigation size="lg" className="border-black" />
        </div>
      </Carousel>
    </section>
  );
}
