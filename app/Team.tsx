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
    src: "/images/Rizwan.jpg",
    alt: "Image 1",
    header: "Rizwan Ahmed",
    caption: "Senior Software Engineer",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    btn: "Learn more -->",
  },
  {
    src: "/images/Ahsan.jpg",
    alt: "Image 1",
    header: "Muhammad Ahsan",
    caption: "Data Scientist/ML Engineer",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    btn: "Learn more -->",
  },
  {
    src: "/images/Anees.webp",
    alt: "Image 1",
    header: "Anees Mehdi",
    caption: "Director Markeeting & Network",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    btn: "Learn more -->",
  },
  {
    src: "/images/Manhal.jpg",
    alt: "Image 2",
    header: "Minhal Mahar",
    caption: "Director Sales",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    btn: "Learn more -->",
  },
  {
    src: "/images/Abdullah.jpg",
    alt: "Image 3",
    header: "Abdullah Shaikh",
    caption: "Junior Software Engineer",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    btn: "Learn more -->",
  },
  {
    src: "/images/Akber.jpg",
    alt: "Image 4",
    header: "Akber Baloch",
    caption: "Fronted Developer",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    btn: "Learn more -->",
  },
  {
    src: "/images/Irfan.jpg",
    alt: "Image 4",
    header: "Irfan Ali",
    caption: "Managing Director",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    btn: "Learn more -->",
  },
  {
    src: "/images/younis.jpg",
    alt: "Image 4",
    header: "Muhammad Younis",
    caption: "Fronted Developer",
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
              <div className="p-4 bg-[#E0E0E0]">
                <h3 className="text-xl font-semibold text-black dark:text-white">{image.header}</h3>
                <p className="text-sm dark:text-primary text-secondary">{image.caption}</p>
                <p className="text-sm text-white">{image.description}</p>
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
