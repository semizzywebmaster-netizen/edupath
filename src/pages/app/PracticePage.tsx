
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
export function PracticePage() {
  const [selected, setSelected] = useState<string|null>(null)
  return <div className="space-y-6"><h1 className="text-2xl font-bold">Practice & Study Activities</h1><Badge variant="secondary">Verified / Authorized vs AI-Generated Practice clearly labeled</Badge><Card><CardHeader><CardTitle>Sample Question (Demo)</CardTitle><CardDescription>Official/verified questions separate from AI-generated practice</CardDescription></CardHeader><CardContent className="space-y-3"><p className="font-medium">What is the derivative of x²?</p><div className="space-y-2">{['2x','x','x²','2'].map(o=><button key={o} onClick={()=>setSelected(o)} className={`w-full rounded-lg border p-3 text-left text-sm ${selected===o?'border-primary bg-primary/5':'hover:bg-gray-50'}`}>{o}</button>)}</div>{selected && <div className="rounded-lg bg-green-50 p-3 text-sm text-green-800">Correct! 2x. Explanation: Power rule... <Badge variant="success" className="ml-2">Verified Content</Badge></div>}<div className="flex gap-2"><Button variant="outline">Retry</Button><Button>Next Question</Button></div></CardContent></Card></div>
}
