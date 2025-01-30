import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-fit w-full flex-row justify-between px-12 py-6">
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
      <nav className="flex items-center gap-10">
        <a href="#" className="text-lg tracking-wide text-red-50">
          Home
        </a>
        <a href="#" className="text-lg tracking-wide text-red-50">
          Services
        </a>
        <a href="#" className="text-lg tracking-wide text-red-50">
          About
        </a>
        <button className="rounded-full bg-gray-950 px-8 py-2 text-lg font-medium text-red-50">
          Contact Us
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
