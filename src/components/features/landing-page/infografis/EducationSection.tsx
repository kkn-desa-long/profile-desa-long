import React from "react";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import { villagersEducation } from "@/constants/data";

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
  education: {
    label: "Pendidikan",
  },
} satisfies ChartConfig;

export default function EducationSection() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Data Pendidikan</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-96 w-full">
          <BarChart accessibilityLayer data={villagersEducation}>
            <XAxis
              dataKey="education"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis dataKey="numbers" tickFormatter={(value) => value} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="numbers" fill="var(--color-blue-500)" radius={5}>
              <LabelList position="top" fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
