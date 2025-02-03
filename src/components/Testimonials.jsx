import React from "react";

const Testimonials = () => {
  return (
    <div className="flex h-fit w-full items-center justify-center bg-[#1b0000] py-12">
      <div className="container flex h-full flex-col lg:flex-row">
        <div className="flex h-full flex-col gap-6 p-8 lg:w-2/5">
          {/* Title */}
          <div className="flex items-center gap-4">
            <img
              src="/assets/star.png"
              alt="Star"
              className="h-8 md:h-12 md:w-12"
            />
            <img
              src="/assets/star.png"
              alt="Star"
              className="h-8 md:h-12 md:w-12"
            />
            <img
              src="/assets/star.png"
              alt="Star"
              className="h-8 md:h-12 md:w-12"
            />
            <img
              src="/assets/star.png"
              alt="Star"
              className="h-8 md:h-12 md:w-12"
            />
            <img
              src="/assets/star.png"
              alt="Star"
              className="h-8 md:h-12 md:w-12"
            />
          </div>
          <h1 className="text-2xl font-bold text-red-500 md:text-6xl">
            See how our clients review about our services.
          </h1>
        </div>
        <div className="grid h-full gap-16 p-10 md:grid-cols-2 lg:w-3/5">
          <div className="flex h-full w-full flex-col justify-between gap-4">
            {/* img */}
            <img
              src="/assets/user1.jpg"
              alt="Testimonial image"
              className="aspect-square h-12 w-12 rounded-full md:h-16 md:w-16"
            />
            {/* about */}
            <p className="leading-normal text-green-100 md:text-lg md:leading-8">
              Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi
              lacus sed viverra tellus in hac habitasse platea dictumst
              vestibulum.
            </p>
            {/* fullname */}
            <span className="text-sm text-red-600 md:text-base">
              - Lee Sims
            </span>
          </div>
          <div className="flex h-full w-full flex-col justify-between gap-4">
            {/* img */}
            <img
              src="/assets/user2.jpg"
              alt="Testimonial image"
              className="aspect-square h-12 w-12 rounded-full md:h-16 md:w-16"
            />
            {/* about */}
            <p className="leading-normal text-green-100 md:text-lg md:leading-8">
              Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi
              lacus sed viverra tellus in hac habitasse platea dictumst
              vestibulum.
            </p>
            {/* fullname */}
            <span className="text-sm text-red-600 md:text-base">
              - Lee Sims
            </span>
          </div>
          <div className="flex h-full w-full flex-col justify-between gap-4">
            {/* img */}
            <img
              src="/assets/user3.jpg"
              alt="Testimonial image"
              className="aspect-square h-12 w-12 rounded-full md:h-16 md:w-16"
            />
            {/* about */}
            <p className="leading-normal text-green-100 md:text-lg md:leading-8">
              Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi
              lacus sed viverra tellus in hac habitasse platea dictumst
              vestibulum.
            </p>
            {/* fullname */}
            <span className="text-sm text-red-600 md:text-base">
              - Lee Sims
            </span>
          </div>
          <div className="flex h-full w-full flex-col justify-between gap-4">
            {/* img */}
            <img
              src="/assets/user4.jpg"
              alt="Testimonial image"
              className="aspect-square h-12 w-12 rounded-full md:h-16 md:w-16"
            />
            {/* about */}
            <p className="leading-normal text-green-100 md:text-lg md:leading-8">
              Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi
              lacus sed viverra tellus in hac habitasse platea dictumst
              vestibulum.
            </p>
            {/* fullname */}
            <span className="text-sm text-red-600 md:text-base">
              - Lee Sims
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
