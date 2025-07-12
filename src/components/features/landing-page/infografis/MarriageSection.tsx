import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatsCard from "@/components/StatsCard";
import { villagersMarriage } from "@/constants/data";

export default function MarriageSection() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Data Perkawinan</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {villagersMarriage.map((value) => (
          <StatsCard
            key={value.id}
            amount={value.numbers}
            title={value.marriageStatus}
          />
        ))}
      </CardContent>
    </Card>
  );
}
