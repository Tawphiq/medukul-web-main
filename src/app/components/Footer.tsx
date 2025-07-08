import React from "react";
import Image from "next/image";
import {
  RiTwitterXLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiYoutubeFill,
  RiLinkedinFill,
  RiFacebookFill,
} from "react-icons/ri";

const Footer = () => {
  // Dynamic menus with links
  const menus = [
    { name: "Our Services", href: "#" },
    { name: "Our Company", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-primary text-white py-12 px-20">
      {/* logo */}
      <div className="mb-4">
        <Image
          src="/assets/WhiteLogo.png"
          alt="Medukul Logo"
          width={120}
          height={40}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto flex flex-col gap-8 md:flex-row md:justify-between md:items-start md:space--0">
        <div className="">
          {/* Logo and Description */}
          <div>
            <p className="text-sm leading-relaxed max-w-xs">
              Revolutionizing the landscape of healthcare delivery and
              positioning as the reliable go-to for affordable, quality, and
              innovative healthcare technological solutions.
            </p>
          </div>

          <div className="mt-8 flex justify-start space-x-4 mb-4 md:mb-0">
            <a href="https://x.com/medukul" target="_blank" className="">
              <RiTwitterXLine size={20} />
            </a>
            <a href="#" target="_blank" className="">
              <RiInstagramLine size={20} />
            </a>
            <a href="#" target="_blank" className="">
              <RiFacebookFill size={20} />
            </a>
            <a href="#" target="_blank" className="">
              <RiYoutubeFill size={20} />
            </a>
            <a href="#" target="_blank" className="">
              <RiWhatsappLine size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/medukul-4b97b9341/"
              target="_blank"
              className=""
            >
              <RiLinkedinFill size={20} />
            </a>
          </div>
        </div>

        {/* <div className="flex w-2/3 justify-between px-8"> */}
        {/* Links */}
        <div className="flex flex-col gap-4">
          {menus.map((menu, index) => (
            <a
              key={index}
              href={menu.href}
              className="lg:text-lg mb-2 hover:underline"
            >
              {menu.name}
            </a>
          ))}
        </div>

        {/* Contact Information */}
        <div className="text-left ">
          <p className="text-lg mb-2">support@medukul.com</p>
          <p className="text-lg mb-2">Lagos, Nigeria.</p>
          <p className="text-lg">+234 *** *** ****</p>
        </div>
      </div>
      {/* </div> */}

      {/* Copyright */}
      <div className=" mt-6 pt-6">
        <p className="text-xs">&copy; 2024 Medukul. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
