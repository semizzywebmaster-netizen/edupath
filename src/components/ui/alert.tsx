
import * as React from 'react'
import { cn } from '@/lib/utils'
export const Alert = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { variant?: 'default'|'destructive'|'success'|'warning' }>(({ className, variant='default', ...props }, ref) => {
  const map = {
    default: 'bg-background text-foreground border',
    destructive: 'border-destructive/50 text-destructive dark:border-destructive bg-red-50',
    success: 'border-green-200 bg-green-50 text-green-800',
    warning: 'border-amber-200 bg-amber-50 text-amber-800',
  }
  return <div ref={ref} role="alert" className={cn('relative w-full rounded-lg border p-4', map[variant], className)} {...props} />
})
Alert.displayName='Alert'
export const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn('mb-1 font-medium leading-none tracking-tight', className)} {...props} />
))
AlertTitle.displayName='AlertTitle'
export const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
))
AlertDescription.displayName='AlertDescription'
