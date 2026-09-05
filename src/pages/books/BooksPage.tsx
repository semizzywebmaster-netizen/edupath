
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
export function BooksPage() { return <div className="space-y-6"><h1 className="text-2xl font-bold">Books & Learning Resources</h1><div className="grid gap-4 md:grid-cols-3">{[1,2,3].map(i=><Card key={i}><CardHeader><CardTitle>Recommended Book {i}</CardTitle><CardDescription>Admin/content controlled recommendations</CardDescription></CardHeader></Card>)}</div></div> }
export function BookDetailPage() { return <div>Book Detail</div> }
export function ResourcesPage() { return <div>Resources — categories, subjects, levels, search, filters</div> }
