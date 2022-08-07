/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URI: "https://metadata-red.vercel.app/",
  },
};

module.exports = nextConfig;
