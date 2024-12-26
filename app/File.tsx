'use client';

import React from "react";

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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    id: 2,
    imageUrl: '/images/Blog1.jpg',
    title: 'Cybersecurity',
    description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 3,
    imageUrl: '/images/Blog1.jpg',
    title: 'Web Development',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 4,
    imageUrl: '/images/Blog1.jpg',
    title: 'Digital Marketing',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 5,
    imageUrl: '/images/Blog1.jpg',
    title: 'Chase Your Dreams',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const Card = () => {
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
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <div key={card.id} className="relative bg-white rounded-lg shadow-lg pt-16">
            {/* Elevated Image */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-32 h-32 object-cover rounded-lg shadow-md"
              />
            </div>
            {/* Title and Description */}
            <div className="p-4 mt-8 text-center">
              <h3 className="text-lg font-bold text-blue-500">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Card;
