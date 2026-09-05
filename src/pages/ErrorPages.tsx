
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
export function NotFoundPage() { return <div className="flex min-h-[60vh] flex-col items-center justify-center text-center"><h1 className="text-6xl font-bold">404</h1><p className="mt-2 text-muted-foreground">Page not found</p><Button className="mt-6" asChild><Link to="/">Go Home</Link></Button></div> }
export function GenericErrorPage({ code, title, description }: { code: string; title: string; description: string }) { return <div className="flex min-h-[60vh] flex-col items-center justify-center text-center"><h1 className="text-6xl font-bold">{code}</h1><p className="mt-2 font-semibold">{title}</p><p className="mt-1 text-sm text-muted-foreground">{description}</p><Button className="mt-6" asChild><Link to="/">Go Home</Link></Button></div> }
