import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import { villagersAge } from "@/constants/data";

// const chartData = [
//   {
//     title: "chrome",
//     visitors: 275,
//     outsider: 200,
//   },
//   {
//     title: "safari",
//     visitors: 200,
//     outsider: 200,
//   },
//   {
//     title: "firefox",
//     visitors: 187,
//     outsider: 200,
//   },
//   { title: "edge", visitors: 173, outsider: 200 },
//   { title: "other", visitors: 90, outsider: 200 },
// ];

const chartConfig = {
  numberOfMale: {
    label: "Laki-laki",
  },
  numberOfFemale: {
    label: "Perempuan",
  },
} satisfies ChartConfig;

export default function AgeSection() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Data Kelompok Umur</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-96 w-full">
          <BarChart accessibilityLayer data={villagersAge}>
            <XAxis
              dataKey="ageRange"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis dataKey="numberOfMale" tickFormatter={(value) => value} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend content={<ChartLegendContent payload={1} />} />
            <Bar dataKey="numberOfMale" fill="var(--color-blue-500)" radius={5}>
              <LabelList position="top" fontSize={12} />
            </Bar>
            <Bar
              dataKey="numberOfFemale"
              fill="var(--color-red-400)"
              radius={5}
            >
              <LabelList position="top" fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
