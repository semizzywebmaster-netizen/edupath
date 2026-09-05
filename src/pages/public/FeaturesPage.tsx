
import { PageContainer, Section } from '@/components/ui/page-container'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
const features = [
  { title: 'AI Tutor', desc: 'Understand → Explain → Solve → Practice, not answer-only.' },
  { title: 'Snap to Solve', desc: 'Photo question extraction, subject detection, step-by-step solution.' },
  { title: 'Personalized Practice', desc: 'Based on your recent practice, weak topics, goals.' },
  { title: 'Learning Brain', desc: 'Private insights: strengths, mistakes, consistency, patterns.' },
  { title: 'Multi-level Education', desc: 'Secondary, university, polytechnic, college, nursing, vocational.' },
  { title: 'PWA & Low-data', desc: 'Offline-capable, installable, reconnect handling.' },
]
export function FeaturesPage() {
  return <Section><PageContainer><h1 className="text-4xl font-bold">Platform Features</h1><div className="mt-8 grid gap-6 md:grid-cols-3">{features.map(f => <Card key={f.title}><CardHeader><CardTitle>{f.title}</CardTitle><CardDescription>{f.desc}</CardDescription></CardHeader></Card>)}</div></PageContainer></Section>
}
