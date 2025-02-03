import React from "react";

const Main = () => {
  return (
    <div className="container mx-auto flex h-full w-full flex-col py-16 md:py-32 lg:flex-row lg:py-0">
      <div className="flex w-full flex-col items-center justify-center gap-10 pb-14 lg:items-start">
        <h1 className="text-center text-4xl font-bold leading-[1.2] tracking-normal text-gray-100 md:text-6xl lg:text-start">
          Make your moving <br /> eathy with us
        </h1>
        <p className="w-11/12 text-center text-lg text-gray-100 md:text-2xl md:leading-8 md:tracking-wide lg:text-start">
          It is a long established fact that the readable content of a page
          when. Many desktop publishing packages and web page editors now use
        </p>
        <div className="flex flex-row-reverse items-center gap-6 md:flex-row">
          <button className="rounded-full bg-gray-950 px-8 py-4 md:py-2 text-base font-medium text-gray-100 md:text-xl">
            Contact Us
          </button>
          <button className="rounded-full bg-red-50 px-8 py-4 md:py-2 text-base font-medium text-gray-900 md:text-xl">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <img
          src="/assets/hero-img.webp"
          alt="Hero image"
          className="hidden aspect-auto h-full w-fit border object-contain lg:block"
        />
      </div>
    </div>
  );
};

export default Main;
