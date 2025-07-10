import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  amount: number;
  icon?: React.ReactNode;
}

export default function StatsCard({ title, amount, icon }: Props) {
  return (
    <Card>
      <CardContent className="flex items-start gap-6">
        {icon}
        <div className="space-y-1.5">
          <h3 className="text-lg">{title}</h3>
          <p className="font-bold text-3xl">{amount}</p>
        </div>
      </CardContent>
    </Card>
  );
}
