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
import { useMediaQuery } from "@/hooks/use-media-query";

const chartConfig = {
  numberOfMale: {
    label: "Laki-laki",
  },
  numberOfFemale: {
    label: "Perempuan",
  },
} satisfies ChartConfig;

export default function AgeSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Data Kelompok Umur</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="min-h-164 max-h-164 w-full"
        >
          <BarChart
            accessibilityLayer
            data={villagersAge}
            layout={isMobile ? "vertical" : "horizontal"}
          >
            {isMobile ? (
              <>
                <XAxis type="number" hide />
                <YAxis
                  dataKey="ageRange"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
              </>
            ) : (
              <>
                <XAxis
                  dataKey="ageRange"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis type="number" hide />
              </>
            )}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="numberOfMale" fill="var(--color-blue-500)" radius={5}>
              <LabelList position={isMobile ? "right" : "top"} fontSize={12} />
            </Bar>
            <Bar
              dataKey="numberOfFemale"
              fill="var(--color-red-400)"
              radius={5}
            >
              <LabelList position={isMobile ? "right" : "top"} fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
