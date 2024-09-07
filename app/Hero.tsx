'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
      <section className="flex flex-col gap-4 md:gap-8 lg:gap-12 md:flex-row justify-center items-center dark:bg-surface-color bg-on-surface-color text-on-surface-color mx-4 md:mx-8 lg:max-w-[960px] lg:mx-auto xl:mx-32 xl:max-w-full 2xl:max-w-[1296px] 2xl:mx-auto">
        {/* Content on the left side */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center justify-center md:items-start">
          <motion.h1
            className="text-center md:text-left mobile-display-medium md:tablet-display-large xl:desktop-heading-one font-bold dark:text-primary text-on-primary"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transforming <span className='bg-primary-container text-primary rounded-full px-4 mobile-display-small md:tablet-display-medium xl:desktop-heading-two uppercase'>Ideas</span > into Innovative <span className='bg-primary-container text-primary rounded-full px-4 mobile-display-small md:tablet-display-medium xl:desktop-heading-two uppercase'>Solutions</span>
          </motion.h1>
          <motion.p
            className="mt-4 mobile-body-large md:tablet-body-large xl:desktop-body-one dark:text-secondary-container text-primary-container p-4 w-fit "
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
            <p className="mobile-body-medium md:tablet-body-medium xl:desktop-body-two text-surface-color dark:text-on-surface-color">
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
              height={1743} />
          </motion.div>
        </div>

      </section>

  );
};

export default HeroSection;
