
import { Button } from './button'
export function ErrorState({ title='Something went wrong', description, onRetry }: { title?: string; description?: string; onRetry?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-destructive/20 bg-destructive/5 p-12 text-center">
      <h3 className="text-lg font-semibold text-destructive">{title}</h3>
      {description && <p className="mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>}
      {onRetry && <Button variant="outline" className="mt-6" onClick={onRetry}>Try again</Button>}
    </div>
  )
}
