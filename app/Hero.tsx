'use client';
import AnimatPrimarybtn from '@/components/AnimatPrimarybtn';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { path: '/images/thinkeat software solutions class.jpg', alt: 'Software Development' },
    { path: '/images/thinkeat software solutions meet.jpg', alt: 'Training Sessions' },
    { path: '/images/thinkeat software solutions team.jpg', alt: 'Expert Guidance' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex flex-col gap-4 md:gap-8 lg:gap-12 md:flex-row justify-center items-center bg-surface-color text-on-surface-color mx-4 md:mx-8 lg:max-w-[960px] lg:mx-auto xl:mx-32 xl:max-w-full 2xl:max-w-[1296px] 2xl:mx-auto sticky top-0 h-[768px]">
  {/* Content on the left side */}
  <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center justify-center md:items-start">
    <motion.h1 
      className="text-center md:text-left mobile-display-medium md:tablet-display-large xl:desktop-heading-one font-bold text-primary"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Transforming <span className='bg-primary-container rounded-full px-4 mobile-display-small md:tablet-display-medium xl:desktop-heading-two uppercase'>Ideas</span > into Innovative <span className='bg-primary-container rounded-full px-4 mobile-display-small md:tablet-display-medium xl:desktop-heading-two uppercase'>Solutions</span>
    </motion.h1>
    <motion.p 
      className="mt-4 mobile-body-large md:tablet-body-large xl:desktop-body-one text-secondary-container p-4 w-fit "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      Your Partner in Software Excellence
    </motion.p>
    <motion.div 
      className="mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <p className="mobile-body-medium md:tablet-body-medium xl:desktop-body-two text-on-primary-container">
        We deliver tailored software solutions, professional training, and expert guidance to help you thrive in the digital world.
      </p>
    </motion.div>
  </div>

  {/* Slider on the right side */}
  <div className="flex items-center justify-center">
    <motion.div 
      className="rounded-lg aspect-goldenRatio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Image
      className='hidden  md:block'
        src="/images/thinkfeat hero image.png"
        alt="icon"
        layout="fit"
        width={2765}
        height={1743}      />
    </motion.div>
  </div>

</section>

  );
};

export default HeroSection;
