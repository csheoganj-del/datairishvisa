import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/submit', destination: '/report', permanent: true },
      { source: '/family-separation', destination: '/family-status', permanent: true },
      { source: '/eu-vs-non-eu', destination: '/rights-gap', permanent: true },
      { source: '/stories', destination: '/cases', permanent: true },
      { source: '/visa-tracker', destination: '/family-status', permanent: true },
      { source: '/refusals', destination: '/rights-gap', permanent: true },
      { source: '/stamp-4', destination: '/rights-gap', permanent: true },
    ];
  },
};

export default nextConfig;
