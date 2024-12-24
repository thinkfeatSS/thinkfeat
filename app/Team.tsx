"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ourTeam = [
  {
    header: "OUR TEAM",
    caption:
      "We are a group of innovative, experienced, and proficient teams. You will love to collaborate with us",
  },
];

const imageSources = [
  {
    src: "/images/team-1.jpg",
    alt: "Image 1",
    header: "Title Goes here",
    caption: "CEO, Founder, ...",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    btn: "Learn more -->",
  },
  {
    src: "/images/team-2.jpg",
    alt: "Image 2",
    header: "Title Goes here",
    caption: "CEO, Founder, ...",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    btn: "Learn more -->",
  },
  {
    src: "/images/team-3.jpg",
    alt: "Image 3",
    header: "Title Goes here",
    caption: "CEO, Founder, ...",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    btn: "Learn more -->",
  },
  {
    src: "/images/team-4.jpg",
    alt: "Image 4",
    header: "Title Goes here",
    caption: "CEO, Founder, ...",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    btn: "Learn more -->",
  },
];

const Team: React.FC = () => {
  return (
    <div className="container mx-auto py-8 mb-5">
      <h2 className="text-center text-2xl text-black dark:text-white font-semibold">{ourTeam[0].header}</h2>
      <p className="text-center text-lg text-secondary mb-6">
        {ourTeam[0].caption}
      </p>
      <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        spaceBetween={50}
        slidesPerView={1}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 30, // Rotation of the slides in degrees
          stretch: 10, // Stretch the slides a little
          depth: 200, // Depth of the 3D effect
          modifier: 1, // Controls the intensity of the effect
          slideShadows: true, // Enables shadows on the slides
        }}
      >
        {imageSources.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg overflow-hidden ">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black dark:text-white">{image.header}</h3>
                <p className="text-sm text-gray-600">{image.caption}</p>
                <p className="text-sm text-gray-500">{image.description}</p>
                <div className="flex  mt-4">
                  <button className="text-black rounded-md">{image.btn}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
