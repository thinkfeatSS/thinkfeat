"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Slide1 from '../public/images/Slide1.jpg';
import Slide2 from '../public/images/Slide2.jpg';
import Slide3 from '../public/images/Slide3.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { MdOutlineExpandMore } from "react-icons/md";

const slidesData = [
  {
    title: "Transforming Ideas into Innovative Solutions",
    description: "Empowering businesses with cutting-edge solutions that drive growth and success. We blend creativity with expertise to turn visionary ideas into tangible results",
    button1Label: "Discover Now",
    button2Label: "Learn more",
    imageUrl: Slide1,
  },
  {
    title: "Transforming Ideas into Innovative Solutions",
    description: "Empowering businesses with cutting-edge solutions that drive growth and success. We blend creativity with expertise to turn visionary ideas into tangible results",
    button1Label: "Discover Now",
    button2Label: "Learn more",
    imageUrl: Slide2,
  },
  {
    title: "Transforming Ideas into Innovative Solutions",
    description: "Empowering businesses with cutting-edge solutions that drive growth and success. We blend creativity with expertise to turn visionary ideas into tangible results",
    button1Label: "Discover Now",
    button2Label: "Learn more",
    imageUrl: Slide3,
  },
];

const HeroSection = () => {
  return (
      <section className=" dark:bg-surface-color bg-on-surface-color text-on-surface-color w-full h-screen">
       <div className="">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        effect="fade"
        speed={2000}
        className="w-full h-screen"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex items-center justify-center h-full text-white">
              <Image
                src={slide.imageUrl}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full "
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center xl:justify-end xl:items-start xl:text-left xl:p-16 ">
                <h1 className="mobile-display-medium lg:desktop-heading-one xl:max-w-xl">{slide.title}</h1>
                <p className="mobile-body-large xl:max-w-xl mb-3">{slide.description}</p>
                <div className="flex gap-4">

                  <button className="bg-secondary text-white dark:bg-primary dark:text-secondary font-semibold py-2 px-6 rounded-lg transition">
                    {slide.button1Label}
                   
                  </button>

                  <button className="bg-primary text-secondary dark:bg-secondary dark:text-primary font-semibold py-2 px-6 rounded-lg flex items-center gap-2">
                    {slide.button2Label}
                     <MdOutlineExpandMore className="text-[28px]" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      </section>

  );
};

export default HeroSection;
