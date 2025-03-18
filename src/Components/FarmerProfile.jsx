import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

export default function FarmerProfile() {
  const [editMode, setEditMode] = useState(false);

  const [farmer, setFarmer] = useState({
    name: "Mary Johnson",
    location: "Annapolis, Maryland, United States",
    phone: "(301) 442-6790",
    email: "richmary@abc.com",
    rawMaterials: [
      { name: "Vegetables", image: "https://via.placeholder.com/80" },
      { name: "Fruits", image: "https://via.placeholder.com/80" },
      { name: "Grains", image: "https://via.placeholder.com/80" },
    ],
    creditScore: 9,
  });

  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/80");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFarmer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleSave = () => {
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ✅ Navbar */}
      <nav className="flex items-center justify-between px-10 py-4 bg-white shadow">
        <div className="text-xl font-bold text-green-700">AgriConnect</div>
        <div className="space-x-6">
          <a href="/FarmerHome" className="text-green-700 font-medium border-b-2 border-green-700">
            Home
          </a>
          <a href="/FarmerTransaction" className="text-gray-700 hover:text-green-700">
            Transaction
          </a>
          <a href="/FarmerProfile" className="text-gray-700 hover:text-green-700">
            Profile
          </a>
          <a href="/FarmerHelp" className="text-gray-700 hover:text-green-700">
            Help
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-lg"
          />
          <img
            src={profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </nav>

      {/* 🧑‍🌾 Farmer Details */}
      <div className="p-10 max-w-4xl mx-auto">
        <div className="space-y-4 text-gray-700">
          {/* Profile Picture Upload */}
          <div className="mt-6">
            <p className="font-semibold mb-2">Profile Picture</p>
            <div className="flex items-center space-x-4">
              <img
                src={profileImage}
                alt="Profile Preview"
                className="w-20 h-20 object-cover rounded-full border"
              />
              {editMode && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="border p-2 rounded"
                />
              )}
            </div>
          </div>

          {/* Name */}
          <div className="flex items-center space-x-2 text-lg font-semibold">
            <FaUser />
            {editMode ? (
              <input
                type="text"
                name="name"
                value={farmer.name}
                onChange={handleInputChange}
                className="border p-2 rounded w-full max-w-sm"
              />
            ) : (
              <span>{farmer.name}</span>
            )}
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            {editMode ? (
              <input
                type="text"
                name="location"
                value={farmer.location}
                onChange={handleInputChange}
                className="border p-2 rounded w-full max-w-sm"
              />
            ) : (
              <span>{farmer.location}</span>
            )}
          </div>

          {/* 📞 Contact Info */}
          <div className="mt-6">
            <p className="font-semibold mb-2">Contact Information</p>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              {editMode ? (
                <input
                  type="text"
                  name="phone"
                  value={farmer.phone}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full max-w-sm"
                />
              ) : (
                <span>{farmer.phone}</span>
              )}
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <FaEnvelope />
              {editMode ? (
                <input
                  type="email"
                  name="email"
                  value={farmer.email}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full max-w-sm"
                />
              ) : (
                <span>{farmer.email}</span>
              )}
            </div>
          </div>

          {/* 🌱 Raw Materials */}
          <div className="mt-6">
            <p className="font-semibold mb-2">Raw Materials Grown</p>
            <div className="flex space-x-6">
              {farmer.rawMaterials.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <p className="mt-2 text-sm">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 🧮 Credit Score */}
          <div className="mt-6">
            <p className="font-semibold">Credit Score</p>
            <p className="text-green-700 font-bold text-lg">{farmer.creditScore}</p>
            <p className="text-sm text-gray-500 mt-1">
              Having a good credit score increases the chances of getting a loan.
            </p>
          </div>

          {/* ✏️ Edit/Save Button */}
          <div className="mt-8">
            {editMode ? (
              <button
                className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                onClick={handleSave}
              >
                Save Profile
              </button>
            ) : (
              <button
                className="px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                onClick={() => setEditMode(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>

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
        <p className="text-center text-xs mt-4">© 2025 AgriConnect Inc.</p>
      </footer>
    </div>
  );
}
