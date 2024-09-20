import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Overview from "./components/Overview";
import Transactions from "./components/Transactions";
import Budgets from "./components/Budgets";
import RecurringBills from "./components/RecurringBills";
import Pots from "./components/Pots";

function App() {
  return (
    <Router>
      <div className="xl:flex bg-grey100">
        <Navbar />
        {/* Main content */}
        <div
          className="
            xl:w-[calc(100vw-300px)]
            xl:ml-[300px]
            bg-grey100 min-h-screen"
        >
          <Routes>
            <Route path="/overview" element={<Overview />} />
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
