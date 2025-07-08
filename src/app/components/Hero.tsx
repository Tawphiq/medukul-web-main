import React from "react";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen md:h-[600px]"
      style={{ backgroundImage: "url('/assets/heroBackground.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="h-full flex md:items-center items-start justify-between">
        <div></div>
        <div className="relative z-10 flex flex-col justify-center h-full text-white px-4 md:items-start md:justify-center md:px-16 lg:px-24 mr-8">
          <Fade direction="left" duration={1200}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-xs lg:max-w-4xl text-left">
              Your Journey to <br /> Better Health Starts Here
            </h1>
          </Fade>
          <Fade direction="up" delay={500}>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
              <a
                href="#"
                className="bg-dark text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-dark/85 flex items-center"
              >
                <FaApple size={48} className="mr-2" />
                <p className="text-xs font-light uppercase">
                  Download on the <br />
                  <span className="text-lg">App Store</span>
                </p>
              </a>
              <a
                href="#"
                className="bg-dark text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-dark/85 flex items-center"
              >
                <Image
                  src="/assets/google-play.svg"
                  alt="Google Play"
                  width={48}
                  height={48}
                />
                <p className="text-xs font-light uppercase">
                  Get it on <br />
                  <span className="text-lg">Google Play</span>
                </p>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hero;
