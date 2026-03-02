'use client';

import { useRef } from 'react';
import Script from 'next/script';
import SoundButton from '@/components/SoundButton';
import Theme from '@/components/SoundButton/types';
import init from './Grid';

import styles from './Skills.module.css';

interface Props {
  version: string;
}

export default ({ version }: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={styles.bg} ref={ref}>
        <div className={styles.title}>Hi, I&apos;m Pavel</div>

        <div className={styles.footer}>
          <div className={styles.footerMenu}>
            <p>
              ABOUT ME
              <br />
              {new Date(Number(process.env.date) * 1000).getFullYear() || ''}{' '}
              <span>&nbsp;{version}</span>
            </p>
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
