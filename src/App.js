import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignUp from './components/SignUp'; // Adjusted path
import Login from './components/Login'; // Adjusted path
import Home from './components/Home'; // Adjusted path


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
   
    </Routes>
  </BrowserRouter>

  );
};

export default App;