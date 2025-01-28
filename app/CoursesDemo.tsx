'use client';

import React, { useState } from "react";

import { FaPython } from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";
import { MdDisplaySettings } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { SiBnbchain } from "react-icons/si";
import { MdOutlineExpandMore } from "react-icons/md";


type CardData = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  icon: React.JSX.Element;
};



const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: '/images/Blog1.jpg',
    title: 'Python',
    description: 'Dive into the world of programming with ThinkFeat Software Solutions Python for Everyone',
    icon: <FaPython  className="text-secondary w-16 text-[60px] text-center dark:text-primary"/>
  },
  {
    id: 2,
    imageUrl: '/images/Blog1.jpg',
    title: 'Cybersecurity',
    description: 'Are you ready to step into the high-demand world of cybersecurity? ThinkFeat Software Solutions...',
    icon: <GiCyberEye  className="text-secondary w-16 text-[60px] text-center dark:text-primary"/>
  },
  {
    id: 3,
    imageUrl: '/images/Blog1.jpg',
    title: 'Web Development',
    description: 'Are you ready to unlock the full potential of modern web development? ThinkFeat Software Solutions...',
    icon: <MdDisplaySettings  className="text-secondary w-16 text-[60px] text-center dark:text-primary"/>
  },
  {
    id: 4,
    imageUrl: '/images/Blog1.jpg',
    title: 'Digital Marketing',
    description: 'Are you ready to kickstart your career in digital marketing? ThinkFeat Software Solutions...',
    icon: <FaCartArrowDown  className="text-secondary w-16 text-[60px] text-center dark:text-primary"/>
  },
  {
    id: 5,
    imageUrl: '/images/Blog1.jpg',
    title: 'Block Chain',
    description: 'Are you ready to step into the high-demand world of cybersecurity? ThinkFeat Software Solutions ',
    icon: <SiBnbchain  className="text-secondary w-16 text-[60px] text-center dark:text-primary"/>
  },
];

const CoursesDemo = () => {
  const [visibleCards, setVisibleCards] = useState(4);

  const handleShowMore = () => {
    setVisibleCards(cardData.length); // Show all cards
  };

  return (
    <section id="coursesection" className="w-full px-4 py-16">
      <div className="text-center my-8">
        {/* Subheading */}

        {/* <h4 className="text-sm text-secondary dark:text-primary mb-1 flex items-center justify-center">
          Courses
          <span className="w-10 h-[1px] bg-on-primary dark:bg-primary ml-2"></span>
        </h4> */}

        {/* Heading */}
        <h2 className="text-4xl font-bold text-on-primary dark:text-white text-center">Our Courses</h2>
      </div>

      <div className="py-12">
        <div className="flex flex-wrap gap-4 justify-center  gap-y-28">
          {/* Display only the visible cards */}
          {cardData.slice(0, visibleCards).map((card) => (
            <div
              key={card.id}
              className=" flex flex-col items-center p-3 bg-[#E0E0E0] dark:bg-[#0D0D0D] rounded-lg shadow-sm shadow-primary w-80"
            >
              {/* Elevated Image */}
                {/* {card.icon } */}

                <div className="absolute -top-5 left-[18%] transform -translate-y-[1px]">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
              </div>

              
              {/* Title and Description */}
              <div className="p-4  text-center">
                <h3 className="text-lg font-bold text-on-primary dark:text-primary">{card.title}</h3>
                <p className="text-sm text-on-primary dark:text-white mt-2 leading-relaxed h-28">{card.description}</p>
                <div className="flex justify-center gap-4 mt-4">
                {/* <button className=" text-[12px] px-4  border border-secondary text-on-primary p-2 rounded-md hover:bg-on-primary hover:text-white dark:text-white transition-all duration-700">View Detail</button> */}
                <button className="bg-secondary text-white text-[12px] px-4 py-2 rounded-md flex items-center gap-2 dark:bg-primary dark:text-black">Apply Now
                <FaArrowRight />
                </button>
              </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCards < cardData.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleShowMore}
              className="p-4  text-secondary dark:text-primary  rounded-full flex mx-auto items-center gap-1 font-semibold"
            >
              Show more
              <MdOutlineExpandMore className="text-[28px]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesDemo;
