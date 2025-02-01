// components/Header.js
import React from "react";
import { ShoppingCart } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import { Button } from "./Button";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({
  darkMode,
  toggleDarkMode,
  toggleCartModal,
  cart,
  user,
  handleLogout,
  handleLoginSuccess,
  isMenuOpen,
  toggleMenu,
  searchQuery,
  handleSearch,
}) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-2 bg-blue-500 text-white shadow-md">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-xl font-bold text-center md:text-left w-full md:w-auto">
          E-Commerce Page
        </h1>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0 ${
          isMenuOpen ? "block" : "hidden"
        } md:flex`}
      >
        <input
          type="text"
          className="px-3 py-2 rounded-md text-black w-64 md:w-80 lg:w-96 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search Products..."
          value={searchQuery}
          onChange={handleSearch}
        />

        <Button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </Button>

        <div className="relative">
          <ShoppingCart
            className="w-8 h-8 inline-block cursor-pointer"
            onClick={toggleCartModal}
          />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            {cart.length}
          </span>
        </div>

        {user ? (
          <div className="flex items-center gap-2">
            <p className="text-sm">{user.profileObj?.name}</p>
            <Button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition duration-300"
            >
              Logout
            </Button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onFailure={console.error}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition duration-300"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
