"use client"

import { ChartExpandable } from "./ChartExpandable"
import { MovementsLineChart } from "./charts/MovementsLineChart"
import { RecentMovementsTable } from "./charts/RecentMovementsTable"

export function TabMovements() {
  return (
    <div className="flex flex-col gap-4">
      <ChartExpandable
        title="Movimentacoes Diarias"
        description="Entradas e saidas da semana atual"
      >
        <MovementsLineChart />
      </ChartExpandable>

      <ChartExpandable
        title="Movimentacoes Recentes"
        description="Ultimas movimentacoes registradas"
      >
        <RecentMovementsTable />
      </ChartExpandable>
    </div>
  )
}
