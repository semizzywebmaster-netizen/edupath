
import * as React from 'react'
import { cn } from '@/lib/utils'

type TabsContextType = { active: string; setActive: (v: string) => void }
const TabsCtx = React.createContext<TabsContextType | null>(null)

export function Tabs({ defaultValue, children, className }: { defaultValue: string; children: React.ReactNode; className?: string }) {
  const [active, setActive] = React.useState(defaultValue)
  return <TabsCtx.Provider value={{ active, setActive }}><div className={cn(className)}>{children}</div></TabsCtx.Provider>
}
export function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('inline-flex h-10 items-center justify-center rounded-lg bg-muted p-1', className)}>{children}</div>
}
export function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsCtx)!
  return <button onClick={() => ctx.setActive(value)} className={cn('inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-all', ctx.active===value?'bg-background shadow-sm':'')}>{children}</button>
}
export function TabsContent({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const ctx = React.useContext(TabsCtx)!
  if (ctx.active!==value) return null
  return <div className={cn('mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2', className)}>{children}</div>
}
