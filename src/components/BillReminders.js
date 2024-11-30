import React, { useState } from "react";
import {
  FaCheckCircle,
  FaRegCalendarAlt,
  FaExclamationCircle,
  FaHistory,
} from "react-icons/fa";

function BillReminders() {
  const [bills, setBills] = useState([]);
  const [billName, setBillName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [message, setMessage] = useState("");

  const handleAddBill = () => {
    if (billName && dueDate) {
      setBills([...bills, { id: Date.now(), billName, dueDate, paid: false }]);
      setBillName("");
      setDueDate("");
      setMessage("Bill added successfully!");
    } else {
      setMessage("Please fill in both fields.");
    }
  };

  const checkReminders = () => {
    const today = new Date();
    return bills.filter(
      (bill) =>
        new Date(bill.dueDate) - today >= 0 &&
        new Date(bill.dueDate) - today <= 86400000 // Within 1 day
    );
  };

  const handleMarkAsPaid = (id) => {
    setBills(bills.map((bill) => (bill.id === id ? { ...bill, paid: true } : bill)));
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-200">
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      {/* Header */}
      <br></br>
      <br></br>

      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Bill Reminders
      </h2>

      {/* Add Bill Form */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Add a New Bill</h3>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Bill Name"
            value={billName}
            onChange={(e) => setBillName(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <button
          onClick={handleAddBill}
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500"
        >
          Add Bill
        </button>
        {message && (
          <div
            className={`mt-4 p-4 rounded-md ${
              message.includes("successfully")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}
      </div>

      {/* Bill Summary */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Bill Summary</h3>
        <ul className="space-y-4">
          {bills.length > 0 ? (
            bills.map((bill) => (
              <li
                key={bill.id}
                className={`p-4 border rounded-md ${
                  bill.paid ? "bg-gray-200 text-gray-600" : "bg-blue-50"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{bill.billName}</p>
                    <p className="text-sm text-gray-500">
                      Due: {new Date(bill.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleMarkAsPaid(bill.id)}
                    className={`text-sm font-medium ${
                      bill.paid
                        ? "text-green-500 cursor-default"
                        : "text-blue-500 hover:text-blue-700"
                    }`}
                    disabled={bill.paid}
                  >
                    {bill.paid ? "Paid" : <FaCheckCircle />}
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No bills added yet.</p>
          )}
        </ul>
      </div>

      {/* Today's Reminders */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Today's Reminders</h3>
        <ul className="space-y-4">
          {checkReminders().length > 0 ? (
            checkReminders().map((bill) => (
              <li
                key={bill.id}
                className="p-4 bg-yellow-100 border border-yellow-400 rounded-md text-yellow-800"
              >
                <div className="flex justify-between items-center">
                  <p>
                    <span className="font-semibold">{bill.billName}</span>{" "}
                    is due today ({new Date(bill.dueDate).toLocaleDateString()})
                  </p>
                  <FaExclamationCircle />
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No bills are due today.</p>
          )}
        </ul>
      </div>

      {/* Bill History */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Bill History</h3>
        <div className="p-4 bg-gray-200 rounded-md">
          <FaHistory className="text-gray-600 inline-block mr-2" />
          <p>View and track all past bills and payments here.</p>
        </div>
      </div>

      {/* Tips Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Tips for Managing Bills
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Set reminders for recurring bills.</li>
          <li>Use a calendar app to track due dates.</li>
          <li>Automate payments to avoid late fees.</li>
          <li>Review your bills monthly to stay on budget.</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default BillReminders;
