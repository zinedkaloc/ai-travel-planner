import React from "react";

const Header = () => {
  return (
    <header className="bg-pink-300 text-white py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Your Travel App</div>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#plan" className="hover:underline">
            Plan Your Travel
          </a>
          {/* Add more navigation links as needed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
