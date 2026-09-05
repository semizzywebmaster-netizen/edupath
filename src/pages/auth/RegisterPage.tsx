
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { useToast } from '@/hooks/useToast'
export function RegisterPage() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const handle = (e: React.FormEvent) => { e.preventDefault(); toast({ description:'Account created (Demo Mode)', variant:'success' }); navigate('/auth/verify') }
  return <Card><CardHeader><CardTitle>Create account</CardTitle><CardDescription>Start your learning journey</CardDescription></CardHeader><CardContent><form onSubmit={handle} className="space-y-4"><Input label="Full name" placeholder="Oluwaseyi" /><Input label="Email" placeholder="you@example.com" /><Input label="Password" type="password" placeholder="••••••••" /><div className="text-xs text-muted-foreground">By registering you agree to Terms & Privacy</div><Button className="w-full" type="submit">Create account</Button><div className="text-center text-sm">Already have account? <Link to="/auth/login" className="text-primary">Login</Link></div></form></CardContent></Card>
}
