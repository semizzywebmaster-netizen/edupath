
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, label, error, leftIcon, rightIcon, id, ...props }, ref) => {
  const inputId = id || `input-${Math.random().toString(36).slice(2)}`
  return (
    <div className="w-full space-y-1.5">
      {label && <label htmlFor={inputId} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</label>}
      <div className="relative">
        {leftIcon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{leftIcon}</div>}
        <input
          id={inputId}
          className={cn('flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', leftIcon?'pl-10':'', rightIcon?'pr-10':'', error?'border-destructive focus-visible:ring-destructive':'', className)}
          ref={ref}
          {...props}
        />
        {rightIcon && <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{rightIcon}</div>}
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
})
Input.displayName='Input'
