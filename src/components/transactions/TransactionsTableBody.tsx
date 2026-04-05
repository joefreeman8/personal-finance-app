import { Transaction } from "../../state/transactions/types"
import { formatCurrency, formatDateString, styleAmount } from "../../utilities/formattingHelpers"

type TransactionsTableBodyProps = {
  transactions: Transaction[]
}

const TransactionsTableBody = ({ transactions }: TransactionsTableBodyProps) => {
  return (
    <>
      {transactions.map((transaction, idx) => (
        <div key={idx} className='flex flex-row items-center w-fill px-200 border-b py-200'>
          <div className='flex flex-row items-center w-[428px] mr-400'>
            <img className='rounded-full w-[40px] h-[40px] mr-200' src={transaction.avatar} alt={transaction.name} />
            <h4 className='text-preset-4-bold text-grey500  my-100 text-grey900'>{transaction.name}</h4>
          </div>
          <p className='text-preset-5 text-grey500 mr-400 w-[120px]'>{transaction.category}</p>
          <p className='text-preset-5 text-grey500 mr-400 w-[120px]'>{formatDateString(transaction.date)}</p>
          <p className={`text-preset-4-bold w-[200px] flex justify-end ${styleAmount(transaction.amount)}`}>
            {formatCurrency(transaction.amount)}
          </p>
        </div>
      ))}
    </>
  )
}

export default TransactionsTableBody