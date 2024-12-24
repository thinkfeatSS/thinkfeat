import React from "react";
import { TfiSignal } from "react-icons/tfi";
import { SiLeaderprice } from "react-icons/si";
import { TbAugmentedReality } from "react-icons/tb";
import { div } from "framer-motion/client";

const services = {
  title: "Our Service",
  caption: "Our Best Thinkfeat Service",
  description:
    "We are privileged to work with hundreds of future-thinking IT companies. It is a long-established fact that will be distracted...",
  images: [
    { src: "/images/service1.jpg", alt: "Service 1", label: "Software Development", icon: TfiSignal },
    { src: "/images/service2.jpg", alt: "Service 2", label: "IT Consulting", icon: SiLeaderprice},
    { src: "/images/service2.jpg", alt: "Service 2", label: "IT Consulting", icon: SiLeaderprice},
    { src: "/images/service3.jpg", alt: "Service 3", label: "Support", icon: TbAugmentedReality },
  ],
  
};

const Services = () => {
  return (
    <section id="servicessection" className="bg-primary-container dark:bg-surface-color dark:text-on-surface-color py-16">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="mobile-title-large md:tablet-title-large lg:desktop-heading-four">
          {services.title}
        </h2>
        <p className="mobile-headline-large md:tablet-headline-large xl:desktop-heading-three mt-2">
          {services.caption}
        </p>
        <p className=" dark:text-primary mt-4">{services.description}</p>
      </div>

      {/* Service Cards */}
      <div className="container mx-auto px-4 lg:px-16 md:px-0 ">
  <div className="grid grid-cols-2 md:grid-cols-2 lg:flex lg:gap-6 justify-center gap-6">
    {services.images.map((item, index) => (
      <div
        key={index}
        className="relative shadow-lg overflow-hidden flex justify-center items-center"
      >
        <img
          src={item.src}
          alt={item.alt}
          height={240}
          width={240}
          className="rounded-lg object-cover md:rounded-none w-full"
        />
      </div>
    ))}
  </div>
</div>

        
      
    </section>
  );
};

export default Services;
