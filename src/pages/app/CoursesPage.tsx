
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Link } from 'react-router-dom'
import { mockCourses } from '@/mocks/courses'
import { Badge } from '@/components/ui/badge'
export function CoursesPage() {
  const [q, setQ] = useState('')
  const filtered = mockCourses.filter(c=>c.title.toLowerCase().includes(q.toLowerCase()))
  return <div className="space-y-6"><h1 className="text-2xl font-bold">Courses</h1><div className="flex gap-3 flex-col md:flex-row"><Input placeholder="Search courses..." value={q} onChange={e=>setQ(e.target.value)} className="md:w-80" /><Select><option>All Levels</option><option>Secondary</option><option>University</option></Select><Select><option>All Subjects</option><option>Mathematics</option><option>English</option></Select></div><div className="grid gap-4 md:grid-cols-3">{filtered.map(c=><Link key={c.id} to={`/app/courses/${c.id}`}><Card className="card-hover h-full"><div className="h-32 w-full bg-gray-100 rounded-t-xl overflow-hidden"><img src={c.thumbnail} alt="" className="w-full h-full object-cover" /></div><CardHeader><div className="flex justify-between"><Badge variant="secondary">{c.subject}</Badge><Badge>{c.difficulty}</Badge></div><CardTitle className="mt-2 text-base">{c.title}</CardTitle><CardDescription>{c.description}</CardDescription></CardHeader><CardContent><div className="text-xs text-muted-foreground">{c.lessonsCount} lessons • {c.duration}</div></CardContent></Card></Link>)}</div></div>
}
