import { createReducer } from "@reduxjs/toolkit"
import { CategoryValue } from "./types"
import { setCategory } from "./actions"

type FilterState = {
  value: CategoryValue
}

const initialState: FilterState = {
  value: 'Transactions'
}

const filterReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCategory, (state, { payload }) => {
    state.value = payload
  })
})

export default filterReducer