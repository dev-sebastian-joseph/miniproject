import React from "react";

export default function FarmIndustryDetails() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow">
        <div className="text-xl font-bold text-green-700">AgriConnect</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="border-b-2 border-green-600">Home</li>
          <li>Transaction</li>
          <li>Profile</li>
          <li>Help</li>
        </ul>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-1"
        />
      </nav>

      {/* Industry Details Section */}
      <div className="p-6 flex flex-col items-center space-y-4 flex-grow">
        <img
          src="https://images.unsplash.com/photo-1603188265904-e04d8c7f1f61" // Replace with your image
          alt="Industry"
          className="w-full max-w-4xl h-64 object-cover rounded-lg"
        />
        <h2 className="text-xl font-semibold">Agricultural Industry</h2>
        <p>Raw Materials</p>
        <p>Wheat 10 tons</p>
        <p>Wheat 10 tons</p>

        <div className="text-center mt-4">
          <p>Email: industry.contact@example.com</p>
          <p>Phone: +19876543210</p>
          <p>Website: www.industryexample.com</p>
        </div>

        <button className="mt-4 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800">
          ⇄ Connect
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-8">
        <div className="text-center mb-4">
          <input
            type="email"
            placeholder="Your email"
            className="border px-3 py-1 rounded mr-2"
          />
          <button className="bg-green-600 text-white px-4 py-1 rounded">
            Subscribe
          </button>
        </div>
        <div className="flex justify-center space-x-10 text-sm text-gray-600">
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
        <p className="text-center text-xs mt-4">© 2024 Brand, Inc.</p>
      </footer>
    </div>
  );
}
