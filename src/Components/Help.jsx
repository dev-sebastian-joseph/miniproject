import React from "react";
import Navbar from "./Navbar"; // Reusable Navbar Component

export default function Help() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      {/* Help Content */}
      <main className="flex-grow px-6 md:px-20 py-10">
        <h2 className="text-2xl font-semibold mb-6">Help & Support</h2>

        {/* Search Bar */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search FAQs"
            className="w-full max-w-xl border border-gray-300 rounded-full px-6 py-3 shadow-sm"
          />
        </div>

        {/* FAQs */}
        <div className="max-w-3xl space-y-6">
          <div>
            <h3 className="text-md font-semibold">How to connect with farmers?</h3>
            <p className="text-sm text-gray-600 mt-1">
              Learn how to establish direct connections with farmers for sourcing raw materials.
            </p>
          </div>
          <div>
            <h3 className="text-md font-semibold">How do I reset my password?</h3>
            <p className="text-sm text-gray-600 mt-1">
              Go to the “Forgot Password” link on the login page, enter your registered email or phone number, and follow instructions.
            </p>
          </div>
          <div>
            <h3 className="text-md font-semibold">How can I contact customer support?</h3>
            <p className="text-sm text-gray-600 mt-1">
              You can reach us via in-app chat, email, or call for any assistance.
            </p>
          </div>
          <div>
            <h3 className="text-md font-semibold">Account settings</h3>
            <p className="text-sm text-gray-600 mt-1">
              Manage your company’s account preferences and notification settings.
            </p>
          </div>
        </div>

        {/* Contact Support Buttons */}
        <div className="mt-12">
          <h3 className="text-md font-semibold mb-4">Contact Support</h3>
          <div className="space-y-3 max-w-xs">
            <button className="w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-medium py-2 px-4 rounded flex items-center">
              📧 Email Support
            </button>
            <button className="w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-medium py-2 px-4 rounded flex items-center">
              📞 Call Support
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-10 px-6 md:px-20 py-10 text-sm">
        <div className="text-center mb-6">
          <div className="mb-2 text-lg font-medium">Subscribe to our newsletter</div>
          <div className="flex justify-center space-x-2">
            <input
              type="email"
              placeholder="input your email"
              className="border border-gray-300 rounded px-4 py-2 w-64"
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 text-gray-600 mt-8">
          <div>
            <h4 className="font-medium mb-1">Product</h4>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-1">Resources</h4>
            <ul>
              <li>Blog</li>
              <li>User guides</li>
              <li>Webinars</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-1">Company</h4>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-1">Plans & Pricing</h4>
            <ul>
              <li>Personal</li>
              <li>Start up</li>
              <li>Organization</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500">
          © 2024 Brand, Inc. • Privacy • Terms • Sitemap
        </div>
      </footer>
    </div>
  );
}
