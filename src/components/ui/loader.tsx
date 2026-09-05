
export function Loader({ size='default' }: { size?: 'sm'|'default'|'lg' }) {
  const sizes = { sm: 'h-4 w-4', default: 'h-6 w-6', lg: 'h-10 w-10' }
  return <div className={`animate-spin rounded-full border-2 border-primary border-t-transparent ${sizes[size]}`} />
}
export function PageLoader() {
  return <div className="flex h-[60vh] items-center justify-center"><Loader size="lg" /></div>
}
