const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src 'self';
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  connect-src 'self';
  frame-src 'self';
  img-src 'self' data:;
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
    return process.env.NODE_ENV === 'production'
      ? [
          {
            source: '/:path*',
            headers: securityHeaders,
          },
        ]
      : [];
  },
  reactStrictMode: true,
  env: {
    version: process.env.npm_package_version,
    date: process.env.DATE,
  }
};

module.exports = nextConfig;
