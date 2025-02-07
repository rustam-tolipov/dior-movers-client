import React from "react";
import { useTranslation } from "react-i18next";

const Cleaning = () => {
  const { t } = useTranslation();

  return (
    <div className="container flex h-fit w-full flex-col items-center gap-4 px-8 pt-20 md:gap-8 md:px-4">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium uppercase text-red-600 md:text-lg">
          {t("cleaningService.services")}
        </p>
        <h1 className="text-center text-lg font-bold text-gray-800 md:text-2xl">
          {t("cleaningService.title")}
        </h1>
      </div>

      <div className="flex flex-col gap-4 md:w-3/5">
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          {t("cleaningService.description1")}
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 md:w-3/5">
        <h2 className="text-base font-bold text-gray-800 md:text-lg">
          {t("cleaningService.subtitle")}
        </h2>

        <p className="text-justify text-sm text-gray-800 md:text-lg">
          {t("cleaningService.description2")}
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          {t("cleaningService.description3")}
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          {t("cleaningService.description4")}
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          {t("cleaningService.description5")}
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          {t("cleaningService.description6")}
        </p>
      </div>
    </div>
  );
};

export default Cleaning;