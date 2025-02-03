import React from "react";

const Info = () => {
  return (
    <div className="container flex h-fit flex-col md:px-4 gap-20 pb-40 pt-20">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-lg font-medium uppercase text-red-600">
          Reliable Service, Exceptional Results
        </p>
        <h1 className="text-4xl font-bold">Why Choose Us?</h1>
      </div>
      {/* Reasons */}
      <div className="flex h-full flex-col items-center justify-between gap-12 lg:flex-row">
        <div className="flex h-full w-fit flex-col items-center gap-2 lg:gap-6">
          {/* icon */}
          <img
            src="/assets/feature-1.png"
            alt="Reason"
            className="h-18 w-fit"
          />
          {/* info */}
          <div className="flex flex-col items-center gap-2 lg:gap-4">
            <h3 className="text-2xl font-semibold">Trusted Professionals</h3>
            <p className="w-9/12 text-center text-lg tracking-wide">
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
            className="h-18 w-fit"
          />
          {/* info */}
          <div className="flex flex-col items-center gap-2 lg:gap-4">
            <h3 className="text-2xl font-semibold">Effortless Moving</h3>
            <p className="w-9/12 text-center text-lg tracking-wide">
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
            className="h-18 w-fit"
          />
          {/* info */}
          <div className="flex flex-col items-center gap-2 lg:gap-4">
            <h3 className="text-2xl font-semibold">Customer Satisfaction</h3>
            <p className="w-9/12 text-center text-lg tracking-wide">
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
