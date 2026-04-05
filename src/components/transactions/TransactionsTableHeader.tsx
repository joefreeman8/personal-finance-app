import { Dispatch, SetStateAction } from "react"

import searchIcon from '/assets/images/icon-search.svg'

import FilterByCategory from "./FilterByCategory"
import SortTransactions from "./SortTransactions"

type TransactionsTableHeaderProps = {
  setSearchTerm: Dispatch<SetStateAction<string>>
  setCurrentPage: Dispatch<SetStateAction<number>>
  searchTerm: string
}

const TransactionsTableHeader = ({ setSearchTerm, searchTerm, setCurrentPage }: TransactionsTableHeaderProps) => {

  const handleSearchChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  return (
    <>
      <form className="flex flex-row justify-between items-center my-50 h-[46px] w-full">
        <div className="flex-1">
          <div className="w-[320px] px-200 py-150 border border-grey900 rounded-sm flex flex-row justify-between">
            <label hidden htmlFor="searchTransaction">Search</label>
            <input
              type="text"
              name='searchTransaction'
              placeholder="Search transaction"
              className="w-full mr-100 outline-none"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <img src={searchIcon} alt="Search Icon" />
          </div>
        </div>
        <div className="flex flex-row">
          <SortTransactions />
          <FilterByCategory />
        </div>
      </form>
      <div className='flex flex-row items-center my-300 h-[46px] w-full px-200 py-150 border-b'>
        <h3 className='text-preset-5 text-grey500 mr-400 w-[428px]'>Recipient / Sender</h3>
        <h3 className='text-preset-5 text-grey500 mr-400 w-[120px]'>Category</h3>
        <h3 className='text-preset-5 text-grey500 mr-400 w-[120px]'>Transaction Date</h3>
        <h3 className='text-preset-5 text-grey500 w-[200px] flex justify-end'>Amount</h3>
      </div>
    </>
  )

}
export default TransactionsTableHeader