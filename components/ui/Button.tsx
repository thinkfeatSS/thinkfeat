'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  icon,
  iconPosition = 'left',
  type = 'button'
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary dark:bg-secondary text-white dark:text-surface-color hover:bg-primary/90 dark:hover:bg-secondary/90 focus:ring-primary/50 dark:focus:ring-secondary/50 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary dark:bg-primary text-white hover:bg-secondary/90 dark:hover:bg-primary/90 focus:ring-secondary/50 dark:focus:ring-primary/50 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary dark:border-secondary text-primary dark:text-secondary bg-white/80 dark:bg-black/20 backdrop-blur-sm hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-surface-color focus:ring-primary/50 dark:focus:ring-secondary/50 shadow-md hover:shadow-lg',
    ghost: 'text-primary dark:text-secondary hover:bg-primary/10 dark:hover:bg-secondary/10 focus:ring-primary/50 dark:focus:ring-secondary/50',
    gradient: 'bg-gradient-to-r from-primary via-yellow-400 to-yellow-300 text-surface-color hover:shadow-xl focus:ring-primary/50 shadow-lg'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const iconClasses = icon ? 'gap-2' : '';

  return (
    <motion.button
      type={type}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${iconClasses} ${className}`}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {icon && iconPosition === 'left' && !loading && icon}
      {children}
      {icon && iconPosition === 'right' && !loading && icon}
    </motion.button>
  );
} 