import { Dispatch, SetStateAction } from "react"

import leftIcon from '/assets/images/icon-caret-left.svg'
import rightIcon from '/assets/images/icon-caret-right.svg'

type TransactionsTableFooterProps = {
  setCurrentPage: Dispatch<SetStateAction<number>>,
  currentPage: number,
  totalPages: number
}
const TransactionsTableFooter = ({ setCurrentPage, currentPage, totalPages }: TransactionsTableFooterProps) => {
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const previousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  return (
    <div className='flex justify-between items-end mt-300 h-[64px]'>
      <button
        className='text-preset-4 text-grey900 flex items-center justify-evenly border border-beige500 w-[95px] h-[40px] rounded-lg'
        onClick={previousPage}
      >
        <img src={leftIcon} alt="previous page" />
        Prev
      </button>
      <div className='flex flex-row items-center justify-center'>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`
                    ${currentPage === pageNumber ? 'bg-grey900 text-white' : 'bg-white text-grey900'}
                    flex items-center justify-center border border-beige500 w-[40px] h-[40px] mx-50 rounded-lg
                    `}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className='text-preset-4 text-grey900 flex items-center justify-evenly border border-beige500 w-[95px] h-[40px] rounded-lg'
        onClick={nextPage}
      >
        Next
        <img src={rightIcon} alt="next page" />
      </button>
    </div>
  )
}

export default TransactionsTableFooter