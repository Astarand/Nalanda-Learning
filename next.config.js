/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // Enable linting during builds for better code quality
  },
  images: {
    domains: [], // Add external image domains if needed
    formats: ['image/webp', 'image/avif'], // Enable modern image formats
  },
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
