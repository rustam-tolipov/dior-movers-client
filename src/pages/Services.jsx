import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";

const Services = () => {
  return (
    <div className="relative flex w-dvw flex-col items-center">
      <Navbar />
      {/* Cover image */}
      <div className="relative flex w-full items-center justify-center p-8 md:h-[70dvh]">
        <img
          src="/assets/services-page-bg.webp"
          alt="Cover image"
          className="absolute left-0 top-0 z-0 h-full w-full object-cover brightness-50"
        />

        <div className="container z-10 flex h-full w-full flex-col gap-8 md:flex-row md:gap-0">
          <div className="flex h-full items-start justify-end pt-10 md:w-3/5">
            <h1 className="text-4xl font-semibold text-gray-50 drop-shadow-xl">
              Get a Free Quote for Stress-Free Moving Today!
            </h1>
          </div>
          <div className="flex h-full items-center justify-center md:w-2/5 md:pr-8">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* Info */}
      <div className="container flex h-fit w-full flex-col items-center gap-4 px-8 pt-20 md:gap-8 md:px-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm font-medium uppercase text-red-600 md:text-lg">
            Services
          </p>
          <h1 className="text-center text-lg font-bold text-gray-800 md:text-2xl">
            Get the best services from our company
          </h1>
        </div>

        <div className="flex flex-col gap-4 md:w-3/5">
          <p className="text-justify text-sm text-gray-800 md:text-lg">
            Moving can be stressful, but with our professional team, you can
            enjoy a smooth and hassle-free experience. Whether you're relocating
            your home or office, we provide efficient, safe, and affordable
            moving solutions tailored to your needs. From packing to
            transportation, we handle every step with care and precision.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:w-3/5">
          <h1 className="text-base font-bold text-gray-800 md:text-lg">
            Reliable and Hassle-Free Moving Services
          </h1>

          <p className="text-justify text-sm text-gray-800 md:text-lg">
            Moving can be stressful, but with our professional team, you can
            enjoy a smooth and hassle-free experience. Whether you're relocating
            your home or office, we provide efficient, safe, and affordable
            moving solutions tailored to your needs. From packing to
            transportation, we handle every step with care and precision.
          </p>
          <p className="text-justify text-sm text-gray-800 md:text-lg">
            Every move is different, which is why we offer flexible and
            customizable moving plans. Whether you need full-service packing,
            furniture disassembly, or just transportation, our team is here to
            assist you. We work around your schedule to ensure a seamless
            transition, making your move as easy as possible.
          </p>
          <p className="text-justify text-sm text-gray-800 md:text-lg">
            Getting started is simple! Fill out our quick and easy form to
            receive a free, no-obligation quote for your move. Our friendly team
            will assess your needs and provide a personalized estimate. Don’t
            let moving stress you out—let us handle the heavy lifting while you
            focus on settling into your new space!
          </p>
          <p className="text-justify text-sm text-gray-800 md:text-lg">
            Moving is more than just transporting boxes—it’s about transitioning
            to a new chapter in your life. That’s why we go above and beyond to
            make your move as seamless as possible. With years of experience, a
            highly trained team, and a commitment to customer satisfaction, we
            ensure that your belongings are handled with the utmost care. Our
            services cover local and long-distance moves, and we offer
            additional support such as packing, unpacking, and secure storage
            solutions. Whether you’re moving to a new home, apartment, or
            office, we tailor our services to fit your unique needs. We also
            provide transparent pricing, so you know exactly what to expect—no
            hidden fees, just reliable service you can trust.
          </p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Services;
