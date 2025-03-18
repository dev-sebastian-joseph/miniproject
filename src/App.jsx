import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Greet from './Components/Greet';
import { Route, Routes, Link } from 'react-router-dom'; // Corrected import
import IndustryLogin from './Components/IndustryLogin';
import AgriConnect from './Components/AgriConnect';
import Signup from './Components/Signup';
import Transaction from './Components/Transaction';
import Profile from './Components/Profile';
import Help from './Components/Help';
import FarmerSignUp from './Components/FarmerSignUp';
import FarmerLogin from './Components/FarmerLogin';
import FarmerHome from "./Components/FarmerHome";
import FarmIndustryDetails from './Components/FarmIndustryDetails';
import FarmerTransaction from './Components/FarmerTransaction';
import FarmerProfile from './Components/FarmerProfile';
import FarmerHelp from './Components/FarmerHelp';




function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Greet />} />
         
        
        <Route path="/IndustryLogin" element={<IndustryLogin />} /> {/* Added leading slash */}
        <Route path="/AgriConnect" element={<AgriConnect />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/FarmerSignUp" element={<FarmerSignUp />} />
        <Route path="/FarmerLogin" element={<FarmerLogin />} />
        <Route path="/FarmerHome" element={<FarmerHome />} />
        <Route path="/FarmIndustryDetails" element={<FarmIndustryDetails />} />
        <Route path="/FarmerTransaction" element={<FarmerTransaction />} />
        <Route path="/FarmerProfile" element={<FarmerProfile />} />
        <Route path="/FarmerHelp" element={<FarmerHelp />} />
        


       
      </Routes>
    </>
  );
}

export default App;