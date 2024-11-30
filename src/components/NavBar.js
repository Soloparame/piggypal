import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserIcon, HomeIcon, ChartPieIcon, BellIcon, CreditCardIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
import logo from "../assets/logo.png";  // Adjust the path as needed

function NavBar() {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="p-4 flex justify-between items-center bg-gray-100 shadow-md fixed w-full top-0 left-0 z-10">
      {/* Left Section - Logo and App Name */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="PiggyPal Logo" className="w-10 h-10 rounded-full" />
        <span className="text-lg font-bold">PiggyPal</span>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="flex sm:hidden">
        <button onClick={toggleMenu} className="text-gray-700">
          {isMenuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Right Section - Links */}
      <div className={`flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 ${isMenuOpen ? 'block' : 'hidden sm:flex'}`}>
        <Link className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:bg-blue-100 rounded-lg" to="/">
          <HomeIcon className="w-5 h-5 text-blue-500" />
          <span className="hidden sm:inline">Home</span>
        </Link>
        <Link className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:bg-blue-100 rounded-lg" to="/expenses">
          <CreditCardIcon className="w-5 h-5 text-green-500" />
          <span className="hidden sm:inline">Expenses</span>
        </Link>
        <Link className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:bg-blue-100 rounded-lg" to="/analytics">
          <ChartPieIcon className="w-5 h-5 text-yellow-500" />
          <span className="hidden sm:inline">Analytics</span>
        </Link>
        <Link className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:bg-blue-100 rounded-lg" to="/reminders">
          <BellIcon className="w-5 h-5 text-red-500" />
          <span className="hidden sm:inline">Reminders</span>
        </Link>
        <Link className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:bg-blue-100 rounded-lg" to="/savings">
          Savings
        </Link>

        {/* Profile Icon */}
        <Link to="/profile" className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full hover:bg-blue-700">
          <UserIcon className="w-5 h-5 text-white" />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
