'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    avatar: '/images/avatar1.jpg',
    content: 'Thinkfeat transformed our business with their innovative software solutions. The team\'s expertise and dedication exceeded our expectations. Highly recommended!',
    rating: 5,
    company: 'TechStart Inc.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, InnovateCorp',
    avatar: '/images/avatar2.jpg',
    content: 'Working with Thinkfeat was a game-changer for our company. Their 3D visualization capabilities brought our products to life in ways we never imagined possible.',
    rating: 5,
    company: 'InnovateCorp'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager, DataFlow',
    avatar: '/images/avatar3.jpg',
    content: 'The AI solutions developed by Thinkfeat have revolutionized our data processing capabilities. The team is incredibly talented and professional.',
    rating: 5,
    company: 'DataFlow'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Founder, MobileFirst',
    avatar: '/images/avatar4.jpg',
    content: 'Thinkfeat delivered an exceptional mobile app that exceeded all our requirements. Their attention to detail and user experience design is outstanding.',
    rating: 5,
    company: 'MobileFirst'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Director, CloudTech',
    avatar: '/images/avatar5.jpg',
    content: 'The cloud infrastructure solutions provided by Thinkfeat have made our operations more efficient and scalable. Their expertise is unmatched.',
    rating: 5,
    company: 'CloudTech'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-dark-surface/10 to-transparent dark:from-transparent dark:via-dark-surface/5 dark:to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-dark-primary to-yellow-300 bg-clip-text text-transparent">
              What Our
            </span>
            <span className="text-dark-text dark:text-light-text"> Clients Say</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-dark-text-secondary dark:text-light-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Don't just take our word for it. Here's what our clients have to say about working with Thinkfeat.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Carousel Container */}
          <div className="relative h-96 overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0"
              >
                <div className="h-full p-8 bg-white/5 dark:bg-dark-surface/20 backdrop-blur-sm border border-white/10 dark:border-dark-border/20 rounded-2xl">
                  <div className="h-full flex flex-col justify-center">
                    {/* Quote Icon */}
                    <div className="text-6xl text-dark-primary/20 dark:text-light-primary/20 mb-6">
                      "
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-lg md:text-xl text-dark-text dark:text-light-text leading-relaxed mb-8 flex-1">
                      {testimonials[currentIndex]?.content}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonials[currentIndex]?.rating || 0)].map((_, i) => (
                        <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-dark-primary to-yellow-300 rounded-full flex items-center justify-center text-dark-background font-bold text-lg">
                        {testimonials[currentIndex]?.name?.charAt(0) || '?'}
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark-text dark:text-light-text">
                          {testimonials[currentIndex]?.name || 'Unknown'}
                        </h4>
                        <p className="text-dark-text-secondary dark:text-light-text-secondary">
                          {testimonials[currentIndex]?.role || 'Unknown Role'}
                        </p>
                        <p className="text-sm text-dark-primary dark:text-light-primary">
                          {testimonials[currentIndex]?.company || 'Unknown Company'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 dark:bg-dark-surface/30 backdrop-blur-sm border border-white/20 dark:border-dark-border/20 rounded-full flex items-center justify-center text-dark-text-secondary dark:text-light-text-secondary hover:text-dark-primary dark:hover:text-light-primary transition-all duration-300"
          >
            <FiChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 dark:bg-dark-surface/30 backdrop-blur-sm border border-white/20 dark:border-dark-border/20 rounded-full flex items-center justify-center text-dark-text-secondary dark:text-light-text-secondary hover:text-dark-primary dark:hover:text-light-primary transition-all duration-300"
          >
            <FiChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Dots Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-3 mt-8"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-dark-primary to-yellow-300'
                  : 'bg-white/30 dark:bg-dark-text-secondary/30'
              }`}
            />
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {[
            { number: '98%', label: 'Client Satisfaction' },
            { number: '150+', label: 'Projects Delivered' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-dark-primary dark:text-light-primary mb-2">
                {stat.number}
              </div>
              <div className="text-dark-text-secondary dark:text-light-text-secondary">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 