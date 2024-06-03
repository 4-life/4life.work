'use client';

import { useRef } from 'react';
import Link from 'next/link';
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
