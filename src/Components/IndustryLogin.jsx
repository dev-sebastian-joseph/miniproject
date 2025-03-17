import back from './../assets/Image.png';
import { useNavigate } from 'react-router-dom';

export default function IndustryLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/AgriConnect');
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden fixed top-0 left-0">
      {/* Left Side Login Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Access Account</h1>
        <p className="text-lg mb-6">Choose your login option to get started</p>

        <form onSubmit={handleLogin} className="w-full flex flex-col items-center">
          <input
            type="email"
            placeholder="Your email address"
            className="border border-gray-300 rounded-lg p-3 mb-4 w-3/4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-lg p-3 mb-4 w-3/4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="w-3/4 text-right text-sm mb-4">
            <a href="#" className="text-blue-600">Forgot your password?</a>
          </div>

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition w-3/4 mb-4">
            Log In
          </button>
        </form>

        <span className="text-sm">
          Need to create an account?{" "}
          <span className="text-blue-600 cursor-pointer" onClick={() => navigate('/Signup')}>
            Sign Up
          </span>
        </span>
      </div>

      {/* Right Side Background Image */}
      <div className="w-1/2 h-full">
        <img src={back} alt="background" className="w-full h-full object-cover" style={{ objectPosition: 'center' }} />
      </div>
    </div>
  );
}
