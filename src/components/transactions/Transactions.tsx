import searchIcon from '/assets/images/icon-search.svg'

export default function Transactions() {
  return (
    <section className="py-300 px-200 md:py-400 md:px-500">
      <h1 className="text-preset-1 mb-400 xl:mb-0 xl:my-100">Transactions</h1>
      <div className="flex flex-col p-400 md:flex-col my-400 md:justify-between bg-white rounded-xl">
        <form className="flex flex-row justify-between items-center my-50 h-[46px] w-full">
          <div className="flex-1">
            <div className="w-[320px] px-200 py-150 border border-grey900 rounded flex flex-row justify-between">
              <input
                type="text"
                placeholder="Search transaction"
                className=""
              />
              <img src={searchIcon} alt="Search Icon" />
            </div>
          </div>
          <div className="flex flex-row">
            <label htmlFor="sort" className="content-center text-preset-4 text-grey500 mr-100">
              Sort By
            </label>
            <select
              name="sort"
              id="sort"
              className="px-250 py-150 border border-grey900 rounded"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="aToZ">A to Z</option>
              <option value="zToA">Z to A</option>
              <option value="highest">Highest</option>
              <option value="lowest">Lowest</option>
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
        </form>
        <section className='flex flex-row justify-between items-center my-300 h-[46px] w-full px-200 py-150 border-b'>
          <h3 className='text-preset-5 text-grey500 mr-400 w-[428px]'>Recipient / Sender</h3>
          <h3 className='text-preset-5 text-grey500 mr-400'>Category</h3>
          <h3 className='text-preset-5 text-grey500 mr-400'>Transaction Date</h3>
          <h3 className='text-preset-5 text-grey500 w-[200px] flex justify-end'>Amount</h3>
        </section>
      </div>

    </section>
  );
}
