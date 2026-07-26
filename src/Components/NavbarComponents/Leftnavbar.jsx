import React from "react";
import { Menu } from "lucide-react";

function Lefttnavbar({isOpen,setIsOpen}) {
  return (
    <div className="flex items-center gap-3">

      <button  onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
        <Menu size={25} />
      </button>

      <div className="logo">
        <img src="./images/logo.png" alt="logo" className="h-10"/>
      </div>

    </div>
  );
}

export default Lefttnavbar;