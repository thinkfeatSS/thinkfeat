/**
 * Security Configuration for Thinkfeat Website
 * Comprehensive security settings and best practices
 */

module.exports = {
  // Security Headers Configuration
  headers: {
    // Content Security Policy
    csp: {
      'default-src': ["'self'"],
      'script-src': ["'self'", "'unsafe-eval'", "'unsafe-inline'", "https://cdn.jsdelivr.net", "https://unpkg.com"],
      'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      'font-src': ["'self'", "https://fonts.gstatic.com"],
      'img-src': ["'self'", "data:", "https:", "blob:"],
      'media-src': ["'self'", "https:"],
      'connect-src': ["'self'", "https:", "wss:"],
      'frame-src': ["'none'"],
      'object-src': ["'none'"],
      'base-uri': ["'self'"],
      'form-action': ["'self'"],
      'frame-ancestors': ["'none'"],
      'upgrade-insecure-requests': []
    },

    // Security Headers
    security: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
      'X-DNS-Prefetch-Control': 'on',
      'X-Permitted-Cross-Domain-Policies': 'none',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
    }
  },

  // Rate Limiting Configuration
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
  },

  // Input Validation Configuration
  validation: {
    // Email validation
    email: {
      minLength: 5,
      maxLength: 254,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },

    // Name validation
    name: {
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s\-'\.]+$/
    },

    // Phone validation
    phone: {
      minLength: 10,
      maxLength: 15,
      pattern: /^[\+]?[1-9][\d]{0,15}$/
    },

    // Message validation
    message: {
      minLength: 10,
      maxLength: 2000
    },

    // URL validation
    url: {
      protocols: ['http', 'https'],
      requireProtocol: true,
      requireValidProtocol: true
    }
  },

  // File Upload Configuration
  fileUpload: {
    maxSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf',
      'text/plain'
    ],
    scanForViruses: true,
    validateFileContent: true
  },

  // Authentication Configuration
  auth: {
    sessionTimeout: 30 * 60 * 1000, // 30 minutes
    maxLoginAttempts: 5,
    lockoutDuration: 15 * 60 * 1000, // 15 minutes
    passwordPolicy: {
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialChars: true
    }
  },

  // Attack Detection Configuration
  attackDetection: {
    // XSS patterns
    xssPatterns: [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
      /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
      /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi
    ],

    // SQL Injection patterns
    sqlInjectionPatterns: [
      /(\b(union|select|insert|update|delete|drop|create|alter|exec|execute|script)\b)/gi,
      /(\b(or|and)\b\s+\d+\s*=\s*\d+)/gi,
      /(\b(union|select|insert|update|delete|drop|create|alter|exec|execute|script)\b.*\b(union|select|insert|update|delete|drop|create|alter|exec|execute|script)\b)/gi
    ],

    // Path traversal patterns
    pathTraversalPatterns: [
      /\.\.\//gi,
      /\.\.\\/gi,
      /%2e%2e%2f/gi,
      /%2e%2e%5c/gi
    ],

    // Suspicious user agents
    suspiciousUserAgents: [
      /bot/i,
      /crawler/i,
      /spider/i,
      /scraper/i,
      /curl/i,
      /wget/i,
      /python/i,
      /java/i,
      /perl/i,
      /ruby/i,
      /php/i,
      /sqlmap/i,
      /nikto/i,
      /nmap/i,
      /metasploit/i,
      /burp/i,
      /zap/i,
      /w3af/i,
      /arachni/i,
      /skipfish/i,
      /dirb/i,
      /gobuster/i,
      /dirbuster/i,
      /wfuzz/i,
      /ffuf/i,
      /hydra/i,
      /medusa/i,
      /ncrack/i,
      /patator/i,
      /crowbar/i,
      /thc-hydra/i,
      /hashcat/i,
      /john/i,
      /aircrack/i,
      /reaver/i,
      /wash/i,
      /bully/i,
      /coWPAtty/i,
      /genpmk/i,
      /pyrit/i,
      /cowpatty/i,
      /asleap/i,
      /mdk3/i,
      /mdk4/i,
      /aireplay/i,
      /airecrack/i,
      /airdecap/i,
      /packetforge/i,
      /airtun/i,
      /easside/i,
      /tkiptun/i,
      /wesside/i,
      /buddy-ng/i,
      /airserv/i,
      /aircrack-ng/i,
      /airmon-ng/i,
      /airodump-ng/i,
      /aireplay-ng/i,
      /packetforge-ng/i,
      /airtun-ng/i,
      /easside-ng/i,
      /tkiptun-ng/i,
      /wesside-ng/i,
      /buddy-ng/i,
      /airserv-ng/i,
      /airdecloak-ng/i,
      /airdriver-ng/i,
      /airgraph-ng/i
    ],

    // Blocked paths
    blockedPaths: [
      '/admin',
      '/administrator',
      '/wp-admin',
      '/wp-login.php',
      '/phpmyadmin',
      '/mysql',
      '/database',
      '/db',
      '/sql',
      '/config',
      '/configuration',
      '/setup',
      '/install',
      '/install.php',
      '/setup.php',
      '/config.php',
      '/configuration.php',
      '/admin.php',
      '/administrator.php',
      '/login.php',
      '/wp-config.php',
      '/.env',
      '/.git',
      '/.svn',
      '/.htaccess',
      '/robots.txt',
      '/sitemap.xml',
      '/crossdomain.xml',
      '/clientaccesspolicy.xml',
      '/.well-known',
      '/.well-known/security.txt',
      '/.well-known/host-meta',
      '/.well-known/webfinger',
      '/.well-known/change-password',
      '/.well-known/oauth-authorization-server',
      '/.well-known/openid_configuration',
      '/.well-known/jwks.json',
      '/.well-known/assetlinks.json',
      '/.well-known/apple-app-site-association',
      '/.well-known/brave-rewards-verification.txt',
      '/.well-known/dnt-policy.txt',
      '/.well-known/keybase.txt',
      '/.well-known/matrix',
      '/.well-known/mta-sts.txt',
      '/.well-known/posh',
      '/.well-known/report-uri',
      '/.well-known/stellar.toml',
      '/.well-known/webfinger',
      '/.well-known/webmention',
      '/.well-known/security.txt'
    ]
  },

  // Logging Configuration
  logging: {
    level: process.env.NODE_ENV === 'production' ? 'warn' : 'info',
    securityEvents: true,
    requestLogging: process.env.NODE_ENV === 'development',
    errorLogging: true,
    auditLogging: true
  },

  // Environment Configuration
  environment: {
    production: {
      enableHSTS: true,
      enableCSP: true,
      enableRateLimit: true,
      enableAttackDetection: true,
      enableLogging: true,
      enableAudit: true
    },
    development: {
      enableHSTS: false,
      enableCSP: true,
      enableRateLimit: true,
      enableAttackDetection: true,
      enableLogging: true,
      enableAudit: false
    }
  },

  // Security Recommendations
  recommendations: {
    // SSL/TLS Configuration
    ssl: {
      minVersion: 'TLSv1.2',
      preferredCipherSuites: [
        'TLS_AES_256_GCM_SHA384',
        'TLS_CHACHA20_POLY1305_SHA256',
        'TLS_AES_128_GCM_SHA256',
        'ECDHE-RSA-AES256-GCM-SHA384',
        'ECDHE-RSA-AES128-GCM-SHA256'
      ],
      disableInsecureCiphers: true
    },

    // Database Security
    database: {
      usePreparedStatements: true,
      validateInput: true,
      encryptConnections: true,
      useConnectionPooling: true,
      implementRowLevelSecurity: true
    },

    // API Security
    api: {
      useHTTPS: true,
      implementRateLimiting: true,
      validateAllInputs: true,
      sanitizeAllOutputs: true,
      useJWT: true,
      implementCORS: true,
      useAPIKeys: true
    },

    // Session Security
    session: {
      useSecureCookies: true,
      useHttpOnlyCookies: true,
      useSameSiteCookies: true,
      implementSessionTimeout: true,
      regenerateSessionOnLogin: true,
      implementCSRFProtection: true
    },

    // Password Security
    password: {
      useStrongHashing: true,
      implementSalt: true,
      useArgon2OrBcrypt: true,
      enforcePasswordPolicy: true,
      implementAccountLockout: true,
      useMultiFactorAuthentication: true
    },

    // File Upload Security
    fileUpload: {
      validateFileTypes: true,
      scanForViruses: true,
      limitFileSize: true,
      storeOutsideWebRoot: true,
      useSecureFileNames: true,
      implementAccessControls: true
    },

    // Monitoring and Alerting
    monitoring: {
      implementSecurityMonitoring: true,
      useIntrusionDetection: true,
      implementLogAnalysis: true,
      useSecurityInformationAndEventManagement: true,
      implementIncidentResponse: true,
      useVulnerabilityScanning: true
    }
  }
}; 