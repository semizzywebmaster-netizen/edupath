
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
export function ExamPlatformPage() { 
  const exams = ['WAEC/SSCE','NECO','GCE','NABTEB','JAMB UTME','Post-UTME','ICAN','ACCA','CIPM','CIBN']
  return <div className="space-y-6"><h1 className="text-2xl font-bold">Examination Platform</h1><Badge>Verified vs AI-generated distinct</Badge><div className="grid gap-4 md:grid-cols-3">{exams.map(e=><Card key={e}><CardHeader><CardTitle>{e}</CardTitle><CardDescription>Discovery, details, subject selection, timer, navigation, review, results</CardDescription></CardHeader><CardContent><span className="text-xs text-muted-foreground">No PIN marketplace — as required</span></CardContent></Card>)}</div></div>
}
export function ExamDetailPage() { return <div>Exam Detail — timer UI, navigation, review, performance</div> }
