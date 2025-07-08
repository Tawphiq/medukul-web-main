import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Fade } from "react-awesome-reveal";
import StepsComponent from "./_components/StepsComponent";
import TestimonialsSlider from "../components/TestimonialsSlider";

const page = () => {
  return (
    <div className="bg-background">
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      {/* Content */}
      <div className="lg:pt-20 pt-16">
        <div className="relative bg-primary bg-cover bg-center h-[300px] md:h-[400px]">
          <div className="flex flex-col justify-center items-center h-full text-white px-4 md:px-16 lg:px-24 mr-8">
            <Fade direction="down" duration={1200}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-xs lg:max-w-4xl text-left">
                How It Works
              </h1>
            </Fade>
          </div>
        </div>
        {/* Content outline */}
        <div>
          <StepsComponent />
          {/* TestimonialsSlider */}
          <TestimonialsSlider />
        </div>
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
