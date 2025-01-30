import React from "react";

const Testimonials = () => {
  return (
    <div className="flex h-fit w-full items-center justify-center bg-[#1b0000] py-12">
      <div className="container flex h-full">
        <div className="flex h-full w-2/5 flex-col gap-6 p-8">
          {/* Title */}
          <div className="flex items-center gap-4">
            <img src="/assets/star.png" alt="Star" className="h-12 w-12" />
            <img src="/assets/star.png" alt="Star" className="h-12 w-12" />
            <img src="/assets/star.png" alt="Star" className="h-12 w-12" />
            <img src="/assets/star.png" alt="Star" className="h-12 w-12" />
            <img src="/assets/star.png" alt="Star" className="h-12 w-12" />
          </div>
          <h1 className="text-6xl font-bold text-red-500">
            See how our clients review about our services.
          </h1>
        </div>
        <div className="grid h-full w-3/5 grid-cols-2 gap-16 p-10">
          <div className="flex h-full w-full flex-col justify-between">
            {/* img */}
            <img
              src="/assets/user1.jpg"
              alt="Testimonial image"
              className="aspect-square h-16 w-16 rounded-full"
            />
            {/* about */}
            <p className="text-lg leading-8 text-green-100">
              Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi
              lacus sed viverra tellus in hac habitasse platea dictumst
              vestibulum.
            </p>
            {/* fullname */}
            <span className="text-red-600">- Lee Sims</span>
          </div>
          <div className="flex h-full w-full flex-col justify-between">
            {/* img */}
            <img
              src="/assets/user2.jpg"
              alt="Testimonial image"
              className="aspect-square h-16 w-16 rounded-full"
            />
            {/* about */}
            <p className="text-lg leading-8 text-green-100">
              Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi
              lacus sed viverra tellus in hac habitasse platea dictumst
              vestibulum.
            </p>
            {/* fullname */}
            <span className="text-red-600">- Lee Sims</span>
          </div>
          <div className="flex h-full w-full flex-col justify-between">
            {/* img */}
            <img
              src="/assets/user3.jpg"
              alt="Testimonial image"
              className="aspect-square h-16 w-16 rounded-full"
            />
            {/* about */}
            <p className="text-lg leading-8 text-green-100">
              Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi
              lacus sed viverra tellus in hac habitasse platea dictumst
              vestibulum.
            </p>
            {/* fullname */}
            <span className="text-red-600">- Lee Sims</span>
          </div>
          <div className="flex h-full w-full flex-col justify-between">
            {/* img */}
            <img
              src="/assets/user4.jpg"
              alt="Testimonial image"
              className="aspect-square h-16 w-16 rounded-full"
            />
            {/* about */}
            <p className="text-lg leading-8 text-green-100">
              Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi
              lacus sed viverra tellus in hac habitasse platea dictumst
              vestibulum.
            </p>
            {/* fullname */}
            <span className="text-red-600">- Lee Sims</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
