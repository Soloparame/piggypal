import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function VisualAnalytics({ expenses }) {
  // Data for the Bar chart
  const data = {
    labels: expenses.map((e) => e.category),
    datasets: [
      {
        label: "Expenses",
        data: expenses.map((e) => e.amount),
        backgroundColor: ["#4f46e5", "#ec4899", "#22d3ee"],
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Expenses by Category",
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-200">
    <div className="container mx-auto mt-10">
      <br></br>
      <br></br>
      <h2 className="text-3xl font-bold text-primary mb-6">Visual Analytics</h2>
      <div className="card">
        {/* Pass both data and options */}
        <Bar data={data} options={options} />
      </div>
    </div>
    </div>
  );
}

export default VisualAnalytics;
