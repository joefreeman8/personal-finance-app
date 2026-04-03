import { createReducer } from '@reduxjs/toolkit'
import { SortValue } from './types'
import { setSortByMethod } from './actions'

type SortState = {
  value: SortValue
}

const initialState: SortState = {
  value: 'latest',
}

const sortReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSortByMethod, (state, { payload }) => {
    state.value = payload
  })
})

export default sortReducer