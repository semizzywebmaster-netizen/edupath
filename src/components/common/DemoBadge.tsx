
import { Badge } from '@/components/ui/badge'
import { useDemoMode } from '@/hooks/useDemoMode'
export function DemoBadge() {
  const { isDemoMode } = useDemoMode()
  if (!isDemoMode) return null
  return <div className="fixed bottom-4 left-4 z-40"><Badge variant="warning">Demo Mode — No real AI, payments, financial transactions, or production data.</Badge></div>
}
