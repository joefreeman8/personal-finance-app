import { useDispatch } from "react-redux";

import { setCategory } from "../../state/filter/actions";
import { CATEGORY_OPTIONS } from "../../state/filter/constants";
import { CategoryValue } from "../../state/filter/types";


export default function FilterByCategory() {
  const dispatch = useDispatch()

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as CategoryValue
    dispatch(setCategory(value))
  }

  return (
    <>
      <label htmlFor="category" className="content-center text-preset-4 text-grey500 ml-300 mr-100">
        Category
      </label>
      <select
        name="category"
        id="category"
        className="px-250 py-150 border border-grey900 rounded"
        onChange={handleCategoryChange}
      >
        {CATEGORY_OPTIONS.map(option => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </>
  )
}