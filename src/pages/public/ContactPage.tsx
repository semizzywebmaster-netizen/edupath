
import { PageContainer, Section } from '@/components/ui/page-container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
export function ContactPage() {
  return <Section><PageContainer>
    <h1 className="text-4xl font-bold">Contact Us</h1>
    <p className="mt-4 text-muted-foreground max-w-3xl">Contact form ready for backend integration. Does not pretend message was delivered.</p>
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <Card><CardHeader><CardTitle>Key Benefits</CardTitle><CardDescription>Production-ready UX, Demo Mode safe, API-first.</CardDescription></CardHeader><CardContent><ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1"><li>True multi-page React Router architecture</li><li>Responsive 320px → 1440px+</li><li>Accessible, keyboard navigable</li><li>Secure by design, backend authoritative</li></ul></CardContent></Card>
      <Card><CardHeader><CardTitle>Demo Mode</CardTitle><CardDescription>All data shown here is illustrative. Real functionality requires Laravel /api/v1/ integration.</CardDescription></CardHeader></Card>
    </div>
    
    <div className="mt-8 max-w-xl space-y-4"><Input label="Name" placeholder="Your name" /><Input label="Email" placeholder="you@example.com" /><Input label="Message" placeholder="How can we help?" /><Button>Send Message (Demo)</Button></div>
    
  </PageContainer></Section>
}
