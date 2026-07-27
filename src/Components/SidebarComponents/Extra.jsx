import { Activity } from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Activity Log",
    icon: Activity,
    path: "/activity",
  },
];

const Extra = ({ isOpen }) => {
  return (
    <div className="mt-3">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) => `
              relative
              group
              flex
              items-center
              h-12
              mx-2
              mb-2
              rounded-xl
              overflow-hidden
              transition-all
              duration-300
              ease-in-out

              ${isOpen ? "px-3" : "justify-center"}

              ${
                isActive
                  ? "bg-linear-to-r from-blue-600 to-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }
            `}
          >
            {/* Icon */}
            <div className="w-10 flex justify-center items-center shrink-0">
              <Icon
                size={20}
                className="transition-transform duration-300"
              />
            </div>

            {/* Animated Text */}
            <div
              className={`
                flex items-center
                overflow-hidden
                transition-all
                duration-300
                ease-in-out

                ${
                  isOpen
                    ? "w-40 opacity-100 ml-3"
                    : "w-0 opacity-0 ml-0"
                }
              `}
            >
              <span className="whitespace-nowrap font-medium">
                {item.title}
              </span>
            </div>

            {/* Tooltip */}
            {!isOpen && (
              <div
                className="
                  absolute
                  left-16
                  bg-gray-900
                  text-white
                  text-xs
                  px-3
                  py-1.5
                  rounded-lg
                  opacity-0
                  invisible
                  group-hover:opacity-100
                  group-hover:visible
                  transition-all
                  duration-200
                  whitespace-nowrap
                  z-50
                "
              >
                {item.title}
              </div>
            )}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Extra;