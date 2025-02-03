import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";

const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center bg-red-600 lg:h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Main */}
      <Main />
    </div>
  );
};

export default Hero;
