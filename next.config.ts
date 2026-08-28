import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // Static HTML export
  trailingSlash: true,        // Required for GitHub Pages
  images: {
    unoptimized: true,        // Required for static export (no server-side image optimization)
  },
};

export default nextConfig;
