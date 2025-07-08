"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { FaApple } from "react-icons/fa";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Download Medukul App",
    description:
      "Start your journey by downloading our app from the App Store or Google Play. It's quick and easy!",
  },
  {
    number: 2,
    title: "Register on our platform",
    description:
      "Create your account by providing basic information. Our secure registration process ensures your data is protected.",
  },
  {
    number: 3,
    title: "Book An Appointment",
    description:
      "Once registered, browse through our network of healthcare professionals and choose a convenient time for your appointment. Booking is simple and hassle-free.",
  },
  {
    number: 4,
    title: "Speak to a Doctor",
    description:
      "At the time of your appointment, log in to Medukul and connect with your doctor through a secure video or voice call. Receive expert medical advice in the comfort of your home.",
  },
];

const StepsComponent: React.FC = () => {
  return (
    <section className="md:py-20 py-10 px-8 md:px-20">
      <div className="max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <Fade
            key={step.number}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <div className="flex flex-col md:flex-row items-center md:mb-12 mb-4">
              {/* box */}
              <div
                className={`text-center md:text-left ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                } w-full bg-box md:w-1/2 px-6 py-8 shadow-md`}
              >
                <h2 className="text-[#026873] text-3xl font-bold mb-4">
                  {step.number}
                </h2>
                <h3 className="text-[#23313F] text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-[#23313F] text-base">{step.description}</p>
              </div>

              {/* arrow */}
              <div
                className={`flex justify-center items-center w-1/4 md:pt-40 pt-4 md:w-1/2 ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <Image
                  src={`/assets/step-${step.number}.svg`}
                  alt={`Step ${step.number}`}
                  width={150}
                  height={150}
                  className=""
                />
              </div>
            </div>
          </Fade>
        ))}
        <div className="flex flex-col items-start justify-center md:mt-8">
          <Fade direction="left">
            <p className="max-w-md text-[#23313F] text-base md:mb-8 mb-4">
              Your journey to better health is just a click away. Sign up now
              and connect with top healthcare professionals anytime, anywhere.
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

export default StepsComponent;
