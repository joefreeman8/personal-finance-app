import { useState } from 'react'
import { useSelector } from 'react-redux'

import { selectSortedTransactions } from '../../state/sort/selectors'
import TransactionsTableBody from './TransactionsTableBody'
import TransactionsTableFooter from './TransactionsTableFooter'
import TransactionsTableHeader from './TransactionsTableHeader'


export default function Transactions() {
  const [searchTerm, setSearchTerm] = useState('')
  const sortedTransactions = useSelector(selectSortedTransactions)

  const searchTransactions = sortedTransactions.filter(transaction =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const transactions = searchTransactions.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(transactions.length / itemsPerPage)

  return (
    <section className="py-300 px-200 md:py-400 md:px-500">
      <h1 className="text-preset-1 mb-400 xl:mb-0 xl:my-100">
        Transactions
      </h1>
      <div className="flex flex-col p-400 md:flex-col my-400 md:justify-between bg-white rounded-xl">
        <TransactionsTableHeader setSearchTerm={setSearchTerm} searchTerm={searchTerm} setCurrentPage={setCurrentPage} />
        <TransactionsTableBody transactions={transactions} />
        <TransactionsTableFooter setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
      </div>
    </section>
  )
}
