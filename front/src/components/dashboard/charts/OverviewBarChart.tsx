"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { monthlyInOut } from "@/lib/mock/dashboard-data"

const chartConfig = {
  incoming: {
    label: "Entradas",
    color: "var(--chart-1)",
  },
  outgoing: {
    label: "Saidas",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function OverviewBarChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <BarChart data={monthlyInOut} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="incoming" fill="var(--color-incoming)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="outgoing" fill="var(--color-outgoing)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  )
}
