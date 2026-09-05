
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Link } from 'react-router-dom'
const subjects = ['Mathematics','English','Physics','Chemistry','Biology','Economics','Government','Literature']
export function SubjectsPage() { return <div className="space-y-6"><h1 className="text-2xl font-bold">Subjects</h1><p className="text-muted-foreground">Curriculum → Subject → Topic → Subtopic → Lesson → Objective → Practice</p><div className="grid gap-4 md:grid-cols-4">{subjects.map(s=><Link key={s} to={`/app/subjects/${s.toLowerCase()}`}><Card className="card-hover"><CardHeader><CardTitle>{s}</CardTitle><CardDescription>Explore topics, lessons, practice</CardDescription></CardHeader></Card></Link>)}</div></div> }
export function SubjectDetailPage() { return <div className="space-y-6"><h1 className="text-2xl font-bold">Subject Detail</h1><div className="text-sm text-muted-foreground">Curriculum authority stays on backend/admin content system. Frontend only navigates.</div></div> }
