"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  comment: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Okoji Ijeoma",
    comment:
      "Join thousands of satisfied users who have embraced telemedicine for its convenience, accessibility, and quality of care. Your journey to better health starts here.",
    image: "/path/to/image1.jpg",
  },
  {
    name: "John Doe",
    comment:
      "Telemedicine has been a lifesaver for me and my family. The ease of access to top-notch healthcare professionals is unmatched.",
    image: "/path/to/image2.jpg",
  },
  {
    name: "Jane Smith",
    comment:
      "I appreciate the quick and reliable consultations. It has made healthcare more accessible to everyone in our community.",
    image: "/path/to/image3.jpg",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="flex flex-col items-center justify-center py-16 px-8 bg-light rounded-lg">
      {/* Comment */}
      <p className="text-center text-lg md:text-xl font-light italic max-w-2xl mb-6">
        {testimonials[currentIndex].comment}
      </p>

      {/* Profile Image */}
      <div className="flex items-center justify-center relative mb-4">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary">
          <Image
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
      </div>

      {/* Name and Navigation */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="text-primary text-2xl font-bold focus:outline-none"
          aria-label="Previous Testimonial"
        >
          &lt;
        </button>
        <h3 className="text-primary text-xl font-medium">
          {testimonials[currentIndex].name}
        </h3>
        <button
          onClick={handleNext}
          className="text-primary text-2xl font-bold focus:outline-none"
          aria-label="Next Testimonial"
        >
          &gt;
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2 mt-4">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
