'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';



export default function CSS3DScene() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* CSS-based 3D particles */}
      <div className="absolute inset-0">
        {/* Large floating orbs */}
        <motion.div
          className={`absolute w-32 h-32 rounded-full opacity-20 blur-sm ${
            isDark ? 'bg-primary' : 'bg-primary'
          }`}
          style={{
            top: '20%',
            left: '10%',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className={`absolute w-24 h-24 rounded-full opacity-30 blur-sm ${
            isDark ? 'bg-primary' : 'bg-primary'
          }`}
          style={{
            top: '60%',
            right: '15%',
          }}
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className={`absolute w-20 h-20 rounded-full opacity-25 blur-sm ${
            isDark ? 'bg-primary' : 'bg-primary'
          }`}
          style={{
            top: '30%',
            right: '30%',
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Small particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-60 ${
              isDark ? 'bg-primary' : 'bg-primary'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Geometric shapes */}
        <motion.div
          className={`absolute w-16 h-16 border-2 border-opacity-30 ${
            isDark ? 'border-primary' : 'border-primary'
          }`}
          style={{
            top: '15%',
            left: '60%',
            transform: 'rotate(45deg)',
          }}
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className={`absolute w-12 h-12 border-2 border-opacity-40 ${
            isDark ? 'border-primary' : 'border-primary'
          }`}
          style={{
            top: '70%',
            left: '20%',
            borderRadius: '50%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        {/* Floating lines */}
        <motion.div
          className={`absolute h-px w-20 opacity-30 ${
            isDark ? 'bg-primary' : 'bg-primary'
          }`}
          style={{
            top: '40%',
            left: '5%',
            transform: 'rotate(30deg)',
          }}
          animate={{
            scaleX: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className={`absolute h-px w-16 opacity-40 ${
            isDark ? 'bg-primary' : 'bg-primary'
          }`}
          style={{
            top: '80%',
            right: '10%',
            transform: 'rotate(-45deg)',
          }}
          animate={{
            scaleX: [1, 2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Background gradient orbs */}
        <div className={`absolute inset-0 opacity-5 ${
          isDark 
            ? 'bg-gradient-radial from-primary via-transparent to-transparent' 
            : 'bg-gradient-radial from-primary via-transparent to-transparent'
        }`} />
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5" />
    </div>
  );
} 