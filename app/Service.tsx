 'use client';
import React, { useState } from "react";
 
import { RiGlobalLine } from "react-icons/ri";
import { GiBreakingChain } from "react-icons/gi";
import { IoMdLaptop } from "react-icons/io";
import { FaCloud, FaMobile, FaFileVideo, FaBrain } from "react-icons/fa6";
import { GiCyberEye } from "react-icons/gi";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";

const cardData = [
  {
    icon: <RiGlobalLine className="inline-block mr-2" />, 
    title: "Web Development", 
    description: "Creating responsive, user-friendly websites to elevate your online presence and deliver exceptional experiences"
  },
  {
    icon: <GiBreakingChain className="inline-block mr-2" />, 
    title: "Block Chain", 
    description: "Building secure, decentralized blockchain solutions for efficient, transparent, and innovative digital transactions."
  },
  {
    icon: <IoMdLaptop className="inline-block mr-2" />, 
    title: "Digital Marketing", 
    description: "Boosting your online presence with data-driven digital marketing strategies for maximum reach and impact."
  },
  {
    icon: <FaCloud className="inline-block mr-2" />, 
    title: "Cloud Service", 
    description: "Scalable and secure cloud solutions to streamline your business operations and enhance flexibility."
  },
  {
    icon: <FaMobile className="inline-block mr-2" />, 
    title: "Mobile Application", 
    description: "Custom mobile app development to deliver user-friendly and innovative solutions for iOS and Android platforms."
  },
  {
    icon: <GiCyberEye className="inline-block mr-2" />, 
    title: "Cyber Security", 
    description: "Advanced cybersecurity services to protect your business from threats and ensure data integrity."
  },
  {
    icon: <FaFileVideo className="inline-block mr-2" />, 
    title: "Video Editing & Graphics", 
    description: "Enhance visuals and storytelling through professional video editing and graphic design."
  },
  {
    icon: <FaBrain className="inline-block mr-2" />, 
    title: "Artificial Intelligence", 
    description: "Providing AI-driven solutions for automation, predictive analysis, and intelligent decision-making."
  }
];

const Service = () => {
  const [visibleCards, setVisibleCards] = useState(4);

  const handleShowMore = () => {
    setVisibleCards(cardData.length);
  };

  const handleShowLess = () => {
    setVisibleCards(4);
  };

  return (
    <section className='mt-20 flex flex-col gap-10 dark:bg-surface-color bg-on-surface-color text-on-surface-color'>
      <h2 className="text-4xl font-bold text-on-primary dark:text-white text-center">Our Services</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {cardData.slice(0, visibleCards).map((card, index) => (
          <div
            key={index}
            className="bg-[#E0E0E0] dark:bg-surface-color dark:text-on-surface-color p-6 border border-gray-200 shadow-md rounded-lg w-full h-64 text-center dark:shadow-secondary hover:bg-stone"
          >
            <h1 className="text-5xl font-semibold mb-2 text-secondary dark:text-primary">{card.icon}</h1>
            <p className="dark:text-on-surface-color text-black font-medium mb-2 mobile-headline-medium">{card.title}</p>
            <p className="dark:text-on-surface-color text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        {visibleCards < cardData.length ? (
          <button
            onClick={handleShowMore}
            className="p-4 text-secondary dark:text-primary rounded-full flex mx-auto items-center gap-1 font-semibold"
          >
            Show more <MdOutlineExpandMore className="text-[28px]" />
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="p-4 text-secondary dark:text-primary rounded-full flex mx-auto items-center gap-1 font-semibold"
          >
            Show less <MdOutlineExpandLess className="text-[28px]" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Service;
