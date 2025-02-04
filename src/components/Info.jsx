/* eslint-disable react/prop-types */
import React from "react";

const reasons = [
  {
    imgSrc: "/assets/feature-1.png",
    title: "Trusted Professionals",
    description:
      "Our experienced and friendly team is committed to delivering top-quality service with care and reliability.",
  },
  {
    imgSrc: "/assets/feature-2.png",
    title: "Effortless Moving",
    description:
      "We handle your belongings with precision and care, ensuring a smooth and hassle-free relocation.",
  },
  {
    imgSrc: "/assets/feature-3.png",
    title: "Customer Satisfaction",
    description:
      "Your happiness is our priority! We go the extra mile to provide top-notch service you can rely on.",
  },
];

const Reason = ({ imgSrc, title, description }) => (
  <div className="flex h-full w-fit flex-col items-center gap-2 lg:gap-6">
    <img
      src={imgSrc}
      alt={title}
      className="md:h-18 h-14 object-contain lg:h-20 2xl:h-32"
    />
    <div className="flex flex-col items-center gap-2 lg:gap-4">
      <h3 className="text-lg font-semibold md:text-2xl">{title}</h3>
      <p className="w-9/12 text-center text-sm tracking-wide md:text-lg">
        {description}
      </p>
    </div>
  </div>
);

const Info = () => (
  <div className="container mx-auto flex h-fit flex-col gap-20 py-20 md:px-4 md:pb-40 md:pt-20">
    <div className="flex flex-col items-center gap-2 md:items-start">
      <p className="text-sm font-medium uppercase text-red-600 md:text-lg">
        Reliable Service, Exceptional Results
      </p>
      <h1 className="text-xl font-bold md:text-4xl">Why Choose Us?</h1>
    </div>
    <div className="flex h-full flex-col items-center justify-between gap-12 lg:flex-row">
      {reasons.map((reason, index) => (
        <Reason key={index} {...reason} />
      ))}
    </div>
  </div>
);

export default Info;
