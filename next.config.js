/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  swcMinify: true,
};

module.exports = nextConfig;
