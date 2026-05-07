import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/service.html", destination: "/services", permanent: true },
      { source: "/project.html", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
