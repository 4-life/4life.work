import { useEffect, useRef } from 'react';
import getConfig from 'next/config';
import Link from 'next/link';
import Script from 'next/script';
import SoundButton, { Theme } from '../SoundButton';
import styles from './Skills.module.css';
import init from './Grid';

const { publicRuntimeConfig } = getConfig();
const { version } = publicRuntimeConfig;

export default () => {
  const gridEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    init(gridEl.current);
  }, []);

  return (
    <>
      <div className={styles.bg} ref={gridEl}>
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

      <Script src="libs/CSSPlugin.min.js" strategy="beforeInteractive" />
      <Script src="libs/TweenLite.min.js" strategy="beforeInteractive" />
      <Script src="libs/TimelineLite.min.js" strategy="beforeInteractive" />
      <Script src="libs/EasePack.min.js" strategy="beforeInteractive" />
    </>
  );
};
