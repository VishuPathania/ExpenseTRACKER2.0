import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Profile from './components/Profile'; // Import the Profile component

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/profile" element={<Profile />} /> {/* Add this route */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
