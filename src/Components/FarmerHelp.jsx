import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function FarmerHelp() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ✅ Navbar Start */}
      <nav className="flex items-center justify-between px-10 py-4 bg-white shadow">
        <div className="text-xl font-bold text-green-700">AgriConnect</div>
        <div className="space-x-6">
          <Link
            to="/FarmerHome"
            className="text-green-700 font-medium border-b-2 border-green-700"
          >
            Home
          </Link>
          <Link to="/FarmerTransaction" className="text-gray-700 hover:text-green-700">
            Transaction
          </Link>
          <Link to="/FarmerProfile" className="text-gray-700 hover:text-green-700">
            Profile
          </Link>
          <Link to="/FarmerHelp" className="text-gray-700 hover:text-green-700">
            Help
          </Link>
        </div>
      </nav>

      {/* Help Section */}
      <div className="p-6 flex-grow bg-white">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Help & Support</h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full md:w-1/2 p-3 border rounded-full shadow-sm focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold">How to connect with industries?</h3>
            <p>Easily view industrial demand and connect with a single click.</p>
          </div>
          <div>
            <h3 className="font-semibold">How to reset my password?</h3>
            <p>
              Go to "Forgot Password" on the login screen, enter your email or phone
              number, and follow the instructions to reset it.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How can I contact support?</h3>
            <p>
              You can reach us via email or call. Details provided below.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Account Settings</h3>
            <p>Manage your profile and preferences.</p>
          </div>
        </div>

        {/* Contact Support Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
            <FaEnvelope /> Email Support
          </button>
          <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
            <FaPhoneAlt /> Call Support
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-6 mt-8 text-gray-600 text-sm">
        <div className="text-center mb-4">
          <input
            type="email"
            placeholder="Your email"
            className="border px-3 py-1 rounded-l"
          />
          <button className="bg-green-700 text-white px-4 py-1 rounded-r">
            Subscribe
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
          <div>
            <p className="font-medium">Product</p>
            <p>Features</p>
            <p>Pricing</p>
          </div>
          <div>
            <p className="font-medium">Resources</p>
            <p>Blog</p>
            <p>User guides</p>
          </div>
          <div>
            <p className="font-medium">Company</p>
            <p>About us</p>
            <p>Contact us</p>
          </div>
          <div>
            <p className="font-medium">Plans & Pricing</p>
            <p>Personal</p>
            <p>Start up</p>
            <p>Organization</p>
          </div>
        </div>
        <p className="text-center mt-4">© 2025 AgriConnect Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
