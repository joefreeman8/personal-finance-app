import rightArrow from '../../assets/images/icon-caret-right.svg'

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
  navigateToTransactions: () => void // Function to navigate to pots
}

export default function OverviewTransactions({ transactions, navigateToTransactions }: OverviewTransactionsProps) {
  return (
    <div className='p-300 md:p-400 rounded-xl bg-white'>
      <div className='flex justify-between mb-250'>
        <h2 className='text-preset-2 text-grey900'>Transactions</h2>
        <button className='flex items-center text-grey500 text-preset-4'>
          <p onClick={navigateToTransactions} className='mr-150'>View All</p>
          <img src={rightArrow} alt='icon-pointing-right' />
        </button>
      </div>
      <div className='flex flex-col'>
        {transactions && (
          transactions.map((pot, index) => (
            index < 4 && (
              <div key={index} className='w-[130px] flex items-center'>
                <div className='w-1 rounded'>
                  <div className='ml-200'>
                    <p className='text-preset-5 text-grey500 mb-50 w-[100px]'>{pot.name}</p>
                    <p className='text-preset-4-bold text-grey900'>${pot.total}</p>
                  </div>
                </div>
              </div>
            )
          ))
        )}
      </div>
    </div>
    // </div>
  )
}
