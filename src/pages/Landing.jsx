import React from "react";

const Landing = () => {
  return (
    <div className="flex h-full w-dvw flex-col items-center">
      {/* Navbar */}
      <div className="flex w-full flex-row justify-between bg-red-600 px-12 py-6">
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

      {/* Main */}
      <div className="container border">Main</div>
      {/* Services */}
      <div className="container border">Services</div>
      {/* Testimonials */}
      <div className="container border">Testimonials</div>
      {/* Info */}
      <div className="container border">Info</div>
      {/* FAQ */}
      <div className="container border">FAQ</div>
      {/* Contact */}
      <div className="container border">Contact</div>
      {/* Footer */}
      <div className="container border">Footer</div>
    </div>
  );
};

export default Landing;
