import React from "react";
import Lefttnavbar from "./Leftnavbar";
import Middlenavbar from "./Middlenavbar";
import Rightnavbar from "./Rightnavbar";

function Navbar({isOpen,setIsOpen}) {
  return (
    <nav className="bg-[#fcfcfc] sticky top-0 z-50 shadow-sm select-none">
      <div className="h-16 px-6 flex items-center justify-between">
        <Lefttnavbar isOpen={isOpen} setIsOpen={setIsOpen} />

        <Middlenavbar />

        <Rightnavbar />
      </div>
    </nav>
  );
}

export default Navbar;