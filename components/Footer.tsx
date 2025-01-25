 "use client";

import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaGooglePlusG, FaRss, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Logo from "./Logo";

const foot = [
  {
    logo: "./icon.png",
    title: "THINKFEAT",
    caption:
      "There are many variations of Lorem Ipsum available, but the majority have suffered alteration. We are privileged to work with",
    faceicon: <CiFacebook className="dark:hover:text-primary text-[30px]" />,
    googleicon: <FaGooglePlusG className="dark:hover:text-primary text-[30px]" />,
  },
  {
    title: "QUICK LINKS",
    service: "Our Services",
    choose: "Why Choose Us",
    company: "Our Company",
    business: "Our Business",
    work: "How To Works",
  },
  {
    title: "OUR CONTACTS",
    address: "Hyderabad Qasimabad Phase 2 Jatoi Chownk",
    phone: "03342673135",
    email: "thinkfeat@gamil.com",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-on-surface-color text-black py-8 border border-t-gray-300 shadow-lg dark:bg-black dark:border-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: Logo and Caption */}
         
       <Logo/>
       
        

        {/* Section 2: Quick Links */}
        <div className="flex flex-col items-center text-secondary">
          <h3 className="text-2xl font-semibold mb-4">{foot[1].title}</h3>
          <ul className="space-y-2">
            <li>{foot[1].service}</li>
            <li>{foot[1].choose}</li>
            <li>{foot[1].company}</li>
            <li>{foot[1].business}</li>
            <li>{foot[1].work}</li>
          </ul>
        </div>

        {/* Section 3: Contact Information */}
        <div className="flex flex-col items-center text-secondary">
          <h3 className="text-3xl font-semibold mb-4">{foot[2].title}</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-xl" />
              {foot[2].address}
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-xl" />
              {foot[2].phone}
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-xl" />
              {foot[2].email}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
