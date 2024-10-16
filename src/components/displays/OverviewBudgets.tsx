import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import rightArrow from '/assets/images/icon-caret-right.svg'

ChartJS.register(ArcElement, Tooltip, Legend)

interface Budget {
  category: string
  maximum: number
  theme: string
}

interface OverviewBudgetsProps {
  budgets: Budget[]
  navigateToBudgets: () => void
  formatCurrency: (amount: number) => string
}

export default function OverviewBudgets({ budgets, navigateToBudgets, formatCurrency }: OverviewBudgetsProps) {

  const totalSpent = 375 // This should be calculated from actual spending data
  const totalBudget = budgets.reduce((sum, budget) => sum + budget.maximum, 0)

  const chartData = {
    labels: budgets.map(budget => budget.category),
    datasets: [
      {
        data: budgets.map(budget => budget.maximum),
        backgroundColor: budgets.map(budget => budget.theme),
        borderWidth: 0,
        weight: 1,
      },
      {
        data: budgets.map(budget => budget.maximum),
        backgroundColor: budgets.map(budget => {
          // Convert hex to RGB and add 0.25 alpha
          const r = parseInt(budget.theme.slice(1, 3), 16);
          const g = parseInt(budget.theme.slice(3, 5), 16);
          const b = parseInt(budget.theme.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, 0.75)`;
        }),
        borderWidth: 0,
        weight: 0.5,
      }
    ],
  }

  const chartOptions = {
    cutout: '65%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  }

  return (
    <section className='mt-300 xl:mt-0 p-300 md:p-400 mt-300 rounded-xl bg-white'>
      <div className='flex justify-between mb-250'>
        <h2 className='text-preset-2 text-grey900'>Budgets</h2>
        <button className='flex items-center text-grey500 text-preset-4'>
          <p onClick={navigateToBudgets} className='mr-150'>See Details</p>
          <img src={rightArrow} alt='icon-pointing-right' />
        </button>
      </div>
      <div className='flex flex-col md:flex-row md:py-100 md:h-[302px] md:items-center'>
        <div className='md:w-4/5 xl:w-2/3 relative h-[240px] flex justify-center'>
          <Doughnut data={chartData} options={chartOptions} />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <p className='text-preset-1 text-grey900 mb-100'>${totalSpent}</p>
            <p className='text-preset-5 text-grey500'>of ${totalBudget} limit</p>
          </div>
        </div>
        <div className='mt-200 md:mt-0 md:w-1/5 xl:w-1/3 md:ml-200 flex flex-row flex-wrap md:flex-col justify-between'>
          {budgets.map((budget, index) => (
            <div key={index} className='w-[calc(50%-8px)] md:w-full flex mb-200 last:mb-0'>
              <div className='w-1 h-[43px] rounded mr-200' style={{ backgroundColor: budget.theme }}></div>
              <div>
                <p className='text-preset-5 text-grey500 mb-50'>{budget.category}</p>
                <p className='text-preset-4-bold text-grey900'>${formatCurrency(budget.maximum)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
