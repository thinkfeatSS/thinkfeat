import validator from 'validator';
import xss from 'xss';

/**
 * Security Utilities for Thinkfeat Website
 * Comprehensive security functions for input validation, XSS protection, and data sanitization
 */

// XSS Filter Configuration
const xssOptions = {
  whiteList: {
    // Allow only safe HTML tags
    a: ['href', 'title', 'target'],
    b: [],
    i: [],
    strong: [],
    em: [],
    u: [],
    br: [],
    p: [],
    div: [],
    span: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    ul: [],
    ol: [],
    li: [],
    blockquote: [],
    code: [],
    pre: [],
  },
  stripIgnoreTag: true,
  stripIgnoreTagBody: ['script', 'style', 'iframe', 'object', 'embed'],
};

/**
 * Sanitize user input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    return '';
  }
  return xss(input, xssOptions);
}

/**
 * Validate and sanitize email address
 */
export function validateEmail(email: string): { isValid: boolean; sanitized: string } {
  const sanitized = sanitizeInput(email.trim().toLowerCase());
  const isValid = validator.isEmail(sanitized);
  
  return {
    isValid,
    sanitized: isValid ? sanitized : '',
  };
}

/**
 * Validate and sanitize name input
 */
export function validateName(name: string): { isValid: boolean; sanitized: string } {
  const sanitized = sanitizeInput(name.trim());
  const isValid = validator.isLength(sanitized, { min: 2, max: 50 }) && 
                  validator.matches(sanitized, /^[a-zA-Z\s\-'\.]+$/);
  
  return {
    isValid,
    sanitized: isValid ? sanitized : '',
  };
}

/**
 * Validate and sanitize phone number
 */
export function validatePhone(phone: string): { isValid: boolean; sanitized: string } {
  const sanitized = sanitizeInput(phone.trim());
  const isValid = validator.isMobilePhone(sanitized, 'any');
  
  return {
    isValid,
    sanitized: isValid ? sanitized : '',
  };
}

/**
 * Validate and sanitize URL
 */
export function validateUrl(url: string): { isValid: boolean; sanitized: string } {
  const sanitized = sanitizeInput(url.trim());
  const isValid = validator.isURL(sanitized, {
    protocols: ['http', 'https'],
    require_protocol: true,
    require_valid_protocol: true,
  });
  
  return {
    isValid,
    sanitized: isValid ? sanitized : '',
  };
}

/**
 * Validate and sanitize message content
 */
export function validateMessage(message: string): { isValid: boolean; sanitized: string } {
  const sanitized = sanitizeInput(message.trim());
  const isValid = validator.isLength(sanitized, { min: 10, max: 2000 });
  
  return {
    isValid,
    sanitized: isValid ? sanitized : '',
  };
}

/**
 * Generate CSRF token
 */
export function generateCSRFToken(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

/**
 * Validate CSRF token
 */
export function validateCSRFToken(token: string, storedToken: string): boolean {
  return token === storedToken && token.length >= 20;
}

/**
 * Rate limiting helper
 */
export class RateLimiter {
  private requests: Map<string, { count: number; resetTime: number }> = new Map();
  private maxRequests: number;
  private windowMs: number;

  constructor(maxRequests: number = 100, windowMs: number = 15 * 60 * 1000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const requestData = this.requests.get(identifier);

    if (!requestData || now > requestData.resetTime) {
      this.requests.set(identifier, {
        count: 1,
        resetTime: now + this.windowMs,
      });
      return true;
    }

    if (requestData.count >= this.maxRequests) {
      return false;
    }

    requestData.count++;
    return true;
  }

  getRemainingRequests(identifier: string): number {
    const requestData = this.requests.get(identifier);
    if (!requestData) return this.maxRequests;
    return Math.max(0, this.maxRequests - requestData.count);
  }
}

/**
 * Input validation for contact form
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: Record<string, string>;
  sanitized: ContactFormData;
} {
  const errors: Record<string, string> = {};
  const sanitized: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  // Validate name
  const nameValidation = validateName(data.name);
  if (!nameValidation.isValid) {
    errors['name'] = 'Please enter a valid name (2-50 characters, letters only)';
  } else {
    sanitized.name = nameValidation.sanitized;
  }

  // Validate email
  const emailValidation = validateEmail(data.email);
  if (!emailValidation.isValid) {
    errors['email'] = 'Please enter a valid email address';
  } else {
    sanitized.email = emailValidation.sanitized;
  }

  // Validate subject
  const subjectValidation = validateName(data.subject);
  if (!subjectValidation.isValid) {
    errors['subject'] = 'Please select a valid subject';
  } else {
    sanitized.subject = subjectValidation.sanitized;
  }

  // Validate message
  const messageValidation = validateMessage(data.message);
  if (!messageValidation.isValid) {
    errors['message'] = 'Message must be between 10 and 2000 characters';
  } else {
    sanitized.message = messageValidation.sanitized;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized,
  };
}

/**
 * Security headers configuration
 */
export const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'X-DNS-Prefetch-Control': 'on',
  'X-Permitted-Cross-Domain-Policies': 'none',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
};

/**
 * Content Security Policy
 */
export const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https: blob:",
  "media-src 'self' https:",
  "connect-src 'self' https: wss:",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests"
].join('; ');

/**
 * Environment validation
 */
export function validateEnvironment(): void {
  const requiredEnvVars = [
    'NODE_ENV',
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}

/**
 * Log security events
 */
export function logSecurityEvent(event: string, details: Record<string, any> = {}): void {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    event,
    details,
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
    ip: 'client-ip', // Would be set by middleware
  };

  // In production, this would be sent to a logging service
  if (process.env.NODE_ENV === 'production') {
    console.warn('SECURITY_EVENT:', logEntry);
  } else {
    console.log('SECURITY_EVENT:', logEntry);
  }
}

/**
 * Prevent common attack patterns
 */
export function detectAttackPatterns(input: string): boolean {
  const attackPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
    /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
    /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi,
    /<link\b[^<]*(?:(?!<\/link>)<[^<]*)*<\/link>/gi,
    /<meta\b[^<]*(?:(?!<\/meta>)<[^<]*)*<\/meta>/gi,
    /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,
    /<form\b[^<]*(?:(?!<\/form>)<[^<]*)*<\/form>/gi,
    /<input\b[^<]*(?:(?!<\/input>)<[^<]*)*<\/input>/gi,
    /<textarea\b[^<]*(?:(?!<\/textarea>)<[^<]*)*<\/textarea>/gi,
    /<select\b[^<]*(?:(?!<\/select>)<[^<]*)*<\/select>/gi,
    /<button\b[^<]*(?:(?!<\/button>)<[^<]*)*<\/button>/gi,
    /<a\b[^<]*(?:(?!<\/a>)<[^<]*)*<\/a>/gi,
    /<img\b[^<]*(?:(?!<\/img>)<[^<]*)*<\/img>/gi,
    /<video\b[^<]*(?:(?!<\/video>)<[^<]*)*<\/video>/gi,
    /<audio\b[^<]*(?:(?!<\/audio>)<[^<]*)*<\/audio>/gi,
    /<source\b[^<]*(?:(?!<\/source>)<[^<]*)*<\/source>/gi,
    /<track\b[^<]*(?:(?!<\/track>)<[^<]*)*<\/track>/gi,
    /<map\b[^<]*(?:(?!<\/map>)<[^<]*)*<\/map>/gi,
    /<area\b[^<]*(?:(?!<\/area>)<[^<]*)*<\/area>/gi,
    /<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi,
    /<math\b[^<]*(?:(?!<\/math>)<[^<]*)*<\/math>/gi,
    /<canvas\b[^<]*(?:(?!<\/canvas>)<[^<]*)*<\/canvas>/gi,
    /<details\b[^<]*(?:(?!<\/details>)<[^<]*)*<\/details>/gi,
    /<dialog\b[^<]*(?:(?!<\/dialog>)<[^<]*)*<\/dialog>/gi,
    /<menu\b[^<]*(?:(?!<\/menu>)<[^<]*)*<\/menu>/gi,
    /<menuitem\b[^<]*(?:(?!<\/menuitem>)<[^<]*)*<\/menuitem>/gi,
    /<summary\b[^<]*(?:(?!<\/summary>)<[^<]*)*<\/summary>/gi,
    /<content\b[^<]*(?:(?!<\/content>)<[^<]*)*<\/content>/gi,
    /<element\b[^<]*(?:(?!<\/element>)<[^<]*)*<\/element>/gi,
    /<shadow\b[^<]*(?:(?!<\/shadow>)<[^<]*)*<\/shadow>/gi,
    /<template\b[^<]*(?:(?!<\/template>)<[^<]*)*<\/template>/gi,
    /<slot\b[^<]*(?:(?!<\/slot>)<[^<]*)*<\/slot>/gi,
    /<custom-element\b[^<]*(?:(?!<\/custom-element>)<[^<]*)*<\/custom-element>/gi,
  ];

  return attackPatterns.some(pattern => pattern.test(input));
}

/**
 * Sanitize HTML content for safe rendering
 */
export function sanitizeHtml(html: string): string {
  if (typeof html !== 'string') {
    return '';
  }

  // Check for attack patterns first
  if (detectAttackPatterns(html)) {
    logSecurityEvent('XSS_ATTEMPT_DETECTED', { input: html });
    return '';
  }

  return xss(html, xssOptions);
}

/**
 * Validate file upload
 */
export function validateFileUpload(file: File): { isValid: boolean; error?: string } {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'application/pdf',
    'text/plain',
  ];

  if (file.size > maxSize) {
    return { isValid: false, error: 'File size exceeds 5MB limit' };
  }

  if (!allowedTypes.includes(file.type)) {
    return { isValid: false, error: 'File type not allowed' };
  }

  return { isValid: true };
} 