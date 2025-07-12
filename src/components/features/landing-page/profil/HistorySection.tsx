import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HistorySection() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Sejarah Desa</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem
          illum odio hic. Laborum minus velit minima eveniet, maiores corporis!
        </p>
      </CardContent>
    </Card>
  );
}
