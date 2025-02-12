import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import CoverImage from "../utils/CoverImage";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative flex w-dvw flex-col items-center bg-gray-100">
      <Navbar />
      {/* Cover image */}
      <div className="relative flex h-[40dvh] w-full items-center justify-center bg-gray-900 p-8 lg:h-[70dvh]">
        <CoverImage />

        <div className="container z-10 flex h-full w-full items-center justify-center">
          <h1 className="text-4xl text-center font-semibold text-gray-50 drop-shadow-xl lg:text-6xl">
            {t("contactPage.title")}
          </h1>
        </div>
      </div>

      {/* CONTACT US */}
      <div className="container flex w-full flex-col gap-8 px-8 py-12 md:min-h-auto md:flex-row md:justify-between md:gap-0 md:pb-52 md:pt-32">
        <div className="flex h-full flex-col md:w-3/5">
          <span className="text-md uppercase text-red-600">
            {t("contactPage.subtitle")}
          </span>
          <h2 className="pb-6 text-2xl font-semibold text-gray-900">
            {t("contactPage.mainTitle")}
          </h2>
          <p className="text-md w-4/5 pb-4 text-gray-700">
            {t("contactPage.paragraph1")}
          </p>
          <p className="w-4/5 pb-10 text-sm text-gray-600">
            {t("contactPage.paragraph2")}
          </p>
        </div>
        <div className="flex h-fit flex-col md:w-4/12">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
