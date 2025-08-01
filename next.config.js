module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  // Custom webpack config for additional image optimizations
  webpack: (config) => {
    // Enable WebP support for static imports
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|webp)$/i,
      type: 'asset/resource',
    });
    
    return config;
  }
}
