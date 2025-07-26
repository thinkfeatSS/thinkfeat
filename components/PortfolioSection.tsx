'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub, FiX, FiFilter } from 'react-icons/fi';

// Move data outside component to prevent re-creation
const categories = ['All', 'Web', 'Mobile', '3D', 'AI'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web',
    description: 'Modern e-commerce platform with advanced features and seamless user experience.',
    image: '/images/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    icon: '🌐'
  },
  {
    id: 2,
    title: 'AI Chat Assistant',
    category: 'AI',
    description: 'Intelligent chatbot powered by machine learning for customer support.',
    image: '/images/project2.jpg',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    icon: '🤖'
  },
  {
    id: 3,
    title: '3D Product Viewer',
    category: '3D',
    description: 'Interactive 3D product visualization for enhanced shopping experience.',
    image: '/images/project3.jpg',
    technologies: ['Three.js', 'React', 'WebGL', 'Blender'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    icon: '🎨'
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    category: 'Mobile',
    description: 'Secure and user-friendly mobile banking application.',
    image: '/images/project4.jpg',
    technologies: ['React Native', 'Firebase', 'Redux', 'Biometrics'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    icon: '📱'
  },
  {
    id: 5,
    title: 'Real-time Dashboard',
    category: 'Web',
    description: 'Analytics dashboard with real-time data visualization.',
    image: '/images/project5.jpg',
    technologies: ['Vue.js', 'D3.js', 'WebSocket', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    icon: '📊'
  },
  {
    id: 6,
    title: 'AR Navigation App',
    category: 'Mobile',
    description: 'Augmented reality navigation with indoor mapping capabilities.',
    image: '/images/project6.jpg',
    technologies: ['Unity', 'ARKit', 'C#', 'Google Maps API'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    icon: '🧭'
  }
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const modalContentVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 }
};

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Memoized filtered projects for performance
  const filteredProjects = useMemo(() => 
    selectedCategory === 'All' 
      ? projects 
      : projects.filter(project => project.category === selectedCategory),
    [selectedCategory]
  );

  // Optimized category selection handler
  const handleCategorySelect = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  // Optimized project selection handler
  const handleProjectSelect = useCallback((project: typeof projects[0]) => {
    setSelectedProject(project);
  }, []);

  // Optimized modal close handler
  const handleModalClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section id="portfolio" className="py-20 lg:py-32 relative overflow-hidden">
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
            <FiFilter className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Our Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="">
              Our
            </span>
            <span className="text-gray-800 dark:text-gray-100"> Portfolio</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our latest projects and see how we transform ideas into powerful digital solutions.
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategorySelect(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/20 dark:bg-gray-800/40 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-700/50 border border-white/30 dark:border-gray-600/40'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/20 dark:bg-gray-800/40 rounded-2xl overflow-hidden border border-white/30 dark:border-gray-600/40 hover:border-blue-500/50 dark:hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {/* Enhanced Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20" />
                  
                  {/* Enhanced Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-30">
                      {project.icon}
                    </div>
                  </div>

                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleProjectSelect(project)}
                        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-300 shadow-lg"
                        aria-label={`View details for ${project.title}`}
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </motion.button>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-300 shadow-lg"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FiGithub className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Enhanced Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      Featured
                    </div>
                  )}
                </div>

                {/* Enhanced Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Enhanced Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/30 dark:bg-gray-700/50 rounded-full text-xs text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={handleModalClose}
          >
            <motion.div
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Modal Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-600">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedProject.description}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleModalClose}
                    className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <FiX className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Enhanced Modal Content */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Enhanced Project Image */}
                  <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl opacity-30">
                        {selectedProject.icon}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Project Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm text-gray-700 dark:text-gray-300 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
                      >
                        View Live
                      </motion.a>
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 border-2 border-blue-600 dark:border-purple-500 text-blue-600 dark:text-purple-500 px-6 py-3 rounded-full font-semibold text-center hover:bg-blue-600 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white transition-all duration-300"
                      >
                        View Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 