import React from "react";
import { Link, useNavigate } from "react-router-dom";
import farmBackground from "./../assets/agriculture.jpg"; // Background image path

export default function FarmerLogin() {
  const navigate = useNavigate(); // 🧭 For redirecting to FarmerHome

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page refresh
    navigate("/FarmerHome"); // 🚀 Go to FarmerHome page
  };

  return (
    <div className="flex min-h-screen">
      {/* Left: Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-16">
        <h2 className="text-3xl font-semibold mb-2">Access Account</h2>
        <p className="text-gray-600 mb-6">Choose your login option to get started</p>

        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <div className="text-right text-sm">
            <Link to="/ForgotPassword" className="text-green-600 hover:underline">
              Forgot your password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
            
          >
            <Link to="/FarmerHome" className="text-green-600 hover:underline"></Link>
            Log In
          </button>
        </form>

        {/* Sign-Up Link */}
        <p className="mt-4 text-sm text-gray-600">
          Need to create an account?{" "}
          <Link to="/FarmerSignUp" className="text-green-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Right: Background Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={farmBackground}
          alt="Farmland"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
