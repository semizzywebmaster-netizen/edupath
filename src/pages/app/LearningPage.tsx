
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { mockCourses } from '@/mocks/courses'
import { Link } from 'react-router-dom'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
export function LearningPage() {
  return <div className="space-y-6"><h1 className="text-2xl font-bold">My Learning</h1><Tabs defaultValue="recent"><TabsList><TabsTrigger value="recent">Recently Studied</TabsTrigger><TabsTrigger value="saved">Saved</TabsTrigger><TabsTrigger value="recommended">Recommended</TabsTrigger></TabsList><TabsContent value="recent"><div className="grid gap-4 md:grid-cols-2">{mockCourses.map(c=><Card key={c.id}><CardHeader><CardTitle>{c.title}</CardTitle><CardDescription>{c.subject} • {c.duration}</CardDescription></CardHeader><CardContent><Link to={`/app/courses/${c.id}`} className="text-sm text-primary">Continue →</Link></CardContent></Card>)}</div></TabsContent><TabsContent value="saved"><div className="text-sm text-muted-foreground">No saved items yet.</div></TabsContent><TabsContent value="recommended"><div className="text-sm text-muted-foreground">Based on your goals: Try Physics, Chemistry revision.</div></TabsContent></Tabs></div>
}
