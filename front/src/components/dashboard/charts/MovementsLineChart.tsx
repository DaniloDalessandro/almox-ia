"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { dailyMovements } from "@/lib/mock/dashboard-data"

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

export function MovementsLineChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <LineChart data={dailyMovements} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          dataKey="incoming"
          type="monotone"
          stroke="var(--color-incoming)"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
        <Line
          dataKey="outgoing"
          type="monotone"
          stroke="var(--color-outgoing)"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ChartContainer>
  )
}
