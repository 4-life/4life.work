import getConfig from 'next/config';
import Image from 'next/image';
import styles from './Footer.module.css';

const { publicRuntimeConfig } = getConfig();
const { version } = publicRuntimeConfig;

export default () => {
  return (
    <footer className={styles.footer}>
      <p>Powered by Pavel</p>
      <span className={styles.logo}>
        <Image src="/images/footer-logo.png" alt="4life Logo" width={64} height={26} />
      </span>
      <p>
        <a href="https://github.com/4-life/4life.work" target="_blank" rel="noreferrer">
          {version || '0.0.0'}
        </a>
      </p>
      <p>&nbsp;</p>
      <p>2022</p>
    </footer>
  );
};
