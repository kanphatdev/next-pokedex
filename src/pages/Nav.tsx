import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl no-underline">
              pokedex
            </Link>
          </div>
          <div className="block sm:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="hidden sm:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                href="/SearchPage"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline"
              >
                <i className="ri-search-2-line"></i>
              </Link>
              <Link
                href="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline"
              >
                <i className="ri-home-line"></i>
              </Link>
              {/* <Link
                href="/services"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline"
              >
               
              </Link> */}
              {/* <Link
                href="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline"
              >
                Contact
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/home"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
