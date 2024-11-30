import React, { useState } from "react";
import { FaUtensils, FaBus, FaFilm } from "react-icons/fa"; // Icons for categories
import { Pie } from "react-chartjs-2"; // Importing pie chart for graphical representation
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js"; // Chart.js components
import { FaPizzaSlice, FaBookOpen, FaTshirt, FaPiggyBank, FaExclamationCircle } from "react-icons/fa";
import "../style/global.css"; // Ensure this file includes your custom styles or Tailwind setup

// Register chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

function ExpenseTracker() {
  // State for expenses
  const [expenses, setExpenses] = useState([
    { id: 1, category: "Food", amount: 50 },
    { id: 2, category: "Transport", amount: 20 },
    { id: 3, category: "Entertainment", amount: 30 },
  ]);

  // State for new expense input
  const [newCategory, setNewCategory] = useState("");
  const [newAmount, setNewAmount] = useState("");

  // Calculate total expense
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  // Chart data
  const data = {
    labels: expenses.map((expense) => expense.category),
    datasets: [
      {
        data: expenses.map((expense) => expense.amount),
        backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56"],
        hoverBackgroundColor: ["#ff4c75", "#339fd4", "#ffd24f"],
      },
    ],
  };

  // Add new expense handler
  const handleAddExpense = () => {
    if (newCategory && newAmount) {
      const newExpense = {
        id: Date.now(),
        category: newCategory,
        amount: parseFloat(newAmount),
      };
      setExpenses([...expenses, newExpense]);
      setNewCategory("");
      setNewAmount("");
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-200">
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <br></br>
      <br></br>

      <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">Expense Tracker</h2>

      {/* Total Expenses Summary */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Total Expenses: ${totalExpense}</h3>
        <p className="text-gray-600">Review your expenses and adjust your budget accordingly.</p>
      </div>

      {/* Add Expense Form */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Add New Expense</h3>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full p-3 border rounded-md"
          />
          <input
            type="number"
            placeholder="Amount"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <button
          onClick={handleAddExpense}
          className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-md"
        >
          Add Expense
        </button>
      </div>

      {/* Expense Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="p-6 bg-white shadow-lg rounded-lg flex justify-between items-center hover:shadow-2xl transition-all"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl">
                {expense.category === "Food" && <FaUtensils className="text-red-500" />}
                {expense.category === "Transport" && <FaBus className="text-blue-500" />}
                {expense.category === "Entertainment" && <FaFilm className="text-yellow-500" />}
              </div>
              <div>
                <h4 className="font-semibold text-lg">{expense.category}</h4>
                <p className="text-gray-500">Amount: ${expense.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spending Breakdown */}
      <section className="container mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Your Spending Categories</h2>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="w-full max-w-xs mb-6 md:mb-0">
            <Pie data={data} />
          </div>
          <div className="flex flex-wrap justify-around gap-8">
            <div className="flex flex-col items-center">
              <FaPizzaSlice className="text-red-500 text-4xl" />
              <p className="mt-2 text-gray-600">Food</p>
            </div>
            <div className="flex flex-col items-center">
              <FaBookOpen className="text-blue-500 text-4xl" />
              <p className="mt-2 text-gray-600">Education</p>
            </div>
            <div className="flex flex-col items-center">
              <FaTshirt className="text-yellow-500 text-4xl" />
              <p className="mt-2 text-gray-600">Entertainment</p>
            </div>
            <div className="flex flex-col items-center">
              <FaPiggyBank className="text-green-500 text-4xl" />
              <p className="mt-2 text-gray-600">Savings</p>
            </div>
          </div>
        </div>
      </section>


      {/* Tips for Managing Expenses */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Tips for Managing Expenses</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Track all your expenses to avoid overspending.</li>
          <li>Set a monthly budget for each category.</li>
          <li>Cut down on unnecessary entertainment costs.</li>
          <li>Plan meals ahead to reduce food costs.</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default ExpenseTracker;
