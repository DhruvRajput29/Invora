import React from "react";
import { BellDot } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Rightnavbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(
        "http://localhost/Invora-api/auth/logout.php",
        {
          method: "POST",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center gap-4">

      <button className="p-2 rounded-full hover:bg-gray-100 transition">
        <BellDot size={20} />
      </button>

      <button className="p-2 rounded-lg hover:bg-gray-200 transition">
        Customer Support
      </button>

      <span className="font-medium text-gray-700">
        {/* Dhruv */}
      </span>

      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-700 transition"
      >
        Logout
      </button>

      <img
        src="#"
        alt="profile"
        className="w-10 h-10 rounded-full bg-amber-100 object-cover"
      />

    </div>
  );
}

export default Rightnavbar;