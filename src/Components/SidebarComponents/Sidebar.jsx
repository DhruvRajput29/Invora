import Dashboard from "./Dashboard";
import Uicompo from "./Uicompo";
import Auth from "./Auth";
import Extra from "./Extra";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`
    bg-white
    border-r
    border-gray-200
    flex
    flex-col
    shrink-0
    h-[calc(100vh-64px)]
    transition-all
    duration-300
    ease-in-out
    overflow-hidden
    ${isOpen ? "w-64" : "w-20"}
  `}
    >
      <div
        className={`h-[calc(100vh-64px)] overflow-y-auto transition-all duration-300 select-none
        ${isOpen ? "p-4" : "px-2 py-4"}
        scrollbar-thumb-transparent scrollbar-thin hover:scrollbar-thumb-slate-400 scrollbar-track-transparent`}
      >
        <Dashboard isOpen={isOpen} />
        <Uicompo isOpen={isOpen} />
        <Auth isOpen={isOpen} />
        <Extra isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Sidebar;