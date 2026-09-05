
import * as React from 'react'
import { cn } from '@/lib/utils'

export function Modal({ open, onClose, children, className }: { open: boolean; onClose: () => void; children: React.ReactNode; className?: string }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className={cn('relative z-50 w-full max-w-lg rounded-xl bg-white p-6 shadow-lg animate-in', className)}>{children}</div>
    </div>
  )
}
export function ModalHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mb-4', className)}>{children}</div>
}
