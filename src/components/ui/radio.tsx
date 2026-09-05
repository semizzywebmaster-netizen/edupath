
import * as React from 'react'
export function RadioGroup({ children, value, onChange, label }: { children: React.ReactNode; value?: string; onChange?: (v:string)=>void; label?: string }) {
  return <div className="space-y-2">{label && <p className="text-sm font-medium">{label}</p>}<div className="space-y-2">{React.Children.map(children, (child:any)=> React.cloneElement(child, { checked: child.props.value===value, onChange: ()=>onChange?.(child.props.value) }))}</div></div>
}
export function Radio({ value, label, checked, onChange }: { value: string; label: string; checked?: boolean; onChange?: ()=>void }) {
  return <label className="flex items-center gap-2 text-sm"><input type="radio" value={value} checked={checked} onChange={onChange} className="h-4 w-4" />{label}</label>
}
