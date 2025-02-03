import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-20 lg:px-12 lg:pb-52 lg:pt-32">
      <div className="relative flex w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl bg-red-600 py-6 md:h-64 md:py-0">
        <img
          src="/assets/cta.png"
          alt="Contact background"
          className="absolute z-0 aspect-auto h-full w-full object-cover opacity-10"
        />
        <h1 className="z-10 text-2xl font-bold text-gray-100 md:text-4xl lg:text-5xl">
          Reach out to us Today!
        </h1>

        <button className="relative flex items-center gap-2 rounded-full bg-gray-950 py-2 pl-16 md:pl-20 pr-6 md:pr-8 text-lg font-medium text-red-50 md:py-3 lg:text-xl">
          <span className="absolute left-0 flex h-12 w-12 rounded-full border-4 border-gray-950 bg-gray-50 p-2 transition-all hover:border-8 active:border-4 md:h-16 md:w-16 md:p-4">
            <svg
              fill="#000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              height="100%"
              width="100%"
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
  );
};

export default Contact;
