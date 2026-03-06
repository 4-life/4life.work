const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint-disable-next-line require-await
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  reactStrictMode: true,
  env: {
    version: process.env.npm_package_version,
    date: process.env.DATE,
  }
};

module.exports = nextConfig;
