import React from "react";
import Lefttnavbar from "./Leftnavbar";
import Rightnavbar from "./Rightnavbar";

function Navbar({isOpen,setIsOpen}) {
  return (
    <nav className="bg-[#fcfcfc] sticky top-0 z-50 shadow-sm select-none">
      <div className="h-16 px-6 flex items-center justify-between">
        <Lefttnavbar isOpen={isOpen} setIsOpen={setIsOpen} />

        <Rightnavbar />
      </div>
    </nav>
  );
}

export default Navbar;