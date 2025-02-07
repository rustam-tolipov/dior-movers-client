import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CoverImage from "../utils/CoverImage";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative flex w-dvw flex-col items-center">
      <Navbar />
      {/* Cover image */}
      <div className="relative flex h-[40dvh] w-full items-center justify-center bg-gray-900 p-8 lg:h-[70dvh]">
        <CoverImage />

        <div className="container z-10 flex h-full w-full items-center justify-center">
          <h1 className="text-4xl font-semibold text-gray-50 drop-shadow-xl lg:text-6xl">
            {t("about.title")}
          </h1>
        </div>
      </div>

      {/* ABOUT US */}
      <div className="md:min-h-auto container flex w-full flex-col gap-8 p-4 pb-28 pt-16 md:flex-row md:justify-center md:gap-0 md:pb-52 md:pt-32">
        <div className="flex h-full flex-col md:w-3/5">
          {/* subtitle */}
          <span className="text-md uppercase text-red-600">
            {t("about.subtitle")}
          </span>
          {/* title */}
          <h2 className="pb-6 text-2xl font-semibold text-gray-900">
            {t("about.mainTitle")}
          </h2>
          {/* paragraph */}
          <p className="text-md w-4/5 pb-4 text-gray-700">
            {t("about.paragraph1")}
          </p>
          <p className="w-4/5 pb-10 text-sm text-gray-600">
            {t("about.paragraph2")}
          </p>
          {/* button */}
          <button className="text-md w-fit rounded-full bg-gray-950 px-6 py-2 font-medium text-gray-100">
            {t("about.contactButton")}
          </button>
        </div>
        <div className="flex h-fit flex-col gap-8 border p-8 md:w-4/12">
          <div className="w-12/12 h-full">
            <img
              src="/assets/feature-1.png"
              alt="Reason"
              className="mb-4 h-12 md:w-fit"
            />
            <h3 className="text-md pb-1 font-medium">
              {t("about.missionTitle")}
            </h3>
            <p className="text-justify text-sm leading-6 text-gray-600">
              {t("about.missionDescription")}
            </p>
          </div>
          <span className="h-[2px] w-full bg-gray-200"></span>
          <div className="w-12/12 h-full">
            <img
              src="/assets/feature-3.png"
              alt="Reason"
              className="mb-4 h-12 md:w-fit"
            />
            <h3 className="text-md pb-1 font-medium">
              {t("about.visionTitle")}
            </h3>
            <p className="text-justify text-sm leading-6 text-gray-600">
              {t("about.visionDescription")}
            </p>
          </div>
        </div>
      </div>

      {/* MORE */}
      <div className="container p-8 md:p-4 md:pb-52">
        <div className="relative flex w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl bg-stone-950 py-12 md:h-64">
          <img
            src="/assets/cta.webp"
            alt="Contact background"
            className="absolute z-0 aspect-auto h-full w-full object-cover opacity-10"
          />

          <h1 className="text-center text-2xl text-gray-50">
            {t("about.evolutionTitle")}
          </h1>

          <div className="flex w-4/5 flex-col items-center justify-between gap-12 md:flex-row md:items-start md:gap-0">
            <div className="flex flex-col items-center justify-between">
              <span className="mb-4 h-12 w-12 rounded-full bg-gray-50"></span>
              <span className="text-md text-gray-50">2015</span>
              <p className="text-sm text-gray-50 text-center">{t("about.evolution2015")}</p>
            </div>

            <span className="mt-6 hidden h-1 w-32 rounded-full bg-gray-400 md:block"></span>

            <div className="flex flex-col items-center justify-between">
              <span className="mb-4 h-12 w-12 rounded-full bg-gray-50"></span>
              <span className="text-md text-gray-50">2017</span>
              <p className="text-sm text-gray-50 text-center">{t("about.evolution2017")}</p>
            </div>
            <span className="mt-6 hidden h-1 w-32 rounded-full bg-gray-400 md:block"></span>

            <div className="flex flex-col items-center justify-between">
              <span className="mb-4 h-12 w-12 rounded-full bg-gray-50"></span>
              <span className="text-md text-gray-50">2019</span>
              <p className="text-sm text-gray-50 text-center">{t("about.evolution2019")}</p>
            </div>
            <span className="mt-6 hidden h-1 w-32 rounded-full bg-gray-400 md:block"></span>

            <div className="flex flex-col items-center justify-between">
              <span className="mb-4 h-12 w-12 rounded-full bg-gray-50"></span>
              <span className="text-md text-gray-50">2021</span>
              <p className="text-sm text-gray-50 text-center">{t("about.evolution2021")}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
