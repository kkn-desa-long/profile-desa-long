import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { villagersJob } from "@/constants/data";

export default function JobSection() {
  const sortData = useMemo(() => {
    return villagersJob.sort((a, b) => b.numbers - a.numbers);
  }, []);
  const highestData = useMemo(() => {
    return sortData.slice(0, 6);
  }, [sortData]);
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Data Pekerjaan</CardTitle>
      </CardHeader>
      <CardContent className="lg:grid grid-cols-4 gap-6 space-y-2 items-start">
        <div className="lg:col-span-2 xl:col-span-1">
          <div className="bg-slate-200">
            <div className="flex justify-between items-center px-4 pt-3">
              <h3 className="text-lg font-semibold">Jenis Pekerjaan</h3>
              <p className="font-semibold">Jumlah</p>
            </div>
            <Separator className="mt-3" />
          </div>
          <ScrollArea className="h-128 ">
            {sortData.map((value) => (
              <React.Fragment key={value.job}>
                <div className="flex justify-between items-center px-4 mt-3">
                  <h3 className="text-lg font-semibold">{value.job}</h3>
                  <p className="font-semibold">{value.numbers}</p>
                </div>
                <Separator className="mt-3" />
              </React.Fragment>
            ))}
          </ScrollArea>
        </div>
        <div className="grid grid-cols-1 items-start lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:col-span-2 xl:col-span-3">
          {highestData.map((value) => (
            <div key={value.id} className="p-4 bg-gray-100 rounded-lg shadow">
              <h3 className="text-lg font-semibold">{value.job}</h3>
              <p className="text-2xl font-bold">{value.numbers}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
