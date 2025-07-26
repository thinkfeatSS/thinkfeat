'use client';

import { forwardRef, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  rows?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  rows = 4,
  className = '',
  ...props
}, ref) => {
  const baseClasses = 'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-secondary/50 resize-none';
  
  const variants = {
    default: 'bg-white dark:bg-surface-dark border border-border dark:border-border-dark rounded-lg focus:border-primary dark:focus:border-secondary',
    filled: 'bg-surface/50 dark:bg-surface-dark/50 border border-transparent rounded-lg focus:bg-white dark:focus:bg-surface-dark focus:border-primary dark:focus:border-secondary',
    outlined: 'bg-transparent border border-border dark:border-border-dark rounded-lg focus:border-primary dark:focus:border-secondary'
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-text dark:text-text-dark mb-2">
          {label}
        </label>
      )}
      
      <textarea
        ref={ref}
        rows={rows}
        className={`
          ${baseClasses}
          ${variants[variant]}
          ${sizes[size]}
          ${widthClass}
          text-text dark:text-text-dark
          placeholder:text-text-secondary/60 dark:placeholder:text-text-secondary-dark/60
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400' : ''}
        `}
        {...props}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-500 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea; 