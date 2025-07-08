"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menus = [
    { name: "Our Services", href: "/services" },
    { name: "How it works", href: "/how-it-works" },
    { name: "About Us", href: "/about" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="w-full fixed z-50 bg-background shadow-md">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Logo.png"
            alt="Medukul Logo"
            width={120}
            height={40}
          />
        </Link>
        <ul className="flex space-x-8 text-textColor font-medium">
          {menus.map((menu, index) => (
            <li key={index} className="group relative">
              <Link
                href={menu.href}
                className="flex items-center hover:text-hover transition-colors"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/get-started-with-us">
          <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-hover transition-colors">
            Get Started with Us
          </button>
        </Link>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Logo.png"
            alt="Medukul Logo"
            width={100}
            height={35}
          />
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-textColor text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? <IoIosClose /> : <LuMenu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-background w-full h-screen fixed top-0 left-0 px-6 py-4">
          <div className="flex justify-between items-center">
            <Image
              src="/assets/Logo.png"
              alt="Medukul Logo"
              width={100}
              height={35}
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-textColor text-2xl focus:outline-none"
            >
              <IoIosClose />
            </button>
          </div>
          <ul className="mt-8 space-y-6 text-textColor font-medium">
            {menus.map((menu, index) => (
              <li key={index} className="group relative">
                <Link
                  href={menu.href}
                  className="flex items-center justify-between w-full hover:text-hover transition-colors"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/get-started-with-us">
            <button className="bg-primary text-white px-6 py-2 rounded-lg mt-6 w-full shadow-md hover:bg-hover transition-colors">
              Get Started with Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
