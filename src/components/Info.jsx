import React from "react";
import { useTranslation } from "react-i18next";

const reasons = [
  {
    key: "trustedProfessionals",
    imgSrc: "/assets/feature-1.png",
  },
  {
    key: "effortlessMoving",
    imgSrc: "/assets/feature-2.png",
  },
  {
    key: "customerSatisfaction",
    imgSrc: "/assets/feature-3.png",
  },
];

const Reason = ({ imgSrc, title, description }) => (
  <div className="flex h-full w-fit flex-col items-center gap-2 lg:gap-6">
    <img
      src={imgSrc}
      alt={title}
      className="md:h-18 h-14 object-contain lg:h-20 2xl:h-32"
    />
    <div className="flex flex-col items-center gap-2 lg:gap-4">
      <h3 className="text-lg text-center font-semibold md:text-2xl">{title}</h3>
      <p className="w-9/12 text-center text-sm tracking-wide md:text-lg">
        {description}
      </p>
    </div>
  </div>
);

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto flex h-fit flex-col gap-20 py-20 md:px-4 md:pb-40 md:pt-20">
      <div className="flex flex-col items-center gap-2 md:items-start">
        <p className="text-sm font-medium uppercase text-red-600 md:text-lg">
          {t("infoComponent.reliableService")}
        </p>
        <h1 className="text-xl font-bold md:text-4xl">
          {t("infoComponent.whyChooseUs")}
        </h1>
      </div>
      <div className="flex h-full flex-col items-center justify-between gap-12 lg:flex-row">
        {reasons.map((reason, index) => (
          <Reason
            key={index}
            imgSrc={reason.imgSrc}
            title={t(`infoComponent.${reason.key}.title`)}
            description={t(`infoComponent.${reason.key}.description`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Info;