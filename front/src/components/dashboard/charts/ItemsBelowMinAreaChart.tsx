"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { itemsBelowMinimum } from "@/lib/mock/dashboard-data"

const chartConfig = {
  quantity: {
    label: "Itens Abaixo do Minimo",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ItemsBelowMinAreaChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <AreaChart data={itemsBelowMinimum} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="quantity"
          type="monotone"
          fill="var(--color-quantity)"
          fillOpacity={0.3}
          stroke="var(--color-quantity)"
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  )
}
