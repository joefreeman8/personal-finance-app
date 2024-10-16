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
}

export default function OverviewBudgets({ budgets, navigateToBudgets }: OverviewBudgetsProps) {

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
    cutout: '70%',
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
    <div className='p-300 md:p-400 rounded-xl bg-white'>
      <div className='flex justify-between mb-250'>
        <h2 className='text-preset-2 text-grey900'>Budgets</h2>
        <button className='flex items-center text-grey500 text-preset-4'>
          <p onClick={navigateToBudgets} className='mr-150'>See Details</p>
          <img src={rightArrow} alt='icon-pointing-right' />
        </button>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 relative'>
          <Doughnut data={chartData} options={chartOptions} />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <p className='text-preset-4 text-grey500'>Total Spent</p>
            <p className='text-preset-1 text-grey900'>${totalSpent}</p>
            <p className='text-preset-5 text-grey500'>of ${totalBudget} limit</p>
          </div>
        </div>
        <div className='md:w-1/2 md:ml-250 flex flex-col justify-between'>
          {budgets.map((budget, index) => (
            <div key={index} className='flex items-center mb-200'>
              <div className='w-1 h-[40px] rounded mr-200' style={{ backgroundColor: budget.theme }}></div>
              <div>
                <p className='text-preset-5 text-grey500'>{budget.category}</p>
                <p className='text-preset-4-bold text-grey900'>${budget.maximum}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
