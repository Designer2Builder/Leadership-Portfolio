import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH=/Leadership-Portfolio in CI so the GitHub
// Pages build resolves routes and assets under that subpath — leave unset
// for local `next dev` / `next build`, which serve from the domain root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
};

export default nextConfig;
