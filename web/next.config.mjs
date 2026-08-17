/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Point at wherever the real assets end up hosted.
    remotePatterns: [],
  },
};
export default nextConfig;
