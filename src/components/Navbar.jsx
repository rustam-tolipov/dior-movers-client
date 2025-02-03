import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex h-fit w-full flex-row justify-between bg-red-600 px-12 py-6">
      {/* Logo */}
      <img src="/logo.svg" alt="Logo" className="h-12 w-fit" />
      {/* Lang */}
      <ul className="flex items-center gap-3">
        <li className="h-10 w-10 rounded-full border-2">
          <img
            src="/assets/uzb-flag.png"
            alt="Language image"
            className="aspect-square h-full w-full"
          />
        </li>
        <li className="h-10 w-10 rounded-full border-2">
          <img
            src="/assets/rus-flag.png"
            alt="Language image"
            className="aspect-square h-full w-full"
          />
        </li>
        <li className="h-10 w-10 rounded-full border-2">
          <img
            src="/assets/usa-flag.png"
            alt="Language image"
            className="aspect-square h-full w-full"
          />
        </li>
      </ul>
      {/* Nav */}
      <nav className="hidden items-center gap-10 lg:flex">
        <Link to="/" className="text-lg tracking-wide text-red-50">
          Home
        </Link>
        <Link to="/services" className="text-lg tracking-wide text-red-50">
          Services
        </Link>
        <Link to="/about" className="text-lg tracking-wide text-red-50">
          About
        </Link>

        <button className="rounded-full bg-gray-950 px-8 py-2 text-lg font-medium text-red-50">
          Contact Us
        </button>
      </nav>
      {/* Mobile */}
      <div className="h-18 lg:hidden flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
