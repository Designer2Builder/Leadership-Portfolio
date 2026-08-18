// Static export has no image-optimization server, so this just resolves
// each image under the deploy's base path (empty locally, /Leadership-Portfolio in CI).
// The static file server ignores the `w` param — it's there only so Next
// sees per-width output and doesn't warn about an unused `width` arg.
export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}${src}?w=${width}`;
}
