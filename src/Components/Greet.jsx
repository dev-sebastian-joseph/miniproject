import { Link } from 'react-router-dom'; // Correct import
import back from './../assets/background.png';

export default function Greet() {
  return (
    <div>
      {/* Background Image (Full Page Fit) */}
      <img
        src={back}
        alt="background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Content on Top */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
              <path d="M12 14L6 8H10V2H14V8H18L12 14Z" fill="white" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold drop-shadow-lg">AgriConnect</h1>
          <p className="text-lg">Connect with agriculture and industry in one place.</p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center">
            {/* Farmer Login */}
            <Link to="/FarmerLogin">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-lg transition">
                Farmer Login
              </button>
            </Link>

            {/* Industry Login */}
            <Link to="/IndustryLogin">
              <button className="border bg-white hover:bg-gray-200 hover:text-black text-black px-6 py-2 rounded-lg shadow-lg transition">
                Industry Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
