import { Link } from "react-router-dom";
import '../../styles/Navbar.css';

import NavLogo from '../../assets/images/logo-large.svg'
import NavOverviewIcon from '../../assets/images/icon-nav-overview.svg';
import NavTransactionsIcon from '../../assets/images/icon-nav-transactions.svg';
import NavBudgetsIcon from '../../assets/images/icon-nav-budgets.svg';
import NavPotsIcon from '../../assets/images/icon-nav-pots.svg';
import NavRecurringBillsIcon from '../../assets/images/icon-nav-recurring-bills.svg';

export default function Navbar() {
  return (
    <>
      <nav
        className="
          bg-grey900
          fixed bottom-0 w-full flex justify-around p-4 border-t
          xl:fixed xl:top-0 xl:left-0 xl:w-60 xl:h-full xl:flex-col xl:justify-start xl:border-t-0 xl:border-r
        "
      >
        <img src={NavLogo} alt="finance" className="w-[121px] h=[21px]" />

        {/* Overview */}
        <Link to="/overview" className="flex flex-col xl:flex-row items-center p-2 xl:justify-start">
          <img src={NavOverviewIcon} alt="Overview" className="w-6 h-6 xl:mr-4" />
          <span className="hidden xl:inline">Overview</span>
        </Link>

        {/* Transactions */}
        <Link to="/transactions" className="flex flex-col xl:flex-row items-center p-2 xl:justify-start">
          <img src={NavTransactionsIcon} alt="Transactions" className="w-6 h-6 xl:mr-4" />
          <span className="hidden xl:inline">Transactions</span>
        </Link>

        {/* Budgets */}
        <Link to="/budgets" className="flex flex-col xl:flex-row items-center p-2 xl:justify-start">
          <img src={NavBudgetsIcon} alt="Budgets" className="w-6 h-6 xl:mr-4" />
          <span className="hidden xl:inline">Budgets</span>
        </Link>

        {/* Pots */}
        <Link to="/pots" className="flex flex-col xl:flex-row items-center p-2 xl:justify-start">
          <img src={NavPotsIcon} alt="Pots" className="w-6 h-6 xl:mr-4" />
          <span className="hidden xl:inline">Pots</span>
        </Link>

        {/* Recurring Bills */}
        <Link to="/recurring-bills" className="flex flex-col xl:flex-row items-center p-2 xl:justify-start">
          <img src={NavRecurringBillsIcon} alt="Recurring Bills" className="w-6 h-6 xl:mr-4" />
          <span className="hidden xl:inline">Recurring Bills</span>
        </Link>
      </nav>
    </>
  );
}
