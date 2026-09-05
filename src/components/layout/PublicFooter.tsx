
import { Link } from 'react-router-dom'
export function PublicFooter() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-lg font-bold"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">E</span> EDUPATH</div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">We Design. We Develop. We Deliver. AI-powered education ecosystem for Nigerian learners.</p>
            <p className="mt-4 text-xs text-muted-foreground">© {new Date().getFullYear()} EDUPATH. All rights reserved.</p>
          </div>
          <div><h4 className="font-semibold">Product</h4><ul className="mt-3 space-y-2 text-sm text-muted-foreground"><li><Link to="/features">Features</Link></li><li><Link to="/ai-learning">AI Learning</Link></li><li><Link to="/exam-prep">Exam Prep</Link></li><li><Link to="/pricing">Pricing</Link></li></ul></div>
          <div><h4 className="font-semibold">For</h4><ul className="mt-3 space-y-2 text-sm text-muted-foreground"><li><Link to="/for-teachers">Teachers</Link></li><li><Link to="/for-parents">Parents</Link></li><li><Link to="/for-schools">Schools</Link></li><li><Link to="/careers">Careers</Link></li></ul></div>
          <div><h4 className="font-semibold">Support</h4><ul className="mt-3 space-y-2 text-sm text-muted-foreground"><li><Link to="/about">About</Link></li><li><Link to="/faq">FAQ</Link></li><li><Link to="/contact">Contact</Link></li><li><Link to="/privacy">Privacy</Link></li><li><Link to="/terms">Terms</Link></li></ul></div>
        </div>
      </div>
    </footer>
  )
}
