import React from "react";
import { NavLink } from "react-router-dom";

const activeClass = (isActive) => {
  return `px-3 py-2 rounded-md text-sm font-medium ${
    isActive
      ? "bg-gray-900 text-white"
      : "text-gray-300 hover:bg-gray-700 hover:text-white"
  }`;
};

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <NavLink to="/" className="text-lg text-gray-300">
                DB APP
              </NavLink>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) => activeClass(isActive)}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/personajes"
                  className={({ isActive }) => activeClass(isActive)}
                >
                  Personajes
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) => activeClass(isActive)}
                >
                  About
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <NavLink to="/" className={({ isActive }) => activeClass(isActive)}>
            Home
          </NavLink>

          <NavLink
            to="/personajes"
            className={({ isActive }) => activeClass(isActive)}
          >
            Personajes
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => activeClass(isActive)}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
