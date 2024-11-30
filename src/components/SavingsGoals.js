import React, { useState } from "react";
import { FaDollarSign, FaTrophy, FaPiggyBank } from "react-icons/fa"; // Icons for a fun look
import "../style/global.css"; // Ensure this includes your custom CSS or Tailwind setup

function SavingsGoals() {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [savedAmount, setSavedAmount] = useState("");

  // Add new goal handler
  const handleAddGoal = () => {
    if (goalName && goalAmount && savedAmount) {
      const newGoal = {
        id: Date.now(),
        name: goalName,
        total: parseFloat(goalAmount),
        saved: parseFloat(savedAmount),
      };
      setGoals([...goals, newGoal]);
      setGoalName("");
      setGoalAmount("");
      setSavedAmount("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Calculate total saved amount across all goals
  const calculateTotalSaved = () => goals.reduce((acc, goal) => acc + goal.saved, 0);

  const totalSaved = calculateTotalSaved();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-200">
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <br></br>
      <br></br>

      <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">Savings Goals</h2>

      {/* Add New Goal Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <input
          type="text"
          placeholder="Goal Name"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
          className="p-4 border border-gray-300 rounded-lg w-full"
        />
        <input
          type="number"
          placeholder="Total Amount"
          value={goalAmount}
          onChange={(e) => setGoalAmount(e.target.value)}
          className="p-4 border border-gray-300 rounded-lg w-full"
        />
        <input
          type="number"
          placeholder="Saved Amount"
          value={savedAmount}
          onChange={(e) => setSavedAmount(e.target.value)}
          className="p-4 border border-gray-300 rounded-lg w-full"
        />
        <button
          onClick={handleAddGoal}
          className="bg-blue-600 text-white p-4 rounded-lg w-full"
        >
          Add Goal
        </button>
      </div>

      {/* Total Savings Progress */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Total Saved: ${totalSaved}</h3>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            style={{ width: `${(totalSaved / 1000) * 100}%` }}
            className="bg-blue-600 h-4 rounded-full"
          ></div>
        </div>
      </div>

      {/* List of Savings Goals */}
      <div className="space-y-6">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center hover:shadow-2xl transition-all"
          >
            <div className="flex items-center space-x-4">
              <FaPiggyBank className="text-green-500 text-3xl" />
              <div>
                <h4 className="font-semibold text-lg">{goal.name}</h4>
                <p className="text-gray-500">
                  Saved: ${goal.saved} / Total: ${goal.total}
                </p>
              </div>
            </div>
            <progress
              value={goal.saved}
              max={goal.total}
              className="w-2/5 h-4 bg-gray-200 rounded-full"
            ></progress>
          </div>
        ))}
      </div>

      {/* Tips for Saving */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Tips for Saving</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Start with small savings goals and gradually increase them.</li>
          <li>Automate your savings to ensure consistency.</li>
          <li>Track your spending to avoid unnecessary expenses.</li>
          <li>Allocate windfalls like bonuses directly to your goals.</li>
        </ul>
      </div>

      {/* Savings Goal Achievement */}
      {goals.length > 0 && (
        <div className="bg-green-50 p-6 mt-8 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            Congratulations on your savings progress!
          </h3>
          <p className="text-gray-600">Stay consistent and reach your goals!</p>
          <FaTrophy className="text-yellow-500 text-5xl mx-auto mt-4" />
        </div>
      )}
    </div>
    </div>
  );
}

export default SavingsGoals;
