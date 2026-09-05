
import { Outlet } from 'react-router-dom'
import { PublicNav } from '@/components/layout/PublicNav'
import { PublicFooter } from '@/components/layout/PublicFooter'
import { DemoBadge } from '@/components/common/DemoBadge'
export function PublicLayout() {
  return (
    <div className="min-h-screen bg-white">
      <PublicNav />
      <main><Outlet /></main>
      <PublicFooter />
      <DemoBadge />
    </div>
  )
}
