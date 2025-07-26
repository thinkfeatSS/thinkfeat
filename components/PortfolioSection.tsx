'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

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
    featured: true
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
    featured: true
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
    featured: false
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
    featured: true
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
    featured: false
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
    featured: false
  }
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-32 relative overflow-hidden">
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
              Our
            </span>
            <span className="text-dark-text dark:text-light-text"> Portfolio</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-dark-text-secondary dark:text-light-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Explore our latest projects and see how we transform ideas into powerful digital solutions.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
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
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-dark-primary to-yellow-300 text-dark-background shadow-lg'
                  : 'bg-white/5 dark:bg-dark-surface/20 text-dark-text-secondary dark:text-light-text-secondary hover:bg-white/10 dark:hover:bg-dark-surface/30 border border-white/10 dark:border-dark-border/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
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
                className="group relative bg-white/5 dark:bg-dark-surface/20 rounded-2xl overflow-hidden border border-white/10 dark:border-dark-border/20 hover:border-dark-primary/30 dark:hover:border-light-primary/30 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-primary/20 via-yellow-300/20 to-dark-primary/20 dark:from-light-primary/20 dark:via-yellow-300/20 dark:to-light-primary/20" />
                  
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-dark-primary/30 dark:text-light-primary/30">
                      {project.category === 'Web' && '🌐'}
                      {project.category === 'Mobile' && '📱'}
                      {project.category === '3D' && '🎨'}
                      {project.category === 'AI' && '🤖'}
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedProject(project)}
                        className="w-12 h-12 bg-dark-primary rounded-full flex items-center justify-center text-dark-background hover:bg-yellow-300 transition-colors duration-300"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </motion.button>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-dark-primary rounded-full flex items-center justify-center text-dark-background hover:bg-yellow-300 transition-colors duration-300"
                      >
                        <FiGithub className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-dark-primary to-yellow-300 text-dark-background px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-text dark:text-light-text mb-2">
                    {project.title}
                  </h3>
                  <p className="text-dark-text-secondary dark:text-light-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 dark:bg-dark-surface/30 rounded-full text-xs text-dark-text-secondary dark:text-light-text-secondary"
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

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 dark:border-dark-border/20">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-dark-text dark:text-light-text mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-dark-text-secondary dark:text-light-text-secondary">
                      {selectedProject.description}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="w-8 h-8 bg-white/10 dark:bg-dark-surface/30 rounded-full flex items-center justify-center text-dark-text-secondary dark:text-light-text-secondary hover:text-dark-primary dark:hover:text-light-primary transition-colors duration-200"
                  >
                    <FiX className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Project Image */}
                  <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-dark-primary/20 via-yellow-300/20 to-dark-primary/20 dark:from-light-primary/20 dark:via-yellow-300/20 dark:to-light-primary/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl text-dark-primary/30 dark:text-light-primary/30">
                        {selectedProject.category === 'Web' && '🌐'}
                        {selectedProject.category === 'Mobile' && '📱'}
                        {selectedProject.category === '3D' && '🎨'}
                        {selectedProject.category === 'AI' && '🤖'}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-text dark:text-light-text mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-dark-primary/20 to-yellow-300/20 dark:from-light-primary/20 dark:to-yellow-300/20 rounded-full text-sm text-dark-text dark:text-light-text"
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
                        className="flex-1 bg-gradient-to-r from-dark-primary to-yellow-300 text-dark-background px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
                      >
                        View Live
                      </motion.a>
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 border-2 border-dark-primary dark:border-light-primary text-dark-primary dark:text-light-primary px-6 py-3 rounded-full font-semibold text-center hover:bg-dark-primary hover:text-dark-background dark:hover:bg-light-primary dark:hover:text-light-background transition-all duration-300"
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