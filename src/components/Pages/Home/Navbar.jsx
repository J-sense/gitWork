import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#151516] mt-3 w-[95%] mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white  font-bold">
          <NavLink to="/">
            <img src={logo} alt="" className="h-7 w-full" />
          </NavLink>
        </div>

        {/* Hamburger Icon (for mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Nav Links (for desktop) */}
        <ul className="hidden md:flex items-center space-x-6 text-[#FFFFFF]">
          
          <li>
            <NavLink
              to="/about"
              className="hover:text-gray-300 navFont"
              activeClassName="font-bold text-base text-gray-300"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="hover:text-gray-300 navFont"
              activeClassName="font-bold text-base text-gray-300"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="hover:text-gray-300 navFont"
              activeClassName="font-bold text-base text-gray-300"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-gray-300 navFont"
              activeClassName="font-bold text-base text-gray-300"
            >
              Contact
            </NavLink>
          </li>
          <button className="bg-[#2860E1] text-sm py-3 navfont text-white px-8 rounded-md uppercase font-bold">
            {" "}
            Let's Work
          </button>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-zinc-800  text-white flex flex-col items-center space-y-4 py-4">
            <li>
              <NavLink
                to="/home"
                className="hover:text-gray-300 navFont "
                activeClassName="font-bold text-base text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-gray-300 navFont"
                activeClassName="font-bold text-base text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="hover:text-gray-300 navFont"
                activeClassName="font-bold text-base text-base text-[#]"
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="hover:text-gray-300 navFont"
                activeClassName="font-bold text-base text-[#FFFFFF]"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-gray-300 navFont"
                activeClassName="font-bold text-base navFont text-[#FFFFFF]"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <button className="bg-[#2860E1] text-sm py-3 navfont text-white px-8 rounded-md uppercase font-bold">
              {" "}
              Let's Work
            </button>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
