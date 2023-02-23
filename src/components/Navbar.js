import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-indigo-500 w-full">
      <nav className="navbar">
        <h1 className="text-5xl font-bold">Math Magicians</h1>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calc">Calculator</Link></li>
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
