/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'orangered-koala-430507.hostingersite.com',
            pathname: '/pictures/**',
          },
        ],
      },
};

export default nextConfig;
