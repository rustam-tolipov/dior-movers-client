/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import MyImage from "../utils/Image";

const servicesData = [
  {
    title: "Moving services",
    description:
      "Relocating? We make it easy! Our professional movers handle everything from packing to transportation, ensuring a smooth and stress-free move to your new location.",
    imgSrc: "/assets/service1.webp",
    reverse: false,
    to: "/services/moving",
  },
  {
    title: "Handyman services",
    description:
      "Need quick fixes? From minor repairs to furniture assembly, our skilled handymen handle it all, ensuring your home or workspace stays in top shape.",
    imgSrc: "/assets/service2.webp",
    reverse: true,
    to: "/services/handyman",
  },
  {
    title: "Cleaning services",
    description:
      "A spotless space is just a call away! Whether it's your home or office, our expert cleaners provide deep and efficient cleaning for a fresh and healthy environment.",
    imgSrc: "/assets/service3.webp",
    reverse: false,
    to: "/services/cleaning",
  },
];

const ServiceSection = ({ title, description, imgSrc, reverse, to }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`flex h-fit w-full flex-col items-center justify-between gap-8 md:flex-row lg:gap-20 ${reverse ? "md:flex-row-reverse" : ""}`}
  >
    <div className="h-full w-full md:w-1/2">
      <MyImage
        src={imgSrc}
        alt={`${title} image`}
        design="aspect-auto h-full w-full"
      />
    </div>
    <div className="w-full md:w-1/2">
      <div className="ml-auto flex flex-col gap-2 md:gap-4">
        <h3 className="text-lg font-bold md:text-3xl lg:text-4xl">{title}</h3>
        <p className="w-full pb-4 text-sm leading-normal tracking-wide md:leading-8 lg:text-lg">
          {description}
        </p>
        <Link
          to={to}
          className="w-fit rounded-full bg-red-600 px-6 py-2 text-sm font-medium text-gray-100 transition-all duration-200 hover:bg-red-800 active:scale-90 md:px-8 md:text-base lg:text-lg"
        >
          Read More
        </Link>
      </div>
    </div>
  </motion.div>
);

const Services = () => (
  <div className="container mx-auto flex h-fit flex-col gap-20 px-4 pb-56 pt-32 lg:gap-32">
    <div className="flex flex-col md:gap-2">
      <p className="text-sm font-medium uppercase text-red-600 md:text-lg">
        Services
      </p>
      <h1 className="text-xl font-bold md:text-4xl">
        Get the best services from our company
      </h1>
    </div>
    {servicesData.map((service, index) => (
      <ServiceSection key={index} {...service} />
    ))}
  </div>
);

export default Services;
