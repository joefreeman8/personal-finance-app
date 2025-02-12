import React from 'react'

// type Props = {}

export default function SortTransactions() {
  return (
    <div className="flex flex-row">
      <label htmlFor="sort" className="content-center text-preset-4 text-grey500 mr-100">
        Sort By
      </label>
      <select
        name="sort"
        id="sort"
        className="px-250 py-150 border border-grey900 rounded"
      >
        <option value="latest">
          Latest
        </option>
        <option value="oldest">
          Oldest
        </option>
        <option value="aToZ">
          A to Z
        </option>
        <option value="zToA">
          Z to A
        </option>
        <option value="highest">
          Highest
        </option>
        <option value="lowest">
          Lowest
        </option>
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
  )
}