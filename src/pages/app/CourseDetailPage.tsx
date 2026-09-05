
import { useParams, Link } from 'react-router-dom'
import { mockCourses } from '@/mocks/courses'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
export function CourseDetailPage() {
  const { courseId } = useParams()
  const course = mockCourses.find(c=>c.id===courseId) || mockCourses[0]
  return <div className="space-y-6"><Link to="/app/courses" className="text-sm text-primary">← Back to courses</Link><div className="grid gap-6 lg:grid-cols-3"><div className="lg:col-span-2 space-y-6"><h1 className="text-3xl font-bold">{course.title}</h1><p className="text-muted-foreground">{course.description}</p><Card><CardHeader><CardTitle>Objectives</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">• Master {course.subject} fundamentals<br/>• Practice with verified & AI-generated questions<br/>• Track progress & weak topics</CardContent></Card><Card><CardHeader><CardTitle>Modules</CardTitle></CardHeader><CardContent><div className="space-y-2">{Array.from({length:5}).map((_,i)=><div key={i} className="flex justify-between rounded-lg border p-3 text-sm"><span>Module {i+1}: Introduction</span><Badge variant="secondary">4 lessons</Badge></div>)}</div></CardContent></Card></div><div><Card><CardHeader><CardTitle>Enroll</CardTitle><CardDescription>Progress: {course.progress || 0}%</CardDescription></CardHeader><CardContent className="space-y-3"><div className="h-2 bg-gray-100 rounded-full"><div className="h-2 bg-primary rounded-full" style={{width:`${course.progress}%`}} /></div><Button className="w-full">{course.progress?'Continue':'Enroll Now'}</Button><p className="text-xs text-muted-foreground">Backend completion state not fabricated — Demo Mode.</p></CardContent></Card></div></div></div>
}
