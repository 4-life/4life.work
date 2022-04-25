/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    version: process.env.npm_package_version,
  },
};

module.exports = nextConfig;
