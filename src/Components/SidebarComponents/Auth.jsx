import { LogIn, UserPlus } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Auth = ({ isOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-3">

      {/* Logout */}

      <NavLink
        to="/login"
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

    ${isActive
            ? "bg-linear-to-r from-red-600 to-red-500 text-white shadow-md"
            : "text-gray-600 hover:bg-red-50 hover:text-red-600"
          }
  `}
      >
        {/* Icon */}
        <div className="w-10 flex justify-center items-center shrink-0 transition-transform duration-300">
          <LogIn size={20} />
        </div>

        {/* Animated Text */}
        <div
          className={`
      flex items-center
      overflow-hidden
      transition-all
      duration-300
      ease-in-out

      ${isOpen
              ? "w-40 opacity-100 ml-3"
              : "w-0 opacity-0 ml-0"
            }
    `}
        >
          <span className="whitespace-nowrap font-medium">
            Logout
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
            Logout
          </div>
        )}
      </NavLink>

      {/* Register */}

      <NavLink
        to="/register"
        className={({ isActive }) => `
    relative
    group
    flex
    items-center
    h-12
    mx-2
    mb-2
    ml-3
    rounded-xl
    overflow-hidden
    transition-all
    duration-300
    ease-in-out

    ${isOpen ? "px-3" : "justify-center"}

    ${isActive
            ? "bg-linear-to-r from-blue-600 to-blue-500 text-white shadow-md"
            : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }
  `}
      >
        {/* Icon */}
        <div className="w-10 flex justify-center items-center shrink-0 transition-transform duration-300">
          <UserPlus size={20} />
        </div>

        {/* Animated Text */}
        <div
          className={`
      flex items-center
      overflow-hidden
      transition-all
      duration-300
      ease-in-out

      ${isOpen
              ? "w-40 opacity-100 ml-3"
              : "w-0 opacity-0 ml-0"
            }
    `}
        >
          <span className="whitespace-nowrap font-medium">
            Register
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
            Register
          </div>
        )}
      </NavLink>

      <hr className="border-gray-200 mt-4" />
    </div>
  );
};

export default Auth;