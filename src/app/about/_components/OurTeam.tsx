/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

// data for the team Data
const teamData = [
  {
    image: "/profile/asset-1.png",
    name: "Ugbechie Patrick",
    role: "Chief Executive Officer",
  },
  {
    image: "/profile/asset-2.png",
    name: "Michael Areola",
    role: "Chief Operations Officer",
  },
  {
    image: "/profile/asset-3.png",
    name: "Stephen Obialor",
    role: "Chief Technology Officer",
  },
  {
    image: "/profile/asset-4.png",
    name: "Naod Ararsa",
    role: "Lead, Backend Engineer",
  },
  {
    image: "/profile/asset-5.png",
    name: "Mohammed Tawfiq",
    role: "Lead, Frontend Engineer",
  },
  {
    image: "/profile/asset-6.png",
    name: "Okonoboh Theophilus",
    role: "Lead, UI/UX Designer",
  },
  {
    image: "/profile/asset-7.png",
    name: "Nnachi Kingsley",
    role: "Frontend Engineer",
  },
  {
    image: "/profile/asset-8.png",
    name: "Emmanuel Benson",
    role: "UI/UX Designer",
  },
  {
    image: "/profile/asset-9.png",
    name: "Ezeike Ifedubem",
    role: "UI/UX Designer",
  },
];

const OurTeam = () => {
  return (
    <section className="flex flex-col items-center py-24 px-8 md:px-20">
      <Fade direction="down">
        <h2 className="text-primary md:text-4xl lg:text-5xl text-3xl font-semibold text-center mb-6">
          Our Team
        </h2>
        <p className="text-center text-gray-600 md:text-lg max-w-4xl mb-12 md:mb-20">
          At Medukul, we're more than just a team; we're a passionate family of
          healthcare professionals, technologists, and innovators dedicated to
          revolutionizing the way healthcare is delivered. Get to know the faces
          behind the screen who are committed to bringing accessible, quality
          care to your fingertips:
        </p>
      </Fade>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamData.map((card, index) => (
          <Fade direction={index % 2 === 0 ? "left" : "right"} key={index}>
            <div className="w-full bg-box rounded-lg shadow-lg md:py-10 py-6 px-6 flex flex-col justify-center items-center space-y-4">
              <div className="w-full md:p-6">
                <Image
                  src={card.image}
                  alt={card.name}
                  width={1000}
                  height={1000}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="md:text-xl text-sm font-semibold text-center max-w-xs">
                  {card.name}
                </h3>
                <p className="md:text-lg text-xs text-gray-600 text-center">
                  {card.role}
                </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
