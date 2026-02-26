"use client"

import { useAuth } from "@/hooks/useAuth"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabOverview } from "@/components/dashboard/TabOverview"
import { TabInventory } from "@/components/dashboard/TabInventory"
import { TabMovements } from "@/components/dashboard/TabMovements"

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Bem-vindo de volta{user?.name ? `, ${user.name}` : ""}!
        </p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Visao Geral</TabsTrigger>
          <TabsTrigger value="inventory">Estoque</TabsTrigger>
          <TabsTrigger value="movements">Movimentacoes</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4">
          <TabOverview />
        </TabsContent>
        <TabsContent value="inventory" className="mt-4">
          <TabInventory />
        </TabsContent>
        <TabsContent value="movements" className="mt-4">
          <TabMovements />
        </TabsContent>
      </Tabs>
    </div>
  )
}
