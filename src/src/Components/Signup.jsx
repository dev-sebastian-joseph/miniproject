import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-center text-gray-600 mb-6">
          Create your account to unlock new possibilities.
        </p>

        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Your email address"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Create a password"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Confirm your password"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm">I agree with Terms & Conditions</span>
        </div>

        {/* Updated Button Color */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Sign Up
        </button>

        <p className="text-center text-sm mt-4">
          Already registered?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/IndustryLogin")}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}
