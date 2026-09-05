
import * as React from 'react'
export function Dropdown({ trigger, children }: { trigger: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="relative">
      <div onClick={() => setOpen(v=>!v)}>{trigger}</div>
      {open && <div className="absolute right-0 z-50 mt-2 w-56 rounded-lg border bg-white p-1 shadow-medium">{children}</div>}
    </div>
  )
}
export function DropdownItem({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return <button onClick={onClick} className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-accent">{children}</button>
}
