import React from "react";

const Moving = () => {
  return (
    <div className="container flex h-fit w-full flex-col items-center gap-4 px-8 pt-20 md:gap-8 md:px-4">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium uppercase text-red-600 md:text-lg">
          Services
        </p>
        <h1 className="text-center text-lg font-bold text-gray-800 md:text-2xl">
          Professional Moving Services
        </h1>
      </div>

      <div className="flex flex-col gap-4 md:w-3/5">
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Moving can be a daunting task, but with our professional team, you can
          enjoy a smooth and hassle-free experience. Whether you're relocating
          your home or office, we provide efficient, safe, and affordable moving
          solutions tailored to your needs. From packing to transportation, we
          handle every step with care and precision.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 md:w-3/5">
        <h2 className="text-base font-bold text-gray-800 md:text-lg">
          Reliable and Hassle-Free Moving Services
        </h2>

        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Our team of experienced movers is dedicated to making your move as
          seamless as possible. We offer a range of services to meet your
          specific needs, including full-service packing, furniture disassembly,
          and transportation. We work around your schedule to ensure a smooth
          transition to your new location.
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Every move is unique, which is why we offer flexible and customizable
          moving plans. Whether you need comprehensive packing services or just
          transportation, we are here to assist you. Our goal is to make your
          move as stress-free as possible.
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Getting started is simple! Fill out our quick and easy form to receive
          a free, no-obligation quote for your move. Our friendly team will
          assess your needs and provide a personalized estimate. Let us handle
          the heavy lifting while you focus on settling into your new space.
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Moving is more than just transporting boxes—it’s about transitioning
          to a new chapter in your life. That’s why we go above and beyond to
          make your move as seamless as possible. With years of experience, a
          highly trained team, and a commitment to customer satisfaction, we
          ensure that your belongings are handled with the utmost care.
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Our services cover both local and long-distance moves, and we offer
          additional support such as packing, unpacking, and secure storage
          solutions. Whether you’re moving to a new home, apartment, or office,
          we tailor our services to fit your unique needs. We also provide
          transparent pricing, so you know exactly what to expect—no hidden
          fees, just reliable service you can trust.
        </p>
      </div>
    </div>
  );
};

export default Moving;
