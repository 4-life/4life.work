import Link from 'next/link';
import SoundButton, { Theme } from '../SoundButton';
import styles from './Skills.module.css';

export default () => {
  return (
    <div className={styles.bg}>
      <div className={styles.title}>Skills (Work in progress)</div>

      <div className={styles.footer}>
        <div className={styles.footerMenu}>
          <b className={styles.home}>
            <Link href="/">Home</Link>
          </b>
          <span>Skills</span>
        </div>
        <div className={styles.footerSound}>
          <SoundButton theme={Theme.white} label />
        </div>
      </div>
    </div>
  );
};
