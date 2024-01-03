'use client';

import { useRef } from 'react';
import getConfig from 'next/config';
import Link from 'next/link';
import Script from 'next/script';
import SoundButton, { Theme } from '../SoundButton';
import styles from './Skills.module.css';
import init from './Grid';

const { publicRuntimeConfig } = getConfig();
const { version } = publicRuntimeConfig;

export default () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={styles.bg} ref={ref}>
        <div className={styles.title}>My Skills (beta)</div>

        <div className={styles.footer}>
          <div className={styles.footerMenu}>
            <b className={styles.home}>
              <Link href="/">Home</Link>
            </b>
            <span>My Skills (beta)</span>
            <span>&nbsp;{version}</span>
          </div>
          <div className={styles.footerSound}>
            <SoundButton theme={Theme.white} label />
          </div>
        </div>
      </div>

      <Script src="libs/TweenLite.min.js" strategy="lazyOnload" onLoad={() => init(ref.current)} />
    </>
  );
};
