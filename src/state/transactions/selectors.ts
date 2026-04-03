import data from '../../data/data.json'
import { Transaction } from "./types";

export const selectTransactionsData = (): Transaction[] => data.transactions
