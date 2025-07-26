'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { FiCode, FiSmartphone, FiCpu, FiBox, FiCloud, FiShield } from 'react-icons/fi';

// Dynamically import the CSS-based 3D scene component
const Service3DScene = dynamic(() => import('./CSSServiceScene'), { 
  ssr: false,
  loading: () => <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary animate-pulse rounded-lg" />
});



const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
    color: '#FCF5A5',
    features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration']
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    color: '#8C6239',
    features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization']
  },
  {
    icon: FiCpu,
    title: 'AI Solutions',
    description: 'Intelligent applications powered by machine learning and artificial intelligence.',
    color: '#FCF5A5',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
    icon: FiBox,
    title: '3D Visualization',
    description: 'Immersive 3D experiences and visualizations for enhanced user engagement.',
    color: '#8C6239',
    features: ['Three.js', 'WebGL', '3D Modeling', 'Interactive Experiences']
  },
  {
    icon: FiCloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
    color: '#FCF5A5',
    features: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD Pipelines', 'Serverless Architecture']
  },
  {
    icon: FiShield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    color: '#8C6239',
    features: ['Security Audits', 'Penetration Testing', 'Data Encryption', 'Compliance']
  }
];



export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
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
            
            <span className="text-dark-text dark:text-light-text">Our Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-dark-text-secondary dark:text-light-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive software solutions tailored to your business needs. 
            From web development to AI-powered applications, we&apos;ve got you covered.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-white/5 dark:bg-dark-surface/20 backdrop-blur-sm border border-white/10 dark:border-dark-border/20 hover:border-dark-primary/30 dark:hover:border-light-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent dark:from-transparent dark:via-dark-primary/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* 3D Scene */}
              <div className="relative z-10 mb-6">
                <div className="w-20 h-20 mx-auto mb-4">
                  <Service3DScene color={service.color} />
                </div>
                
                {/* Icon Overlay */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-gradient-to-br from-dark-primary to-yellow-300 rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-dark-background" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-dark-text dark:text-light-text mb-4 text-center">
                  {service.title}
                </h3>
                
                <p className="text-dark-text-secondary dark:text-light-text-secondary text-center mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-dark-primary dark:bg-light-primary rounded-full flex-shrink-0" />
                      <span className="text-dark-text-secondary dark:text-light-text-secondary">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-dark-primary to-yellow-300 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="bg-gradient-to-r from-dark-primary to-yellow-300 text-dark-background px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              View All Services
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 