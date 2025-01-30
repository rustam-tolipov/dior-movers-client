import React from "react";

const Services = () => {
  return (
    <div className="container flex h-fit flex-col gap-40 py-28">
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
            className="h-10/12 mr-auto aspect-auto w-10/12"
          />
        </div>
        {/* Info */}
        <div className="w-1/2">
          <div className="ml-auto flex w-10/12 flex-col gap-4">
            <h3 className="text-4xl font-bold">Moving services</h3>
            <p className="w-full pb-4 text-lg leading-8 tracking-wide">
              Relocating? We make it easy! Our professional movers handle
              everything from packing to transportation, ensuring a smooth and
              stress-free move to your new location.
            </p>
            <button className="w-fit rounded-full bg-red-600 px-8 py-2 text-lg font-medium text-gray-100">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* Section 2*/}
      <div className="flex w-full items-center justify-between">
        {/* Info */}
        <div className="w-1/2">
          <div className="mr-auto flex w-10/12 flex-col gap-4">
            <h3 className="text-4xl font-bold">Handyman services</h3>
            <p className="w-full pb-4 text-lg leading-8 tracking-wide">
              Need quick fixes? From minor repairs to furniture assembly, our
              skilled handymen handle it all, ensuring your home or workspace
              stays in top shape.
            </p>
            <button className="w-fit rounded-full bg-red-600 px-8 py-2 text-lg font-medium text-gray-100">
              Read More
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="h-full w-1/2">
          <img
            src="/assets/service2.png"
            alt="Service image"
            className="h-10/12 ml-auto aspect-auto w-10/12"
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
            className="h-10/12 mr-auto aspect-auto w-10/12"
          />
        </div>
        {/* Info */}
        <div className="w-1/2">
          <div className="ml-auto flex w-10/12 flex-col gap-4">
            <h3 className="text-4xl font-bold">Cleaning services</h3>
            <p className="w-full pb-4 text-lg leading-8 tracking-wide">
              A spotless space is just a call away! Whether it's your home or
              office, our expert cleaners provide deep and efficient cleaning
              for a fresh and healthy environment.
            </p>
            <button className="w-fit rounded-full bg-red-600 px-8 py-2 text-lg font-medium text-gray-100">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
