export type NotificationType = "alert" | "order" | "inventory" | "system"

export interface Notification {
  id: number
  type: NotificationType
  title: string
  message: string
  read: boolean
  createdAt: string
}

export const notificationsData: Notification[] = [
  {
    id: 1,
    type: "alert",
    title: "Estoque critico",
    message: "Luva Latex atingiu o nivel minimo de estoque.",
    read: false,
    createdAt: "2025-12-20T14:30:00",
  },
  {
    id: 2,
    type: "order",
    title: "Novo pedido recebido",
    message: "Pedido #1234 de Carlos Silva aguarda aprovacao.",
    read: false,
    createdAt: "2025-12-20T13:15:00",
  },
  {
    id: 3,
    type: "inventory",
    title: "Entrada registrada",
    message: "500 unidades de Parafuso M6 foram registradas.",
    read: false,
    createdAt: "2025-12-20T11:00:00",
  },
  {
    id: 4,
    type: "system",
    title: "Backup concluido",
    message: "Backup automatico realizado com sucesso.",
    read: true,
    createdAt: "2025-12-20T06:00:00",
  },
  {
    id: 5,
    type: "alert",
    title: "Estoque critico",
    message: "Disjuntor 20A atingiu o nivel minimo.",
    read: true,
    createdAt: "2025-12-19T16:45:00",
  },
]
