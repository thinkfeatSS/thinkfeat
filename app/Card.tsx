import React from 'react';
import { FaSignal } from "react-icons/fa";
import { TbSettingsSearch } from "react-icons/tb";
import { GiBurningRoundShot } from "react-icons/gi";
const cardData = [
  {
    icon: <FaSignal className="inline-block mr-2" />,
    title: "Improve Service",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, accusamus!",
  },
  {
    icon: <TbSettingsSearch className="inline-block mr-2" />,
    title: "Marketing Strategy",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, accusamus!",
  },
  {
    icon: <GiBurningRoundShot className="inline-block mr-2" />,
    title: "Project Analysis",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, accusamus!",
  },
];



const Card = () => {
  return (
    <section className='my-5  dark:bg-surface-color bg-on-surface-color text-on-surface-color '>
      {/* Cards */}
      <div className="flex flex-col md:flex-row  gap-4 p-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className=" bg-on-surface-color dark:bg-surface-color dark:text-on-surface-color   p-6 shadow-md rounded-lg w-full h-64 text-center dark:shadow-secondary"
          >
            <h1 className=" text-5xl font-semibold mb-2 text-secondary dark:text-primary">
              {card.icon}
            </h1>
            <p className="dark:text-on-surface-color  text-gray-600 mb-5 mobile-headline-medium">{card.title}</p>
            <p className="dark:text-on-surface-color  text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
