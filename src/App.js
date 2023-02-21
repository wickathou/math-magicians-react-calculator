import React from 'react';
import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './routes/Home';

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calc' element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
