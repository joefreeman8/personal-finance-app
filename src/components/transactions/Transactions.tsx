export default function Transactions() {
  return (
    <section className="py-300 px-200 md:py-400 md:px-500">
      <h1 className="text-preset-1 mb-400 xl:mb-0 xl:my-100">Transactions</h1>
      <div className="flex flex-col p-400 md:flex-row my-400 md:justify-between bg-white">
        <form className="flex flex-row justify-between items-center my-50 w-full">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search transaction"
              className="px-200 py-100 border rounded"
            />
          </div>
          <div className="flex flex-row gap-200">
            <label htmlFor="sort" className="content-center text-preset-4 text-grey500">
              Sort By
            </label>
            <select
              name="sort"
              id="sort"
              className="px-250 py-150 border rounded"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="aToZ">A to Z</option>
              <option value="zToA">Z to A</option>
              <option value="highest">Highest</option>
              <option value="lowest">Lowest</option>
            </select>
            <label htmlFor="category" className="content-center text-preset-4 text-grey500">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="px-200 py-100 border rounded"
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
        </form>
      </div>

    </section>
  );
}
