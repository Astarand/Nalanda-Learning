/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // Enable linting during builds for better code quality
  },
  images: {
    domains: ['images.unsplash.com', 'ui-avatars.com'], // Add external image domains
    formats: ['image/webp', 'image/avif'], // Enable modern image formats
  },
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
