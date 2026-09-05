
import * as React from 'react'
export const Checkbox = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { label?: string }>(
  ({ label, id, ...props }, ref) => {
    const cid = id || `cb-${Math.random().toString(36).slice(2)}`
    return (
      <label htmlFor={cid} className="flex items-center gap-2 text-sm">
        <input ref={ref} id={cid} type="checkbox" className="h-4 w-4 rounded border-input" {...props} />
        {label}
      </label>
    )
  }
)
Checkbox.displayName='Checkbox'
