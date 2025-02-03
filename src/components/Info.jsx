import React from "react";

const Info = () => {
  return (
    <div className="container mx-auto flex h-fit flex-col gap-20 py-20 md:px-4 md:pb-40 md:pt-20">
      {/* Title */}
      <div className="flex flex-col items-center gap-2 md:items-start">
        <p className="text-sm font-medium uppercase text-red-600 md:text-lg">
          Reliable Service, Exceptional Results
        </p>
        <h1 className="text-xl font-bold md:text-4xl">Why Choose Us?</h1>
      </div>
      {/* Reasons */}
      <div className="flex h-full flex-col items-center justify-between gap-12 lg:flex-row">
        <div className="flex h-full w-fit flex-col items-center gap-2 lg:gap-6">
          {/* icon */}
          <img
            src="/assets/feature-1.png"
            alt="Reason"
            className="md:h-18 h-14 md:w-fit"
          />
          {/* info */}
          <div className="flex flex-col items-center gap-2 lg:gap-4">
            <h3 className="text-lg font-semibold md:text-2xl">
              Trusted Professionals
            </h3>
            <p className="w-9/12 text-center text-sm tracking-wide md:text-lg">
              Our experienced and friendly team is committed to delivering
              top-quality service with care and reliability.
            </p>
          </div>
        </div>
        <div className="flex h-full w-fit flex-col items-center gap-2 lg:gap-6">
          {/* icon */}
          <img
            src="/assets/feature-2.png"
            alt="Reason"
            className="md:h-18 h-14 md:w-fit"
          />
          {/* info */}
          <div className="flex flex-col items-center gap-2 lg:gap-4">
            <h3 className="text-lg font-semibold md:text-2xl">
              Effortless Moving
            </h3>
            <p className="w-9/12 text-center text-sm tracking-wide md:text-lg">
              We handle your belongings with precision and care, ensuring a
              smooth and hassle-free relocation.
            </p>
          </div>
        </div>
        <div className="flex h-full w-fit flex-col items-center gap-2 lg:gap-6">
          {/* icon */}
          <img
            src="/assets/feature-3.png"
            alt="Reason"
            className="md:h-18 h-14 md:w-fit"
          />
          {/* info */}
          <div className="flex flex-col items-center gap-2 lg:gap-4">
            <h3 className="text-lg font-semibold md:text-2xl">
              Customer Satisfaction
            </h3>
            <p className="w-9/12 text-center text-sm tracking-wide md:text-lg">
              Your happiness is our priority! We go the extra mile to provide
              top-notch service you can rely on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
