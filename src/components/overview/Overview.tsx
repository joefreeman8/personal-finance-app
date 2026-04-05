import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { balance, budgets, pots, transactions } from '../../data/data.json'
import { formatCurrency } from '../../utilities/formattingHelpers'
import BalanceCard from './overviewDisplays/BalanceCard'
import OverviewBudgets from './overviewDisplays/OverviewBudgets'
import OverviewPots from './overviewDisplays/OverviewPots'
import OverviewRecurringBills from './overviewDisplays/OverviewRecurringBills'
import OverviewTransactions from './overviewDisplays/OverviewTransactions'

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

  const navigateToEndpoint = (endpoint: string) => {
    navigate(endpoint)
  }

  return (
    <section className="py-300 px-200 md:py-400 md:px-500">
      <h1 className="text-preset-1 mb-400 xl:mb-0 xl:my-100">
        Overview
      </h1>
      <div className="flex flex-col md:flex-row my-400 md:justify-between">
        <BalanceCard title="Current Balance" amount={formattedBalances.current} primary />
        <BalanceCard title="Income" amount={formattedBalances.income} />
        <BalanceCard title="Expenses" amount={formattedBalances.expenses} />
      </div>
      <div className='flex flex-col xl:flex-row'>
        <div className='flex flex-col xl:w-7/12 xl:mr-400'>
          <OverviewPots pots={pots} navigateToEndpoint={navigateToEndpoint} />
          <OverviewTransactions transactions={transactions} navigateToEndpoint={navigateToEndpoint} />
        </div>
        <div className='flex flex-col xl:w-2/5'>
          <OverviewBudgets budgets={budgets} navigateToEndpoint={navigateToEndpoint} formatCurrency={formatCurrency} />
          <OverviewRecurringBills transactions={transactions} navigateToEndpoint={navigateToEndpoint} />
        </div>
      </div>

    </section>
  )
}
