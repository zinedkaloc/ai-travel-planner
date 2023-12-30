import React from "react";
import SVGComponent from "./Icon";

const Header = () => {
  return (
    <header className="border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-lg font-bold">
          <SVGComponent />
        </div>
        <nav className="space-x-4">
          <a href="#about" className="text-gray-800 hover:text-pink-500 transition duration-300">
            About
          </a>
          <a href="#plan" className="text-gray-800 hover:text-pink-500 transition duration-300">
            Plan Your Travel
          </a>
          {/* Add more navigation links as needed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
