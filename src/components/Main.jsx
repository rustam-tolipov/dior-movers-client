import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MyImage from "../utils/Image";

const Main = () => {
  const { t } = useTranslation();

  const links = [
    {
      text: t("nav.getQuote"),
      bgColor: "bg-gray-950",
      textColor: "text-gray-100",
      hoverOutline: "hover:bg-gray-800",
      location: "/contact",
    },
    {
      text: t("nav.learnMore"),
      bgColor: "bg-red-50",
      textColor: "text-gray-900",
      hoverOutline: "hover:bg-gray-200",
      location: "/services",
    },
  ];

  return (
    <div className="container mx-auto flex h-full w-full flex-col py-16 md:py-32 lg:h-[90dvh] lg:flex-row lg:py-0">
      <div className="flex w-full flex-col items-center justify-center gap-10 pb-14 lg:items-start">
        <h1 className="text-center text-4xl font-bold leading-[1.2] tracking-normal text-gray-100 md:text-6xl lg:text-start">
          {t("main.mainTitle")}
        </h1>
        <p className="w-11/12 text-center text-lg text-gray-100 md:text-2xl md:leading-8 md:tracking-wide lg:text-start">
          {t("main.mainDescription")}
        </p>
        <div className="flex flex-row-reverse items-center gap-6 md:flex-row">
          {links.map((link, index) => (
            <motion.div
              initial={{
                opacity: 0.5,
                y: 30,
                outline: "none",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={
                link.text === t("nav.getQuote")
                  ? {
                      scale: 1.05,
                      outline: "3px solid #fff",
                    }
                  : {
                      scale: 1.05,
                      outline: "3px solid #000",
                    }
              }
              whileTap={{
                scale: 0.95,
                outline: "3px solid #f00",
              }}
              transition={{
                duration: 0.1,
              }}
              key={index}
              className={`rounded-full ${link.bgColor} px-8 py-4 text-base font-medium ${link.textColor} md:py-2 md:text-xl`}
            >
              <Link to={link.location}>{link.text}</Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="mt-auto hidden h-full w-fit lg:block lg:h-dvh 2xl:m-0 2xl:h-[64rem]">
          <MyImage
            alt="Hero image"
            src="/assets/hero-img.webp"
            design="aspect-auto h-full w-full border object-cover shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
