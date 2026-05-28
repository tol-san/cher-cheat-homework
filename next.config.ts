import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pngimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.example.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
