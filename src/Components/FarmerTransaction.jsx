import React from "react";

export default function FarmerTransaction() {
  const transactions = [
    {
      id: 1,
      industry: "Dairy Industry",
      credits: 2,
      demand: "Wheat demand: 200 tons",
      image: "https://via.placeholder.com/100", // Replace with actual image
    },
    {
      id: 2,
      industry: "Grain Suppliers",
      credits: 2,
      demand: "Wheat demand: 200 tons",
      image: "https://via.placeholder.com/100", // Replace with actual image
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ✅ Navbar */}
      <nav className="flex items-center justify-between px-10 py-4 bg-white shadow">
        <div className="text-xl font-bold text-green-700">AgriConnect</div>
        <div className="space-x-6">
          <a href="/FarmerHome" className="text-gray-700 hover:text-green-700">
            Home
          </a>
          <a href="/FarmerTransaction" className="text-green-700 font-medium border-b-2 border-green-700">
            Transaction
          </a>
          <a href="/FarmerProfile" className="text-gray-700 hover:text-green-700">
            Profile
          </a>
          <a href="/FarmerHelp" className="text-gray-700 hover:text-green-700">
            Help
          </a>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search ..."
            className="p-2 border rounded-lg"
          />
        </div>
      </nav>

      {/* 🔍 Search + Sort */}
      <div className="p-6 flex flex-col items-center">
        <input
          type="text"
          placeholder="Search for farmers or products"
          className="w-2/3 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
        />
        <button className="mt-4 px-6 py-2 bg-green-700 text-white rounded-lg">
          Sort by
        </button>
      </div>

      {/* 💼 Transaction Cards */}
      <main className="p-10 space-y-6">
        {transactions.map((txn) => (
          <div
            key={txn.id}
            className="p-6 border rounded-lg shadow flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <img
                src={txn.image}
                alt={txn.industry}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h2 className="font-semibold text-gray-700">{txn.industry}</h2>
                <p className="text-gray-500">Credits gained: {txn.credits}</p>
                <p className="text-gray-500">{txn.demand}</p>
              </div>
            </div>
            <button className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800">
              Details
            </button>
          </div>
        ))}
      </main>

      {/* 📧 Footer */}
      <footer className="bg-gray-100 py-10 text-center mt-auto">
        <div className="mb-4">
          <p className="font-semibold">Subscribe to our newsletter</p>
          <div className="flex justify-center mt-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 border rounded-l-lg"
            />
            <button className="px-4 py-2 bg-green-700 text-white rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600 mt-6">
          <div>
            <h3 className="font-semibold">Product</h3>
            <p>Features</p>
            <p>Pricing</p>
          </div>
          <div>
            <h3 className="font-semibold">Resources</h3>
            <p>Blog</p>
            <p>User guides</p>
            <p>Webinars</p>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <p>About us</p>
            <p>Contact us</p>
          </div>
          <div>
            <h3 className="font-semibold">Plans & Pricing</h3>
            <p>Personal</p>
            <p>Start-up</p>
            <p>Organization</p>
          </div>
        </div>
        <p className="text-center text-xs mt-4">© 2024 Brand, Inc.</p>
      </footer>
    </div>
  );
}
