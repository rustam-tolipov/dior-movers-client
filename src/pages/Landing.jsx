import React from "react";

import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Info from "../components/Info";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="relative flex w-dvw flex-col items-center">
      {/* Hero */}
      <Hero />
      {/* Services */}
      <Services />
      {/* Testimonials */}
      <Testimonials />
      {/* Info */}

      <Info />
      {/* FAQ */}
      <div className="flex h-fit w-full justify-center bg-red-50">
        <div className="container flex h-fit flex-col items-center gap-16 pb-52 pt-32">
          {/* Title */}
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-lg font-medium uppercase text-red-600">
              Got Questions? We’ve Got Answers!
            </p>
            <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          </div>
          {/* FAQ */}
          <div className="flex w-8/12 flex-col gap-2">
            <div className="flex flex-col">
              <div className="flex h-16 w-full items-center justify-between rounded-md bg-white px-8 text-lg font-medium text-gray-900 shadow-sm">
                How do I book a moving, cleaning, or handyman service?
                <span className="h-8 w-8">
                  <svg
                    fill="none"
                    strokeWidth={1.5}
                    stroke="#f00"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
              </div>
              <div className="text-md flex h-16 w-full items-center justify-center gap-4 px-12 font-medium text-gray-900">
                <span className="h-8 w-1 rounded-full bg-gray-600"></span>
                You can easily book our services online or by giving us a call.
                We'll schedule a time that works best for you!
              </div>
            </div>
            <div className="flex h-16 w-full items-center justify-between rounded-md bg-white px-8 text-lg font-medium text-gray-900 shadow-sm">
              Are your movers trained to handle fragile items?
              <span className="h-8 w-8">
                <svg
                  // dataSlot="icon"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="#f00"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
            </div>
            <div className="flex h-16 w-full items-center justify-between rounded-md bg-white px-8 text-lg font-medium text-gray-900 shadow-sm">
              What cleaning services do you offer?
              <span className="h-8 w-8">
                <svg
                  // dataSlot="icon"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="#f00"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
            </div>
            <div className="flex h-16 w-full items-center justify-between rounded-md bg-white px-8 text-lg font-medium text-gray-900 shadow-sm">
              Do you bring your own tools and supplies?
              <span className="h-8 w-8">
                <svg
                  // dataSlot="icon"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="#f00"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
            </div>
            <div className="flex h-16 w-full items-center justify-between rounded-md bg-white px-8 text-lg font-medium text-gray-900 shadow-sm">
              How much do your services cost?
              <span className="h-8 w-8">
                <svg
                  // dataSlot="icon"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="#f00"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="container px-12 pb-52 pt-32">
        <div className="relative flex h-64 w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl bg-red-600">
          <img
            src="/assets/cta.png"
            alt="Contact background"
            className="absolute z-0 aspect-auto h-full w-full object-cover opacity-10"
          />
          <h1 className="z-10 text-5xl font-bold text-gray-100">
            Reach out to us Today!
          </h1>

          <button className="relative flex items-center gap-2 rounded-full bg-gray-950 py-3 pl-20 pr-8 text-xl font-medium text-red-50">
            <span className="absolute left-0 flex h-16 w-16 rounded-full border-4 border-gray-950 bg-gray-50 p-4 transition-all hover:border-8 active:border-4">
              <svg
                fill="#000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                />
              </svg>
            </span>
            Contact Us
          </button>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
