import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatsCard from "@/components/StatsCard";

export default function MarriageSection() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Data Perkawinan</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatsCard amount={1} title="Kawin" />
        <StatsCard amount={1} title="Belum Kawin" />
        <StatsCard amount={1} title="Cerai" />
        <StatsCard amount={1} title="Cerai Mati" />
        <StatsCard amount={1} title="Kawin tidak tercatat" />
      </CardContent>
    </Card>
  );
}
