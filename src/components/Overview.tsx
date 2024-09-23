import { balance } from '../data.json'
import { useNavigate } from 'react-router-dom'

import rightArrow from '../assets/images/icon-caret-right.svg'
import potIcon from '../assets/images/icon-pot.svg'

export default function Overview() {

  const navigate = useNavigate()
  const currentBalance = balance.current.toFixed(2)
  const totalIncome = balance.income.toFixed(2)
  const totalExpenses = balance.expenses.toFixed(2)

  function navigateToPots() {
    navigate('/pots')
  }

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

      <div className='flex flex-row'>
        <div className='flex flex-col xl:w-3/5  xl:mr-400'>
          <div className='xl:p-400 border-2 border-purple bg-white'>
            <div className='flex xl:justify-between xl:mb-250'>
              <h2 className='text-preset-2 text-grey900'>Pots</h2>
              <button className='flex items-center text-grey500 text-preset-4'>
                <p onClick={navigateToPots} className='mr-4'>See Details</p>
                <img src={rightArrow} alt='icon-pointing-right' />
              </button>
            </div>
            <div className='flex'>
              <div className='flex flex-row bg-beige100 xl:w-[247px] xl:p-200 rounded-xl'>
                <img src={potIcon} alt='pot icon' />
                <div className='flex flex-col xl:ml-200'>
                  <p className='text-grey500 text-preset-4 xl:mb-[11px]'>Total Saved</p>
                  <p className='text-grey900 text-preset-1'>$850</p>
                </div>
              </div>
              <div className='ml-250 grid grid-cols-2 gap-200'>
                <div className='xl:w-[130px] flex items-center'>
                  <div className='xl:w-1 xl:bg-green rounded'>
                    <div className='xl:ml-200'>
                      <p className='xl:text-preset-5 text-grey500 xl:mb-50 xl:w-[100px]'>Savings</p>
                      <p className='xl:text-preset-4-bold text-grey900'>$159</p>
                    </div>
                  </div>
                </div>
                <div className='xl:w-[130px] flex items-center'>
                  <div className='xl:w-1 xl:bg-cyan rounded'>
                    <div className='xl:ml-200'>
                      <p className='xl:text-preset-5 text-grey500 xl:mb-50 xl:w-[100px]'>Gift</p>
                      <p className='xl:text-preset-4-bold text-grey900'>$40</p>
                    </div>
                  </div>
                </div>
                <div className='xl:w-[130px] flex items-center'>
                  <div className='xl:w-1 xl:bg-navy rounded'>
                    <div className='xl:ml-200'>
                      <p className='xl:text-preset-5 text-grey500 xl:mb-50 xl:w-[100px]'>Concert Ticket</p>
                      <p className='xl:text-preset-4-bold text-grey900'>$110</p>
                    </div>
                  </div>
                </div>
                <div className='xl:w-[130px] flex items-center'>
                  <div className='xl:w-1 xl:bg-yellow rounded'>
                    <div className='xl:ml-200'>
                      <p className='xl:text-preset-5 text-grey500 xl:mb-50 xl:w-[100px]'>New Laptop</p>
                      <p className='xl:text-preset-4-bold text-grey900'>$10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='border-2 border-pink '>Transactions</div>
        </div>
        <div className='flex flex-col xl:w-2/5 border border-red'>
          <div>
            <h2>Budgets</h2>
          </div>
          <div>
            <h2>Recurring Bills</h2>
          </div>
        </div>
      </div>
    </section >
  )
}
