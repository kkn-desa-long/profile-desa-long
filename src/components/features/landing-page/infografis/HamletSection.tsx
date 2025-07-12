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
import React, { useMemo } from "react";
import { villagersPopulation } from "@/constants/data";

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

const hamletsColor: { [key: string]: string } = {
  1: "var(--color-chart-1)",
  2: "var(--color-chart-2)",
  3: "var(--color-chart-3)",
  4: "var(--color-chart-4)",
  5: "var(--color-chart-5)",
};

export default function HamletSection() {
  const chartData = useMemo(() => {
    return villagersPopulation.map((value) => {
      return {
        id: value.id,
        name: `dusun${value.dusun}`,
        total: value.numberOfFemale + value.numberOfMale,
        fill: `${hamletsColor[value.id]}`,
      };
    });
  }, []);

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
            <Pie data={chartData} dataKey="total" label nameKey="name" />
            <ChartLegend
              content={<ChartLegendContent nameKey="name" payload={1} />}
            />
          </PieChart>
        </ChartContainer>
        <div>
          <h3 className="text-xl font-semibold">Keterangan</h3>
          <ul>
            {chartData.map((value) => (
              <li key={value.name} className="flex items-center gap-2">
                <span className={`w-3 h-3 bg-black rounded-full`}></span>
                Dusun {value.id} : {value.total}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
