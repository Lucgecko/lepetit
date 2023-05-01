import React from 'react'
import IconButton from './IconButton';



function Navbar() {
  return (
    <nav className="flex p-1 h-32 w-screen bg-gradient-to-r from-gray-700 to-gray-500">
      <a></a>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;