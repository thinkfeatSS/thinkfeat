"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cards = [
  {
    
    courseTitle: "Web Development",
    description:
      "Are you ready to unlock the full potential of modern web development? ThinkFeat Software Solutions",
    image: "/images/DesigCard.jpg",
    btnViewDetail: "View Detail",
    btnApplyNow: "Apply Now",
  },
  {
   
    courseTitle: "Mobile Application",
    description:
      "Transform your ideas into innovative mobile apps with ThinkFeat Software Solutions’ Mobile Application...",
    image: "/images/GraphicCard.jpg",
    btnViewDetail: "View Detail",
    btnApplyNow: "Apply Now",
  },
  {
      courseTitle: "Digital Markeeting",
    description:
      "Are you ready to kickstart your career in digital marketing? ThinkFeat Software Solutions...",

    image: "/images/BusinessCard.jpg",
    btnViewDetail: "View Detail",
    btnApplyNow: "Apply Now",
  },
  {
   
    courseTitle: "Cybersecurity",
    description:
      "Are you ready to step into the high-demand world of cybersecurity? ThinkFeat Software Solutions...",
    image: "/images/TechnologyCard.jpg",
    btnViewDetail: "View Detail",
    btnApplyNow: "Apply Now",
  },
  {
    courseTitle: "Python",
    description:
      "Dive into the world of programming with ThinkFeat Software Solutions' Python for Everyone...",
    image: "/images/TechnologyCard.jpg",
    btnViewDetail: "View Detail",
    btnApplyNow: "Apply Now",
  },
];

const Courses = () => {
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

     
      <div className="flex flex-col lg:flex-row  gap-3  justify-center">
  {cards.map((card, cardIndex) => (
    <div
      key={cardIndex}
      className="w-full md:w-1/3 lg:w-1/4 bg-primary-container shadow-md rounded-lg overflow-hidden items-center p-2"
    >
      {/* Image Section */}
      <img
        src={card.image}
        alt={card.courseTitle}
        className="w-full h-40 object-cover rounded-lg"
      />
      {/* Text Section */}
      <div className="p-4">
        {/* Icon */}
        
        {/* Course Title */}
        <h3 className="text-lg font-bold dark:text-primary text-secondary mb-2">
          {card.courseTitle}
        </h3>
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{card.description}</p>
        {/* Button */}
        <div className="flex justify-end gap-1">
        <button className="border border-indigo-600 text-black px-4 py-2 rounded hover: transition">
          {card.btnViewDetail}
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          {card.btnApplyNow}
        </button>
        </div>
      </div>
    </div>
  ))}
</div>


       
    

      {/* <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        speed={2000}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 }, 
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 3 }, 
        }} */}
      {/* // navigation
      // pagination={{ clickable: true }}
      > */}
        {/* {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="dark:bg-primary bg-primary-container shadow-l rounded-2xl">
              {/* Image Section */}
              {/* <div className="max-w-sm mx-auto overflow-hidden justify-center">
                <img
                  src={card.image}
                  alt={card.courseTitle}
                  className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-105 h-60 w-full"
                />
              </div> */}



              {/* Text Section */}
              {/* <div className="p-4">
                <h3 className="mobile-headline-small dark:text-secondary text-primary mb-2">{card.courseTitle}</h3>
                <p className="dark:text-on-primary mobile-title-medium">{card.description}</p>
                <div className="flex justify-end gap-0">
                  <button
                    className=" dark:hover:bg-on-primary hover:bg-black px-4 py-2 m-3 rounded-md border dark:border-black  dark:text-secondary transition btn-primary group-hover:transition-all duration-300">
                    View Detail
                  </button> */}
                  {/* <button
                    className="bg-secondary px-4 py-2 m-3 rounded transition btn-primary group-hover:transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        {/* ))}
      </Swiper>} */}
    </section>
  );
};

export default Courses;
