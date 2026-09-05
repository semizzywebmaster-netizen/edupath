
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
export function CareersPage() { return <div className="space-y-6"><h1 className="text-2xl font-bold">Careers & Scholarships</h1><p className="text-sm text-muted-foreground">No fabricated scholarships, partnerships or submissions</p><div className="grid gap-4 md:grid-cols-3"><Card><CardHeader><CardTitle>Software Engineer</CardTitle><CardDescription>Explore pathway, skills</CardDescription></CardHeader></Card><Card><CardHeader><CardTitle>Medicine</CardTitle><CardDescription>Eligibility UI, application guidance</CardDescription></CardHeader></Card></div></div> }
export function CareerDetailPage() { return <div>Career Detail</div> }
export function ScholarshipsPage() { return <div>Scholarships — discovery, eligibility, saved</div> }
export function ScholarshipDetailPage() { return <div>Scholarship Detail — never fabricate active partnerships</div> }
