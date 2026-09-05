
import { Button } from './button'
export function EmptyState({ title, description, actionLabel, onAction, icon }: { title: string; description?: string; actionLabel?: string; onAction?: () => void; icon?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed p-12 text-center">
      {icon && <div className="mb-4 text-muted-foreground">{icon}</div>}
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && <p className="mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>}
      {actionLabel && <Button className="mt-6" onClick={onAction}>{actionLabel}</Button>}
    </div>
  )
}
