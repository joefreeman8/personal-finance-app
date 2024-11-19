import rightArrow from '/assets/images/icon-caret-right.svg'

interface Transaction {
  avatar: string
  name: string
  category: string
  date: string
  amount: number
  recurring: boolean
}

interface OverviewTransactionsProps {
  transactions: Transaction[] // Array of transactions
  navigateToTransactions: () => void // Function to navigate to transactions
}

export default function OverviewTransactions({ transactions, navigateToTransactions }: OverviewTransactionsProps) {

  function formatDateString(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  function formatAmount(amount: number): string {
    if (amount >= 0) {
      return `+$${amount.toFixed(2)}`
    } else {
      return `-$${amount.toFixed(2).toString().slice(1)}`
    }
  }

  function styleAmount(amount: number): string {
    return amount > 0 ? 'text-green' : 'text-grey900'
  }

  return (
    <section className='mt-300 p-300 md:p-400 rounded-xl bg-white'>
      <div className='flex justify-between mb-150'>
        <h2 className='text-preset-2 text-grey900'>Transactions</h2>
        <button className='flex items-center text-grey500 text-preset-4'>
          <p onClick={navigateToTransactions} className='mr-150'>View All</p>
          <img src={rightArrow} alt='icon-pointing-right' />
        </button>
      </div>
      <div className='flex flex-col'>
        {transactions && (
          transactions.map((transaction, index) => (
            index < 5 && (
              <div key={index} className={`${index !== 4 ? 'border-b' : ''}`}>
                <div className={`flex items-center justify-between w-full ${index !== 4 ? 'my-250' : 'mt-250 mb-50'}`}>
                  <div className='flex flex-row items-center'>
                    <img src={transaction.avatar} alt='avatar' className='rounded-full h-[40px] mr-200' />
                    <p className='my-100 text-preset-4-bold text-grey900'>{transaction.name}</p>
                  </div>
                  <div className='flex flex-col'>
                    <p className={`flex justify-end text-preset-4-bold mb-100 ${styleAmount(transaction.amount)}`}>
                      {formatAmount(transaction.amount)}
                    </p>
                    <p className='text-grey500 text-preset-5'>{formatDateString(transaction.date)}</p>
                  </div>
                </div>
              </div>
            )
          ))
        )}
      </div>
    </section>
  )
}
