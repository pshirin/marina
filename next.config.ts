import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["localhost", "res.cloudinary.com"], // Укажите разрешенные домены
  },
  /* config options here */
};

export default nextConfig;
