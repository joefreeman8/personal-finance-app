import React from 'react'
import { useDispatch } from 'react-redux'

import { setSortByMethod } from '../../state/sort/actions'
import { SORT_OPTIONS } from '../../state/sort/constants'
import { SortValue } from '../../state/sort/types'


export default function SortTransactions() {
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortValue
    dispatch(setSortByMethod(value))
  }

  return (
    <>
      <label htmlFor="sort" className="content-center text-preset-4 text-grey500 mr-100">
        Sort By
      </label>
      <select
        name="sort"
        id="sort"
        className="px-250 py-150 border border-grey900 rounded"
        onChange={handleChange}
      >
        {SORT_OPTIONS.map(option => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}