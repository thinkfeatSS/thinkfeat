'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiTarget, FiUsers, FiZap, FiAward } from 'react-icons/fi';

const values = [
  {
    icon: FiTarget,
    title: 'Innovation First',
    description: 'We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.'
  },
  {
    icon: FiUsers,
    title: 'Client-Centric',
    description: 'Your success is our priority. We work closely with you to understand and exceed your expectations.'
  },
  {
    icon: FiZap,
    title: 'Fast & Efficient',
    description: 'Quick turnaround times without compromising on quality or attention to detail.'
  },
  {
    icon: FiAward,
    title: 'Excellence',
    description: 'We maintain the highest standards in every project, ensuring outstanding results.'
  }
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-surface/20 to-transparent dark:from-transparent dark:via-surface-dark/10 dark:to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent">
              About
            </span>
            <span className="text-text dark:text-text-dark"> Thinkfeat</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-text-secondary dark:text-text-secondary-dark max-w-3xl mx-auto leading-relaxed"
          >
            We are a forward-thinking software company dedicated to transforming ideas into powerful digital solutions. 
            Our team combines creativity with technical expertise to deliver innovative applications that drive business growth.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-text dark:text-text-dark mb-6">
              Transforming Ideas Into Reality
            </h3>
            
            <p className="text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed">
              At Thinkfeat, we believe that great software starts with understanding your vision. 
              Our collaborative approach ensures that every project is tailored to your specific needs, 
              delivering solutions that not only meet but exceed expectations.
            </p>
            
            <p className="text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed">
              From concept to deployment, we handle every aspect of your digital transformation journey. 
              Our expertise spans web development, mobile applications, AI solutions, and immersive 3D experiences.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                'Custom Software Development',
                'AI & Machine Learning',
                '3D Visualization',
                'Mobile App Development',
                'Cloud Solutions',
                '24/7 Support'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-primary dark:bg-secondary rounded-full" />
                  <span className="text-text-secondary dark:text-text-secondary-dark">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-yellow-300/20 to-primary/20 dark:from-secondary/20 dark:via-yellow-300/20 dark:to-secondary/20" />
              
              {/* Animated Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 border-2 border-primary/30 dark:border-secondary/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48 border-2 border-yellow-300/20 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute w-24 h-24 bg-gradient-to-br from-primary to-yellow-300 rounded-full opacity-20"
                />
              </div>
              
              {/* Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="absolute w-3 h-3 bg-primary/40 dark:bg-secondary/40 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 rounded-2xl bg-white/5 dark:bg-surface-dark/20 backdrop-blur-sm border border-white/10 dark:border-border-dark/20 hover:border-primary/30 dark:hover:border-secondary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-300 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-6 h-6 text-background" />
              </div>
              <h4 className="text-xl font-semibold text-text dark:text-text-dark mb-3">
                {value.title}
              </h4>
              <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 