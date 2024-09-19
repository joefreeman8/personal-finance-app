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

  function getLinkClasses(path: string): string {
    return `
      flex flex-col xl:flex-row p-2 xl:justify-start text-preset-3
      ${isActivePath(path) ?
        'bg-beige100 rounded-r-lg text-grey900 border-l-4 border-green' :
        'text-grey300 hover:text-grey100'
      }
    `
  }

  function getIconClasses(path: string): string {
    if (location.pathname === path) {
      return `
      w-6 h-6 xl:mr-4
      active-icon  //* active-icon is custom css written in Navbar.css
      `
    } else {
      return 'w-6 h-6 xl:mr-4'
    }
  }

  return (
    <nav className="
      bg-grey900
      fixed bottom-0 w-full flex justify-around pt-4 pr-4 border-t
      xl:fixed xl:top-0 xl:left-0 xl:w-60 xl:h-full xl:flex-col xl:justify-start xl:border-t-0 xl:border-r xl:rounded-tr-2xl
    ">
      <img src={NavLogo} alt="finance" className="w-[121px] h-[21px] m-10" />

      {/* Overview */}
      <Link to="/overview" className={getLinkClasses('/overview')}>
        <img
          src={NavOverviewIcon}
          alt="Overview"
          className={getIconClasses('/overview')}
        />
        <span className="hidden xl:inline">Overview</span>
      </Link>

      {/* Transactions */}
      <Link to="/transactions" className={getLinkClasses('/transactions')}>
        <img
          src={NavTransactionsIcon}
          alt="Transactions"
          className={getIconClasses('/transactions')}
        />
        <span className="hidden xl:inline">Transactions</span>
      </Link>

      {/* Budgets */}
      <Link to="/budgets" className={getLinkClasses('/budgets')}>
        <img
          src={NavBudgetsIcon}
          alt="Budgets"
          className={getIconClasses('/budgets')}
        />
        <span className="hidden xl:inline">Budgets</span>
      </Link>

      {/* Pots */}
      <Link to="/pots" className={getLinkClasses('/pots')}>
        <img
          src={NavPotsIcon}
          alt="Pots"
          className={getIconClasses('/pots')}
        />
        <span className="hidden xl:inline">Pots</span>
      </Link>

      {/* Recurring Bills */}
      <Link to="/recurring-bills" className={getLinkClasses('/recurring-bills')}>
        <img
          src={NavRecurringBillsIcon}
          alt="Recurring Bills"
          className={getIconClasses('/recurring-bills')}
        />
        <span className="hidden xl:inline">Recurring Bills</span>
      </Link>

    </nav>
  )
}
