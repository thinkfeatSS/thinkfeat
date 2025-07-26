'use client';

import { motion } from 'framer-motion';

export default function ThreeFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-background to-background-dark flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="text-4xl mb-4"
        >
          🎨
        </motion.div>
        <div className="text-sm text-text-secondary dark:text-text-secondary-dark font-medium">
          Loading 3D Experience...
        </div>
      </motion.div>
    </div>
  );
} 