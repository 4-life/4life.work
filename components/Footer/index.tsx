import Image from 'next/image';
import styles from './Footer.module.css';

export default (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          Powered by{' '}
          <a href="https://github.com/4-life/4life.work" target="_blank" rel="noreferrer">
            <Image
              src="/images/footer-logo.png"
              alt="4life Logo"
              width={32}
              height={13}
              className={styles.logo}
            />{' '}
            {process.env.version || '0.0.0'}
          </a>
        </p>
      </div>
      <div className={styles.license}>
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          className={styles.ccLink}
        >
          License
          <img className={styles.ccLogo} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="" />
          <img className={styles.ccLogo} src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="" />
          <img className={styles.ccLogo} src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt="" />
          <img className={styles.ccLogo} src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1" alt="" />
        </a>
        <p>{new Date(Number(process.env.date) * 1000).getFullYear() || ''}</p>
      </div>
    </footer>
  );
};
