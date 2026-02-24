import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './i18n/request.ts'
);

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60,
  },

  // Optimize CSS delivery - remove console in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Reduce CSS chunk size by optimizing package imports
  experimental: {
    optimizePackageImports: ['next-intl'],
  },

  // Security & performance
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
