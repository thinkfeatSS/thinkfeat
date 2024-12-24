'use client';
import React, { useState, useRef } from 'react';
import { FaCheck, FaPlay, FaPause } from "react-icons/fa6";
import QnA from './QA';

const services = {
  images: [
    { src: "/images/Slide3.jpg", alt: "service 1", caption: "Thinkfeat Software Solution" },
  ],
  posts: [
    {
      src: "/images/Blog1.jpg",
      alt: "Help Image",
      title: "Do You Need Any Help?",
      number: "02158452",
      email: "thinkfeat@gmail.com",
      btn: "Read more",
    },
    {
      src: "/images/slide1.jpg",
      alt: "Meeting Image",
    },
  ],
  video: {
    src: "/images/sound.mp4",  // Video source
    poster: "/images/video-poster.jpg",  // Optional poster image before playing
  },
};

const sertable = {
  title: "OUR SERVICE",
  items: [
    "Managed IT Services",
    "Product Design",
    "Business Solution",
    "Software Development",
    "Expertise Leadership",
  ],
};

const Experties = {
  title: "Expertise Leadership IT Solution",
  caption: "Serving Professional Services Offering",
  items: [
    "24/7 Support & Maintenance",
    "IT Solution",
    "Market Trades & Stock",
    "Product Design",
    "Managed IT Services",
  ],
};

const Page = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);  // State for play/pause
  const videoRef = useRef<HTMLVideoElement | null>(null);  // Reference to video element

  const handleServiceClick = (ser: string) => {
    setSelectedService(ser);
  };

  const handleBackClick = () => {
    setSelectedService(null);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    }
  };

  return (
    <section className="dark:bg-surface-color dark:text-on-surface-color">
      {/* Hero Section */}
      <div className="w-full relative">
        {services.images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full max-h-screen object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-32 px-8 text-white mobile-headline-medium font-bold">
              {image.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-xl lg:flex-row mt-10 px-4 gap-4">
        {/* Contact Section */}
        <div className="bg-black text-white p-8 rounded-lg flex flex-col justify-center relative">
          <img
            src={services.posts[0].src}
            alt={services.posts[0].alt}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 max-w-sm">
            <h3 className="text-3xl font-bold mb-4">{services.posts[0].title}</h3>
            <p className="mb-2 text-lg">Phone: {services.posts[0].number}</p>
            <p className="mb-6 text-lg">Email: {services.posts[0].email}</p>
            <button className="bg-secondary text-primary px-6 py-2 rounded shadow hover:bg-gray-100">
              {services.posts[0].btn}
            </button>
          </div>
        </div>

        {/* Service List and Details */}
        <div className="flex-1 border rounded-lg shadow-lg">
          {/* Title Section */}
          <div className="bg-on-primary text-white text-center py-4 rounded-t-lg">
            <h2 className="text-lg font-bold">{selectedService || sertable.title}</h2>
          </div>

          {/* Conditionally Render Service List or Details */}
          {!selectedService ? (
            <ul className="bg-white">
              {sertable.items.map((item, index) => (
                <li
                  key={index}
                  className="border-b last:border-b-0 py-4 px-6 text-secondary hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleServiceClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-6">
              <h3 className="text-xl font-bold">{selectedService}</h3>
              <p className="mt-4 text-gray-700">
                Details about <strong>{selectedService}</strong> will go here. You can customize this content as needed.
              </p>
              <button
                className="bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-90 mt-4"
                onClick={handleBackClick}
              >
                Back to Services
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Expertise Section */}
      <div className='flex flex-col lg:flex-row-reverse gap-4 px-4'>
      <div className="mt-12 flex-1">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">{Experties.title}</h2>
          <p className="text-gray-600 text-xl mt-2">{Experties.caption}</p>
        </div>
        <div className="space-y-4">
          {Experties.items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 text-gray-800">
              <FaCheck className="text-secondary" /> {/* Icon used here */}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="relative mt-12 flex-1">
        <video
          ref={videoRef}
          className="w-full object-cover"
          poster={services.video.poster}
          controls={false} // Disable default controls if you want custom ones
        >
          <source src={services.video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={togglePlayPause}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-6 py-2 rounded-full"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      </div>
      <QnA/>
    </section>
  );
};

export default Page;
