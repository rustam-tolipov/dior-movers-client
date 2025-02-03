import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="relative flex w-dvw flex-col items-center">
      <Navbar />
      {/* Cover image */}
      <div className="relative flex h-[70dvh] w-full items-center justify-center p-8">
        <img
          src="https://images.unsplash.com/photo-1601654717399-7486d5ebedca?q=80&w=2876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cover image"
          className="absolute left-0 top-0 z-0 h-full w-full object-cover brightness-50"
        />

        <div className="container z-10 flex h-full w-full items-center justify-center">
          <h1 className="text-6xl font-semibold text-gray-50 drop-shadow-xl">
            About Us
          </h1>
        </div>
      </div>

      {/* ABOUT US */}
      <div className="container flex h-screen w-full py-32 pb-52">
        <div className="flex h-full w-3/5 flex-col">
          {/* subtitle */}
          <span className="text-md uppercase text-red-600">Know Us Better</span>
          {/* title */}
          <h2 className="pb-6 text-2xl font-semibold text-gray-900">
            We're hyper-focused on <br /> what we do best
          </h2>
          {/* paragraph */}
          <p className="text-md w-4/5 pb-4 text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            blanditiis possimus quia distinctio labore architecto. Vel saepe et
            culpa eum sit natus accusantium amet ullam laboriosam eos, dolorem
            animi qui. Opsum dolor sit, amet consectetur adipisicing elit.
            Sapiente officia id ipsam error beatae libero, ipsum corrupti dolor
            deserunt ullam. Ratione iure dolorum quae amet quas eos rem
            recusandae esse.
          </p>
          <p className="w-4/5 pb-10 text-sm text-gray-600">
            Vel saepe et culpa eum sit natus accusantium amet ullam laboriosam
            eos, dolorem animi qui. Opsum dolor sit, amet consectetur
            adipisicing elit. Sapiente officia id ipsam error beatae libero,
            ipsum corrupti dolor deserunt ullam. Ratione iure dolorum quae amet
            quas eos rem recusandae esse.
          </p>
          {/* button */}
          <button className="text-md w-fit rounded-full bg-gray-950 px-6 py-2 font-medium text-gray-100">
            Contact Us
          </button>
        </div>
        <div className="flex h-fit w-4/12 flex-col gap-8 border p-8">
          <div className="w-12/12 h-full">
            <img
              src="/assets/feature-1.png"
              alt="Reason"
              className="mb-4 h-12 w-fit"
            />
            <h3 className="text-md pb-1 font-medium">Our Mission</h3>
            <p className="text-justify text-sm leading-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              iure iusto pariatur, ab dolorum natus officiis nobis nesciunt
              dolore magni voluptas, iste neque corporis excepturi ratione
              facilis fugiat at aspernatur?
            </p>
          </div>
          <span className="h-[2px] w-full bg-gray-200"></span>
          <div className="w-12/12 h-full">
            <img
              src="/assets/feature-3.png"
              alt="Reason"
              className="mb-4 h-12 w-fit"
            />
            <h3 className="text-md pb-1 font-medium">Our Vision</h3>
            <p className="text-justify text-sm leading-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              iure iusto pariatur, ab dolorum natus officiis nobis nesciunt
              dolore magni voluptas, iste neque corporis excepturi ratione
              facilis fugiat at aspernatur?
            </p>
          </div>
        </div>
      </div>

      {/* MORE */}
      <div className="container pb-52">
        <div className="relative flex h-64 w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl bg-stone-950">
          <img
            src="/assets/cta.png"
            alt="Contact background"
            className="absolute z-0 aspect-auto h-full w-full object-cover opacity-10"
          />

          <h1 className="text-2xl text-gray-50">A Company Evolution</h1>

          <div className="flex w-4/5 justify-between">
            <div className="flex flex-col items-center justify-between">
              <span className="mb-4 h-12 w-12 rounded-full bg-gray-50"></span>
              <span className="text-md text-gray-50">2015</span>
              <p className="text-sm text-gray-50">Company Founded</p>
            </div>

            <span className="mt-6 h-1 w-32 rounded-full bg-gray-400"></span>

            <div className="flex flex-col items-center justify-between">
              <span className="mb-4 h-12 w-12 rounded-full bg-gray-50"></span>
              <span className="text-md text-gray-50">2017</span>
              <p className="text-sm text-gray-50">First Major Project</p>
            </div>
            <span className="mt-6 h-1 w-32 rounded-full bg-gray-400"></span>

            <div className="flex flex-col items-center justify-between">
              <span className="mb-4 h-12 w-12 rounded-full bg-gray-50"></span>
              <span className="text-md text-gray-50">2019</span>
              <p className="text-sm text-gray-50">Expansion to New Markets</p>
            </div>
            <span className="mt-6 h-1 w-32 rounded-full bg-gray-400"></span>

            <div className="flex flex-col items-center justify-between">
              <span className="mb-4 h-12 w-12 rounded-full bg-gray-50"></span>
              <span className="text-md text-gray-50">2021</span>
              <p className="text-sm text-gray-50">Awarded Best Startup</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
