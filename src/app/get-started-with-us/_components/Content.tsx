import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaApple } from "react-icons/fa";

const Content = () => {
  return (
    <section className="flex flex-col items-center gap-12 py-16 px-8 md:px-20">
      {/* header */}
      <Fade direction="down">
        <div className="flex flex-col items-center w-full md:gap-8 gap-4 mb-8">
          <h2 className=" md:text-4xl text-2xl font-semibold text-center">
            Ready to take control of your health?
          </h2>
          <p className="md:text-lg text-sm max-w-4xl">
            Get started with our Medukul app today! Experience affordable,
            convenient, accessible, and quality healthcare anytime, anywhere.
          </p>
        </div>
      </Fade>

      {/* download */}
      <div className="flex md:flex-row flex-col justify-between items-center gap-12">
        <Fade direction="left">
          <Image src="/assets/app.png" alt="app" width={300} height={300} />
        </Fade>
        <div className="flex flex-col items-start justify-center md:mt-8">
          <Fade direction="right">
            <p className="max-w-md text-[#23313F] md:text-left text-center text-base md:mb-8 mb-4">
              Sign up now and connect with top healthcare professionals anytime,
              anywhere. Your journey to better health begins here.
            </p>
            <div className="flex flex-row justify-center items-center space-x-4 mt-4">
              <a
                href="#"
                className="bg-dark text-white font-semibold py-3 px-4 rounded-lg shadow hover:bg-dark/85 flex items-center"
              >
                <FaApple
                  size={32} // Mobile size
                  className="mr-2 md:mr-4 md:!w-12 md:!h-12" // Desktop size
                />
                <p className="text-xs font-light uppercase">
                  Download on the <br />
                  <span className="md:text-lg text-sm font-medium">
                    App Store
                  </span>
                </p>
              </a>
              <a
                href="#"
                className="bg-dark text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-dark/85 flex items-center"
              >
                <Image
                  src="/assets/google-play.svg"
                  alt="Google Play"
                  width={36} // Mobile size
                  height={36} // Mobile size
                  className="mr-2 md:w-12 md:h-12" // Desktop size
                />
                <p className="text-xs font-light uppercase">
                  Get it on <br />
                  <span className="md:text-lg text-sm font-medium">
                    Google Play
                  </span>
                </p>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Content;
