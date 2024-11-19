import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Overview from "./components/overview/Overview";
import Transactions from "./components/transactions/Transactions";
import Budgets from "./components/pages/Budgets";
import RecurringBills from "./components/pages/RecurringBills";
import Pots from "./components/pages/Pots";

function App() {
  return (
    <Router>
      <div className="xl:flex bg-beige100">
        <Navbar />
        {/* Main content */}
        <div
          className="
            xl:w-[calc(100vw-300px)]
            xl:ml-[300px]
            bg-beige100 min-h-screen"
        >
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budgets" element={<Budgets />} />
            <Route path="/pots" element={<Pots />} />
            <Route path="/recurring-bills" element={<RecurringBills />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
