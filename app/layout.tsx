import { Metadata, Viewport } from 'next';
import { ReactChildren } from '@/lib/types';
import ConsoleDisclaimer from '@/components/ConsoleDisclaimer';
import fonts from './fonts';
import './globals.css';

const SEO = {
  author: 'Pavel Ovchinnikov',
  description: `Personal website of Pavel Ovchinnikov. My name is Pavel. I'm Full-stack Web Developer`,
  homeUrl: 'https://4life.work/',
  appName: 'Personal website of Pavel Ovchinnikov',
  title: `Pavel | Full-stack web developer`,
  locale: 'en_EN',
  siteUrl: 'https://4life.work/',
  mainImage: 'https://4life.work/favicon.png',
  manifest: 'https://4life.work/manifest.json',
};

const hrefFavIcon = (size: number): string => `/images/app-icon/favicon-${size}x${size}.png`;
const hrefAppleIcon = (size: number): string => `/images/app-icon/apple-icon-${size}x${size}.png`;
const sizesFavIcon = [16, 32, 96];
const sizesAppleIcon = [57, 60, 72, 76, 114, 120, 144, 152, 180];

export const metadata: Metadata = {
  title: {
    template: '%s | Personal website of Pavel Ovchinnikov',
    default: SEO.appName,
  },
  referrer: 'origin-when-cross-origin',
  description: SEO.appName,
  openGraph: {
    title: SEO.appName,
    description: SEO.description,
    url: SEO.siteUrl,
    siteName: SEO.title,
    locale: SEO.locale,
    images: [
      {
        url: SEO.mainImage,
        width: 180,
        height: 180,
      },
    ],
    type: 'website',
  },
  authors: {
    name: SEO.author,
    url: SEO.homeUrl,
  },
  alternates: {
    canonical: SEO.homeUrl,
  },
  appLinks: {
    ios: {
      url: SEO.homeUrl,
      app_name: SEO.appName,
    },
    android: {
      app_name: SEO.appName,
      package: '',
    },
    web: {
      url: SEO.homeUrl,
      should_fallback: true,
    },
  },
  robots: 'index,follow',
  manifest: SEO.manifest,
  icons: {
    icon: sizesFavIcon.map((size) => ({
      url: hrefFavIcon(size),
    })),
    apple: sizesAppleIcon.map((size) => ({
      url: hrefAppleIcon(size),
      sizes: `${size}x${size}`,
    })),
    other: [
      {
        rel: 'msapplication-TileImage',
        url: '/ms-icon-150x150.png',
      },
      {
        rel: 'icon',
        url: '/favicon.ico',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: 'white',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: ReactChildren): JSX.Element {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <head />
      <body>
        <main className="bg">
          {children}
          <ConsoleDisclaimer />
        </main>
      </body>
    </html>
  );
}
