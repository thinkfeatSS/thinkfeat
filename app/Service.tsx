import React from 'react';
import { FaSignal } from "react-icons/fa";
import { TbSettingsSearch } from "react-icons/tb";
import { GiBurningRoundShot } from "react-icons/gi";

import { RiGlobalLine } from "react-icons/ri";
import { GiBreakingChain } from "react-icons/gi";
import { IoMdLaptop } from "react-icons/io";
import { FaCloud } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";

const cardData = [
  {
    icon: <RiGlobalLine className="inline-block mr-2" />,
    title: "Web Development",
    description: "Creating responsive, user-friendly websites to elevate your online presence and deliver exceptional experiences",
  },
  {
    icon: <GiBreakingChain className="inline-block mr-2" />,
    title: "Block Chain",
    description: "Building secure, decentralized blockchain solutions for efficient, transparent, and innovative digital transactions.",
  },
  {
    icon: <IoMdLaptop className="inline-block mr-2" />,
    title: "Digital Marketing",
    description: "Boosting your online presence with data-driven digital marketing strategies for maximum reach and impact.",
  },
  {
    icon: <FaCloud className="inline-block mr-2" />,
    title: "Cloud Servive",
    description: "Scalable and secure cloud solutions to streamline your business operations and enhance flexibility.",
  },
  
  {
    icon: <FaMobile className="inline-block mr-2" />,
    title: "Mobile Application",
    description: "Custom mobile app development to deliver user-friendly and innovative solutions for iOS and Android platforms.",
  },
  {
    icon: <GiCyberEye className="inline-block mr-2" />,
    title: "Cyber Security",
    description: "Advanced cybersecurity services to protect your business from threats and ensure data integrity",
  },
];



const Service = () => {
  return (

    <section className='mt-20 flex flex-col gap-10  dark:bg-surface-color bg-on-surface-color text-on-surface-color '>

      <h2 className="text-4xl font-bold text-on-primary dark:text-white text-center">Our Services</h2>
      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4  gap-4 p-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className=" bg-[#E0E0E0] dark:bg-surface-color dark:text-on-surface-color   p-6 border border-gray-200 shadow-md rounded-lg w-full h-64 text-center dark:shadow-secondary hover:bg-stone"
          >
            <h1 className=" text-5xl font-semibold mb-2 text-secondary dark:text-primary">
              {card.icon}
            </h1>
            <p className="dark:text-on-surface-color  text-black font-medium mb-2 mobile-headline-medium">{card.title}</p>
            <p className="dark:text-on-surface-color  text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
