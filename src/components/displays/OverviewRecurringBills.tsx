import rightArrow from '/assets/images/icon-caret-right.svg'

interface Transaction {
  category: string
  amount: number
  recurring: boolean
  date: string
}

interface OverviewRecurringBillsProps {
  transactions: Transaction[]
  navigateToRecurringBills: () => void
}

export default function OverviewRecurringBills({ transactions, navigateToRecurringBills }: OverviewRecurringBillsProps) {

  const recurringBills = transactions.filter(transaction => transaction.recurring)
  console.log(recurringBills)

  return (
    <section className='mt-300 p-300 md:p-400 rounded-xl bg-white'>
      <div className='flex justify-between mb-250'>
        <h2 className='text-preset-2 text-grey900'>Recurring Bills</h2>
        <button className='flex items-center text-grey500 text-preset-4'>
          <p onClick={navigateToRecurringBills} className='mr-150'>See Details</p>
          <img src={rightArrow} alt='icon-pointing-right' />
        </button>
      </div>
      <div className='flex flex-col rounded-xl'>
        <div className='flex justify-between items-center w-full h-[61px] bg-beige100 rounded-lg mb-200 p-200 border-l-4 border-green'>
          <p className='text-grey500 text-preset-4'>Paid Bills</p>
          <p className='text-grey900 text-preset-4-bold'>$190.00</p>
        </div>
        <div className='flex justify-between items-center w-full h-[61px] bg-beige100 rounded-lg mb-200 p-200 border-l-4 border-yellow'>
          <p className='text-grey500 text-preset-4'>Total Upcoming</p>
          <p className='text-grey900 text-preset-4-bold'>$194.98</p>
        </div>
        <div className='flex justify-between items-center w-full h-[61px] bg-beige100 rounded-lg p-200 border-l-4 border-cyan'>
          <p className='text-grey500 text-preset-4'>Due Soon</p>
          <p className='text-grey900 text-preset-4-bold'>$59.98</p>
        </div>
      </div>
    </section>
  )
}
