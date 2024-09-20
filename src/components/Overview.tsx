
export default function Overview() {




  return (
    <section className="xl:my-400 xl:mx-500">
      <h1 className="text-preset-1 xl:my-100">
        Overview
      </h1>
      <div className="xl:my-400 xl:flex xl:justify-between">
        <div className="xl:mr-300 xl:p-300 xl:bg-grey900 xl:text-white xl:w-1/3 xl:rounded-lg">
          <p className="text-preset-4">Current Balance</p>
          <p className="text-preset-1 xl:mt-150">$4,836.00</p>
        </div>
        <div className="xl:mr-300 xl:p-300 xl:bg-white xl:w-1/3 xl:rounded-lg">
          <p className="text-preset-4 text-grey500">Income</p>
          <p className="text-preset-1 xl:text-grey900 xl:mt-150">$9,000.00</p>
        </div>
        <div className="xl:p-300 xl:bg-white xl:w-1/3 xl:rounded-lg">
          <p className="text-preset-4 text-grey500">Expenses</p>
          <p className="text-preset-1 text-grey900 xl:mt-150">$9,000.00</p>
        </div>
      </div>
    </section>
  )
}
