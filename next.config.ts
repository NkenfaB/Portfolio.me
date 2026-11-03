import type { NextConfig } from "next";
import { site } from "./data/site";

const nextConfig: NextConfig = {
  async redirects() {
    return ["nkenfa-brandon.vercel.app", "portfolio-me-khaki.vercel.app"].map(
      (host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: `${site.url}/:path*`,
        permanent: true,
      })
    );
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion"],
  },
};

export default nextConfig;
