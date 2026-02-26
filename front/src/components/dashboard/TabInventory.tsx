"use client"

import { ChartExpandable } from "./ChartExpandable"
import { TopItemsBarChart } from "./charts/TopItemsBarChart"
import { ItemsBelowMinAreaChart } from "./charts/ItemsBelowMinAreaChart"

export function TabInventory() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ChartExpandable
        title="Top Itens em Estoque"
        description="Itens com maior quantidade disponivel"
      >
        <TopItemsBarChart />
      </ChartExpandable>

      <ChartExpandable
        title="Itens Abaixo do Minimo"
        description="Evolucao dos itens que necessitam reposicao"
      >
        <ItemsBelowMinAreaChart />
      </ChartExpandable>
    </div>
  )
}
