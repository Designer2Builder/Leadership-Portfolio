// Static export has no image-optimization server, so this just resolves
// each image under the deploy's base path (empty locally, /Leadership-Portfolio in CI).
export default function imageLoader({ src }: { src: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}${src}`;
}
