"use client"

import { Package, ClipboardList, ArrowUpDown, AlertTriangle } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartExpandable } from "./ChartExpandable"
import { OverviewBarChart } from "./charts/OverviewBarChart"
import { OrderStatusPieChart } from "./charts/OrderStatusPieChart"
import { kpiData } from "@/lib/mock/dashboard-data"

const kpis = [
  {
    title: "Total Itens",
    value: kpiData.totalItems.value.toLocaleString("pt-BR"),
    change: kpiData.totalItems.change,
    description: kpiData.totalItems.description,
    icon: Package,
  },
  {
    title: "Pedidos Pendentes",
    value: kpiData.pendingOrders.value.toString(),
    change: kpiData.pendingOrders.change,
    description: kpiData.pendingOrders.description,
    icon: ClipboardList,
  },
  {
    title: "Movimentacoes Mes",
    value: kpiData.monthlyMovements.value.toString(),
    change: kpiData.monthlyMovements.change,
    description: kpiData.monthlyMovements.description,
    icon: ArrowUpDown,
  },
  {
    title: "Itens Abaixo Minimo",
    value: kpiData.itemsBelowMinimum.value.toString(),
    change: kpiData.itemsBelowMinimum.change,
    description: kpiData.itemsBelowMinimum.description,
    icon: AlertTriangle,
  },
]

export function TabOverview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className="text-xs text-muted-foreground">
                {kpi.change} {kpi.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <ChartExpandable
          title="Entradas vs Saidas"
          description="Movimentacoes mensais do almoxarifado"
          className="col-span-full lg:col-span-4"
        >
          <OverviewBarChart />
        </ChartExpandable>

        <ChartExpandable
          title="Pedidos por Status"
          description="Distribuicao atual dos pedidos"
          className="col-span-full lg:col-span-3"
        >
          <OrderStatusPieChart />
        </ChartExpandable>
      </div>
    </div>
  )
}
