import React from "react";

const Main = () => {
  return (
    <div className="container flex h-full w-full flex-col py-16 md:py-32 lg:flex-row lg:py-0">
      <div className="flex w-full flex-col items-center justify-center gap-10 pb-14 lg:items-start">
        <h1 className="text-center text-4xl font-bold leading-[1.2] tracking-normal text-gray-100 md:text-6xl lg:text-start">
          Make your moving <br /> eathy with us
        </h1>
        <p className="w-11/12 text-center text-lg md:text-2xl md:leading-8 tracking-wide text-gray-100 lg:text-start">
          It is a long established fact that the readable content of a page
          when. Many desktop publishing packages and web page editors now use
        </p>
        <div className="flex items-center flex-row-reverse md:flex-row gap-6">
          <button className="rounded-full bg-gray-950 px-8 py-2 text-sm md:text-xl font-medium text-gray-100">
            Contact Us
          </button>
          <button className="rounded-full bg-red-50 px-8 py-2 text-sm md:text-xl font-medium text-gray-900">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <img
          src="/assets/hero-img.jpeg"
          alt="Hero image"
          className="hidden aspect-auto h-full w-fit border object-contain lg:block"
        />
      </div>
    </div>
  );
};

export default Main;
