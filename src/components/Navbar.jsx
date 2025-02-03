import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex h-fit w-full flex-row items-center justify-between bg-red-600 p-4 md:px-12 md:py-6">
      {/* Logo */}
      <Link to="/" className="cursor-pointer">
        <img
          src="/logo.svg"
          alt="Logo"
          className="aspect-auto h-12 w-fit max-w-[6rem]"
        />
      </Link>
      {/* Lang */}
      <ul className="flex items-center gap-2 md:gap-3">
        <li className="flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 transition-all duration-200 hover:scale-110 md:h-10 md:w-10">
          <img
            src="/assets/uzb-flag.png"
            alt="Language image"
            className="aspect-square size-auto"
          />
        </li>
        <li className="flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 transition-all duration-200 hover:scale-110 md:h-10 md:w-10">
          <img
            src="/assets/rus-flag.png"
            alt="Language image"
            className="aspect-square size-auto"
          />
        </li>
        <li className="flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 transition-all duration-200 hover:scale-110 md:h-10 md:w-10">
          <img
            src="/assets/usa-flag.png"
            alt="Language image"
            className="aspect-square size-auto"
          />
        </li>
      </ul>
      {/* Nav */}
      <nav className="hidden items-center gap-10 lg:flex">
        <Link
          to="/"
          className="text-lg tracking-wide text-red-50 underline-offset-8 transition-all duration-200 hover:text-white hover:underline active:scale-110"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="text-lg tracking-wide text-red-50 underline-offset-8 transition-all duration-200 hover:text-white hover:underline active:scale-110"
        >
          Services
        </Link>
        <Link
          to="/about"
          className="text-lg tracking-wide text-red-50 underline-offset-8 transition-all duration-200 hover:text-white hover:underline active:scale-110"
        >
          About
        </Link>

        <button className="rounded-full bg-gray-950 px-8 py-2 text-lg font-medium text-red-50 transition-all duration-200 hover:bg-red-900 active:scale-90">
          Contact Us
        </button>
      </nav>
      {/* Mobile */}
      <div className="h-18 flex lg:hidden">
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
