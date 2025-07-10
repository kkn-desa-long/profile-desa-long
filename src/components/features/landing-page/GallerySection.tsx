import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PLACEHOLDER_IMG_URL } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function GallerySection() {
  return (
    <section className="py-24 px-24 bg-white">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
          Jelajahi Desa Kami
        </h2>
        <Button
          size="lg"
          className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 text-lg group"
        >
          Lihat lebih banyak
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      <Carousel>
        <CarouselContent className="-ml-1">
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem className="basis-1/3 px-2" key={index}>
              <Card>
                <CardHeader>
                  <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                    <Image
                      src={PLACEHOLDER_IMG_URL}
                      fill
                      alt="gambar"
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl font-semibold">
                    E-Government
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Layanan administrasi digital 24/7 untuk kemudahan akses
                    dokumen kependudukan
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
