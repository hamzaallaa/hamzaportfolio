/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/hamzaportfolio',
  assetPrefix: '/hamzaportfolio/',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;