import { balance } from '../data.json'
export default function Overview() {

  const currentBalance = balance.current.toFixed(2)
  const totalIncome = balance.income.toFixed(2)
  const totalExpenses = balance.expenses.toFixed(2)

  return (
    <section className="py-300 px-200 md:py-400 md:px-500">
      <h1 className="text-preset-1 mb-400 xl:mb-0 xl:my-100">
        Overview
      </h1>
      <div className="flex flex-col md:flex-row md:my-400 md:justify-between">
        <div className="
          bg-grey900 text-white rounded-md p-250 mb-150
          md:mb-0 md:p-300 md:mr-300 md:w-1/3
        ">
          <p className="text-preset-4">Current Balance</p>
          <p className="text-preset-1 mt-150">${currentBalance}</p>
        </div>
        <div className="
          bg-white rounded-md p-250 mb-150 
          md:mb-0 md:p-300 md:mr-300 md:w-1/3
        ">
          <p className="text-preset-4 text-grey500">Income</p>
          <p className="text-preset-1 text-grey900 mt-150">${totalIncome}</p>
        </div>
        <div className="
            bg-white rounded-md p-250 
            md:mb-0 md:p-300 md:w-1/3
            ">
          <p className="text-preset-4 text-grey500">Expenses</p>
          <p className="text-preset-1 text-grey900 mt-150">${totalExpenses}</p>
        </div>
      </div>
    </section>
  )
}
