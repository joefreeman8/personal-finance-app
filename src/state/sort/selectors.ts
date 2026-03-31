import { createSelector } from "@reduxjs/toolkit";

import { selectFilteredTransactions } from "../filter/selectors";
import { RootState } from "../store";



const getSortValue = (state: RootState) => state.sort.value


export const selectSortedTransactions = createSelector(
  [
    selectFilteredTransactions,
    getSortValue
  ], (
    filteredTransactions,
    sortValue
  ) => {
  const transactions = [...filteredTransactions]

  switch (sortValue) {
    case 'latest':
      return transactions.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    case 'oldest':
      return transactions.sort((a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
      )
    case 'alphabetical':
      return transactions.sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    case 'reverseAlphabetical':
      return transactions.sort((a, b) =>
        b.name.localeCompare(a.name)
      )
    case 'byHighest':
      return transactions.sort((a, b) =>
        b.amount - a.amount
      )
    case 'byLowest':
      return transactions.sort((a, b) =>
        a.amount - b.amount
      )
    default:
      return transactions
  }
})