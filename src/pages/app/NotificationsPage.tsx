
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
export function NotificationsPage() { 
  const cats = ['account/security','academic','AI','payment','referral','rewards','social','marketing','system']
  return <div className="space-y-6"><h1 className="text-2xl font-bold">Notifications</h1><div className="flex gap-2 flex-wrap">{cats.map(c=><Badge key={c} variant="secondary">{c}</Badge>)}</div><Card><CardHeader><CardTitle>Your notifications</CardTitle></CardHeader></Card></div>
}
