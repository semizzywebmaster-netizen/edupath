
import { PageContainer, Section } from '@/components/ui/page-container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
export function AiStudyCoachPage() {
  return <Section><PageContainer>
    <Badge>Demo Mode — UI Only</Badge>
    <h1 className="mt-4 text-4xl font-bold">AI StudyCoach</h1>
    <p className="mt-3 text-muted-foreground">This is a frontend demonstration. Real OCR/AI processing requires backend confirmation. No secrets in frontend.</p>
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <Card><CardHeader><CardTitle>How it works</CardTitle><CardDescription>Frontend → API → Orchestrator → Provider</CardDescription></CardHeader><CardContent><div className="rounded-lg bg-gray-50 p-4 text-sm border border-dashed">Upload/Photo → Extraction → Subject ID → Explanation → Steps → Final → Similar Practice → Save</div></CardContent></Card>
      <Card><CardHeader><CardTitle>UX Principles</CardTitle><CardDescription>UNDERSTAND → EXPLAIN → SOLVE → PRACTICE</CardDescription></CardHeader></Card>
    </div>
  </PageContainer></Section>
}
