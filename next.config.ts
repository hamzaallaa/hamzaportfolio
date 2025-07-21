import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/hamzaportfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hamzaportfolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
