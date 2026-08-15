import type { NextConfig } from "next";

const repoBasePath = "/Leadership-Portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: `${repoBasePath}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
