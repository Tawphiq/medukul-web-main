"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

interface Achievement {
  text: string;
}

const achievements: Achievement[] = [
  { text: "10,000+ users served" },
  { text: "500+ verified doctors" },
  { text: "24/7 customer support" },
  { text: "High user satisfaction" },
  { text: "Rated #1 in telemedicine" },
];

const Achievements = () => {
  return (
    <section className="flex flex-col justify-center items-center py-24 px-8 md:px-20 gap-8">
      <Fade direction="down">
        <div className="flex md:justify-normal justify-center items-center gap-4 mb-6">
          <h2 className="text-primary md:text-4xl lg:text-5xl text-3xl font-semibold text-center">
            Our Achievements
          </h2>
        </div>
      </Fade>

      {/* Content */}
      <div className="overflow-hidden">
        <div
          className="flex md:space-x-8 md:space-y-0 space-y-4 md:animate-slide whitespace-nowrap"
          style={{ animation: "scroll-left 20s linear infinite" }}
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-box py-4 px-6 rounded-lg shadow-md text-center flex-shrink-0 w-60 sm:w-full"
            >
              {achievement.text}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @media (max-width: 768px) {
          .animate-slide {
            animation: none; /* Disable animation on mobile */
          }
          .flex {
            flex-wrap: wrap; /* Allow content to wrap on small screens */
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Achievements;
