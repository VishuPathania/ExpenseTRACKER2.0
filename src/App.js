import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import SignUp from './components/SignUp'; // Adjusted path
import Login from './components/Login'; // Adjusted path
import Home from './components/Home'; // Adjusted path
import NavBar from './components/NavBar';


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
