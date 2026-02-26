"use client"

import { useState } from "react"
import { Maximize2 } from "lucide-react"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ChartExpandableProps {
  title: string
  description?: string
  children: React.ReactNode
  expandedChildren?: React.ReactNode
  className?: string
}

export function ChartExpandable({ title, description, children, expandedChildren, className }: ChartExpandableProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card className={className}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
          <CardAction>
            <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
              <Maximize2 className="h-4 w-4" />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!max-w-none w-screen h-screen rounded-none border-none p-6 flex flex-col">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
          <div className="flex-1 min-h-0 [&_[data-slot=chart]]:h-full [&_[data-slot=chart]]:aspect-auto [&_table]:h-full">
            {expandedChildren ?? children}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
