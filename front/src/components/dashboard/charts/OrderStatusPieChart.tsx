"use client"

import { Pie, PieChart } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { ordersByStatus } from "@/lib/mock/dashboard-data"

const chartConfig = {
  quantity: {
    label: "Quantidade",
  },
  approved: {
    label: "Aprovado",
    color: "var(--chart-1)",
  },
  pending: {
    label: "Pendente",
    color: "var(--chart-2)",
  },
  picking: {
    label: "Em Separacao",
    color: "var(--chart-3)",
  },
  delivered: {
    label: "Entregue",
    color: "var(--chart-4)",
  },
  canceled: {
    label: "Cancelado",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function OrderStatusPieChart() {
  return (
    <ChartContainer config={chartConfig} className="mx-auto h-[300px] w-full">
      <PieChart accessibilityLayer>
        <ChartTooltip content={<ChartTooltipContent nameKey="status" hideLabel />} />
        <Pie
          data={ordersByStatus}
          dataKey="quantity"
          nameKey="status"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          strokeWidth={2}
        />
        <ChartLegend content={<ChartLegendContent nameKey="status" />} />
      </PieChart>
    </ChartContainer>
  )
}
