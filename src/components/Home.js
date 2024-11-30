import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2"; // Replaced Pie with Doughnut
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import "../style/global.css";
import logo from "../assets/logo.png";  // Adjust the path as needed

ChartJS.register(Title, Tooltip, Legend, ArcElement);

function Home() {
  const [income, setIncome] = useState(5000);
  const [spent, setSpent] = useState(2500);
  const [remaining, setRemaining] = useState(income - spent);

  const [newIncome, setNewIncome] = useState(income);
  const [newSpent, setNewSpent] = useState(spent);

  const data = {
    labels: ["Food", "Education", "Entertainment", "Savings"],
    datasets: [
      {
        data: [300, 100, 200, 500],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4caf50"],
        hoverBackgroundColor: ["#ff4c75", "#339fd4", "#ffd24f", "#66bb6a"],
        borderColor: "#fff", // White borders for the sections to make them pop
        borderWidth: 2,
      },
    ],
  };

  // Update the financial data
  const updateBudget = () => {
    setIncome(newIncome);
    setSpent(newSpent);
    setRemaining(newIncome - newSpent);
  };

  return (

    <div className="min-h-screen bg-gradient-to-b text-gray-800">
      <br></br>
      <br></br>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-gradient-to-b from-blue-600 to-blue-800 text-white py-20">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-yellow-400 text-5xl font-extrabold mb-6 text-shadow-lg">
            Welcome to <span className="text-yellow-400">Your Budget Tracker</span>
          </h1>
          <p className="text-lg mb-8 text-shadow-md">Take control of your finances, plan your spending, and watch your savings grow!</p>
          <img
            src={logo}
            alt="Budget Management"
            className="w-1/2 sm:w-1/4 mx-auto  transform hover:scale-110 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Budget Overview */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">Your Financial Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-lg font-semibold">Total Income</h3>
            <p className="text-4xl font-extrabold">${income}</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-lg font-semibold">Total Spending</h3>
            <p className="text-4xl font-extrabold">${spent}</p>
          </div>
          <div className={`p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow ${remaining < 500 ? "bg-gradient-to-r from-red-500 to-red-600" : "bg-gradient-to-r from-gray-500 to-gray-600"} text-white`}>
            <h3 className="text-lg font-semibold">Remaining Balance</h3>
            <p className="text-4xl font-extrabold">${remaining}</p>
          </div>
        </div>
      </section>

      {/* Budget Update Section */}
      <section className="py-16 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">Update Your Budget</h2>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Income</label>
              <input
                type="number"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                value={newIncome}
                onChange={(e) => setNewIncome(Number(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Spending</label>
              <input
                type="number"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                value={newSpent}
                onChange={(e) => setNewSpent(Number(e.target.value))}
              />
            </div>
            <button
              onClick={updateBudget}
              className="w-full p-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Update Budget
            </button>
          </div>
        </div>
      </section>
            {/* School Events Section */}
            <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">Upcoming School Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600">🏫 Science Fair</h3>
            <p className="mt-2 text-gray-600">Date: December 5th, 2024</p>
            <p className="mt-2 text-gray-600">Location: School Auditorium</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 block">Join Event</a>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-green-600">📖 Book Club Meeting</h3>
            <p className="mt-2 text-gray-600">Date: December 10th, 2024</p>
            <p className="mt-2 text-gray-600">Location: Library</p>
            <a href="#" className="text-green-500 hover:underline mt-2 block">Join Event</a>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-yellow-600">🎉 Winter Dance</h3>
            <p className="mt-2 text-gray-600">Date: December 15th, 2024</p>
            <p className="mt-2 text-gray-600">Location: Gymnasium</p>
            <a href="#" className="text-yellow-500 hover:underline mt-2 block">Get Tickets</a>
          </div>
        </div>
      </section>


      {/* Tips & Resources */}
      <section className="py-16 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">Tips & Resources</h2>
        <div className="flex gap-8 overflow-x-auto px-6">
          <div className="min-w-[300px] bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600">📚 Financial Books</h3>
            <p className="mt-2 text-gray-600">Discover top books like <em>Rich Dad Poor Dad</em>.</p>
            <a href="https://www.amazon.com/s?k=rich+dad+poor+dad" className="text-blue-500 hover:underline mt-2 block">Learn More</a>
          </div>
          <div className="min-w-[300px] bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-green-600">💡 Budgeting Tools</h3>
            <p className="mt-2 text-gray-600">Learn the <em>50/30/20</em> rule and more.</p>
            <a href="https://www.mint.com" className="text-green-500 hover:underline mt-2 block">Try Mint</a>
          </div>
          <div className="min-w-[300px] bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-yellow-600">🏦 Saving Strategies</h3>
            <p className="mt-2 text-gray-600">Maximize your savings effectively.</p>
            <a href="https://www.nerdwallet.com/article/finance/savings-account" className="text-yellow-500 hover:underline mt-2 block">Explore Savings Accounts</a>
          </div>
        </div>
      </section>
     
      {/* Spending Insights (Doughnut Chart) */}
      <section className="py-16 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">Spending Insights</h2>
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
          <Doughnut data={data} options={{ responsive: true }} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-6 mt-12">
        <p className="font-medium">© 2024 Your Budget Tracker. All rights reserved.</p>
        <div className="flex justify-center mt-4 gap-6">
          <a href="#" className="text-white hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="text-white hover:text-gray-300">Terms & Conditions</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
