import React from "react";

import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Info from "../components/Info";
import Footer from "../components/Footer";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Contact from "../components/Contact";

const Landing = () => {
  return (
    <div className="max-w-dvw relative w-dvw flex-col items-center">
      {/* Hero */}
      <Hero />
      {/* Services */}
      <Services />
      {/* Testimonials */}
      <Testimonials />
      {/* Info */}

      <Info />
      {/* FAQ */}
      <FrequentlyAskedQuestions />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
