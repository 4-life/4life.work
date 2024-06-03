const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
  child-src 'self';
  connect-src 'self';
  frame-src 'self';
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
            source: '/(.*)',
            headers: [
              {
                key: 'Content-Security-Policy',
                value: cspHeader.replace(/\n/g, ''),
              },
            ],
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
