import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.openfoodfacts.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placeholder.pics",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
