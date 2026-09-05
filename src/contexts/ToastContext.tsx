
import React, { createContext, useContext, useState, useCallback } from 'react'

type Toast = { id: string; title?: string; description: string; variant?: 'default'|'success'|'error'|'info' }
type Ctx = { toasts: Toast[]; toast: (t: Omit<Toast,'id'>) => void; dismiss: (id: string) => void }

const ToastContext = createContext<Ctx | undefined>(undefined)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([])
  const toast = useCallback((t: Omit<Toast,'id'>) => {
    const id = Math.random().toString(36).slice(2)
    setToasts(prev => [...prev, { ...t, id }])
    setTimeout(() => setToasts(prev => prev.filter(x => x.id !== id)), 4000)
  }, [])
  const dismiss = (id: string) => setToasts(p => p.filter(x => x.id !== id))
  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
        {toasts.map(t => (
          <div key={t.id} className={`rounded-lg border bg-white p-4 shadow-medium animate-in ${t.variant==='error'?'border-red-200 bg-red-50': t.variant==='success'?'border-green-200 bg-green-50':''}`}>
            {t.title && <p className="font-semibold text-sm">{t.title}</p>}
            <p className="text-sm text-gray-600">{t.description}</p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be within ToastProvider')
  return ctx
}
