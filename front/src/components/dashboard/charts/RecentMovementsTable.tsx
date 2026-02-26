"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { recentMovements } from "@/lib/mock/dashboard-data"

export function RecentMovementsTable() {
  return (
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead className="text-right">Qtd</TableHead>
            <TableHead>Responsavel</TableHead>
            <TableHead>Data</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentMovements.map((mov) => (
            <TableRow key={mov.id}>
              <TableCell className="font-medium">{mov.item}</TableCell>
              <TableCell>
                <Badge variant={mov.type === "Entrada" ? "default" : "secondary"}>
                  {mov.type}
                </Badge>
              </TableCell>
              <TableCell className="text-right">{mov.quantity}</TableCell>
              <TableCell>{mov.responsible}</TableCell>
              <TableCell className="text-muted-foreground">{mov.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
