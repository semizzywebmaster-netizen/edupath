
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const studentNav = [
  { to: '/app/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/app/learning', label: 'My Learning', icon: '📚' },
  { to: '/app/courses', label: 'Courses', icon: '🎓' },
  { to: '/app/subjects', label: 'Subjects', icon: '📖' },
  { to: '/app/practice', label: 'Practice', icon: '✏️' },
  { to: '/app/progress', label: 'Progress', icon: '📈' },
  { to: '/app/ai', label: 'AI Hub', icon: '🤖' },
  { to: '/app/books', label: 'Books', icon: '📕' },
  { to: '/app/goals', label: 'Goals', icon: '🎯' },
]

export function AppLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-white px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <button className="lg:hidden" onClick={()=>setSidebarOpen(v=>!v)}>☰</button>
          <Link to="/app/dashboard" className="flex items-center gap-2 font-bold"><span className="flex h-7 w-7 items-center justify-center rounded bg-primary text-white">E</span> EDUPATH</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/app/notifications" className="rounded-full p-2 hover:bg-gray-100">🔔</Link>
          <Link to="/search" className="rounded-full p-2 hover:bg-gray-100">🔍</Link>
          <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">{user?.name?.[0] || 'U'}</div>
        </div>
      </header>
      <div className="flex">
        <aside className={`fixed inset-y-0 left-0 z-10 w-64 transform border-r bg-white pt-16 transition-transform lg:static lg:translate-x-0 ${sidebarOpen?'translate-x-0':'-translate-x-full'}`}>
          <nav className="p-4 space-y-1">
            {studentNav.map(item => (
              <NavLink key={item.to} to={item.to} className={({isActive})=>`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive?'bg-primary text-white':'hover:bg-gray-100'}`}>
                <span>{item.icon}</span> {item.label}
              </NavLink>
            ))}
            <div className="pt-6 mt-6 border-t space-y-1">
              <NavLink to="/app/profile" className={({isActive})=>`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${isActive?'bg-gray-100':''}`}>👤 Profile</NavLink>
              <NavLink to="/app/settings" className={({isActive})=>`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${isActive?'bg-gray-100':''}`}>⚙️ Settings</NavLink>
              <NavLink to="/app/credits" className={({isActive})=>`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${isActive?'bg-gray-100':''}`}>💳 Credits & Wallet</NavLink>
              <button onClick={()=>{logout(); navigate('/')}} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-gray-100 text-red-600">🚪 Logout</button>
            </div>
          </nav>
        </aside>
        <main className="flex-1 min-w-0">
          <div className="container-page py-6"><Outlet /></div>
        </main>
      </div>
    </div>
  )
}
