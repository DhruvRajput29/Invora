import { Mail, Lock, Eye } from "lucide-react";
import { useNavigate,Link } from "react-router-dom";

const RightSide = () => {
  const navigate = useNavigate();

  const handleLogin = async() => {
    // Later you can add API authentication here

    // Redirect to Dashboard/Home
    navigate("/Dashboard");
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#FCFCFC]">
      <div className="w-3/4 max-w-md p-8 rounded-lg shadow-lg border-2 border-blue-50">

        <div className="text-center mb-10">
          <div className="flex justify-center items-center">
            <img
              src="./images/favicon.png"
              alt="fav logo"
              className="h-12 mr-2"
            />
            <h2 className="text-4xl font-bold text-[#3c6ba2]">
              Log In
            </h2>
          </div>

          <p className="text-gray-500 mt-4">
            Welcome back! Please login to continue.
          </p>
        </div>

        {/* Email */}
        <div className="mb-8">
          <label className="block text-sm text-gray-600 mb-2">
            Email
          </label>

          <div className="flex items-center border rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
            <Mail size={20} className="text-indigo-500" />

            <input
              type="email"
              placeholder="Enter your email"
              className="ml-3 w-full outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Password
          </label>

          <div className="flex items-center border rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
            <Lock size={20} className="text-indigo-500" />

            <input
              type="password"
              placeholder="Enter your password"
              className="ml-3 w-full outline-none"
            />

            <Eye
              size={20}
              className="text-gray-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-right mt-3">
          <button className="text-sm text-indigo-600 hover:underline">
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}


        <button
          onClick={handleLogin}
          className="w-full my-6 bg-[#5E5CE6] hover:bg-[#4d4ad6] text-white py-3 rounded-lg font-medium transition duration-300"
        >
          Log In
        </button>
        {/* Register Link */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#5E5CE6] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RightSide;