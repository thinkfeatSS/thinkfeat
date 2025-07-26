import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

// Optimized font loading
const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
  preload: true,
  fallback: ['system-ui', 'arial'],
});

// Comprehensive metadata for SEO
export const metadata: Metadata = {
  title: {
    default: "Thinkfeat - Build the Future of Software",
    template: "%s | Thinkfeat"
  },
  description: "Innovating technology for tomorrow's world. Professional software development, web design, and digital solutions with cutting-edge 3D technology.",
  keywords: [
    "software development", 
    "web design", 
    "digital solutions", 
    "mobile apps", 
    "website development", 
    "3D technology", 
    "AI solutions",
    "React development",
    "Next.js",
    "TypeScript",
    "UI/UX design",
    "full-stack development"
  ],
  authors: [{ name: "Thinkfeat Team" }],
  creator: "Thinkfeat",
  publisher: "Thinkfeat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thinkfeat.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thinkfeat.com',
    title: 'Thinkfeat - Build the Future of Software',
    description: 'Innovating technology for tomorrow\'s world with cutting-edge 3D technology and modern software solutions.',
    siteName: 'Thinkfeat',
    images: [
      {
        url: '/images/thinkfeat-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Thinkfeat - Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thinkfeat - Build the Future of Software',
    description: 'Innovating technology for tomorrow\'s world',
    images: ['/images/thinkfeat-twitter.jpg'],
    creator: '@thinkfeat',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Software Development',
  other: {
    'theme-color': '#8C6239',
    'msapplication-TileColor': '#8C6239',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Thinkfeat',
  },
};

// Optimized viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8C6239' },
    { media: '(prefers-color-scheme: dark)', color: '#1F1F1F' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
};

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Thinkfeat",
  "url": "https://thinkfeat.com",
          "logo": "https://thinkfeat.com/images/thinkfeat logo.png",
  "description": "Professional software development and digital solutions company",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hyderabad Qasimabad Phase 2 Jatoi Chownk",
    "addressLocality": "Hyderabad",
    "addressCountry": "PK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+92-334-267-3135",
    "contactType": "customer service",
    "email": "thinkfeat@gmail.com"
  },
  "sameAs": [
    "https://facebook.com/thinkfeat",
    "https://twitter.com/thinkfeat",
    "https://linkedin.com/company/thinkfeat"
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 25.3960,
      "longitude": 68.3578
    },
    "geoRadius": "50000"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={roboto.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//orangered-koala-430507.hostingersite.com" />
        
        {/* Preload critical resources */}

        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Performance monitoring */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'GA_MEASUREMENT_ID');
                `,
              }}
            />
            
            {/* Performance monitoring */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  // Performance monitoring
                  if ('performance' in window) {
                    window.addEventListener('load', () => {
                      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
                      if (navigation) {
                        console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
                        console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
                      }
                    });
                  }
                `,
              }}
            />
          </>
        )}
      </head>
      <body 
        className={`${roboto.className} antialiased`} 
        suppressHydrationWarning
        style={{
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                      console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
