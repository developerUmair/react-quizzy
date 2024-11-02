import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-primary relative">
      <div className="mx-auto max-w-6xl text-white py-4 px-6 lg:px-16 flex justify-between items-center font-inter">
        {/* Logo */}
        <div className="text-lg font-bold text-secondary">AL QURAN</div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-8 text-sm">
          <li className="hover:text-secondary hover:scale-110 transition-all">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-secondary hover:scale-110 transition-all">
            <a href="#courses">Courses</a>
          </li>
          <li className="hover:text-secondary hover:scale-110 transition-all">
            <a href="#learning-styles">Learning Styles</a>
          </li>
          <li className="hover:text-secondary hover:scale-110 transition-all">
            <a href="#blog">Blog</a>
          </li>
          <li className="hover:text-secondary hover:scale-110 transition-all">
            <a href="#about">About us</a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="border border-gray-300 px-4 py-2 rounded-full max-w-fit">
            Sign In
          </button>
          <button className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-green-700 transition max-w-fit">
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl text-white focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile/Tablet Navigation Menu */}
      <div
        className={`fixed font-inter top-0 right-0 h-full w-3/4 bg-primary text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-10`}
      >
        <div className="flex flex-col space-y-6 p-6">
          <button onClick={toggleMenu} className="text-xl self-end">
            <FaTimes />
          </button>
          <a
            href="#home"
            className="text-lg hover:text-secondary"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#courses"
            className="text-lg hover:text-secondary"
            onClick={toggleMenu}
          >
            Courses
          </a>
          <a
            href="#learning-styles"
            className="text-lg hover:text-secondary"
            onClick={toggleMenu}
          >
            Learning Styles
          </a>
          <a
            href="#blog"
            className="text-lg hover:text-secondary"
            onClick={toggleMenu}
          >
            Blog
          </a>
          <a
            href="#about"
            className="text-lg hover:text-secondary"
            onClick={toggleMenu}
          >
            About us
          </a>
          <div className="flex items-center gap-x-3">
            <button
              className="border border-gray-300 px-4 py-2 rounded-full max-w-fit"
              onClick={toggleMenu}
            >
              Sign In
            </button>
            <button
              className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-green-700 transition max-w-fit"
              onClick={toggleMenu}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
