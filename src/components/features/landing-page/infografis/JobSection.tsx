import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function JobSection() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Data Pekerjaan</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-4 gap-6">
        <div>
          <div className="bg-slate-200">
            <div className="flex justify-between items-center px-4 pt-3">
              <h3 className="text-lg font-semibold">Jenis Pekerjaan</h3>
              <p className="font-semibold">Jumlah</p>
            </div>
            <Separator className="mt-3" />
          </div>
          <ScrollArea className="h-128 ">
            {Array.from({ length: 10 }).map((_, index) => (
              <React.Fragment key={index}>
                <div className="flex justify-between items-center px-4 mt-3">
                  <h3 className="text-lg font-semibold">
                    Pekerjaan {index + 1}
                  </h3>
                  <p className="font-semibold">100</p>
                </div>
                <Separator className="mt-3" />
              </React.Fragment>
            ))}
          </ScrollArea>
        </div>
        <div className="grid grid-cols-1 items-start sm:grid-cols-2 lg:grid-cols-3 gap-4 col-span-3">
          {/* Example Job Stats Card */}
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Pekerjaan</h3>
            <p className="text-2xl font-bold">1,000</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Pekerjaan Tetap</h3>
            <p className="text-2xl font-bold">600</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Pekerjaan Lepas</h3>
            <p className="text-2xl font-bold">400</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
