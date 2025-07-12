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
import { useMediaQuery } from "@/hooks/use-media-query";

const chartConfig = {
  education: {
    label: "Pendidikan",
  },
} satisfies ChartConfig;

export default function EducationSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Data Pendidikan</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-164 max-h-164 w-full">
          <BarChart
            accessibilityLayer
            data={villagersEducation}
            layout={isMobile ? "vertical" : "horizontal"}
          >
            {isMobile ? (
              <>
                <XAxis type="number" hide />
                <YAxis
                  dataKey="education"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  width={80}
                />
              </>
            ) : (
              <>
                <XAxis
                  dataKey="education"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis dataKey="numbers" hide />
              </>
            )}
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="numbers" fill="var(--color-blue-500)" radius={5}>
              <LabelList position={isMobile ? "right" : "top"} fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
