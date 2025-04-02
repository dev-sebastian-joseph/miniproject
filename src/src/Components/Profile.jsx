import React from "react";
import Navbar from "./Navbar"; // Import Navbar

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar /> {/* Reusable Navbar Component */}

      {/* Profile Edit Section */}
      <main className="flex-grow px-6 md:px-20 py-10">
        <h2 className="text-2xl font-semibold mb-8">Edit Profile</h2>
        <form className="max-w-md space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Benjamin Dukes"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Location</label>
            <select className="w-full border border-gray-300 rounded px-4 py-2">
              <option>Select...</option>
              <option>Location A</option>
              <option>Location B</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Contact Information</label>
            <input
              type="email"
              placeholder="info@example.com"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Raw materials grown</label>
            <select multiple className="w-full border border-gray-300 rounded px-4 py-2">
              <option>Wheat</option>
              <option>Rice</option>
              <option>Corn</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Save Changes
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-10 px-6 md:px-20 py-10 text-sm">
        <div className="text-center mb-6">
          <div className="mb-2 text-lg font-medium">Subscribe to our newsletter</div>
          <div className="flex justify-center space-x-2">
            <input
              type="email"
              placeholder="Input your email"
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
