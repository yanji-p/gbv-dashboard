import React from "react";

// Summary Card
const SummaryCard = ({ title, value, color }) => (
  <div className={`${color} text-white p-6 rounded-2xl shadow-lg w-64`}>
    <h2 className="text-sm opacity-80">{title}</h2>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <div className="bg-blue-600 text-white p-4 text-xl font-bold shadow">
        GBV Dashboard
      </div>

      <div className="p-6">

        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-6">
          Welcome to the GBV Crime Analysis Dashboard
        </p>

        {/* Cards */}
        <div className="flex flex-wrap gap-6 mb-8">
          <SummaryCard title="Total Cases" value="120" color="bg-blue-500" />
          <SummaryCard title="Predicted Cases" value="15" color="bg-yellow-400" />
          <SummaryCard title="High Risk Areas" value="5" color="bg-red-500" />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="font-semibold mb-4">Crime Trends</h2>
            <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
              Chart Coming Soon
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="font-semibold mb-4">High Risk Areas</h2>
            <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
              Chart Coming Soon
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;