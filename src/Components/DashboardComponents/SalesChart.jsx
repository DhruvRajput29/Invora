import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SalesChart = ({ months, sales }) => {
  const data = {
    labels: months,
    datasets: [
      {
        label: "Sales",
        data: sales,
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.12)",
        borderWidth: 3,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: "#2563eb",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    animation: {
      duration: 1800,
      easing: "easeInOutQuart",
    },

    interaction: {
      intersect: false,
      mode: "index",
    },

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: "#111827",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 10,
        displayColors: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
        },
      },

      y: {
        beginAtZero: true,

        ticks: {
          color: "#6B7280",
        },

        grid: {
          color: "#E5E7EB",
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-gray-800">
          Sales Analytics
        </h2>

        <p className="text-gray-500 text-sm">
          Monthly sales overview
        </p>
      </div>

      <div className="h-[320px] w-full">
        <Line data={data} options={options}/>
      </div>
    </div>
  );
};

export default SalesChart;  