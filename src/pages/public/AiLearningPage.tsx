
import { PageContainer, Section } from '@/components/ui/page-container'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Link } from 'react-router-dom'
export function AiLearningPage() {
  const items = [
    { to: '/ai-learning/tutor', title: 'AI Tutor', desc: 'Chat-based explanations, step-by-step' },
    { to: '/ai-learning/study-coach', title: 'Study Coach', desc: 'Personalized plans and coaching' },
    { to: '/ai-learning/snap-to-solve', title: 'Snap to Solve', desc: 'Photo → solution workflow' },
    { to: '/ai-learning/study-tools', title: 'Study Tools', desc: 'Notes, flashcards, mind-map, summary, revision' },
  ]
  return <Section><PageContainer><h1 className="text-4xl font-bold">AI Learning Experience</h1><p className="mt-3 text-muted-foreground max-w-2xl">Frontend experiences and UI demonstrations only. No direct AI provider calls from browser. All requests flow: Frontend → Laravel API → Central AI Orchestrator → Provider Adapter.</p><div className="mt-8 grid gap-6 md:grid-cols-2">{items.map(i=><Link key={i.to} to={i.to}><Card className="card-hover"><CardHeader><CardTitle>{i.title}</CardTitle><CardDescription>{i.desc}</CardDescription></CardHeader></Card></Link>)}</div></PageContainer></Section>
}
