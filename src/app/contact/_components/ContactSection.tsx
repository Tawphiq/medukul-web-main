"use client";

import Image from "next/image";
import React from "react";

const ContactSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-around items-start gap-12 py-16 px-8 md:px-20">
      {/* Left Section: Form and Text */}
      <div className="flex flex-col w-full md:w-1/2 gap-8">
        <div className="text-center md:text-left">
          <p className="md:text-lg max-w-md">
            Have questions or need support?
            <br />
            Our team is here to help! Reach out to us anytime for personalized
            assistance and expert advice. Connect with us today and experience
            seamless care.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="mb-2">
              Name*
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                className="bg-box p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
              />
              <input
                type="text"
                className="bg-box p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
              />
            </div>
          </div>

          {/* email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">
              Email Address*
            </label>
            <input
              type="email"
              className="bg-box p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
            />
          </div>

          {/* textarea */}
          <div className="flex flex-col">
            <label htmlFor="comments" className="mb-2">
              Comments
            </label>
            <textarea
              rows={5}
              className="bg-box p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            className=" bg-primary text-center text-white font-medium py-3 px-6 rounded-md hover:bg-primary/90 focus:outline-none focus:ring focus:ring-primary"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Section: Links */}
      <div className="flex flex-col w-full md:w-1/3 gap-6">
        <div className="flex items-start p-6 gap-4">
          <div className=" text-white px-4 rounded-full">
            <Image
              src="/assets/medical_services.svg"
              width={48}
              height={48}
              alt="medical_services"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">
              Learn more about our services
            </h3>
            <a
              href="#"
              className="px-4 py-3 border border-primary  rounded-lg font-medium hover:bg-primary/10"
            >
              Click Here
            </a>
          </div>
        </div>
        <div className="flex items-start p-6 gap-4">
          <div className=" text-white px-4 rounded-full">
            <Image
              src="/assets/quick_reference.svg"
              width={48}
              height={48}
              alt="quick_reference"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">
              Check out frequently asked questions
            </h3>
            <a
              href="#"
              className="px-4 py-3 border border-primary  rounded-lg font-medium hover:bg-primary/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
