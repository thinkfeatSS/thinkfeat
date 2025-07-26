'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showPasswordToggle?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  showPasswordToggle = false,
  className = '',
  type,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [_isFocused, setIsFocused] = useState(false);

  const baseClasses = 'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-secondary/50';
  
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
  const iconPadding = leftIcon ? 'pl-10' : '';
  const rightIconPadding = (rightIcon || showPasswordToggle) ? 'pr-10' : '';

  const inputType = showPasswordToggle && type === 'password' 
    ? (showPassword ? 'text' : 'password') 
    : type;

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-text dark:text-text-dark mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary dark:text-text-secondary-dark">
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          type={inputType}
          className={`
            ${baseClasses}
            ${variants[variant]}
            ${sizes[size]}
            ${widthClass}
            ${iconPadding}
            ${rightIconPadding}
            text-text dark:text-text-dark
            placeholder:text-text-secondary/60 dark:placeholder:text-text-secondary-dark/60
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400' : ''}
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-secondary transition-colors duration-200"
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        )}
        
        {rightIcon && !showPasswordToggle && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary dark:text-text-secondary-dark">
            {rightIcon}
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-500 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input; 