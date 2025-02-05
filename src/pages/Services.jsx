import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Services = () => {
  const location = useLocation();

  const getCoverText = () => {
    if (location.pathname.includes("/cleaning")) {
      return "Professional Cleaning Services!";
    } else if (location.pathname.includes("/moving")) {
      return "Stress-Free Moving";
    } else if (location.pathname.includes("/handyman")) {
      return "Reliable Handyman Services!";
    } else {
      return "Our Services!";
    }
  };

  return (
    <div className="relative flex w-dvw flex-col items-center">
      <Navbar />
      {/* Cover image */}
      <div className="relative flex w-full items-center justify-center md:h-[70dvh]">
        <CoverImage />

        <div className="container z-10 flex h-full w-full flex-col gap-8 overflow-hidden md:flex-row md:gap-0">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex h-full py-20 md:py-0 items-center justify-center md:w-3/5"
          >
            <h1 className="text-3xl text-center md:text-start md:text-6xl font-bold text-gray-50 drop-shadow-xl">
              {getCoverText()}
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:flex hidden h-full justify-center p-8 md:w-2/5 md:pr-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
      {/* Info */}
      <Outlet />
      <Contact />
      <Footer />
    </div>
  );
};

export default Services;

const CoverImage = () => {
  const location = useLocation();

  const coverImageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {location.pathname.includes("/cleaning") && (
        <motion.div
          variants={coverImageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="cleaning absolute left-0 top-0 z-0 h-full w-full"
        ></motion.div>
      )}
      {location.pathname.includes("/moving") && (
        <motion.div
          variants={coverImageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="moving absolute left-0 top-0 z-0 h-full w-full"
        ></motion.div>
      )}
      {location.pathname.includes("/handyman") && (
        <motion.div
          variants={coverImageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="handyman absolute left-0 top-0 z-0 h-full w-full"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};
