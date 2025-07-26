import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Optimized class name utility with Tailwind CSS merging
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    
    const callNow = immediate && !timeout;
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func(...args);
  };
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Memoization utility for expensive computations
 */
export function memoize<T extends (...args: any[]) => any>(
  fn: T,
  getKey?: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>();
  
  return ((...args: Parameters<T>) => {
    const key = getKey ? getKey(...args) : JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

/**
 * Intersection Observer utility for lazy loading
 */
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options,
  };
  
  return new IntersectionObserver(callback, defaultOptions);
}

/**
 * Performance measurement utility
 */
export const performanceUtils = {
  measure: (name: string, fn: () => void): void => {
    if (typeof window !== 'undefined' && window.performance) {
      const start = window.performance.now();
      fn();
      const end = window.performance.now();
      console.log(`${name} took ${end - start} milliseconds`);
    } else {
      fn();
    }
  },
  
  measureAsync: async (name: string, fn: () => Promise<void>): Promise<void> => {
    if (typeof window !== 'undefined' && window.performance) {
      const start = window.performance.now();
      await fn();
      const end = window.performance.now();
      console.log(`${name} took ${end - start} milliseconds`);
    } else {
      await fn();
    }
  },
  
  mark: (name: string): void => {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.mark(name);
    }
  },
  
  measureBetween: (startMark: string, endMark: string, name: string): void => {
    if (typeof window !== 'undefined' && window.performance) {
      try {
        window.performance.measure(name, startMark, endMark);
      } catch (error) {
        console.warn('Performance measurement failed:', error);
      }
    }
  },
};

/**
 * Local storage utility with error handling
 */
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      if (typeof window === 'undefined') return defaultValue;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn('Failed to get from localStorage:', error);
      return defaultValue;
    }
  },
  
  set: <T>(key: string, value: T): void => {
    try {
      if (typeof window === 'undefined') return;
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('Failed to set to localStorage:', error);
    }
  },
  
  remove: (key: string): void => {
    try {
      if (typeof window === 'undefined') return;
      window.localStorage.removeItem(key);
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error);
    }
  },
  
  clear: (): void => {
    try {
      if (typeof window === 'undefined') return;
      window.localStorage.clear();
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
    }
  },
};

/**
 * Session storage utility with error handling
 */
export const sessionStorage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      if (typeof window === 'undefined') return defaultValue;
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn('Failed to get from sessionStorage:', error);
      return defaultValue;
    }
  },
  
  set: <T>(key: string, value: T): void => {
    try {
      if (typeof window === 'undefined') return;
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('Failed to set to sessionStorage:', error);
    }
  },
  
  remove: (key: string): void => {
    try {
      if (typeof window === 'undefined') return;
      window.sessionStorage.removeItem(key);
    } catch (error) {
      console.warn('Failed to remove from sessionStorage:', error);
    }
  },
  
  clear: (): void => {
    try {
      if (typeof window === 'undefined') return;
      window.sessionStorage.clear();
    } catch (error) {
      console.warn('Failed to clear sessionStorage:', error);
    }
  },
};

/**
 * Cookie utility
 */
export const cookies = {
  get: (name: string): string | null => {
    if (typeof document === 'undefined') return null;
    
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  },
  
  set: (name: string, value: string, days = 7): void => {
    if (typeof document === 'undefined') return;
    
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  },
  
  remove: (name: string): void => {
    if (typeof document === 'undefined') return;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  },
};

/**
 * URL utility functions
 */
export const urlUtils = {
  isValidUrl: (string: string): boolean => {
    try {
      new URL(string);
      return true;
    } catch {
      return false;
    }
  },
  
  getQueryParam: (param: string): string | null => {
    if (typeof window === 'undefined') return null;
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  },
  
  setQueryParam: (param: string, value: string): void => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.set(param, value);
    window.history.replaceState({}, '', url.toString());
  },
  
  removeQueryParam: (param: string): void => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.delete(param);
    window.history.replaceState({}, '', url.toString());
  },
};

/**
 * Device detection utility
 */
export const deviceUtils = {
  isMobile: (): boolean => {
    if (typeof window === 'undefined') return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent
    );
  },
  
  isTablet: (): boolean => {
    if (typeof window === 'undefined') return false;
    return /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/i.test(
      window.navigator.userAgent
    );
  },
  
  isDesktop: (): boolean => {
    if (typeof window === 'undefined') return true;
    return !deviceUtils.isMobile() && !deviceUtils.isTablet();
  },
  
  isTouchDevice: (): boolean => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  },
  
  getScreenSize: (): 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' => {
    if (typeof window === 'undefined') return 'lg';
    
    const width = window.innerWidth;
    if (width < 640) return 'xs';
    if (width < 768) return 'sm';
    if (width < 1024) return 'md';
    if (width < 1280) return 'lg';
    if (width < 1536) return 'xl';
    return '2xl';
  },
};

/**
 * Animation utility for smooth scrolling
 */
export const animationUtils = {
  smoothScrollTo: (element: Element | string, offset = 0): void => {
    const target = typeof element === 'string' 
      ? document.querySelector(element) 
      : element;
    
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  },
  
  scrollToTop: (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },
  
  fadeIn: (element: Element, duration = 300): void => {
    const htmlElement = element as HTMLElement;
    htmlElement.style.opacity = '0';
    htmlElement.style.transition = `opacity ${duration}ms ease-in-out`;
    
    requestAnimationFrame(() => {
      htmlElement.style.opacity = '1';
    });
  },
  
  fadeOut: (element: Element, duration = 300): Promise<void> => {
    return new Promise((resolve) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.transition = `opacity ${duration}ms ease-in-out`;
      htmlElement.style.opacity = '0';
      
      setTimeout(() => {
        resolve();
      }, duration);
    });
  },
};

/**
 * Validation utilities
 */
export const validationUtils = {
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  isValidPhone: (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },
  
  isValidPassword: (password: string): boolean => {
    return password.length >= 8;
  },
  
  sanitizeInput: (input: string): string => {
    return input
      .trim()
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '');
  },
};

/**
 * Format utilities
 */
export const formatUtils = {
  formatCurrency: (amount: number, currency = 'USD'): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  },
  
  formatDate: (date: Date | string, options?: Intl.DateTimeFormatOptions): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-US', options).format(dateObj);
  },
  
  formatNumber: (num: number, options?: Intl.NumberFormatOptions): string => {
    return new Intl.NumberFormat('en-US', options).format(num);
  },
  
  formatFileSize: (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  },
};

/**
 * Retry utility for failed operations
 */
export async function retry<T>(
  fn: () => Promise<T>,
  maxAttempts = 3,
  delay = 1000
): Promise<T> {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxAttempts) {
        throw lastError;
      }
      
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }
  
  throw lastError!;
}

/**
 * Queue utility for managing async operations
 */
export class AsyncQueue {
  private queue: Array<() => Promise<void>> = [];
  private running = false;
  
  async add<T>(fn: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await fn();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      
      this.process();
    });
  }
  
  private async process(): Promise<void> {
    if (this.running || this.queue.length === 0) return;
    
    this.running = true;
    
    while (this.queue.length > 0) {
      const task = this.queue.shift();
      if (task) {
        await task();
      }
    }
    
    this.running = false;
  }
}

/**
 * Cache utility with TTL support
 */
export class Cache<T> {
  private cache = new Map<string, { value: T; expiry: number }>();
  
  set(key: string, value: T, ttl = 60000): void {
    this.cache.set(key, {
      value,
      expiry: Date.now() + ttl,
    });
  }
  
  get(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) return null;
    
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }
  
  has(key: string): boolean {
    return this.get(key) !== null;
  }
  
  delete(key: string): boolean {
    return this.cache.delete(key);
  }
  
  clear(): void {
    this.cache.clear();
  }
  
  size(): number {
    return this.cache.size;
  }
} 