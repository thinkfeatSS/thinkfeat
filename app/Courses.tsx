 'use client';

import React, { useState } from "react";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";

type CardData = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: '/images/Blog1.jpg',
    title: 'Python',
    description: 'Dive into the world of programming with ThinkFeat Software Solutions Python for Everyone',
  },
  {
    id: 2,
    imageUrl: '/images/Blog1.jpg',
    title: 'Cybersecurity',
    description: 'Are you ready to step into the high-demand world of cybersecurity? ThinkFeat Software Solutions...',
  },
  {
    id: 3,
    imageUrl: '/images/Blog1.jpg',
    title: 'Web Development',
    description: 'Are you ready to unlock the full potential of modern web development? ThinkFeat Software Solutions...',
  },
  {
    id: 4,
    imageUrl: '/images/Blog1.jpg',
    title: 'Digital Marketing',
    description: 'Are you ready to kickstart your career in digital marketing? ThinkFeat Software Solutions...',
  },
  {
    id: 5,
    imageUrl: '/images/Blog1.jpg',
    title: 'Block Chain',
    description: 'Are you ready to step into the high-demand world of cybersecurity? ThinkFeat Software Solutions ',
  },
];

const Courses = () => {
  const [visibleCards, setVisibleCards] = useState(4);

  const handleShowMore = () => {
    setVisibleCards(cardData.length);
  };

  const handleShowLess = () => {
    setVisibleCards(4);
  };

  return (
    <section id="coursesection" className="w-full px-4 py-8">
      <div className="text-center my-8">
        <h2 className="text-4xl font-bold text-on-primary dark:text-white text-center">Our Courses</h2>
      </div>

      <div className="py-12">
        <div className="flex flex-wrap gap-4 justify-center gap-y-28">
          {cardData.slice(0, visibleCards).map((card) => (
            <div
              key={card.id}
              className="relative bg-[#E0E0E0] dark:bg-[#0D0D0D] rounded-lg shadow-sm shadow-primary pt-16 w-80 h-auto"
            >
              <div className="absolute -top-5 left-[18%] transform -translate-y-[1px]">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="p-4 mt-8 text-center">
                <h3 className="text-lg font-bold text-secondary dark:text-primary">{card.title}</h3>
                <p className="text-sm text-on-primary dark:text-white mt-2 leading-relaxed">{card.description}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <button className="bg-secondary text-white text-[12px] px-4 py-2 rounded-md flex items-center gap-2 dark:bg-primary dark:text-black">Apply Now</button>
                </div>
              </div>
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
      </div>
    </section>
  );
};

export default Courses;
