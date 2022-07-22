/* eslint-disable react/require-default-props */
import Head from 'next/head';

const SEO = {
  author: 'Pavel Ovchinnikov',
  description: `Personal website of Pavel Ovchinnikov. My name is Pavel. I'm Full-stack Web Developer`,
  homeUrl: 'https://4life.work/',
  appName: 'Personal website of Pavel Ovchinnikov',
  title: `Pavel | Full-stack web developer`,
  locale: 'en_EN',
  siteUrl: 'https://4life.work/',
  mainImage: 'https://4life.work/favicon.png',
};

interface IHead {
  title?: string;
  pageUrl?: string;
  mainImage?: string;
  description?: string;
  locale?: string;
}

export default ({ title, pageUrl, mainImage, description, locale }: IHead) => {
  const visibleTitle = `${SEO.title} ${title || ''}`;
  const metaName = {
    author: SEO.author,
    robots: 'index,follow',
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    description: description || SEO.description,
    'theme-color': '#ffffff',
    'naver-site-verification': '',
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/ms-icon-150x150.png',
  };

  const metaProperty = {
    'article:author': SEO.author,
    'al:web:url': SEO.homeUrl,
    'al:ios:url': SEO.homeUrl,
    'al:ios:app_name': SEO.appName,
    'al:android:url': SEO.homeUrl,
    'al:android:app_name': SEO.appName,
    'og:url': pageUrl || SEO.siteUrl,
    'og:type': 'website',
    'og:title': visibleTitle,
    'og:image': mainImage || SEO.mainImage,
    'og:image:url': mainImage || SEO.mainImage,
    'twitter:image': mainImage || SEO.mainImage,
    'og:locale': locale || SEO.locale,
    'og:site_name': title || SEO.title,
    'og:description': description || SEO.description || '',
  };

  const hrefFavIcon = (size) => `/images/app-icon/favicon-${size}x${size}.png`;
  const hrefAppleIcon = (size) => `/images/app-icon/apple-icon-${size}x${size}.png`;
  const sizesFavIcon = [16, 32, 96];
  const sizesAppleIcon = [57, 60, 72, 76, 114, 120, 144, 152, 180];

  return (
    <Head>
      <title>{visibleTitle}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      <base href={process.env.WEBAPP_URL} />
      <link href={pageUrl || SEO.siteUrl} rel="canonical" />
      <link href="manifest.json" rel="manifest" />

      {Object.keys(metaName).map((name) => (
        <meta name={name} content={metaName[name]} key={name} />
      ))}
      {Object.keys(metaProperty).map((property) => (
        <meta property={property} content={metaProperty[property]} key={property} />
      ))}

      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/images/app-icon/android-icon-192x192.png"
      />

      {/* created from https://www.favicon-generator.org */}
      {sizesFavIcon.map((size) => (
        <link
          sizes={`${size}x${size}`}
          href={hrefFavIcon(size)}
          rel="icon"
          type="image/png"
          key={`image${size}`}
        />
      ))}
      {sizesAppleIcon.map((size) => (
        <link
          sizes={`${size}x${size}`}
          href={hrefAppleIcon(size)}
          rel="apple-touch-icon"
          key={`image${size}`}
        />
      ))}
    </Head>
  );
};
