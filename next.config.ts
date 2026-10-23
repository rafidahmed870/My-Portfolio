import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Docker standalone output
  // Bundles server + node_modules into .next/standalone — no full node_modules needed in prod image
  output: "standalone",

  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
