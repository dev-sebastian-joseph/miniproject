import { Link } from "react-router-dom";

export default function FarmerHome() {
  const categories = [
    {
      name: "Agriculture",
      details: "Wheat demand: 200 tons",
      description: "Connect with suppliers",
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
    {
      name: "Food Processing",
      details: "Soybeans needed: 500 tons",
      description: "Find processing units",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Energy",
      details: "Corn supply: 1000 tons",
      description: "Contact energy firms",
      image: "https://via.placeholder.com/150",
    },
  ];

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
        <div>
          <input
            type="text"
            placeholder="Search ..."
            className="p-2 border rounded-lg"
          />
        </div>
      </nav>
      {/* ✅ Navbar End */}

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

      {/* 📦 Content */}
      <main className="p-10">
        <ul className="bg-white shadow-md rounded-lg p-6 space-y-4">
          {categories.map((cat, i) => (
            <li
              key={i}
              className="p-4 border rounded-lg flex items-center justify-between"
            >
              <div>
                <h2 className="font-semibold text-gray-700">{cat.name}</h2>
                <p className="text-gray-500">{cat.details}</p>
                <p className="text-gray-400 text-sm">{cat.description}</p>
                <button className="mt-2 px-4 py-2 border rounded-lg text-green-700 hover:bg-green-50">
                <Link to="/FarmIndustryDetails" className="text-green-600 hover:underline">
                  Connect
                  </Link>
                </button>
              </div>
              <img
                src={cat.image}
                alt={cat.name}
                className="w-24 h-16 rounded-lg object-cover"
              />
            </li>
          ))}
        </ul>
      </main>

      {/* 📧 Footer */}
      <footer className="bg-gray-100 p-10 text-center">
        <div className="mb-4">
          <p className="font-semibold">Subscribe to our newsletter</p>
          <div className="flex justify-center mt-2">
            <input
              type="email"
              placeholder="Input your email"
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
      </footer>
    </div>
  );
}
