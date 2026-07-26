import StatCard from "./StatCard";
import SalesChart from "./SalesChart";
import RecentActivity from "./RecentActivity";
import RecentOrders from "./RecentOrders";

import { dashboardData } from "../../Data/DashBoradData";

const Dashboard = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p className="text-gray-500 mt-1 mb-6">
        Welcome back Manage your business smarter.
      </p>
      <div className="bg-[#FCFCFC] min-h-screen p-6 rounded-md">
        {/* Stats */}
        <div className="grid grid-cols-1 font md:grid-cols-2 xl:grid-cols-4 gap-5">
          {dashboardData.stats.map((item) => (
            <StatCard key={item.title} item={item} />
          ))}
        </div>

        {/* Chart + Activity */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">
          <div className="xl:col-span-2">
            <SalesChart
              months={dashboardData.months}
              sales={dashboardData.sales}
            />
          </div>

          <RecentActivity activities={dashboardData.activities} />
        </div>

        {/* Orders */}
        <RecentOrders orders={dashboardData.orders} />
      </div>
    </>
  );
};

export default Dashboard;
