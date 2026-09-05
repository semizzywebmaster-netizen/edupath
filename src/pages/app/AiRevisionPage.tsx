
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
export function AiRevisionPage() {
  return <div className="space-y-6"><h1 className="text-2xl font-bold">AI Revision</h1><Badge>Demo Mode — Backend will confirm processing</Badge><Card><CardHeader><CardTitle>How it works</CardTitle><CardDescription>Secure, API-controlled, labeled AI vs Verified</CardDescription></CardHeader><CardContent className="space-y-4"><div className="rounded-lg border border-dashed bg-gray-50 p-6 text-sm text-muted-foreground">UI for Revision: Upload/photo → extraction → subject/topic → explanation → steps → answer → similar practice → save. Supports diagrams, charts, equations.</div><Input placeholder="Ask anything... (Demo)" /><Button>Generate (Demo)</Button><p className="text-xs text-muted-foreground">Never label AI-generated as official WAEC/NECO/JAMB unless backend supplies verified authorized content.</p></CardContent></Card></div>
}
