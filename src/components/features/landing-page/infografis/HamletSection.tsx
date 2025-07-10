import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";
import React from "react";

const pieChartData = [
  { name: "dusun1", total: 275, fill: "var(--color-blue-500)" },
  { name: "dusun2", total: 200, fill: "var(--color-red-500)" },
  { name: "dusun3", total: 187, fill: "var(--color-green-500)" },
  { name: "dusun4", total: 173, fill: "var(--color-yellow-500)" },
  { name: "dusun5", total: 90, fill: "var(--color-purple-500)" },
];

const chartConfig = {
  total: {
    label: "Total",
  },
  dusun1: {
    label: "Dusun 1",
    color: "var(--chart-1)",
  },
  dusun2: {
    label: "Dusun 2",
    color: "var(--chart-2)",
  },
  dusun3: {
    label: "Dusun 3",
    color: "var(--chart-3)",
  },
  dusun4: {
    label: "Dusun 4",
    color: "var(--chart-4)",
  },
  dusun5: {
    label: "Dusun 5",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export default function HamletSection() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Data Penduduk Per Dusun
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-4">
        <ChartContainer
          config={chartConfig}
          className="col-span-4 md:col-span-3 lg:col-span-2"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={pieChartData} dataKey="total" label nameKey="name" />
            <ChartLegend
              content={<ChartLegendContent nameKey="name" payload={1} />}
            />
          </PieChart>
        </ChartContainer>
        <div>
          <h3 className="text-xl font-semibold">Keterangan</h3>
          <ul>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              Dusun 1 : 100
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Dusun 2 : 100
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              Dusun 3 : 100
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              Dusun 4 : 100
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              Dusun 5 : 100
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
