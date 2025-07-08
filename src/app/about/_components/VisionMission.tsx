import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const VisionMission = () => {
  return (
    <section className="flex md:flex-row flex-col justify-center items-center py-24 px-8 md:px-20 gap-8">
      {/* Vision */}
      <div>
        <Fade direction="left">
          <div className="flex md:justify-normal justify-center items-center gap-4 mb-6">
            <h2 className="text-primary md:text-4xl lg:text-5xl text-3xl font-semibold text-center">
              Our Vision
            </h2>
            <Image
              src="/assets/vision.svg"
              alt="Vision"
              width={32}
              height={32}
              className="md:w-16"
            />
          </div>
          <p className="md:text-left text-center text-gray-600 md:text-lg max-w-lg">
            Revolutionizing the landscape of healthcare delivery and positioning
            as the reliable go-to for affordable, quality, and innovative
            healthcare technological solutions.
          </p>
        </Fade>
      </div>
      {/* Mission */}
      <div>
        <Fade direction="right">
          <div className="flex md:justify-normal justify-center place-items-center gap-4 mb-2">
            <h2 className="text-primary md:text-4xl md:mt-4 mt-6 lg:text-5xl text-3xl font-semibold text-center mb-6">
              Our Mission
            </h2>
            <Image
              src="/assets/mission.svg"
              alt="Mission"
              width={32}
              height={32}
              className="md:w-16"
            />
          </div>
          <p className="md:text-left text-center text-gray-600 md:text-lg max-w-lg">
            To deliver innovative healthcare solutions prioritizing
            accessibility, quality, affordability, and bridging the gap between
            patients and HCPs whilst making premium medical care available to
            all.
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default VisionMission;
