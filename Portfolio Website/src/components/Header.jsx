import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="container mx-auto">
        <ul className="flex justify-around text-white">
          <li><Link to="/" className="hover:underline">About</Link></li>
          <li><Link to="/projects" className="hover:underline">Projects</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
