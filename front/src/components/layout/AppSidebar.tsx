"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Warehouse, Home, Bot, FilePlus, Package, Users, Settings, HelpCircle } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavMain } from "./NavMain"
import { NavUser } from "./NavUser"
import { useAuth } from "@/hooks/useAuth"

const navItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Agente de IA",
    url: "/ai-agent",
    icon: Bot,
  },
  {
    title: "Novo Pedido",
    url: "/new-order",
    icon: FilePlus,
  },
  {
    title: "Estoque",
    url: "/inventory",
    icon: Package,
  },
  {
    title: "Usuarios",
    url: "/users",
    icon: Users,
  },
  {
    title: "Configuracoes",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Ajuda",
    url: "/help",
    icon: HelpCircle,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const { user } = useAuth()

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Warehouse className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Almox IA</span>
                  <span className="truncate text-xs">Almoxarifado</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navItems} pathname={pathname} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser
          user={{
            name: user?.name || "Usuario",
            email: user?.email || "usuario@email.com",
            avatar: "",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  )
}
