
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
export function SearchPage() { return <div className="space-y-6"><h1 className="text-2xl font-bold">Universal Search</h1><Input placeholder="Search courses, subjects, institutions, exams, books, community, careers..." /><div className="grid gap-4 md:grid-cols-3"><Card><CardHeader><CardTitle>Courses</CardTitle></CardHeader></Card><Card><CardHeader><CardTitle>Subjects</CardTitle></CardHeader></Card><Card><CardHeader><CardTitle>Exams</CardTitle></CardHeader></Card></div></div> }
