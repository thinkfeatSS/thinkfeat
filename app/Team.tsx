 "use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Removed Navigation and Pagination
import "swiper/css";

const ourTeam = [
  {
    header: "OUR TEAM",
    caption:
      "We are a group of innovative, experienced, and proficient teams. You will love to collaborate with us",
  },
];

const imageSources = [
  {
    src: "/images/TEAM/IsmaelLM.jpg",
    alt: "Image1",
    header: "Muhammad Imsael",
    caption: "Founder & CEO",

  },
  {
    src: "/images/Team/RizwanLM.jpg",
    alt: "Image2",
    header: "Rizwan Ahmed",
    caption: "Senior Software Engineer",
  },
  {
    src: "/images/Team/AhsanLm.jpg",
    alt: "Image3",
    header: "Muhammad Ahsan",
    caption: "Data Scientist/ML Engineer",
  },
  {
    src: "/images/Anees.webp",
    alt: "Image 3",
    header: "Anees Mehdi",
    caption: "Director Marketing & Network",
  },
  {
    src: "/images/Manhal.jpg",
    alt: "Image 4",
    header: "Minhal Mahar",
    caption: "Director Sales",
  },
  {
    src: "/images/Abdullah.jpg",
    alt: "Image 5",
    header: "Abdullah Shaikh",
    caption: "Junior Software Engineer",
  },
  {
    src: "/images/Akber.jpg",
    alt: "Image 6",
    header: "Akber Baloch",
    caption: "Frontend Developer",
  },
  {
    src: "/images/Team/IrfanLM.jpg",
    alt: "Image8",
    header: "Irfan Ali",
    caption: "Head of HR",
  },

];

const Team: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl py-12 font-bold text-on-primary dark:text-white text-center">
        Our Team
      </h2>
      <p className="text-center text-lg text-black mb-8 dark:text-white">
        {ourTeam[0].caption}
      </p>

      <Swiper
        modules={[Autoplay]} // Only Autoplay is included
        spaceBetween={1} // Reduced space between slides
        slidesPerView={1}
        speed={800}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {imageSources.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 flex flex-col items-center w-[300px] mx-auto"> {/* Decreased card size */}
              <div className="w-full h-64 relative"> {/* Reduced card height */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 w-full text-center">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {image.header}
                </h3>
                <p className="text-sm text-secondary dark:text-primary">
                  {image.caption}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
