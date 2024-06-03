import Image from 'next/image';
import styles from './Footer.module.css';

export default (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <p>Powered by Pavel</p>
      <span className={styles.logo}>
        <Image src="/images/footer-logo.png" alt="4life Logo" width={64} height={26} />
      </span>
      <p>
        <a href="https://github.com/4-life/4life.work" target="_blank" rel="noreferrer">
          {process.env.version || '0.0.0'}
        </a>
      </p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>{new Date(Number(process.env.date) * 1000).getFullYear() || '0000'}</p>
    </footer>
  );
};
