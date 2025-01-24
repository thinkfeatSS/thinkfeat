'use client';

import React, { useState } from 'react';

interface ImageData {
  src: string;
  alt: string;
  projectName : string;

}

const project = [
  {
    head: 'Our Projects',
    caption: 'The Best Thinkfeat Projects',
    discription:
      'We are privileged to work with hundreds of Thinkfeat projects. It is a long-established fact that readers will be distracted...',
  },
];


const imageCategories: { [key: string]: ImageData[] } = {
  home: [
    { src: '/images/Home6.jpg', alt: 'Home Image 2', projectName :"Webdevelopment" },
    { src: '/images/Home2.jpg', alt: 'Home Image 2',projectName :"Webdevelopment" },
    { src: '/images/Home3.jpg', alt: 'Home Image 3', projectName :"Webdevelopment" },
    { src: '/images/Home4.jpg', alt: 'Home Image 4',projectName :"Webdevelopment" },
    { src: '/images/Home5.jpg', alt: 'Home Image 5',projectName :"Webdevelopment" },
    { src: '/images/Home6.jpg', alt: 'Home Image 6',projectName :"Webdevelopment" },
  ],
  business: [
    { src: '/images/Home2.jpg', alt: 'Business Image 1', projectName :"Webdevelopment" },
    { src: '/images/Home4.jpg', alt: 'Business Image 2',projectName :"Webdevelopment"},

  ],
  design: [
    { src: '/images/Home3.jpg', alt: 'Design Image 1', projectName :"Webdevelopment" },
    { src: '/images/Home6.jpg', alt: 'Design Image 2' , projectName :"Webdevelopment"},
    { src: '/images/Home2.jpg', alt: 'Design Image 3' ,projectName :"Webdevelopment" },
    { src: '/images/Home5.jpg', alt: 'Design Image 4' ,projectName :"Webdevelopment" },

  ],
  development: [

    { src: '/images/Home2.jpg', alt: 'Development Image 2', projectName :"Webdevelopment" },
    { src: '/images/Home5.jpg', alt: 'Development Image 5' ,projectName :"Webdevelopment" },

  ],
  management: [
    { src: '/images/Home4.jpg', alt: 'Management Image 1', projectName :"Webdevelopment" },
    { src: '/images/Home2.jpg', alt: 'Management Image 2' ,projectName :"Webdevelopment" },
    { src: '/images/Home6.jpg', alt: 'Management Image 3',projectName :"Webdevelopment" },
    // { src: '/images/Home1.jpg', alt: 'Management Image 4' },

  ],
};

const OurProject = () => {
  const [activeCategory, setActiveCategory] = useState<string>('home');

  return (
    <section className=" dark:bg-surface-color dark:text-on-surface-color py-16 px-6 md:px-16 lg:px-26">
      {/* Project Info */}

      <h2 className="text-4xl py-12 font-bold text-on-primary dark:text-white text-center">Our Projects</h2>

      {project.map((item, index) => (
        <div key={index} className="mb-8 text-center">
          <p className="flex flex-col items-center space-y-2 text-gray-600 justify-between lg:space-y-0">

            {/* <div className='flex flex-col'> */}
            {/* <span className="mobile-title-large xl:desktop-heading-five dark:text-white mb-5">
              {item.head}
            </span> */}

            {/* <span className="mobile-headline-small xl:desktop-heading-four dark:text-primary">
              {item.caption}
            </span> */}

            {/* </div> */}

          </p>
        </div>
      ))}

      {/* Buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-5 justify-center  mb-8 gap-3 btn-primary lg:flex">
        {Object.keys(imageCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded transition btn-primary ${activeCategory === category
                ? 'btn-primary bg-secondary text-white dark:text-secondary dark:bg-primary dark:hover:bg-secondary dark:hover:text-white'
                : 'bg-secondary text-white dark:bg-secondary dark:text-primary'
              }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Images */}
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {imageCategories[activeCategory].map((image, index) => (
    <div
      key={index}
      className="relative group rounded overflow-hidden  h-[240px]" // Constrain parent dimensions
    >
      {/* Image */}
      <img
        src={image.src}
        alt={image.alt}
        className="object-cover bg-center w-full h-full" // Fill parent dimensions
      />

      {/* Overlay for Project Name and Description */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
        <h3 className="text-white text-lg font-bold">{image.projectName}</h3>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default OurProject;
