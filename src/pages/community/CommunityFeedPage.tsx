
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
export function CommunityFeedPage() { return <div className="space-y-6"><h1 className="text-2xl font-bold">Community Feed</h1><Card><CardHeader><CardTitle>Safe, moderated, social learning</CardTitle></CardHeader><CardContent className="space-y-3"><div className="rounded-lg border p-3">Post: How I solved WAEC maths... <Button variant="ghost" size="sm">React • Comment • Bookmark • Report • Mute • Block</Button></div></CardContent></Card></div> }
