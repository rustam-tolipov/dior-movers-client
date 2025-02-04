import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";

const Hero = () => (
  <div className="flex w-full flex-col items-center bg-red-600 xl:h-fit lg:h-screen">
    <Navbar />
    <Main />
  </div>
);

export default Hero;
