import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  return (
    <nav className="bg-black shadow-md fixed z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-500">
          Rahul Bhatia
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i class="fas fa-bars text-white text-2xl cursor-pointer md:hidden"></i>
        </button>

        <div className="space-x-8 text-gray-300 font-medium hidden md:flex">
          <a href="#" className="hover:text-pink-600">About</a>
          <a href="#projects" className="hover:text-pink-600">Projects</a>
          <a href="#skills" className="hover:text-pink-600">Skills</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`
      absolute top-16 left-0 w-full bg-black shadow-lg z-50 
      animate-slideDown opacity-0 animate-fadeIn
    `}
        >
          <ul className="flex flex-col items-center gap-6 py-6 text-white text-lg">
            <li><a href="#" className="hover:text-pink-600 transition-colors duration-200">About</a></li>
            <li><a href="#projects" className="hover:text-pink-600 transition-colors duration-200">Projects</a></li>
            <li><a href="#skills" className="hover:text-pink-600 transition-colors duration-200">Skills</a></li>
            <li><a href="#contact" className="hover:text-pink-600 transition-colors duration-200">Contact</a></li>
          </ul>
        </div>
      )}



    </nav>
  );
};

export default Navbar;
