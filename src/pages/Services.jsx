import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import CoverImage from "../utils/CoverImage";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const getCoverText = () => {
    if (location.pathname.includes("/cleaning")) {
      return t("servicesPage.cleaning.title");
    } else if (location.pathname.includes("/moving")) {
      return t("servicesPage.moving.title");
    } else if (location.pathname.includes("/handyman")) {
      return t("servicesPage.handyman.title");
    } else {
      return t("servicesPage.title");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative flex w-dvw flex-col items-center">
      <Navbar />
      {/* Cover image */}
      <div className="relative flex w-full items-center justify-center bg-gray-900 md:h-[70dvh]">
        <CoverImage />

        <div className="container z-10 flex h-full w-full flex-col gap-8 overflow-hidden md:flex-row md:gap-0">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex h-full items-center justify-center py-20 md:w-3/5 md:py-0"
          >
            <h1 className="text-center text-3xl font-bold text-gray-50 drop-shadow-xl md:text-start md:text-6xl">
              {getCoverText()}
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden h-full justify-center p-8 md:flex md:w-2/5 md:pr-8"
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