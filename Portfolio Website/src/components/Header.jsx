import React from 'react'

function Header() {
  return (
    <header className="bg-gray-800 text-white fixed w-full top-0 z-50">
    <nav className="flex justify-between items-center w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
      <div className="text-2xl font-bold">
        <a href="#home" className="text-white">Abhishek Kumar Sinha</a>
      </div>
      <ul className="flex space-x-4">
        <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
        <li><a href="#about" className="hover:text-yellow-500">About</a></li>
        <li><a href="#projects" className="hover:text-yellow-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header