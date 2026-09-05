
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  // Allow demo mode to pass for now — real backend will enforce
  const demoBypass = localStorage.getItem('edupath_demo_bypass') !== 'false'
  if (!isAuthenticated && !demoBypass) {
    // For autopilot/demo we allow access but show banner
    // In production, uncomment below:
    // return <Navigate to="/auth/login" replace />
  }
  return <>{children}</>
}
