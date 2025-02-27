import { useState } from 'react'
import { transactions } from '../../data/data.json'
import { formatDateString, formatAmount, styleAmount } from '../../utilities/formattingFunctions'
import searchIcon from '/assets/images/icon-search.svg'
import leftIcon from '/assets/images/icon-caret-left.svg'
import rightIcon from '/assets/images/icon-caret-right.svg'

interface Transaction {
  avatar: string,
  name: string,
  category: string,
  date: string,
  amount: number,
  recurring: false
}

export default function Transactions() {

  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredTransactions = transactions.filter(transaction =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  //***** FOR PAGINATION 
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 10
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentTransactions = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage)

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }
  // ****** 




  console.log(searchTerm)


  return (
    <section className="py-300 px-200 md:py-400 md:px-500">
      <h1 className="text-preset-1 mb-400 xl:mb-0 xl:my-100">Transactions</h1>
      <div className="flex flex-col p-400 md:flex-col my-400 md:justify-between bg-white rounded-xl">
        <form className="flex flex-row justify-between items-center my-50 h-[46px] w-full">
          <div className="flex-1">
            <div className="w-[320px] px-200 py-150 border border-grey900 rounded flex flex-row justify-between">
              <label hidden htmlFor="searchTransaction">Search</label>
              <input
                type="text"
                name='searchTransaction'
                placeholder="Search transaction"
                className="w-full mr-100"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <img src={searchIcon} alt="Search Icon" />
            </div>
          </div>
          <div className="flex flex-row">
            <label htmlFor="sort" className="content-center text-preset-4 text-grey500 mr-100">
              Sort By
            </label>
            <select
              name="sort"
              id="sort"
              className="px-250 py-150 border border-grey900 rounded"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="aToZ">A to Z</option>
              <option value="zToA">Z to A</option>
              <option value="highest">Highest</option>
              <option value="lowest">Lowest</option>
            </select>
            <label htmlFor="category" className="content-center text-preset-4 text-grey500 ml-300 mr-100">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="px-250 py-150 border border-grey900 rounded"
            >
              <option value="allTransactions">All Transactions</option>
              <option value="entertainment">Entertainment</option>
              <option value="bills">Bills</option>
              <option value="groceries">Groceries</option>
              <option value="diningOut">Dining Out</option>
              <option value="transportation">Transportation</option>
              <option value="personalCare">Personal Care</option>
            </select>
          </div>
        </form>
        <div className='flex flex-row items-center my-300 h-[46px] w-full px-200 py-150 border-b'>
          <h3 className='text-preset-5 text-grey500 mr-400 w-[428px]'>Recipient / Sender</h3>
          <h3 className='text-preset-5 text-grey500 mr-400 w-[120px]'>Category</h3>
          <h3 className='text-preset-5 text-grey500 mr-400 w-[120px]'>Transaction Date</h3>
          <h3 className='text-preset-5 text-grey500 w-[200px] flex justify-end'>Amount</h3>
        </div>
        <section>
          {currentTransactions.map((transaction, idx) => (
            <div key={idx} className='flex flex-row items-center w-fill px-200 border-b py-200'>
              <div className='flex flex-row items-center w-[428px] mr-400'>
                <img className='rounded-full w-[40px] h-[40px] mr-200' src={transaction.avatar} alt={transaction.name} />
                <h4 className='text-preset-4-bold text-grey500  my-100 text-grey900'>{transaction.name}</h4>
              </div>
              <p className='text-preset-5 text-grey500 mr-400 w-[120px]'>{transaction.category}</p>
              <p className='text-preset-5 text-grey500 mr-400 w-[120px]'>{formatDateString(transaction.date)}</p>
              <p className={`text-preset-4-bold w-[200px] flex justify-end ${styleAmount(transaction.amount)}`}>
                {formatAmount(transaction.amount)}
              </p>
            </div>
          ))}
          <div className='flex justify-between items-end mt-300 h-[64px]'>
            <button
              className='text-preset-4 text-grey900 flex items-center justify-evenly border border-beige500 w-[95px] h-[40px] rounded-lg'
              onClick={handlePrevious}
            >
              <img src={leftIcon} alt="Arrow pointing to go to a previous page" />
              Prev
            </button>
            <div className='flex flex-row items-center justify-center'>
              {pageNumbers.map((num) => (
                <button
                  key={num}
                  className={`
                    ${currentPage === num ? 'bg-grey900 text-white' : 'bg-white text-grey900'}
                    flex items-center justify-center border border-beige500 w-[40px] h-[40px] mx-50 rounded-lg
                    `}
                  onClick={() => handlePageChange(num)}
                >
                  {num}
                </button>
              ))}
            </div>
            <button
              className='text-preset-4 text-grey900 flex items-center justify-evenly border border-beige500 w-[95px] h-[40px] rounded-lg'
              onClick={handleNext}
            >
              Next
              <img src={rightIcon} alt="Arrow pointing to go to the next page" />
            </button>
          </div>
        </section>
      </div>

    </section>
  )
}
