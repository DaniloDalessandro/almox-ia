"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { topInventoryItems } from "@/lib/mock/dashboard-data"

const chartConfig = {
  quantity: {
    label: "Quantidade",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function TopItemsBarChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[350px] w-full">
      <BarChart data={topInventoryItems} layout="vertical" accessibilityLayer margin={{ left: 20 }}>
        <YAxis
          dataKey="item"
          type="category"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          width={100}
        />
        <XAxis type="number" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="quantity" fill="var(--color-quantity)" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ChartContainer>
  )
}
