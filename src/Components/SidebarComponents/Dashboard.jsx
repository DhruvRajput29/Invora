import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";
// import DashboardIcon from "../../assets/Icons/ProductIcon"
const Dashboard = ({ isOpen }) => {
  return (
    <div className="mb-3">
      <NavLink
        to="/"
        className={({ isActive }) => `
    group
    relative
    flex
    items-center
    h-12
    mx-2
    rounded-xl
    overflow-hidden
    transition-all
    duration-300
    ease-in-out

    ${isOpen ? "px-3" : "px-0"}

    ${
      isActive
        ? "bg-blue-600 text-white shadow-sm"
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
    }
  `}
      >
        {/* Fixed Icon */}
        <div
          className={`flex justify-center items-center shrink-0 w-14 transition-all duration-300 `}
        >
          <LayoutDashboard
            size={20}
            className="transition-transform duration-300  mr-2.5"
          />
          {/* <DashboardIcon/> */}
        </div>

        {/* Animated Text */}
        <div
          className={`
      overflow-hidden
      transition-all
      duration-300
      ease-in-out

      ${isOpen ? "w-40 opacity-100" : "w-0 opacity-0"}
    `}
        >
          <span className="whitespace-nowrap font-medium select-none">
            Dashboard
          </span>
        </div>
      </NavLink>

      <hr className="border-gray-200 mt-3" />
    </div>
  );
};

export default Dashboard;