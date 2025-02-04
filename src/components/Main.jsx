import React from "react";

const Main = () => {
  const buttons = [
    {
      text: "Contact Us",
      bgColor: "bg-gray-950",
      textColor: "text-gray-100",
      hoverColor: "hover:bg-gray-800",
    },
    {
      text: "Learn More",
      bgColor: "bg-red-50",
      textColor: "text-gray-900",
      hoverColor: "hover:bg-gray-200",
    },
  ];

  return (
    <div className="container mx-auto flex h-full w-full flex-col py-16 md:py-32 lg:h-[90dvh] lg:flex-row lg:py-0">
      <div className="flex w-full flex-col items-center justify-center gap-10 pb-14 lg:items-start">
        <h1 className="text-center text-4xl font-bold leading-[1.2] tracking-normal text-gray-100 md:text-6xl lg:text-start">
          Make your moving <br /> easy with us
        </h1>
        <p className="w-11/12 text-center text-lg text-gray-100 md:text-2xl md:leading-8 md:tracking-wide lg:text-start">
          It is a long established fact that the readable content of a page
          when. Many desktop publishing packages and web page editors now use
        </p>
        <div className="flex flex-row-reverse items-center gap-6 md:flex-row">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`rounded-full ${button.bgColor} px-8 py-4 text-base font-medium ${button.textColor} transition-all duration-200 ${button.hoverColor} active:scale-90 md:py-2 md:text-xl`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <img
          src="/assets/hero-img.webp"
          alt="Hero image"
          className="mt-auto hidden aspect-auto h-full w-fit border object-cover lg:block lg:h-dvh 2xl:m-0 2xl:h-[64rem]"
        />
      </div>
    </div>
  );
};

export default Main;
