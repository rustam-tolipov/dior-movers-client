import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";

const Hero = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-red-600">
      {/* Navbar */}
      <Navbar />
      {/* Main */}
      <Main />
    </div>
  );
};

export default Hero;
