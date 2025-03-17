import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Greet from './Components/Greet';
import { Route, Routes, Link } from 'react-router-dom'; // Corrected import
import IndustryLogin from './Components/IndustryLogin';
import AgriConnect from './Components/AgriConnect';
import Signup from './Components/Signup';
import Transaction from './Components/Transaction';
import Profile from './Components/Profile';
import Help from './Components/Help';


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
       
      </Routes>
    </>
  );
}

export default App;