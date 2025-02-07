import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClick = () => navigate("/about");

  return (
    <div className="container mx-auto px-4 py-20 lg:px-12 lg:pb-52 lg:pt-32">
      <div className="relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-red-600 py-6 md:h-64 md:gap-8 md:py-0">
        <img
          src="/assets/cta.webp"
          alt="Contact background"
          className="absolute z-0 aspect-auto h-full w-full object-cover opacity-10"
        />
        <h1 className="z-10 text-xl font-bold text-gray-100 md:text-4xl lg:text-5xl">
          {t("contactComponent.title")}
        </h1>

        <motion.button
          initial={{
            opacity: 0.5,
            y: 30,
            outline: "none",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          whileHover={{
            scale: 1.05,
            outline: "4px solid #fff",
          }}
          whileTap={{
            scale: 0.95,
            outline: "4px solid #f00",
          }}
          transition={{
            duration: 0.1,
          }}
          onClick={handleClick}
          className="z-10 cursor-pointer rounded-full bg-black px-6 py-2 font-medium text-red-50 md:px-10 md:py-4 md:text-xl"
        >
          {t("contactComponent.button")}
        </motion.button>
      </div>
    </div>
  );
};

export default Contact;