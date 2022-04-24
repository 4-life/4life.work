import { useEffect, useRef } from 'react';
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

      <Script src="libs/CSSPlugin.min.js" strategy="beforeInteractive" />
      <Script src="libs/TweenLite.min.js" strategy="beforeInteractive" />
      <Script src="libs/TimelineLite.min.js" strategy="beforeInteractive" />
      <Script src="libs/EasePack.min.js" strategy="beforeInteractive" />
    </>
  );
};
