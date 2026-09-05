
import * as React from 'react'
import { cn } from '@/lib/utils'
export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string; error?: string }>(
  ({ className, label, error, children, id, ...props }, ref) => {
    const sid = id || `select-${Math.random().toString(36).slice(2)}`
    return (
      <div className="space-y-1.5">
        {label && <label htmlFor={sid} className="text-sm font-medium">{label}</label>}
        <select id={sid} ref={ref} className={cn('flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', className)} {...props}>{children}</select>
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>
    )
  }
)
Select.displayName='Select'
