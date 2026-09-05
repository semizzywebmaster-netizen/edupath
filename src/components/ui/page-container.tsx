
import { cn } from '@/lib/utils'
export function PageContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('container-page py-8', className)}>{children}</div>
}
export function Section({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  return <section id={id} className={cn('py-12 md:py-20', className)}>{children}</section>
}
