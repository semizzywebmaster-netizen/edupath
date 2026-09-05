
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { useToast } from '@/hooks/useToast'
import { useAuth } from '@/hooks/useAuth'
export function LoginPage() {
  const [show, setShow] = useState(false)
  const { toast } = useToast()
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState(''); const [password, setPassword] = useState('')
  const handle = (e: React.FormEvent) => { e.preventDefault(); if(!email||!password){ toast({ description: 'Fill all fields', variant:'error' }); return } login('demo_token_'+Date.now(), { id:'1', name:'Demo Student', email, role:'student', verified:true }); toast({ description:'Logged in (Demo Mode)', variant:'success' }); navigate('/app/dashboard') }
  return <Card><CardHeader><CardTitle>Welcome back</CardTitle><CardDescription>Login to continue learning</CardDescription></CardHeader><CardContent><form onSubmit={handle} className="space-y-4"><Input label="Email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" /><div><Input label="Password" type={show?'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" /><button type="button" className="text-xs mt-1 text-primary" onClick={()=>setShow(v=>!v)}>{show?'Hide':'Show'} password</button></div><Button className="w-full" type="submit">Login</Button><div className="text-center text-sm space-y-2"><Link to="/auth/forgot-password" className="text-primary">Forgot password?</Link><div>Don't have account? <Link to="/auth/register" className="text-primary font-medium">Register</Link></div></div></form></CardContent></Card>
}
