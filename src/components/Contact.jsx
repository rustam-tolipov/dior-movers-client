import React, { useState } from "react";
import { motion } from "motion/react";

const buttonVariants = {
  hover: {
    scale: [1, 1.5],
    transition: {
      yoyo: 10,
    },
  },
};

const variants = {
  active: {
    opacity: 0,
  },
  inactive: {
    opacity: 1,
    transition: { duration: 2 },
  },
};

const spanVariants = {
  active: {
    x: "9.5rem",
  },
  inactive: {
    x: "0rem",
    transition: { duration: 0.1 },
  },
};

const Contact = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(!isClicked);

  return (
    <div className="container mx-auto px-4 py-20 lg:px-12 lg:pb-52 lg:pt-32">
      <div className="relative flex w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl bg-red-600 py-6 md:h-64 md:py-0">
        <img
          src="/assets/cta.webp"
          alt="Contact background"
          className="absolute z-0 aspect-auto h-full w-full object-cover opacity-10"
        />
        <h1 className="z-10 text-2xl font-bold text-gray-100 md:text-4xl lg:text-5xl">
          Reach out to us Today!
        </h1>

        <motion.a
          href="tel:+998901234567"
          variants={variants}
          className={`relative flex w-[12rem] items-center gap-2 rounded-full bg-gray-950 py-2 md:py-3
          ${isClicked ? "pl-10 pr-[4.5rem]" : "pl-[4.5rem] pr-6"}
          text-base font-medium text-red-50 lg:text-base
          `}
        >
          <motion.span
            variants={spanVariants}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.5,
                repeat: Infinity,
              },
            }}
            animate={isClicked ? "active" : "inactive"}
            onClick={handleClick}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 flex h-14 w-14 rounded-full border-4 border-gray-950 bg-gray-50 p-3 md:h-16 md:w-16 md:p-4"
          >
            <svg
              fill="#000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              height="100%"
              width="100%"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              />
            </svg>
          </motion.span>
          {isClicked ? (
            <motion.span
              animate={{
                rotateX: "360deg",
              }}
              transition={{
                duration: 0.3,
              }}
              width="4rem"
              className="tracking-wide"
            >
              901234567
            </motion.span>
          ) : (
            <span width="4rem">Contact Us</span>
          )}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
