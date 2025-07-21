import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio",
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
