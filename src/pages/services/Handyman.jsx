import React from "react";

const Handyman = () => {
  return (
    <div className="container flex h-fit w-full flex-col items-center gap-4 px-8 pt-20 md:gap-8 md:px-4">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium uppercase text-red-600 md:text-lg">
          Services
        </p>
        <h1 className="text-center text-lg font-bold text-gray-800 md:text-2xl">
          Professional Handyman Services
        </h1>
      </div>

      <div className="flex flex-col gap-4 md:w-3/5">
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Keeping your property in top condition is essential, whether it's your
          home or office. Our professional handyman services ensure that all
          your repair and maintenance needs are met with precision and care. We
          offer a wide range of handyman solutions tailored to your specific
          requirements, providing you with peace of mind and a well-maintained
          environment.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 md:w-3/5">
        <h2 className="text-base font-bold text-gray-800 md:text-lg">
          Comprehensive and Reliable Handyman Services
        </h2>

        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Our team of experienced handymen is dedicated to delivering top-notch
          services. We use high-quality tools and materials to ensure that every
          job is completed to the highest standards. From minor repairs to major
          installations, we offer a range of services to meet your needs.
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          We understand that every property is unique, which is why we offer
          customizable handyman plans. Whether you need regular maintenance or a
          one-time repair, we can create a schedule that works for you. Our goal
          is to provide you with a well-maintained and comfortable environment
          without any hassle.
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Getting started is easy! Fill out our quick and simple form to receive
          a free, no-obligation quote for your handyman needs. Our friendly team
          will assess your requirements and provide a personalized estimate. Let
          us take care of the repairs while you focus on what matters most.
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Handyman services are more than just fixing things—it’s about
          maintaining a safe and functional space. That’s why we go above and
          beyond to ensure that your property is not only well-maintained but
          also safe and welcoming. With years of experience, a highly trained
          team, and a commitment to customer satisfaction, we guarantee
          exceptional results.
        </p>
        <p className="text-justify text-sm text-gray-800 md:text-lg">
          Our services cover both residential and commercial properties, and we
          offer additional support such as furniture assembly, painting, and
          electrical work. Whether you need a small repair or a major
          renovation, we tailor our services to fit your unique needs. We also
          provide transparent pricing, so you know exactly what to expect—no
          hidden fees, just reliable service you can trust.
        </p>
      </div>
    </div>
  );
};

export default Handyman;
