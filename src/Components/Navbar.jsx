import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-black">AgriConnect</div>
      <nav className="flex gap-6 text-lg">
        <Link to="/AgriConnect" className="font-semibold text-black border-b-2 border-indigo-600">
          Home
        </Link>
        <Link to="/transaction" className="text-gray-500 hover:text-black border-b-2 border-indigo-600">
          Transaction
        </Link>
        <Link to="/profile" className="text-gray-500 hover:text-black  border-indigo-600">
          Profile
        </Link>
        <Link to="/help" className="text-gray-500 hover:text-black  border-indigo-600">
          Help
        </Link>
      </nav>
    </header>
  );
}
