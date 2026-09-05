
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { mockCourses } from '@/mocks/courses'
export function DashboardPage() {
  return <div className="space-y-6">
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <div><h1 className="text-2xl font-bold">Welcome back, Demo Student 👋</h1><p className="text-muted-foreground">Here's your learning summary — Demo Mode</p></div>
      <Button asChild><Link to="/app/ai/tutor">Ask AI Tutor</Link></Button>
    </div>
    <div className="grid gap-4 md:grid-cols-4">
      <Card><CardHeader><CardDescription>Continue Learning</CardDescription><CardTitle>3 courses</CardTitle></CardHeader></Card>
      <Card><CardHeader><CardDescription>Study Streak</CardDescription><CardTitle>5 days 🔥</CardTitle></CardHeader></Card>
      <Card><CardHeader><CardDescription>Practice Score</CardDescription><CardTitle>78% avg</CardTitle></CardHeader></Card>
      <Card><CardHeader><CardDescription>Goals</CardDescription><CardTitle>2/3 completed</CardTitle></CardHeader></Card>
    </div>
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <Card><CardHeader><CardTitle>Continue Learning</CardTitle></CardHeader><CardContent className="grid gap-3">{mockCourses.slice(0,2).map(c=><div key={c.id} className="flex gap-3 rounded-lg border p-3"><img src={c.thumbnail} alt="" className="h-12 w-12 rounded object-cover" /><div><p className="font-medium text-sm">{c.title}</p><div className="mt-1 h-1.5 w-32 bg-gray-100 rounded"><div className="h-1.5 bg-primary rounded" style={{width:`${c.progress}%`}} /></div></div></div>)}</CardContent></Card>
        <Card><CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">• Completed Quiz: JAMB English — 80%<br/>• Snap to Solve: Physics question<br/>• AI Notes generated: Biology</CardContent></Card>
      </div>
      <div className="space-y-6">
        <Card><CardHeader><CardTitle>Recommendations</CardTitle><CardDescription>Based on your recent practice</CardDescription></CardHeader><CardContent className="space-y-2"><Badge>Revision: Algebra</Badge><Badge variant="secondary">Next: WAEC Past Q</Badge><Link to="/app/recommendations" className="block text-sm text-primary mt-2">View all →</Link></CardContent></Card>
        <Card><CardHeader><CardTitle>Upcoming</CardTitle></CardHeader><CardContent className="text-sm"><p>Mock Exam: Mathematics — Tomorrow 10am</p><p className="mt-2">Study Goal: 2h daily</p></CardContent></Card>
      </div>
    </div>
  </div>
}
