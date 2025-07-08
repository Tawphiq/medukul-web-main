import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const TeleHealth: React.FC = () => {
  return (
    <section className="flex flex-col items-center md:py-24 px-8 md:px-20">
      <h2 className="md:text-4xl lg:text-5xl text-3xl font-semibold text-center mb-12 md:mb-20 md:max-w-2xl">
        Join the TeleHealth Revolution Today!
      </h2>

      <div className="flex md:flex-row flex-col-reverse justify-center items-center gap-8">
        <Fade direction="left" duration={1200}>
          <p className="text-gray-600 md:text-left text-center md:text-lg max-w-sm">
            Experience the future of healthcare with Medukul. Join thousands of
            satisfied users who have embraced telemedicine for its convenience,
            accessibility, and quality of care. Your journey to better health
            starts here!
          </p>
        </Fade>
        <div className="relative p-4">
          <Fade direction="right" duration={1200} className="relative z-50">
            <Image
              src="/assets/telehealth-app.png"
              alt="Telehealth App"
              width={400}
              height={400}
              className="mx-auto md:w-3/4 w-full z-50 md:*ml-0 ml-6"
            />
          </Fade>
          <div className="absolute md:bottom-0 md:*left-16 -bottom-4 left-0">
            <Fade direction="right" duration={1400}>
              <p className="bg-primary w-40 h-40"></p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeleHealth;
