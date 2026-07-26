import { ShieldCheck,  BriefcaseBusiness, UserRound} from "lucide-react";

const LeftSide = () => {
  return (
      <>
        <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-linear-to-br from-[#5E5CE6] via-[#5452D4] to-[#4745C6] text-white">

            {/* Decorative Circles */}
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10"></div>

            <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-white/5"></div>

            <div className="absolute top-1 left-12 grid grid-cols-4 gap-2">
            {Array.from({ length: 40 }).map((_, index) => (
                <div
                key={index}
                className="w-1 h-1 rounded-full bg-white/70"
                ></div>
            ))}
            </div>

            <div className="absolute inset-0 flex flex-col  justify-center gap-20 px-20">
            <div>
                <img src="/images/main-logo-white.png" alt="" className="pb-2 w-45"/>
                <h1 className="text-5xl font-bold leading-tight font-[Times_New_Roman,Times,serif]">
                Welcome Back
                </h1>

                <p className="mt-6 text-white/80 text-lg">
                    Manage your inventory, billing, and store 
                    <br />
                    operations with ease.
                </p>
                <h2 className="mt-8 text-md font-semibold">
                    Roles
                </h2>

                <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-3  text-white/90">
                        <ShieldCheck size={20} className="text-green-300" />
                        <span>Administrator</span>
                    </li>

                    <li className="flex items-center gap-3 text-sm text-white/90">
                        <BriefcaseBusiness size={20} className="text-green-300" />
                        <span>Manager</span>
                    </li>

                    <li className="flex items-center gap-3 text-sm text-white/90">
                        <UserRound size={20} className="text-green-300" />
                        <span>Employee</span>
                    </li>
                </ul>
            </div>
            <div>
                <p className="absolute bottom-30 text-white/80 text-md">Smart POS & Inventory Management System</p>
            </div>
            </div>
        </div>
      </>
  );
};

export default LeftSide;