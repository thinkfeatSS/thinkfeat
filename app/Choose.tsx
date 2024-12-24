import { FaCheck } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import React from 'react';
import Image from "next/image";
import IChoose from '../public/images/IChoose.jpg'
const choose = [
  {
    description: "There are many variations of passages of Lorem Ipsum, some of the available, but the majority have suffered alteration in form, by injected humour, or believable.",
  },
  {
    head: "Marketing Software It.",
    description: "We are privileged to work with hundreds of future thinkers. It is a long-established fact that are will.",
    icon: FaCheck,
  },
  {
    head: "Strategy Software it",
    description: "We are privileged to work with hundreds of future thinkers. It is a long-established fact that are will.",
    icon: FaCheck,
  },
  {
    head: "Analysis Software it",
    description: "We are privileged to work with hundreds of future thinkers. It is a long-established fact that are will.",
    icon: FaCheck,
  },
];

const Choose = () => {
  return (
    <section className=" dark:bg-surface-color dark:text-on-surface-color py-16 px-6 md:px-16 lg:px-26">
      <div className="flex flex-col lg:flex-row my-5 gap-4 lg:gap-0">
        <div className=" bg-primary-container flex flex-col">
            <h3 className="px-8 mobile-body-large xl:desktop-heading-five mb-3 my-3">Why Choose Us</h3>
            <h1 className="mobile-title-medium xl:desktop-heading-four px-3 mb-5">Will Change The Way You <span className=" text-primary">Approach Choose Us</span> Softit Service</h1>
          {choose.map((content, index) => (
            <div key={index} className="mb-8">
                <div className="flex items-center gap-4 px-2">
              {content.icon && <content.icon className="text-orange-500" />}
              <h3 className="mobile-title-medium xl:desktop-heading-five dark:text-primary">
                {content.head}
              </h3>
              </div>
              <p className="mt-2 px-4 mobile-body-medium xl:desktop-subtitle-one max-w-lg">
                { content.description}
              </p>
            </div>
          ))}
        </div>
        <div className="image">
            <Image
            src={IChoose}
            alt=""
            className="relative"/>
            {/* <button className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full transition-all transform hover:scale-110 hover:bg-secondary focus:outline-none">
      <FaPlay className="w-8 h-8" />
    </button> */}
        </div>
      </div>
    </section>
  );
};

export default Choose;
