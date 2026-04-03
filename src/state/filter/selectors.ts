import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { selectTransactionsData } from "../transactions/selectors";
import { Transaction } from "../transactions/types";


export const selectFilterValue = (state: RootState) => state.filter.value

export const selectFilteredTransactions = createSelector([
  selectTransactionsData,
  selectFilterValue
], (
  transactionsData, filterValue
): Transaction[] => {
  console.log(filterValue)
  if (filterValue === 'Transactions') {
    return transactionsData
  }

  return transactionsData.filter((transaction) => transaction.category === filterValue)

})