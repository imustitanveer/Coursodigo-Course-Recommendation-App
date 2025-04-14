import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['s3.amazonaws.com'], // 👈 allow external images from this host
  },
};

export default nextConfig;
