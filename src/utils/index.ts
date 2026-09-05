
export function slugify(s: string) { return s.toLowerCase().replace(/[^a-z0-9]+/g,'-') }
export function truncate(s: string, n: number) { return s.length>n?s.slice(0,n)+'...':s }
