export const kpiData = {
  totalItems: { value: 1247, change: "+3.2%", description: "itens cadastrados" },
  pendingOrders: { value: 23, change: "-12%", description: "aguardando aprovacao" },
  monthlyMovements: { value: 456, change: "+8.1%", description: "no mes atual" },
  itemsBelowMinimum: { value: 18, change: "+5", description: "requerem reposicao" },
}

export const monthlyInOut = [
  { month: "Jan", incoming: 120, outgoing: 95 },
  { month: "Fev", incoming: 98, outgoing: 110 },
  { month: "Mar", incoming: 145, outgoing: 102 },
  { month: "Abr", incoming: 132, outgoing: 128 },
  { month: "Mai", incoming: 160, outgoing: 140 },
  { month: "Jun", incoming: 140, outgoing: 155 },
  { month: "Jul", incoming: 175, outgoing: 130 },
  { month: "Ago", incoming: 150, outgoing: 145 },
  { month: "Set", incoming: 168, outgoing: 160 },
  { month: "Out", incoming: 190, outgoing: 170 },
  { month: "Nov", incoming: 155, outgoing: 148 },
  { month: "Dez", incoming: 200, outgoing: 180 },
]

export const ordersByStatus = [
  { status: "Aprovado", quantity: 45, fill: "var(--color-approved)" },
  { status: "Pendente", quantity: 23, fill: "var(--color-pending)" },
  { status: "Em Separacao", quantity: 12, fill: "var(--color-picking)" },
  { status: "Entregue", quantity: 67, fill: "var(--color-delivered)" },
  { status: "Cancelado", quantity: 8, fill: "var(--color-canceled)" },
]

export const topInventoryItems = [
  { item: "Parafuso M6", quantity: 5200 },
  { item: "Fita Isolante", quantity: 3800 },
  { item: "Luva Latex", quantity: 3200 },
  { item: "Cabo 2.5mm", quantity: 2800 },
  { item: "Disjuntor 20A", quantity: 2100 },
  { item: "Lampada LED", quantity: 1900 },
  { item: "Cano PVC 25mm", quantity: 1650 },
  { item: "Chave Phillips", quantity: 1400 },
]

export const itemsBelowMinimum = [
  { month: "Jul", quantity: 8 },
  { month: "Ago", quantity: 12 },
  { month: "Set", quantity: 10 },
  { month: "Out", quantity: 15 },
  { month: "Nov", quantity: 14 },
  { month: "Dez", quantity: 18 },
]

export const dailyMovements = [
  { day: "Seg", incoming: 32, outgoing: 28 },
  { day: "Ter", incoming: 45, outgoing: 38 },
  { day: "Qua", incoming: 28, outgoing: 42 },
  { day: "Qui", incoming: 50, outgoing: 35 },
  { day: "Sex", incoming: 38, outgoing: 45 },
  { day: "Sab", incoming: 12, outgoing: 8 },
  { day: "Dom", incoming: 5, outgoing: 3 },
]

export const recentMovements = [
  { id: 1, item: "Parafuso M6", type: "Entrada", quantity: 500, responsible: "Carlos Silva", date: "2025-12-20 14:30" },
  { id: 2, item: "Luva Latex", type: "Saida", quantity: 200, responsible: "Maria Santos", date: "2025-12-20 13:15" },
  { id: 3, item: "Cabo 2.5mm", type: "Saida", quantity: 150, responsible: "Joao Oliveira", date: "2025-12-20 11:45" },
  { id: 4, item: "Fita Isolante", type: "Entrada", quantity: 300, responsible: "Ana Costa", date: "2025-12-20 10:20" },
  { id: 5, item: "Disjuntor 20A", type: "Saida", quantity: 50, responsible: "Pedro Lima", date: "2025-12-19 16:50" },
  { id: 6, item: "Lampada LED", type: "Entrada", quantity: 400, responsible: "Carlos Silva", date: "2025-12-19 15:30" },
  { id: 7, item: "Cano PVC 25mm", type: "Saida", quantity: 80, responsible: "Maria Santos", date: "2025-12-19 14:00" },
  { id: 8, item: "Chave Phillips", type: "Entrada", quantity: 100, responsible: "Joao Oliveira", date: "2025-12-19 11:20" },
]
