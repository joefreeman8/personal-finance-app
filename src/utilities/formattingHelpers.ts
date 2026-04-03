export function formatDateString(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}
const formatToLocaleString = (amount: number) => {
  return `+$${amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`
}

export function formatCurrency(amount: number) {
  return amount >= 0
    ? formatToLocaleString(amount)
    : formatToLocaleString(amount).slice(1)

}

export function styleAmount(amount: number) {
  return amount > 0 ? 'text-green' : 'text-grey900'
}