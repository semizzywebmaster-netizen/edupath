
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageContainer, Section } from '@/components/ui/page-container'

export function HomePage() {
  return (
    <div>
      <Section className="bg-gradient-to-b from-indigo-50 to-white">
        <PageContainer>
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">We Design. We Develop. We Deliver.</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">AI-Powered Learning Built for <span className="text-primary">Nigerian Students</span></h1>
            <p className="mt-6 text-lg text-muted-foreground">EDUPATH combines AI tutor, snap-to-solve, personalized practice, and exam prep for WAEC, NECO, JAMB and more. Learn smarter, not harder.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild><Link to="/auth/register">Start Learning Free</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/ai-learning">See AI in Action</Link></Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border bg-white p-4"><p className="text-2xl font-bold">50k+</p><p className="text-muted-foreground">Students</p></div>
              <div className="rounded-xl border bg-white p-4"><p className="text-2xl font-bold">10k+</p><p className="text-muted-foreground">Questions</p></div>
              <div className="rounded-xl border bg-white p-4"><p className="text-2xl font-bold">95%</p><p className="text-muted-foreground">Satisfaction</p></div>
            </div>
          </div>
        </PageContainer>
      </Section>

      <Section>
        <PageContainer>
          <div className="text-center mb-10"><h2 className="text-3xl font-bold">One Ecosystem, Everyone Learns</h2><p className="mt-3 text-muted-foreground">Built for students, teachers, parents and schools</p></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="card-hover"><CardHeader><CardTitle>🎓 For Students</CardTitle><CardDescription>Personalized learning, AI tutor, practice, and exam prep tailored to your level.</CardDescription></CardHeader><CardContent><Button variant="link" asChild><Link to="/app/dashboard">Go to dashboard →</Link></Button></CardContent></Card>
            <Card className="card-hover"><CardHeader><CardTitle>👩‍🏫 For Teachers</CardTitle><CardDescription>Create lessons, assignments, auto-mark, analytics and AI assistant.</CardDescription></CardHeader><CardContent><Button variant="link" asChild><Link to="/for-teachers">Explore →</Link></Button></CardContent></Card>
            <Card className="card-hover"><CardHeader><CardTitle>👨‍👩‍👧 For Parents</CardTitle><CardDescription>Track progress, goals, activity reports and support your child's journey.</CardDescription></CardHeader><CardContent><Button variant="link" asChild><Link to="/for-parents">Explore →</Link></Button></CardContent></Card>
            <Card className="card-hover"><CardHeader><CardTitle>🏫 For Schools</CardTitle><CardDescription>Manage students, teachers, curriculum, classes and institution analytics.</CardDescription></CardHeader><CardContent><Button variant="link" asChild><Link to="/for-schools">Explore →</Link></Button></CardContent></Card>
          </div>
        </PageContainer>
      </Section>

      <Section className="bg-gray-50">
        <PageContainer>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div><h2 className="text-3xl font-bold">Meet Your AI Learning Companion</h2><p className="mt-4 text-muted-foreground">Snap a question, get step-by-step explanations. Generate flashcards, summaries, mind-maps, quizzes and mock exams — all through our secure Laravel API → Central AI Orchestrator.</p><div className="mt-6 grid grid-cols-2 gap-3 text-sm"><div className="rounded-lg bg-white border p-3">✓ AI Tutor — understand → explain → solve → practice</div><div className="rounded-lg bg-white border p-3">✓ Snap to Solve — photo → extraction → solution</div><div className="rounded-lg bg-white border p-3">✓ Study Coach — personalized plans</div><div className="rounded-lg bg-white border p-3">✓ Quiz & Mock Exams — clearly labeled AI vs Verified</div></div><Button className="mt-6" asChild><Link to="/ai-learning">Explore AI Learning</Link></Button></div>
            <div className="rounded-2xl border bg-white p-6 shadow-soft"><div className="space-y-3"><div className="h-3 w-3/4 rounded bg-gray-100" /><div className="h-20 rounded-lg bg-indigo-50 border border-dashed flex items-center justify-center text-sm text-muted-foreground">Demo: AI Tutor Chat UI</div><div className="h-3 w-full rounded bg-gray-100" /><div className="h-3 w-5/6 rounded bg-gray-100" /></div></div>
          </div>
        </PageContainer>
      </Section>

      <Section>
        <PageContainer>
          <div className="text-center mb-8"><h2 className="text-3xl font-bold">Exam Preparation, Done Right</h2><p className="text-muted-foreground mt-2">WAEC, NECO, JAMB, Post-UTME, NABTEB, ICAN, ACCA and more — verified vs AI-generated clearly separated.</p></div>
          <div className="grid gap-4 md:grid-cols-3">
            {['WAEC/SSCE', 'JAMB UTME', 'NECO'].map(exam => (
              <Card key={exam}><CardHeader><CardTitle>{exam}</CardTitle><CardDescription>Past questions, practice, timer, review, performance</CardDescription></CardHeader></Card>
            ))}
          </div>
          <div className="text-center mt-8"><Button asChild><Link to="/exam-prep">Explore Exam Platform</Link></Button></div>
        </PageContainer>
      </Section>
    </div>
  )
}
