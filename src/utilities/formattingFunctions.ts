export function formatDateString(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

// .toLocaleString provides the comma seperator for larger numbers
export function formatAmount(amount: number): string {
  if (amount >= 0) {
    return `+$${amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`
  } else {
    return `-$${amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).slice(1)}`
  }
}




export function styleAmount(amount: number): string {
  return amount > 0 ? 'text-green' : 'text-grey900'
}