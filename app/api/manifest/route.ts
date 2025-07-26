import { NextResponse } from 'next/server';

export async function GET() {
  const manifest = {
    name: 'Thinkfeat - Professional Software Development',
    short_name: 'Thinkfeat',
    description: 'Professional software development and digital solutions company',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0f0f',
    theme_color: '#FCF5A5',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/images/thinkfeat%20icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/images/thinkfeat%20icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    categories: ['business', 'productivity', 'utilities'],
    lang: 'en',
    dir: 'ltr',
    scope: '/',
    prefer_related_applications: false,
    related_applications: [],
    screenshots: [
      {
        src: '/images/thinkfeat%20web.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Thinkfeat Homepage'
      }
    ]
  };

  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/manifest+json',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
} 