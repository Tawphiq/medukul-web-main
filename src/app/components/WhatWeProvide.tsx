import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

// data for the cards
const cardData = [
  {
    icon: "/home-assets/asset-1.png",
    topic: "Seamless Health Management",
    description:
      "You can say goodbye to long wait times, crowded waiting rooms, and inconvenient appointments.",
  },
  {
    icon: "/home-assets/asset-2.png",
    topic: "Call or chat verified Doctors",
    description:
      "With Medukul, you can connect instantly with licensed and verified doctors via call or chat for expert consultations. Your health, just a tap away",
  },
  {
    icon: "/home-assets/asset-3.png",
    topic: "Secure and Confidential",
    description:
      "Experience healthcare that's as secure and confidential as it is convenient. Your well-being, our priority. ",
  },
  {
    icon: "/home-assets/asset-4.png",
    topic: "Pharmacy on the go",
    description:
      "Stay healthy on the move with our Pharmacy On-the-Go! Access medications and expert advice anytime, anywhere. Your health, your convenience.",
  },
  {
    icon: "/home-assets/asset-5.png",
    topic: "24/7 Support",
    description:
      "Round-the-clock care, wherever you are, anytime. Experience peace of mind with our 24/7 telehealth support.",
  },
  {
    icon: "/home-assets/asset-6.png",
    topic: "Medukul Health Plan for you",
    description:
      "Stay ahead of your health journey with our all-in-one health plan and tracker. Seamlessly monitor your progress and connect with healthcare experts anytime, anywhere.",
  },
];

const WhatWeProvide: React.FC = () => {
  return (
    <section className="py-24 px-8 md:px-20">
      <h2 className="md:text-4xl lg:text-5xl text-3xl font-semibold text-center mb-12 md:mb-20">
        What we provide you
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <Fade key={index} delay={index * 100}>
            <div className="bg-box rounded-lg shadow-lg py-10 px-12 md:px-6 md:py-12 flex flex-row  md:flex-col justify-center items-start md:items-center space-x-6 md:space-y-4 md:h-[380px]">
              <div className="text-4xl">
                <Image
                  src={card.icon}
                  alt={card.topic}
                  width={100}
                  height={100}
                  className="md:w-32 w-40"
                />
              </div>
              <div className="flex flex-col md:items-center md:space-y-4">
                <h3 className="text-xl font-semibold md:text-center md:mb-4 mb-2 max-w-xs">
                  {card.topic}
                </h3>
                <p className="text-gray-600 md:text-center">
                  {card.description}
                </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default WhatWeProvide;
