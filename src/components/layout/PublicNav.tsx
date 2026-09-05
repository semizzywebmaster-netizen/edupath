
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { to: '/features', label: 'Features' },
  { to: '/ai-learning', label: 'AI Learning' },
  { to: '/exam-prep', label: 'Exam Prep' },
  { to: '/for-teachers', label: 'For Teachers' },
  { to: '/for-parents', label: 'Parents' },
  { to: '/for-schools', label: 'Schools' },
  { to: '/pricing', label: 'Pricing' },
]

export function PublicNav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">E</span> EDUPATH</Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(l => <NavLink key={l.to} to={l.to} className={({isActive})=>`text-sm font-medium transition-colors hover:text-primary ${isActive?'text-primary':''}`}>{l.label}</NavLink>)}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild><Link to="/auth/login">Login</Link></Button>
          <Button asChild><Link to="/auth/register">Get Started</Link></Button>
        </div>
        <button className="md:hidden p-2" onClick={()=>setOpen(v=>!v)} aria-label="Menu">☰</button>
      </div>
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="container-page flex flex-col gap-2 py-4">
            {navLinks.map(l => <Link key={l.to} to={l.to} onClick={()=>setOpen(false)} className="py-2 text-sm font-medium">{l.label}</Link>)}
            <div className="mt-2 flex gap-2">
              <Button variant="outline" className="flex-1" asChild><Link to="/auth/login">Login</Link></Button>
              <Button className="flex-1" asChild><Link to="/auth/register">Get Started</Link></Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
