"use client";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { BiSolidDownArrow } from "react-icons/bi";
import { RiArrowDropLeftFill, RiArrowDropRightFill } from "react-icons/ri";

const testimonials = [
  {
    name: "Okafor Ijeoma",
    comment: "Join thousands of satisfied users...",
    image: "/customer/Ellipse-1.png",
  },
  {
    name: "John Doe",
    comment: "Telemedicine has changed the way...",
    image: "/customer/Ellipse-2.png",
  },
  {
    name: "Jane Smith",
    comment: "I love how easy it is to connect...",
    image: "/customer/Ellipse-3.png",
  },
  {
    name: "Paul Johnson",
    comment: "Fantastic service! It has made healthcare...",
    image: "/customer/Ellipse-4.png",
  },
  {
    name: "Nkechi Adeola",
    comment: "I can't imagine going back...",
    image: "/customer/Ellipse-5.png",
  },
  {
    name: "Emeka Obi",
    comment: "The convenience of telemedicine is unmatched...",
    image: "/customer/Ellipse-6.png",
  },
  {
    name: "Chinwe Okoro",
    comment: "This platform has made healthcare seamless...",
    image: "/customer/Ellipse-7.png",
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Set initial window width and add resize listener
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', updateWindowWidth);
      
      return () => {
        window.removeEventListener('resize', updateWindowWidth);
      };
    }
  }, []);

  const getVisibleTestimonials = () => {
    // Use windowWidth state for proper responsive behavior
    const visibleCount = windowWidth >= 768 ? 7 : 3; // Show 7 on desktop, 3 on mobile
    const half = Math.floor(visibleCount / 2);
    const start =
      (currentIndex - half + testimonials.length) % testimonials.length;
    return Array.from(
      { length: visibleCount },
      (_, i) => testimonials[(start + i) % testimonials.length]
    );
  };

  return (
    <section className="flex flex-col items-center py-24 px-8 md:px-20">
      <h2 className="md:text-4xl lg:text-4xl text-xl font-semibold text-center mb-12 md:mb-20 md:max-w-2xl">
        What our customers are saying
      </h2>

      <div className="w-full flex justify-center bg-box py-12 px-8 rounded">
        <div className="relative w-full max-w-4xl">
          {/* Comment Section */}
          <div className="flex justify-center items-center text-center px-4 mt-8">
            <Fade key={currentIndex}>
              <p className="text-lg md:text-xl italic max-w-md">
                &quot;{testimonials[currentIndex].comment}&quot;
              </p>
            </Fade>
          </div>

          <div className="flex justify-center items-center">
            <BiSolidDownArrow
              size={64}
              className="text-primary md:w-16 md:h-16"
            />
          </div>

          {/* Profile Images Slider */}
          <div className="relative flex justify-center items-center mt-8">
            <div className="flex justify-center items-center gap-4 transition-all ease-in-out duration-500">
              {getVisibleTestimonials().map((testimonial, index) => {
                const isCenter =
                  index === Math.floor(getVisibleTestimonials().length / 2);
                return (
                  <div
                    key={index}
                    className={`flex-shrink-0 rounded-full overflow-hidden transition-transform duration-500 ${
                      isCenter
                        ? "w-32 h-32 md:w-48 md:h-48 border-4 border-primary"
                        : "w-16 h-16 md:w-20 md:h-20 opacity-50"
                    }`}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={128}
                      height={128}
                      className="object-cover w-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Name */}
          <div className="text-center px-4 py-4">
            <Fade key={currentIndex}>
              <div className="flex justify-center items-center">
                <RiArrowDropLeftFill
                  className="text-primary cursor-pointer"
                  size={64}
                  onClick={handlePrev}
                />
                <h3 className="text-lg font-bold">
                  {testimonials[currentIndex].name}
                </h3>
                <RiArrowDropRightFill
                  className="text-primary cursor-pointer"
                  size={64}
                  onClick={handleNext}
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
