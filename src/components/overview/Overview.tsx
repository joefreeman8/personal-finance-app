import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import OverviewPots from './overviewDisplays/OverviewPots'
import OverviewTransactions from './overviewDisplays/OverviewTransactions'
import { balance, pots, transactions, budgets } from '../../data/data.json'
import BalanceCard from './overviewDisplays/BalanceCard'
import OverviewBudgets from './overviewDisplays/OverviewBudgets'
import OverviewRecurringBills from './overviewDisplays/OverviewRecurringBills'


// Helper function to format currency values
// 'undefined' allows the default to be used which gives the comma
const formatCurrency = (amount: number): string => {
  return amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}


export default function Overview() {
  const navigate = useNavigate()

  // Use useMemo to memoize formatted balance values
  // This prevents unnecessary recalculations on re-renders
  // The empty dependency array means this will only be calculated once
  const formattedBalances = useMemo(() => ({
    current: formatCurrency(balance.current),
    income: formatCurrency(balance.income),
    expenses: formatCurrency(balance.expenses)
  }), [])

  // Navigation functions
  const navigateToPots = () => navigate('/pots')
  const navigateToTransactions = () => navigate('/transactions')
  const navigateToBudgets = () => navigate('/budgets')
  const navigateToRecurringBills = () => navigate('/recurring-bills')

  return (
    <section className="py-300 px-200 md:py-400 md:px-500">
      <h1 className="text-preset-1 mb-400 xl:mb-0 xl:my-100">
        Overview
      </h1>
      <div className="flex flex-col md:flex-row my-400 md:justify-between">
        {/* Reusable BalanceCard components for different balance types */}
        <BalanceCard title="Current Balance" amount={formattedBalances.current} primary />
        <BalanceCard title="Income" amount={formattedBalances.income} />
        <BalanceCard title="Expenses" amount={formattedBalances.expenses} />
      </div>

      <div className='flex flex-col xl:flex-row'>
        <div className='flex flex-col xl:w-7/12 xl:mr-400'>
          <OverviewPots pots={pots} navigateToPots={navigateToPots} />
          <OverviewTransactions transactions={transactions} navigateToTransactions={navigateToTransactions} />
        </div>

        <div className='flex flex-col xl:w-2/5'>
          <OverviewBudgets budgets={budgets} navigateToBudgets={navigateToBudgets} formatCurrency={formatCurrency} />
          <OverviewRecurringBills transactions={transactions} navigateToRecurringBills={navigateToRecurringBills} />
        </div>
      </div>

    </section>
  )
}
