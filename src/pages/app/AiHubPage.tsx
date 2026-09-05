
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
const tools = [
  { to:'/app/ai/tutor', title:'AI Tutor', desc:'Understand → Explain → Solve → Practice' },
  { to:'/app/ai/study-coach', title:'Study Coach', desc:'Personalized coaching' },
  { to:'/app/ai/snap-to-solve', title:'Snap to Solve', desc:'Photo workflow' },
  { to:'/app/ai/notes', title:'AI Notes', desc:'Generate & edit notes' },
  { to:'/app/ai/flashcards', title:'Flashcards', desc:'Spaced repetition' },
  { to:'/app/ai/mind-map', title:'Mind Map', desc:'Visual learning' },
  { to:'/app/ai/quiz-generator', title:'Quiz Generator', desc:'AI-generated practice — labeled' },
  { to:'/app/ai/mock-exam', title:'Mock Exam', desc:'Timed exam UI' },
]
export function AiHubPage() { return <div className="space-y-6"><h1 className="text-2xl font-bold">AI Learning Hub</h1><p className="text-muted-foreground">All requests: Frontend → Laravel API → Central AI Orchestrator → Provider Adapter. Never direct AI provider calls from browser.</p><Badge variant="secondary">Demo Mode — No real AI processing without backend</Badge><div className="grid gap-4 md:grid-cols-3">{tools.map(t=><Link key={t.to} to={t.to}><Card className="card-hover"><CardHeader><CardTitle>{t.title}</CardTitle><CardDescription>{t.desc}</CardDescription></CardHeader></Card></Link>)}</div></div> }
