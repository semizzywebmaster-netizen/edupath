export function cn(...classes: (string|boolean|undefined|null)[]) {
  return classes.filter(Boolean).join(' ')
}
export function formatCurrency(amount: number, currency = 'NGN') {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency }).format(amount)
}
