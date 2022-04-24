/* eslint-disable @next/next/no-sync-scripts */
import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import SoundButton, { Theme } from '../SoundButton';
import styles from './Skills.module.css';
import init from './Grid';

export default () => {
  const gridEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    init(gridEl.current);
  }, []);

  return (
    <>
      <Head>
        <script src="libs/CSSPlugin.min.js" />
        <script src="libs/TweenLite.min.js" />
        <script src="libs/TimelineLite.min.js" />
        <script src="libs/EasePack.min.js" />
      </Head>

      <div className={styles.bg} ref={gridEl}>
        <div className={styles.title}>My Skills</div>

        <div className={styles.footer}>
          <div className={styles.footerMenu}>
            <b className={styles.home}>
              <Link href="/">Home</Link>
            </b>
            <span>My Skills (experimental)</span>
          </div>
          <div className={styles.footerSound}>
            <SoundButton theme={Theme.white} label />
          </div>
        </div>
      </div>
    </>
  );
};
