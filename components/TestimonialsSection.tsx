'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

// Move testimonials data outside component to prevent re-creation
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Thinkfeat transformed our business with their innovative software solutions. The team\'s expertise and dedication exceeded our expectations. Highly recommended!',
    rating: 5,
    company: 'TechStart Inc.',
    initials: 'SJ'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, InnovateCorp',
    content: 'Working with Thinkfeat was a game-changer for our company. Their 3D visualization capabilities brought our products to life in ways we never imagined possible.',
    rating: 5,
    company: 'InnovateCorp',
    initials: 'MC'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager, DataFlow',
    content: 'The AI solutions developed by Thinkfeat have revolutionized our data processing capabilities. The team is incredibly talented and professional.',
    rating: 5,
    company: 'DataFlow',
    initials: 'ER'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Founder, MobileFirst',
    content: 'Thinkfeat delivered an exceptional mobile app that exceeded all our requirements. Their attention to detail and user experience design is outstanding.',
    rating: 5,
    company: 'MobileFirst',
    initials: 'DT'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Director, CloudTech',
    content: 'The cloud infrastructure solutions provided by Thinkfeat have made our operations more efficient and scalable. Their expertise is unmatched.',
    rating: 5,
    company: 'CloudTech',
    initials: 'LW'
  }
];

// Animation variants moved outside component
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95
  })
};

const stats = [
  { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
  { number: '150+', label: 'Projects Delivered', icon: '🚀' },
  { number: '24/7', label: 'Support Available', icon: '🛡️' },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Memoized values for performance
  const currentTestimonial = useMemo(() => testimonials[currentIndex], [currentIndex]);
  const swipeConfidenceThreshold = 10000;

  // Optimized swipe power calculation
  const swipePower = useCallback((offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  }, []);

  // Optimized pagination function
  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance carousel with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Increased to 6 seconds for better UX

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 'ArrowRight') {
        paginate(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  // Render star rating component
  const renderStars = useCallback((rating: number) => (
    <div className="flex items-center gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {[...Array(rating)].map((_, i) => (
        <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
  ), []);

  return (
    <section 
      id="testimonials" 
      className="py-20 lg:py-32 relative overflow-hidden"
      aria-label="Client Testimonials"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent dark:from-transparent dark:via-blue-400/3 dark:to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-blue-500/15 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
                      <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 dark:border-purple-400/30 mb-6"
            >
              <span className="text-lg text-blue-600 dark:text-blue-400">"</span>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Client Testimonials
              </span>
            </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="">
              What Our
            </span>
            <span className="text-gray-800 dark:text-gray-100"> Clients Say</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Don't just take our word for it. Here's what our clients have to say about working with Thinkfeat.
          </motion.p>
        </motion.div>

        {/* Enhanced Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Enhanced Carousel Container */}
          <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
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
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
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
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <div className="h-full p-8 md:p-12 bg-gradient-to-br from-white/20 to-white/10 dark:from-gray-800/40 dark:to-gray-900/20 backdrop-blur-xl border border-white/30 dark:border-gray-600/40 rounded-3xl relative overflow-hidden shadow-2xl">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl" />
                  
                  <div className="relative h-full flex flex-col justify-center">
                    {/* Enhanced Quote Icon */}
                    <div className="text-8xl text-blue-500/20 dark:text-blue-400/20 mb-8 -mt-4">
                      "
                    </div>

                    {/* Enhanced Testimonial Content */}
                    <blockquote className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 leading-relaxed mb-8 flex-1 font-medium">
                      "{currentTestimonial?.content}"
                    </blockquote>

                    {/* Enhanced Rating */}
                    <div className="mb-6">
                      {renderStars(currentTestimonial?.rating || 0)}
                    </div>

                    {/* Enhanced Author Info */}
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {currentTestimonial?.initials || '??'}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1">
                          {currentTestimonial?.name || 'Unknown'}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-1">
                          {currentTestimonial?.role || 'Unknown Role'}
                        </p>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {currentTestimonial?.company || 'Unknown Company'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/25 dark:bg-gray-800/60 backdrop-blur-xl border border-white/40 dark:border-gray-600/50 rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-7 h-7" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/25 dark:bg-gray-800/60 backdrop-blur-xl border border-white/40 dark:border-gray-600/50 rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-7 h-7" />
          </motion.button>
        </motion.div>

        {/* Enhanced Dots Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-3 mt-10"
          role="tablist"
          aria-label="Testimonial navigation"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                  : 'bg-gray-400/60 dark:bg-gray-500/60 hover:bg-gray-500/80 dark:hover:bg-gray-400/80'
              }`}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-white/30 to-white/20 dark:from-gray-800/50 dark:to-gray-900/30 backdrop-blur-sm border border-white/40 dark:border-gray-600/40 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 