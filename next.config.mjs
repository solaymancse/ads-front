/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [], // Ensure no font loaders are used
  },
  compiler: {
    styledComponents: true, // Optional: Enable support for styled-components if you're using them
  },
};

export default nextConfig;
