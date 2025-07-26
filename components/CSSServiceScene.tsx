'use client';

import { motion } from 'framer-motion';

export default function CSSServiceScene({ color }: { color: string }) {
  return (
    <div className="w-16 h-16 relative flex items-center justify-center">
      {/* Animated cube using CSS transforms */}
      <motion.div
        className="relative w-8 h-8"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Front face */}
        <div
          className="absolute w-8 h-8 border-2"
          style={{
            backgroundColor: color,
            opacity: 0.7,
            transform: 'translateZ(4px)',
            borderColor: color,
          }}
        />
        
        {/* Back face */}
        <div
          className="absolute w-8 h-8 border-2"
          style={{
            backgroundColor: color,
            opacity: 0.7,
            transform: 'translateZ(-4px) rotateY(180deg)',
            borderColor: color,
          }}
        />
        
        {/* Right face */}
        <div
          className="absolute w-8 h-8 border-2"
          style={{
            backgroundColor: color,
            opacity: 0.5,
            transform: 'translateX(4px) rotateY(90deg)',
            borderColor: color,
          }}
        />
        
        {/* Left face */}
        <div
          className="absolute w-8 h-8 border-2"
          style={{
            backgroundColor: color,
            opacity: 0.5,
            transform: 'translateX(-4px) rotateY(-90deg)',
            borderColor: color,
          }}
        />
        
        {/* Top face */}
        <div
          className="absolute w-8 h-8 border-2"
          style={{
            backgroundColor: color,
            opacity: 0.6,
            transform: 'translateY(-4px) rotateX(90deg)',
            borderColor: color,
          }}
        />
        
        {/* Bottom face */}
        <div
          className="absolute w-8 h-8 border-2"
          style={{
            backgroundColor: color,
            opacity: 0.6,
            transform: 'translateY(4px) rotateX(-90deg)',
            borderColor: color,
          }}
        />
      </motion.div>
      
      {/* Floating particles around the cube */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: color,
            opacity: 0.4,
          }}
          animate={{
            x: [0, Math.cos(i * Math.PI / 2) * 12, 0],
            y: [0, Math.sin(i * Math.PI / 2) * 12, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  );
} 