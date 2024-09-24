import rightArrow from '../../assets/images/icon-caret-right.svg'
import potIcon from '../../assets/images/icon-pot.svg'

interface Pot {
  name: string
  total: number
  theme: string
}

interface OverviewPotsProps {
  pots: Pot[] // Array of pots
  navigateToPots: () => void // Function to navigate to pots
}

export default function OverviewPots({ pots, navigateToPots }: OverviewPotsProps) {
  return (
    <div className='p-300 md:p-400 rounded-xl bg-white'>
      <div className='flex justify-between mb-250'>
        <h2 className='text-preset-2 text-grey900'>Pots</h2>
        <button className='flex items-center text-grey500 text-preset-4'>
          <p onClick={navigateToPots} className='mr-150'>See Details</p>
          <img src={rightArrow} alt='icon-pointing-right' />
        </button>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-row mb-250 bg-beige100 p-200 rounded-xl md:w-2/5 md:mb-0'>
          <figure className='flex items-center'>
            <img src={potIcon} alt='pot icon' className='h-[40px]' />
          </figure>
          <div className='flex flex-col ml-200'>
            <p className='text-grey500 text-preset-4 mb-[11px]'>Total Saved</p>
            <p className='text-grey900 text-preset-1'>$850</p>
          </div>
        </div>
        <div className='md:ml-250 grid grid-cols-2 gap-200'>
          {pots && (
            pots.map((pot, index) => (
              index < 4 && (
                <div key={index} className='w-[130px] flex items-center'>
                  <div className='w-1 rounded' style={{ backgroundColor: pot.theme }}>
                    <div className='ml-200'>
                      <p className='text-preset-5 text-grey500 mb-50 w-[100px]'>{pot.name}</p>
                      <p className='text-preset-4-bold text-grey900'>${pot.total}</p>
                    </div>
                  </div>
                </div>
              )
            ))
          )}
        </div>
      </div>
    </div>
  )
}
