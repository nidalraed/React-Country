import React from 'react';
import {Link } from 'react-router-dom';


function Header() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Nidal Raed</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;