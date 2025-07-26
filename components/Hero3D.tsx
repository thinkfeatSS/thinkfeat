'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { Button } from './ui';

// Create a client-only wrapper for CSS-based 3D components
const ThreeScene = dynamic(() => import('./CSS3DScene'), { 
  ssr: false,
  loading: () => <ThreeFallback />
});

// Import fallback component
import ThreeFallback from './ThreeFallback';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/30 to-background/60 dark:from-transparent dark:via-background-dark/30 dark:to-background-dark/70 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent drop-shadow-lg">
              Build the Future
            </span>
            <br />
            <span className="text-text dark:text-text-dark drop-shadow-lg font-extrabold">
              of Software with Us
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary dark:text-text-secondary-dark max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium"
          >
            Innovating technology for tomorrow&apos;s world with cutting-edge solutions, 
            AI-powered applications, and immersive 3D experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="gradient"
              size="lg"
              icon={<FiArrowRight className="w-5 h-5" />}
              iconPosition="right"
              className="group"
            >
              Get Started
            </Button>

            <Button
              variant="outline"
              size="lg"
              icon={<FiPlay className="w-5 h-5" />}
              className="group"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
          >
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-white/10 dark:bg-black/5 backdrop-blur-sm border border-white/20 dark:border-black/10 hover:border-primary/40 dark:hover:border-secondary/30 hover:bg-white/20 dark:hover:bg-black/10 transition-all duration-300 shadow-lg"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary dark:text-secondary mb-2 drop-shadow-md">
                  {stat.number}
                </div>
                <div className="text-text-secondary dark:text-text-secondary-dark font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary dark:border-secondary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary dark:bg-secondary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 