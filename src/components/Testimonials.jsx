import React from "react";
import { useTranslation } from "react-i18next";

const testimonialsData = [
  {
    imgSrc: "/assets/user1.jpg",
    text: "testimonials.review1.text",
    name: "testimonials.review1.name",
  },
  {
    imgSrc: "/assets/user2.jpg",
    text: "testimonials.review2.text",
    name: "testimonials.review2.name",
  },
  {
    imgSrc: "/assets/user3.jpg",
    text: "testimonials.review3.text",
    name: "testimonials.review3.name",
  },
  {
    imgSrc: "/assets/user4.jpg",
    text: "testimonials.review4.text",
    name: "testimonials.review4.name",
  },
];

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-fit w-full items-center justify-center bg-[#1b0000] py-12">
      <div className="container flex h-full flex-col lg:flex-row">
        <div className="flex h-full flex-col gap-6 p-8 lg:w-2/5">
          {/* Title */}
          <div className="flex items-center gap-4">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src="/assets/star.png"
                alt="Star"
                className="h-8 md:h-12 md:w-12"
              />
            ))}
          </div>
          <h1 className="text-2xl font-bold text-red-500 md:text-6xl">
            {t("testimonials.title")}
          </h1>
        </div>
        <div className="grid h-full gap-16 p-10 md:grid-cols-2 lg:w-3/5">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="flex h-full w-full flex-col justify-between gap-4">
              {/* img */}
              <img
                src={testimonial.imgSrc}
                alt="Testimonial image"
                className="aspect-square h-12 w-12 rounded-full md:h-16 md:w-16"
              />
              {/* about */}
              <p className="leading-normal text-green-100 md:text-lg md:leading-8">
                {t(testimonial.text)}
              </p>
              {/* fullname */}
              <span className="text-sm text-red-600 md:text-base">
                {t(testimonial.name)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;