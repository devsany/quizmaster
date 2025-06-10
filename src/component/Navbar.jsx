import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    "Discover",
    "AI",
    "Join",
    "Live Quiz",
    "Creator",
    "Category",
  ];

  return (
    <>
      {/* Blur Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray bg-opacity-40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Burger Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-800 md:hidden"
          >
            <Menu size={28} />
          </button>

          {/* Logo / Title */}
          <h1 className="text-xl font-bold text-indigo-600">QuizMaster</h1>

          {/* Desktop Nav Items */}
          <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item} className="cursor-pointer hover:text-indigo-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-white z-50 shadow-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-lg font-bold text-indigo-600">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-4 text-gray-800 font-medium">
          {navItems.map((item) => (
            <li key={item} className="hover:text-indigo-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
