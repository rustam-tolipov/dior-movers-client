import React from "react";

const Services = () => {
  return (
    <div className="container flex h-fit md:px-4 flex-col gap-20 py-12 lg:gap-40 lg:py-28">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-lg font-medium uppercase text-red-600">Services</p>
        <h1 className="text-4xl font-bold">
          Get the best services from our company
        </h1>
      </div>
      {/* Section 1*/}
      <div className="flex w-full items-center justify-between">
        {/* Image */}
        <div className="h-full w-1/2">
          <img
            src="/assets/service1.png"
            alt="Service image"
            className="lg:h-10/12 mr-auto aspect-auto w-11/12 lg:w-10/12"
          />
        </div>
        {/* Info */}
        <div className="w-1/2">
          <div className="ml-auto flex flex-col gap-4 lg:w-10/12">
            <h3 className="text-3xl font-bold lg:text-4xl">Moving services</h3>
            <p className="w-full pb-4 text-base leading-8 tracking-wide lg:text-lg">
              Relocating? We make it easy! Our professional movers handle
              everything from packing to transportation, ensuring a smooth and
              stress-free move to your new location.
            </p>
            <button className="w-fit rounded-full bg-red-600 px-8 py-2 text-base font-medium text-gray-100 lg:text-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* Section 2*/}
      <div className="flex w-full items-center justify-between">
        {/* Info */}
        <div className="w-1/2">
          <div className="mr-auto flex flex-col gap-4 lg:w-10/12">
            <h3 className="text-3xl font-bold lg:text-4xl">
              Handyman services
            </h3>
            <p className="w-full pb-4 text-base leading-8 tracking-wide lg:text-lg">
              Need quick fixes? From minor repairs to furniture assembly, our
              skilled handymen handle it all, ensuring your home or workspace
              stays in top shape.
            </p>
            <button className="w-fit rounded-full bg-red-600 px-8 py-2 text-base font-medium text-gray-100 lg:text-lg">
              Read More
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="h-full w-1/2">
          <img
            src="/assets/service2.png"
            alt="Service image"
            className="lg:h-10/12 ml-auto aspect-auto w-11/12 lg:w-10/12"
          />
        </div>
      </div>
      {/* Section 3*/}
      <div className="flex w-full items-center justify-between">
        {/* Image */}
        <div className="h-full w-1/2">
          <img
            src="/assets/service3.png"
            alt="Service image"
            className="lg:h-10/12 mr-auto aspect-auto w-11/12 lg:w-10/12"
          />
        </div>
        {/* Info */}
        <div className="w-1/2">
          <div className="ml-auto flex flex-col gap-4 lg:w-10/12">
            <h3 className="text-3xl font-bold lg:text-4xl">
              Cleaning services
            </h3>
            <p className="w-full pb-4 text-base leading-8 tracking-wide lg:text-lg">
              A spotless space is just a call away! Whether it's your home or
              office, our expert cleaners provide deep and efficient cleaning
              for a fresh and healthy environment.
            </p>
            <button className="w-fit rounded-full bg-red-600 px-8 py-2 text-base font-medium text-gray-100 lg:text-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
