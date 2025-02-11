export function formatDateString(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

export function formatAmount(amount: number): string {
  if (amount >= 0) {
    return `+$${amount.toFixed(2)}`
  } else {
    return `-$${amount.toFixed(2).toString().slice(1)}`
  }
}

export function styleAmount(amount: number): string {
  return amount > 0 ? 'text-green' : 'text-grey900'
}