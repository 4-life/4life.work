const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src 4life.work;
  style-src 'self' 4life.work;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  connect-src 'self';
  font-src 'self';
  frame-src 'self';
  img-src 'self';
  manifest-src 'self';
  media-src 'self';
  worker-src 'none';
`;

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint-disable-next-line require-await
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  reactStrictMode: true,
  publicRuntimeConfig: {
    version: process.env.npm_package_version,
  },
};

module.exports = nextConfig;
