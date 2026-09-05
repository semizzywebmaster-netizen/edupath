
import { PageContainer } from '@/components/ui/page-container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const steps = ['country','education-level','institution-type','institution','programme','class-level','session','exams','goals','review','complete']
export function OnboardingPage() {
  const [step, setStep] = useState(0)
  const navigate = useNavigate()
  const next = () => { if(step < steps.length-1) setStep(s=>s+1); else navigate('/app/dashboard') }
  return <PageContainer><div className="max-w-2xl mx-auto"><div className="mb-6"><p className="text-sm text-muted-foreground">Step {step+1} of {steps.length} — {steps[step]}</p><div className="mt-2 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-primary rounded-full transition-all" style={{width: `${((step+1)/steps.length)*100}%`}} /></div></div><Card><CardHeader><CardTitle className="capitalize">{steps[step].replace('-',' ')} Setup</CardTitle><CardDescription>Support: secondary, university, polytechnic, college of education, nursing/health, technical/vocational. Can't find your school? You can submit for admin verification.</CardDescription></CardHeader><CardContent className="space-y-4"><Select label="Select option"><option>Choose...</option><option>Nigeria</option><option>University</option><option>University of Lagos</option><option>Computer Science</option><option>300 Level</option></Select><div className="flex gap-2"><Button variant="outline" onClick={()=>setStep(s=>Math.max(0,s-1))}>Back</Button><Button onClick={next}>{step===steps.length-1?'Complete':'Next'}</Button></div><div className="text-xs text-muted-foreground"><Link to="/app/onboarding" className="text-primary">Can’t find your school? Submit for verification</Link> — users must not instantly turn submission into official institution.</div></CardContent></Card></div></PageContainer>
}
