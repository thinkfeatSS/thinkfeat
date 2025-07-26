import { NextRequest, NextResponse } from 'next/server';
import { RateLimiter, logSecurityEvent } from './lib/security';

// Initialize rate limiter
const rateLimiter = new RateLimiter(100, 15 * 60 * 1000); // 100 requests per 15 minutes

// Security middleware
export function middleware(request: NextRequest) {
  const startTime = Date.now();
  const response = NextResponse.next();

  try {
    // Get client IP
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';

    // Rate limiting
    if (!rateLimiter.isAllowed(clientIP)) {
      logSecurityEvent('RATE_LIMIT_EXCEEDED', {
        ip: clientIP,
        userAgent: request.headers.get('user-agent'),
        path: request.nextUrl.pathname,
      });

      return new NextResponse('Too Many Requests', {
        status: 429,
        headers: {
          'Retry-After': '900', // 15 minutes
          'X-RateLimit-Limit': '100',
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': new Date(Date.now() + 15 * 60 * 1000).toISOString(),
        },
      });
    }

    // Add rate limit headers
    response.headers.set('X-RateLimit-Limit', '100');
    response.headers.set('X-RateLimit-Remaining', rateLimiter.getRemainingRequests(clientIP).toString());
    response.headers.set('X-RateLimit-Reset', new Date(Date.now() + 15 * 60 * 1000).toISOString());

    // Security headers
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
    response.headers.set('X-DNS-Prefetch-Control', 'on');
    response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');

    // HSTS header (only for HTTPS)
    if (request.nextUrl.protocol === 'https:') {
      response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    }

    // Content Security Policy
    const csp = [
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

    response.headers.set('Content-Security-Policy', csp);

    // Attack detection
    const userAgent = request.headers.get('user-agent') || '';
    const path = request.nextUrl.pathname;
    const query = request.nextUrl.search;

    // Detect common attack patterns
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

    const fullUrl = path + query;
    const hasAttackPattern = attackPatterns.some(pattern => pattern.test(fullUrl));

    if (hasAttackPattern) {
      logSecurityEvent('XSS_ATTEMPT_DETECTED', {
        ip: clientIP,
        userAgent,
        path: fullUrl,
        timestamp: new Date().toISOString(),
      });

      return new NextResponse('Forbidden', { status: 403 });
    }

    // Detect suspicious user agents
    const suspiciousUserAgents = [
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
      /airgraph-ng/i,
      /airmon-ng/i,
      /airodump-ng/i,
      /aireplay-ng/i,
      /airtun-ng/i,
      /easside-ng/i,
      /tkiptun-ng/i,
      /wesside-ng/i,
      /buddy-ng/i,
      /airserv-ng/i,
      /airdecloak-ng/i,
      /airdriver-ng/i,
      /airgraph-ng/i,
    ];

    const isSuspiciousUserAgent = suspiciousUserAgents.some(pattern => pattern.test(userAgent));

    // Be less restrictive in development
    if (isSuspiciousUserAgent && process.env.NODE_ENV !== 'development') {
      logSecurityEvent('SUSPICIOUS_USER_AGENT', {
        ip: clientIP,
        userAgent,
        path: fullUrl,
        timestamp: new Date().toISOString(),
      });

      // Block suspicious user agents only in production
      return new NextResponse('Forbidden', { status: 403 });
    }

    // Block common attack paths
    const blockedPaths = [
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
      '/.well-known/security.txt',
    ];

    // Allow manifest API in development
    if (process.env.NODE_ENV === 'development' && path === '/api/manifest') {
      return response;
    }

    if (blockedPaths.some(blockedPath => path.startsWith(blockedPath))) {
      logSecurityEvent('BLOCKED_PATH_ACCESS', {
        ip: clientIP,
        userAgent,
        path: fullUrl,
        timestamp: new Date().toISOString(),
      });

      return new NextResponse('Not Found', { status: 404 });
    }

    // Add security headers for API routes
    if (path.startsWith('/api/')) {
      response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      response.headers.set('Pragma', 'no-cache');
      response.headers.set('Expires', '0');
    }

    // Log successful requests (only in development)
    if (process.env.NODE_ENV === 'development') {
      const duration = Date.now() - startTime;
      console.log(`[${new Date().toISOString()}] ${request.method} ${fullUrl} - ${response.status} - ${duration}ms`);
    }

    return response;

  } catch (error) {
    logSecurityEvent('MIDDLEWARE_ERROR', {
      error: error instanceof Error ? error.message : 'Unknown error',
      ip: request.headers.get('x-forwarded-for') || 'unknown',
      path: request.nextUrl.pathname,
      timestamp: new Date().toISOString(),
    });

    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}; 