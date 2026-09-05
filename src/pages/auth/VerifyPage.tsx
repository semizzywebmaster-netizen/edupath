
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/useToast'
import { Link } from 'react-router-dom'
export function VerifyPage() {
  const { toast } = useToast()
  const handle = (e: React.FormEvent) => { e.preventDefault(); toast({ description: 'Verify action (Demo Mode) — backend will confirm', variant: 'info' }) }
  return <Card><CardHeader><CardTitle>Verify</CardTitle><CardDescription>Demo Mode — No real email/SMS sent without backend</CardDescription></CardHeader><CardContent><form onSubmit={handle} className="space-y-4"><Input label="Email" placeholder="you@example.com" /><Button className="w-full" type="submit">Verify</Button><Link to="/auth/login" className="text-sm text-primary">Back to login</Link></form></CardContent></Card>
}
