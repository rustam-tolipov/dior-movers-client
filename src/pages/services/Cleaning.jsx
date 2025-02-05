import React from "react";

const Cleaning = () => {
  return (
    <div className="container flex h-fit w-full flex-col items-center gap-4 px-8 pt-20 md:gap-8 md:px-4">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium uppercase text-red-600 md:text-lg">
          Services
        </p>
        <h1 className="text-center text-lg font-bold text-gray-800 md:text-2xl">
          Professional Cleaning Services
        </h1>
      </div>

      <div className="flex flex-col gap-4 md:w-3/5">
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Maintaining a clean and healthy environment is essential, whether it's
          your home or office. Our professional cleaning services ensure that
          your space is spotless and hygienic. We offer comprehensive cleaning
          solutions tailored to your specific needs, providing you with peace of
          mind and a pristine environment.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 md:w-3/5">
        <h2 className="text-base font-bold text-gray-800 md:text-lg">
          Comprehensive and Reliable Cleaning Services
        </h2>

        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Our team of experienced cleaners is dedicated to delivering top-notch
          cleaning services. We use high-quality cleaning products and equipment
          to ensure that every corner of your space is thoroughly cleaned. From
          regular maintenance to deep cleaning, we offer a range of services to
          meet your needs.
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          We understand that every space is unique, which is why we offer
          customizable cleaning plans. Whether you need daily, weekly, or
          monthly cleaning, we can create a schedule that works for you. Our
          goal is to provide you with a clean and comfortable environment
          without any hassle.
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Getting started is easy! Fill out our quick and simple form to receive
          a free, no-obligation quote for your cleaning needs. Our friendly team
          will assess your requirements and provide a personalized estimate. Let
          us take care of the cleaning while you focus on what matters most.
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Cleaning is more than just removing dirt—it’s about creating a healthy
          and inviting space. That’s why we go above and beyond to ensure that
          your space is not only clean but also safe and welcoming. With years
          of experience, a highly trained team, and a commitment to customer
          satisfaction, we guarantee exceptional results.
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Our services cover both residential and commercial cleaning, and we
          offer additional support such as window cleaning, carpet cleaning, and
          upholstery cleaning. Whether you need a one-time deep clean or ongoing
          maintenance, we tailor our services to fit your unique needs. We also
          provide transparent pricing, so you know exactly what to expect—no
          hidden fees, just reliable service you can trust.
        </p>
      </div>
    </div>
  );
};

export default Cleaning;
