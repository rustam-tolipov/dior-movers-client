import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="relative flex w-dvw flex-col items-center bg-gray-100">
      <Navbar />
      {/* Cover image */}
      <div className="relative flex h-32 lg:h-64 w-full items-center justify-center p-8">
        <img
          src="/assets/about-page-bg.webp"
          alt="Cover image"
          className="absolute left-0 top-0 z-0 h-full w-full object-cover brightness-50"
        />

        <div className="container z-10 flex h-full w-full items-center justify-center">
          <h1 className="text-3xl font-semibold text-gray-50 drop-shadow-xl lg:text-6xl">
            Contact Us
          </h1>
        </div>
      </div>

      {/* CONTACT US */}
      <div className="container flex w-full flex-col gap-8 px-8 py-12 md:min-h-screen md:flex-row md:justify-center md:gap-0 md:pb-52 md:pt-32">
        <div className="flex h-full flex-col md:w-3/5">
          <span className="text-md uppercase text-red-600">Get in Touch</span>
          <h2 className="pb-6 text-2xl font-semibold text-gray-900">
            We're here to help you
          </h2>
          <p className="text-md w-4/5 pb-4 text-gray-700">
            If you have any questions or need further information, please feel
            free to contact us. Our team is always ready to assist you with your
            moving needs.
          </p>
          <p className="w-4/5 pb-10 text-sm text-gray-600">
            You can reach us via phone, email, or by filling out the contact
            form. We look forward to hearing from you and making your move as
            smooth as possible.
          </p>
        </div>
        <div className="flex h-fit flex-col md:w-6/12">
          <form
            action=""
            className="flex h-fit flex-col gap-4 rounded-lg bg-gray-50 p-6 shadow-md md:w-4/5 md:gap-6"
          >
            <div className="">
              <label className="block text-sm text-gray-700" htmlFor="name">
                Full Name
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-sm leading-tight text-gray-700 placeholder:font-light focus:outline-none"
                id="name"
                type="text"
                placeholder="Enter your full name"
              />
            </div>
            <div className="">
              <label className="block text-sm text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-sm leading-tight text-gray-700 placeholder:font-light focus:outline-none"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="">
              <label className="block text-sm text-gray-700" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-sm leading-tight text-gray-700 placeholder:font-light focus:outline-none"
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="">
              <label className="block text-sm text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-sm leading-tight text-gray-700 placeholder:font-light focus:outline-none"
                id="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="focus:shadow-outline rounded-full bg-red-500 px-6 py-2 font-normal text-white hover:bg-blue-700 focus:outline-none md:px-8"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

{
  /* <div className="container mx-auto px-4 py-20 lg:px-12 lg:pb-52 lg:pt-32">
  <div className="relative flex h-[20dvh] w-full items-center justify-center p-8">
    <img
      src="/assets/about-page-bg.webp"
      alt="Cover image"
      className="absolute left-0 top-0 z-0 h-full w-full object-cover brightness-50"
    />
    <div className="container z-10 flex h-full w-full items-center justify-center">
      <h1 className="text-6xl font-semibold text-gray-50 drop-shadow-xl">
        Contact Us
      </h1>
    </div>
  </div>

  <div className="container flex w-full flex-col gap-8 p-4 py-32 md:min-h-screen md:flex-row md:justify-center md:gap-0 md:pb-52">
    <div className="flex h-full flex-col md:w-3/5">
      <span className="text-md uppercase text-red-600">Get in Touch</span>
      <h2 className="pb-6 text-2xl font-semibold text-gray-900">
        We're here to help you
      </h2>
      <p className="text-md w-4/5 pb-4 text-gray-700">
        If you have any questions or need further information, please feel free
        to contact us. Our team is always ready to assist you with your moving
        needs.
      </p>
      <p className="w-4/5 pb-10 text-sm text-gray-600">
        You can reach us via phone, email, or by filling out the contact form.
        We look forward to hearing from you and making your move as smooth as
        possible.
      </p>
    </div>
    <div className="flex h-fit flex-col md:w-4/12">
      <form
        action=""
        className="flex h-fit flex-col gap-4 rounded-lg bg-gray-50 p-6 shadow-md md:w-4/5 md:gap-6"
      >
        <div className="">
          <label className="block text-sm text-gray-700" htmlFor="name">
            Full Name
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-sm leading-tight text-gray-700 placeholder:font-light focus:outline-none"
            id="name"
            type="text"
            placeholder="Enter your full name"
          />
        </div>
        <div className="">
          <label className="block text-sm text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-sm leading-tight text-gray-700 placeholder:font-light focus:outline-none"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="">
          <label className="block text-sm text-gray-700" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-sm leading-tight text-gray-700 placeholder:font-light focus:outline-none"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="">
          <label className="block text-sm text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-sm leading-tight text-gray-700 placeholder:font-light focus:outline-none"
            id="message"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded-full bg-red-500 px-6 py-2 font-normal text-white hover:bg-blue-700 focus:outline-none md:px-8"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>; */
}
