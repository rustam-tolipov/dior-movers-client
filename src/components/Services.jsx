import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto flex h-fit flex-col gap-20 px-4 py-12 lg:gap-40 lg:py-28">
      {/* Title */}
      <div className="flex flex-col md:gap-2">
        <p className="text-sm font-medium uppercase text-red-600 md:text-lg">
          Services
        </p>
        <h1 className="text-xl font-bold md:text-4xl">
          Get the best services from our company
        </h1>
      </div>
      {/* Section 1*/}
      <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
        {/* Image */}
        <div className="h-full w-full md:w-1/2">
          <img
            src="/assets/service1.webp"
            alt="Service image"
            className="lg:h-10/12 mr-auto aspect-auto md:w-11/12 lg:w-10/12"
          />
        </div>
        {/* Info */}
        <div className="w-full md:w-1/2">
          <div className="ml-auto flex flex-col gap-2 md:gap-4 lg:w-10/12">
            <h3 className="text-lg font-bold md:text-3xl lg:text-4xl">
              Moving services
            </h3>
            <p className="w-full pb-4 text-sm leading-normal tracking-wide md:leading-8 lg:text-lg">
              Relocating? We make it easy! Our professional movers handle
              everything from packing to transportation, ensuring a smooth and
              stress-free move to your new location.
            </p>
            <button className="w-fit rounded-full bg-red-600 px-6 py-2 text-sm font-medium text-gray-100 transition-all duration-200 hover:bg-red-800 active:scale-90 md:px-8 md:text-base lg:text-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* Section 2*/}
      <div className="flex w-full flex-col-reverse items-center justify-between gap-8 md:flex-row">
        {/* Info */}
        <div className="w-full md:w-1/2">
          <div className="ml-auto flex flex-col gap-2 md:gap-4 lg:w-10/12">
            <h3 className="text-lg font-bold md:text-3xl lg:text-4xl">
              Handyman services
            </h3>
            <p className="w-full pb-4 text-sm leading-normal tracking-wide md:leading-8 lg:text-lg">
              Need quick fixes? From minor repairs to furniture assembly, our
              skilled handymen handle it all, ensuring your home or workspace
              stays in top shape.
            </p>
            <button className="w-fit rounded-full bg-red-600 px-6 py-2 text-sm font-medium text-gray-100 transition-all duration-200 hover:bg-red-800 active:scale-90 md:px-8 md:text-base lg:text-lg">
              Read More
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="h-full w-full md:w-1/2">
          <img
            src="/assets/service2.webp"
            alt="Service image"
            className="lg:h-10/12 ml-auto aspect-auto md:w-11/12 lg:w-10/12"
          />
        </div>
      </div>
      {/* Section 3*/}
      <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
        {/* Image */}
        <div className="h-full w-full md:w-1/2">
          <img
            src="/assets/service3.webp"
            alt="Service image"
            className="lg:h-10/12 mr-auto aspect-auto md:w-11/12 lg:w-10/12"
          />
        </div>
        {/* Info */}
        <div className="w-full md:w-1/2">
          <div className="ml-auto flex flex-col gap-2 md:gap-4 lg:w-10/12">
            <h3 className="text-lg font-bold md:text-3xl lg:text-4xl">
              Cleaning services
            </h3>
            <p className="w-full pb-4 text-sm leading-normal tracking-wide md:leading-8 lg:text-lg">
              A spotless space is just a call away! Whether it's your home or
              office, our expert cleaners provide deep and efficient cleaning
              for a fresh and healthy environment.
            </p>
            <button className="w-fit rounded-full bg-red-600 px-6 py-2 text-sm font-medium text-gray-100 transition-all duration-200 hover:bg-red-800 active:scale-90 md:px-8 md:text-base lg:text-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
