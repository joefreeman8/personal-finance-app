// Interface for BalanceCard props
interface BalanceCardProps {
  title: string
  amount: string
  primary?: boolean
}

// Reusable BalanceCard component
function BalanceCard({ title, amount, primary = false }: BalanceCardProps) {

  // Base classes for styling
  const baseClasses = "rounded-md p-250 mb-150 md:mb-0 md:p-300 md:w-1/3 md:mr-300 last:md:mr-0"
  // Conditional classes based on whether it's the primary card
  const colorClasses = primary
    ? "bg-grey900 text-white"
    : "bg-white text-grey500"

  return (
    <div className={`${baseClasses} ${colorClasses}`}>
      <p className="text-preset-4">{title}</p>
      <p className={`text-preset-1 mt-150 ${primary ? '' : 'text-grey900'}`}>${amount}</p>
    </div>
  )
}

export default BalanceCard