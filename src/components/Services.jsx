import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MyImage from "../utils/Image";
import { useTranslation } from "react-i18next";

const servicesData = [
  {
    key: "moving",
    imgSrc: "/assets/service1.webp",
    reverse: false,
    to: "/services/moving",
  },
  {
    key: "handyman",
    imgSrc: "/assets/service2.webp",
    reverse: true,
    to: "/services/handyman",
  },
  {
    key: "cleaning",
    imgSrc: "/assets/service3.webp",
    reverse: false,
    to: "/services/cleaning",
  },
];

const ServiceSection = ({ title, description, imgSrc, reverse, to }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex h-fit w-full flex-col items-center justify-between gap-8 md:flex-row lg:gap-20 ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <div className="h-full max-h-72 w-full overflow-hidden md:w-1/2 lg:max-h-none">
        <img
          src={imgSrc}
          alt={`${title} image`}
          className="aspect-auto h-full object-cover object-center w-full"
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
            {t("nav.learnMore")}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto flex h-fit flex-col gap-20 px-4 pb-28 pt-16 md:gap-32 md:pb-56 md:pt-32">
      <div className="flex flex-col md:gap-2">
        <p className="text-sm font-medium uppercase text-red-600 md:text-lg">
          {t("servicesComponent.services")}
        </p>
        <h1 className="text-xl font-bold md:text-4xl">
          {t("servicesComponent.title")}
        </h1>
      </div>
      {servicesData.map((service, index) => (
        <ServiceSection
          key={index}
          title={t(`servicesComponent.${service.key}.title`)}
          description={t(`servicesComponent.${service.key}.description`)}
          imgSrc={service.imgSrc}
          reverse={service.reverse}
          to={service.to}
        />
      ))}
    </div>
  );
};

export default Services;
