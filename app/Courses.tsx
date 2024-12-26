'use client';

import React, { useState } from "react";

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

const Card = () => {
  const [visibleCards, setVisibleCards] = useState(3);

  const handleShowMore = () => {
    setVisibleCards(cardData.length); // Show all cards
  };

  return (
    <section id="coursesection" className="w-full px-4 py-8">
      <div className="text-center my-8">
        {/* Subheading */}
        <h4 className="text-sm text-secondary dark:text-primary mb-1 flex items-center justify-center">
          Courses
          <span className="w-10 h-[1px] bg-on-primary dark:bg-primary ml-2"></span>
        </h4>
        {/* Heading */}
        <h2 className="text-3xl font-bold text-on-primary dark:text-white">Popular Courses</h2>
      </div>

      <div className="py-12">
        <div className="flex flex-wrap gap-4 justify-center  gap-y-28">
          {/* Display only the visible cards */}
          {cardData.slice(0, visibleCards).map((card) => (
            <div
              key={card.id}
              className="relative bg-[#E0E0E0] dark:bg-[#0D0D0D] rounded-lg shadow-sm shadow-primary pt-16 w-80 h-auto"
            >
              {/* Elevated Image */}
              <div className="absolute -top-5 left-[18%] transform -translate-y-[1px]">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
              </div>
              {/* Title and Description */}
              <div className="p-4 mt-8 text-center">
                <h3 className="text-lg font-bold text-secondary dark:text-primary">{card.title}</h3>
                <p className="text-sm text-on-primary dark:text-white mt-2 leading-relaxed">{card.description}</p>
                <div className="flex justify-center gap-4 mt-4">
                <button className="border border-secondary text-on-primary p-2 rounded-md hover:bg-on-primary hover:text-white dark:text-white transition-all duration-700">View Detail</button>
                <button className="bg-secondary text-white p-2 rounded-md">Apply Now</button>
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
              className="px-6 py-2 bg-secondary dark:text-primary text-primary rounded-full"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Card;
