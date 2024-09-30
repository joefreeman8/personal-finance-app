import { Link, useLocation } from "react-router-dom"
import '../../styles/Navbar.css'

import NavLogo from '../../assets/images/logo-large.svg'
import NavOverviewIcon from '../../assets/images/icon-nav-overview.svg'
import NavTransactionsIcon from '../../assets/images/icon-nav-transactions.svg'
import NavBudgetsIcon from '../../assets/images/icon-nav-budgets.svg'
import NavPotsIcon from '../../assets/images/icon-nav-pots.svg'
import NavRecurringBillsIcon from '../../assets/images/icon-nav-recurring-bills.svg'

export default function Navbar() {
  const location = useLocation()

  const isActivePath = (path: string): boolean => location.pathname === path

  // Applies different classes to Links (if selected)
  function getLinkClasses(path: string): string {
    return `
      flex flex-col items-center justify-center w-[69px] h-[44px]
      md:text-preset-5-bold md:justify-end md:pb-150 md:pt:100 md:w-[104px] md:h-[66px] 
      xl:text-preset-3 xl:flex-row xl:justify-start xl:px-400 xl:py-200 xl:mb-50 xl:w-[276px] xl:h-[56px]
      ${isActivePath(path)
        ? `
        bg-beige100 text-grey900 border-green
        rounded-tl-md rounded-tr-md border-b-4 
        xl:rounded-tl-[0px] xl:border-b-0 xl:rounded-r-md xl:border-l-4 xl:w-[276px]
        `
        : 'text-grey300 hover:text-grey100'
      }
    `
  }

  // Applies change to icon colour
  function getIconClasses(path: string): string {
    if (location.pathname === path) {
      return `
        xl:mr-200
        active-icon  //* active-icon is custom css written in Navbar.css
      `
    } else {
      return 'xl:mr-200'
    }
  }

  return (
    <nav className="
      bg-grey900
      fixed bottom-0 w-full flex justify-center pt-100 px-200 h-[52px]
      md:px-500 md:justify-between md:h-[74px]
      xl:px-0 xl:w-[300px] xl:h-screen xl:flex-col xl:justify-start xl:border-t-0 xl:border-r xl:rounded-tr-2xl
    ">

      {/* LogoImage */}
      <figure className="hidden xl:block xl:px-400 xl:py-500 xl:mb-100">
        <img src={NavLogo} alt="finance" className="hidden xl:block" />
      </figure>

      {/* Overview */}
      <Link to="/" className={getLinkClasses('/overview')}>
        <img
          src={NavOverviewIcon}
          alt="Overview"
          className={getIconClasses('/overview')}
        />
        <span className="hidden md:inline md:mt-50">Overview</span>
      </Link>

      {/* Transactions */}
      <Link to="/transactions" className={getLinkClasses('/transactions')}>
        <img
          src={NavTransactionsIcon}
          alt="Transactions"
          className={getIconClasses('/transactions')}
        />
        <span className="hidden md:inline md:mt-50">Transactions</span>
      </Link>

      {/* Budgets */}
      <Link to="/budgets" className={getLinkClasses('/budgets')}>
        <img
          src={NavBudgetsIcon}
          alt="Budgets"
          className={getIconClasses('/budgets')}
        />
        <span className="hidden md:inline md:mt-50">Budgets</span>
      </Link>

      {/* Pots */}
      <Link to="/pots" className={getLinkClasses('/pots')}>
        <img
          src={NavPotsIcon}
          alt="Pots"
          className={getIconClasses('/pots')}
        />
        <span className="hidden md:inline md:mt-50">Pots</span>
      </Link>

      {/* Recurring Bills */}
      <Link to="/recurring-bills" className={getLinkClasses('/recurring-bills')}>
        <img
          src={NavRecurringBillsIcon}
          alt="Recurring Bills"
          className={getIconClasses('/recurring-bills')}
        />
        <span className="hidden md:inline md:mt-50">Recurring Bills</span>
      </Link>

    </nav>
  )
}
