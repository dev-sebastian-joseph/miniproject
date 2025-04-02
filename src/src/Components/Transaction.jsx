import { useState } from "react";
import Navbar from "./Navbar"; // Import Navbar

export default function Transaction() {
  const [searchTerm, setSearchTerm] = useState("");

  const transactions = [
    { id: 1, name: "John Smith", creditScore: 7.5, rawMaterials: "Corn, Wheat", image: "https://via.placeholder.com/50" },
    { id: 2, name: "Mary Johnson", creditScore: 8, rawMaterials: "Soybeans, Barley", image: "https://via.placeholder.com/50" },
    { id: 3, name: "Robert Brown", creditScore: 7, rawMaterials: "Rice, Oats", image: "https://via.placeholder.com/50" }
  ];

  const filteredTransactions = transactions.filter((tx) =>
    tx.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.rawMaterials.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <Navbar /> {/* Reusable Navbar Component */}

      {/* Search and Sort Bar */}
      <div className="flex justify-center items-center p-6 gap-4">
        <input
          type="text"
          placeholder="Search for farmers or products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500"
        />
        <button className="px-6 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800">
          Sort by
        </button>
      </div>

      {/* Transactions List */}
      <main className="flex-grow px-32 pb-16">
        <ul className="bg-white shadow-md rounded-lg p-6">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((tx) => (
              <li key={tx.id} className="p-6 border-b flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{tx.name}</p>
                  <p className="text-sm text-gray-500">Credit Score: {tx.creditScore}</p>
                  <p className="text-sm text-gray-500">Raw Materials: {tx.rawMaterials}</p>
                  <button className="mt-2 px-4 py-2 border border-green-700 text-green-700 rounded-md hover:bg-green-100">
                    Reconnect
                  </button>
                </div>
                <img src={tx.image} alt={tx.name} className="w-20 h-20 rounded-md" />
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">No matching transactions found.</p>
          )}
        </ul>
      </main>
    </div>
  );
}