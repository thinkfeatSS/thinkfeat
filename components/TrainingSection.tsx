'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiDatabase, FiTrendingUp, FiDollarSign, FiClock, FiUsers, FiAward, FiBook, FiPlay, FiCheck } from 'react-icons/fi';
import { Button, Card, Badge, Modal } from './ui';

const trainingPrograms = [
  {
    id: 1,
    title: 'Python Programming',
    icon: FiCode,
    duration: '8 Weeks',
    level: 'Beginner to Advanced',
    price: '$299',
    originalPrice: '$399',
    description: 'Master Python programming from basics to advanced concepts including web development, automation, and data analysis.',
    features: [
      'Python Fundamentals & OOP',
      'Web Development with Django/Flask',
      'Data Analysis with Pandas & NumPy',
      'Automation & Scripting',
      'API Development',
      'Database Integration',
      'Project Portfolio',
      'Career Guidance'
    ],
    curriculum: [
      { week: 1, topic: 'Python Basics & Variables', duration: '10 hours' },
      { week: 2, topic: 'Control Structures & Functions', duration: '12 hours' },
      { week: 3, topic: 'Object-Oriented Programming', duration: '15 hours' },
      { week: 4, topic: 'File Handling & Modules', duration: '10 hours' },
      { week: 5, topic: 'Web Development Basics', duration: '12 hours' },
      { week: 6, topic: 'Django Framework', duration: '15 hours' },
      { week: 7, topic: 'Database & API Development', duration: '12 hours' },
      { week: 8, topic: 'Final Project & Deployment', duration: '15 hours' }
    ],
    color: '#3776AB',
    popular: true
  },
  {
    id: 2,
    title: 'JavaScript Full Stack',
    icon: FiCode,
    duration: '10 Weeks',
    level: 'Intermediate to Advanced',
    price: '$399',
    originalPrice: '$499',
    description: 'Complete JavaScript mastery including modern ES6+, Node.js, and full-stack development capabilities.',
    features: [
      'Modern JavaScript (ES6+)',
      'React.js & Next.js',
      'Node.js & Express.js',
      'MongoDB & Database Design',
      'RESTful APIs',
      'Authentication & Security',
      'Deployment & DevOps',
      'Real-world Projects'
    ],
    curriculum: [
      { week: 1, topic: 'JavaScript Fundamentals', duration: '12 hours' },
      { week: 2, topic: 'ES6+ Features & Async Programming', duration: '15 hours' },
      { week: 3, topic: 'DOM Manipulation & Events', duration: '10 hours' },
      { week: 4, topic: 'React.js Basics', duration: '15 hours' },
      { week: 5, topic: 'React Hooks & State Management', duration: '12 hours' },
      { week: 6, topic: 'Node.js & Express.js', duration: '15 hours' },
      { week: 7, topic: 'MongoDB & Database Design', duration: '12 hours' },
      { week: 8, topic: 'Authentication & Security', duration: '10 hours' },
      { week: 9, topic: 'API Development & Testing', duration: '12 hours' },
      { week: 10, topic: 'Deployment & Final Project', duration: '15 hours' }
    ],
    color: '#F7DF1E',
    popular: false
  },
  {
    id: 3,
    title: 'MERN Stack Development',
    icon: FiDatabase,
    duration: '12 Weeks',
    level: 'Advanced',
    price: '$499',
    originalPrice: '$599',
    description: 'Complete MERN stack development course covering MongoDB, Express.js, React.js, and Node.js.',
    features: [
      'MongoDB Database Design',
      'Express.js Backend Development',
      'React.js Frontend Development',
      'Node.js Server Development',
      'Full-Stack Integration',
      'Authentication & Authorization',
      'Real-time Features',
      'Production Deployment'
    ],
    curriculum: [
      { week: 1, topic: 'MongoDB Fundamentals', duration: '12 hours' },
      { week: 2, topic: 'Express.js Framework', duration: '15 hours' },
      { week: 3, topic: 'React.js Advanced Concepts', duration: '15 hours' },
      { week: 4, topic: 'Node.js Server Development', duration: '12 hours' },
      { week: 5, topic: 'API Development & Testing', duration: '15 hours' },
      { week: 6, topic: 'Authentication & Security', duration: '12 hours' },
      { week: 7, topic: 'State Management (Redux)', duration: '15 hours' },
      { week: 8, topic: 'Real-time Features (Socket.io)', duration: '12 hours' },
      { week: 9, topic: 'File Upload & Cloud Storage', duration: '10 hours' },
      { week: 10, topic: 'Payment Integration', duration: '12 hours' },
      { week: 11, topic: 'Performance Optimization', duration: '10 hours' },
      { week: 12, topic: 'Deployment & Final Project', duration: '15 hours' }
    ],
    color: '#61DAFB',
    popular: true
  },
  {
    id: 4,
    title: 'Data Science & AI',
    icon: FiTrendingUp,
    duration: '16 Weeks',
    level: 'Intermediate to Advanced',
    price: '$699',
    originalPrice: '$799',
    description: 'Comprehensive data science and artificial intelligence course covering machine learning, deep learning, and AI applications.',
    features: [
      'Python for Data Science',
      'Machine Learning Algorithms',
      'Deep Learning with TensorFlow',
      'Natural Language Processing',
      'Computer Vision',
      'Big Data Analytics',
      'AI Model Deployment',
      'Industry Projects'
    ],
    curriculum: [
      { week: 1, topic: 'Python for Data Science', duration: '15 hours' },
      { week: 2, topic: 'Data Manipulation & Visualization', duration: '12 hours' },
      { week: 3, topic: 'Statistical Analysis', duration: '15 hours' },
      { week: 4, topic: 'Machine Learning Basics', duration: '15 hours' },
      { week: 5, topic: 'Supervised Learning', duration: '15 hours' },
      { week: 6, topic: 'Unsupervised Learning', duration: '12 hours' },
      { week: 7, topic: 'Deep Learning Fundamentals', duration: '15 hours' },
      { week: 8, topic: 'Neural Networks', duration: '15 hours' },
      { week: 9, topic: 'Computer Vision', duration: '15 hours' },
      { week: 10, topic: 'Natural Language Processing', duration: '15 hours' },
      { week: 11, topic: 'Big Data & Spark', duration: '12 hours' },
      { week: 12, topic: 'Model Deployment', duration: '10 hours' },
      { week: 13, topic: 'AI Ethics & Bias', duration: '8 hours' },
      { week: 14, topic: 'Industry Case Studies', duration: '12 hours' },
      { week: 15, topic: 'Advanced AI Applications', duration: '15 hours' },
      { week: 16, topic: 'Capstone Project', duration: '20 hours' }
    ],
    color: '#FF6B6B',
    popular: false
  },
  {
    id: 5,
    title: 'Digital Marketing',
    icon: FiTrendingUp,
    duration: '6 Weeks',
    level: 'All Levels',
    price: '$199',
    originalPrice: '$299',
    description: 'Complete digital marketing course covering SEO, social media, content marketing, and paid advertising.',
    features: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Content Marketing Strategy',
      'Google Ads & PPC',
      'Email Marketing',
      'Analytics & Reporting',
      'Marketing Automation',
      'Campaign Management'
    ],
    curriculum: [
      { week: 1, topic: 'Digital Marketing Fundamentals', duration: '10 hours' },
      { week: 2, topic: 'SEO & Content Strategy', duration: '12 hours' },
      { week: 3, topic: 'Social Media Marketing', duration: '15 hours' },
      { week: 4, topic: 'Google Ads & PPC', duration: '12 hours' },
      { week: 5, topic: 'Email Marketing & Automation', duration: '10 hours' },
      { week: 6, topic: 'Analytics & Campaign Management', duration: '12 hours' }
    ],
    color: '#4CAF50',
    popular: false
  },
  {
    id: 6,
    title: 'Fiverr Mastery',
    icon: FiDollarSign,
    duration: '4 Weeks',
    level: 'All Levels',
    price: '$99',
    originalPrice: '$149',
    description: 'Master Fiverr freelancing platform to build a successful online business and earn money from your skills.',
    features: [
      'Fiverr Account Setup',
      'Gig Creation & Optimization',
      'Pricing Strategies',
      'Client Communication',
      'Portfolio Building',
      'Marketing & Promotion',
      'Business Scaling',
      'Success Stories'
    ],
    curriculum: [
      { week: 1, topic: 'Fiverr Platform Mastery', duration: '8 hours' },
      { week: 2, topic: 'Gig Creation & Optimization', duration: '10 hours' },
      { week: 3, topic: 'Client Management & Communication', duration: '8 hours' },
      { week: 4, topic: 'Business Scaling & Marketing', duration: '10 hours' }
    ],
    color: '#1DBF73',
    popular: false
  }
];

export default function TrainingSection() {
  const [selectedCourse, setSelectedCourse] = useState<typeof trainingPrograms[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="training" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-surface/10 to-transparent dark:from-transparent dark:via-surface-dark/5 dark:to-transparent" />
      
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
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent drop-shadow-lg">
              Training
            </span>
            <span className="text-text dark:text-text-dark drop-shadow-lg font-extrabold"> Programs</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-text-secondary dark:text-text-secondary-dark max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Master in-demand skills with our comprehensive training programs. 
            From programming to digital marketing, we've got you covered with expert-led courses.
          </motion.p>
        </motion.div>

        {/* Training Programs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {trainingPrograms.map((program) => (
            <Card
              key={program.id}
              variant="default"
              hover
              className="group relative overflow-hidden"
            >
              {/* Popular Badge */}
              {program.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="gradient" size="sm">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className="p-6 border-b border-white/10 dark:border-border-dark/20">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-background"
                    style={{ backgroundColor: program.color }}
                  >
                    <program.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text dark:text-text-dark drop-shadow-sm">
                      {program.title}
                    </h3>
                    <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-medium">
                      {program.level}
                    </p>
                  </div>
                </div>

                <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed mb-4 font-medium">
                  {program.description}
                </p>

                {/* Course Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark">
                      <FiClock className="w-4 h-4" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark">
                      <FiUsers className="w-4 h-4" />
                      {program.curriculum.length} Modules
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary dark:text-secondary">
                    {program.price}
                  </span>
                  <span className="text-text-secondary dark:text-text-secondary-dark line-through">
                    {program.originalPrice}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="font-semibold text-text dark:text-text-dark mb-3 drop-shadow-sm">
                  What You'll Learn:
                </h4>
                <ul className="space-y-2 mb-6">
                  {program.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-secondary-dark font-medium">
                      <FiCheck className="w-4 h-4 text-primary dark:text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    onClick={() => setSelectedCourse(program)}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Course Details Modal */}
        <Modal
          isOpen={!!selectedCourse}
          onClose={() => setSelectedCourse(null)}
          size="xl"
        >
          {selectedCourse && (
            <>
              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-background"
                  style={{ backgroundColor: selectedCourse.color }}
                >
                  <selectedCourse.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text dark:text-text-dark">
                    {selectedCourse.title}
                  </h3>
                  <p className="text-text-secondary dark:text-text-secondary-dark">
                    {selectedCourse.level} • {selectedCourse.duration}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Course Info */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-text dark:text-text-dark mb-3">
                      Course Description
                    </h4>
                    <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                      {selectedCourse.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-text dark:text-text-dark mb-3">
                      What You'll Learn
                    </h4>
                    <ul className="space-y-2">
                      {selectedCourse.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-text-secondary dark:text-text-secondary-dark">
                          <FiCheck className="w-4 h-4 text-primary dark:text-secondary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-text dark:text-text-dark mb-3">
                      Course Includes
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark">
                        <FiClock className="w-4 h-4 text-primary dark:text-secondary" />
                        {selectedCourse.duration}
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark">
                        <FiBook className="w-4 h-4 text-primary dark:text-secondary" />
                        {selectedCourse.curriculum.length} Modules
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark">
                        <FiPlay className="w-4 h-4 text-primary dark:text-secondary" />
                        Video Lectures
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark">
                        <FiAward className="w-4 h-4 text-primary dark:text-secondary" />
                        Certificate
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Curriculum */}
                <div>
                  <h4 className="text-lg font-semibold text-text dark:text-text-dark mb-4">
                    Course Curriculum
                  </h4>
                  <div className="space-y-3">
                    {selectedCourse.curriculum.map((module, index) => (
                      <Card
                        key={index}
                        variant="default"
                        className="p-4"
                      >
                        <div className="flex justify-between items-center">
                          <h5 className="font-medium text-text dark:text-text-dark">
                            Week {module.week}: {module.topic}
                          </h5>
                          <span className="text-sm text-text-secondary dark:text-text-secondary-dark">
                            {module.duration}
                          </span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-8 pt-6 border-t border-white/10 dark:border-border-dark/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-primary dark:text-secondary">
                        {selectedCourse.price}
                      </span>
                      <span className="text-text-secondary dark:text-text-secondary-dark line-through">
                        {selectedCourse.originalPrice}
                      </span>
                    </div>
                    <p className="text-text-secondary dark:text-text-secondary-dark">
                      One-time payment • Lifetime access
                    </p>
                  </div>
                  <Button
                    variant="gradient"
                    size="lg"
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </>
          )}
        </Modal>
      </div>
    </section>
  );
} 