
import { Outlet, Link } from 'react-router-dom'
export function AuthLayout() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="flex flex-col p-8">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">E</span> EDUPATH</Link>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md"><Outlet /></div>
        </div>
      </div>
      <div className="hidden bg-gradient-to-br from-primary-600 to-violet-600 p-12 text-white md:flex md:flex-col md:justify-between">
        <div />
        <div><h2 className="text-3xl font-bold leading-tight">Learn smarter, not harder. AI-powered education built for you.</h2><p className="mt-4 text-white/80">Join thousands of Nigerian students achieving academic excellence.</p></div>
        <div className="text-sm text-white/60">We Design. We Develop. We Deliver.</div>
      </div>
    </div>
  )
}
