
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes'
import { AuthProvider } from '@/contexts/AuthContext'
import { DemoModeProvider } from '@/contexts/DemoModeContext'
import { ToastProvider } from '@/contexts/ToastContext'

function App() {
  return (
    <AuthProvider>
      <DemoModeProvider>
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </DemoModeProvider>
    </AuthProvider>
  )
}
export default App
