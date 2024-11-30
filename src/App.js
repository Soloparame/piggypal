import React, { useState, useEffect } from "react"; // <-- Add useEffect here
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ExpenseTracker from "./components/ExpenseTracker";
import SavingsGoals from "./components/SavingsGoals";
import NavBar from "./components/NavBar";
import VisualAnalytics from "./components/VisualAnalytics";
import BillReminders from "./components/BillReminders";
import PersonalProfile from "./components/PersonalProfile";  // Import the PersonalProfile component
import AOS from 'aos';
import 'aos/dist/aos.css';

// App component
function App() {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // Animation only happens once
    });
  }, []); // Empty dependency array to run once when the component mounts

  // Define expenses as state or static data
  const [expenses, setExpenses] = useState([
    { id: 1, category: "Food", amount: 50 },
    { id: 2, category: "Transport", amount: 30 },
    { id: 3, category: "Entertainment", amount: 20 },
  ]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<ExpenseTracker />} />
        <Route path="/savings" element={<SavingsGoals />} />
        <Route path="/analytics" element={<VisualAnalytics expenses={expenses} />} />
        <Route path="/reminders" element={<BillReminders />} />
        <Route path="/profile" element={<PersonalProfile />} /> {/* Route to PersonalProfile page */}
      </Routes>
    </Router>
  );
}

export default App;
