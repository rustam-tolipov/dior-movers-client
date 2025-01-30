import React from "react";

const Landing = () => {
  return (
    <div className="relative flex h-fit w-dvw flex-col items-center">
      {/* <img
        src="/assets/hero-bg.png"
        alt="Background image of hero"
        className="fixed z-0"
      /> */}
      <div className="flex h-dvh w-full flex-col items-center bg-red-600">
        {/* Navbar */}
        <div className="flex w-full flex-row justify-between px-12 py-6">
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
        <div className="container flex h-full w-full">
          <div className="flex h-full w-full flex-col justify-center gap-10">
            <h1 className="text-6xl font-bold tracking-wide text-gray-100">
              Make your moving <br /> eathy with us
            </h1>
            <p className="w-11/12 text-2xl leading-8 tracking-wide text-gray-100">
              It is a long established fact that the readable content of a page
              when. Many desktop publishing packages and web page editors now
              use
            </p>
            <div className="flex items-center gap-6">
              <button className="rounded-full bg-gray-950 px-8 py-2 text-xl font-medium text-gray-100">
                Contact Us
              </button>
              <button className="rounded-full bg-red-50 px-8 py-2 text-xl font-medium text-gray-900">
                Learn More
              </button>
            </div>
          </div>
          <div className="h-full flex items-center justify-center w-full">
            <img
              src="/assets/hero-img.jpeg"
              alt="Hero image"
              className="aspect-auto h-full w-fit border object-contain"
            />
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="container h-[300dvh]">Services</div>
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
