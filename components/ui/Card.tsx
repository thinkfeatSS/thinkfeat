'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = 'default',
  hover = false,
  className = '',
  onClick
}: CardProps) {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variants = {
    default: 'bg-white/5 dark:bg-surface-dark/20 backdrop-blur-sm border border-white/10 dark:border-border-dark/20',
    elevated: 'bg-white dark:bg-surface-dark shadow-lg border border-white/20 dark:border-border-dark/30',
    outlined: 'bg-transparent border border-border dark:border-border-dark',
    glass: 'bg-white/10 dark:bg-surface-dark/30 backdrop-blur-md border border-white/20 dark:border-border-dark/30'
  };

  const hoverClasses = hover ? 'hover:border-primary/30 dark:hover:border-secondary/30 hover:shadow-lg' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';

  const Component = onClick ? motion.div : 'div';
  const motionProps = onClick ? {
    whileHover: { y: -5, scale: 1.02 },
    whileTap: { scale: 0.98 },
    onClick
  } : {};

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${hoverClasses} ${clickableClasses} ${className}`}
      {...motionProps}
    >
      {children}
    </Component>
  );
} 