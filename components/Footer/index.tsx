import Image from 'next/image';
import styles from './Footer.module.css';

export default ({ version }) => {
  return (
    <footer className={styles.footer}>
      <p>Powered by Pavel</p>
      <span className={styles.logo}>
        <Image src="/images/footer-logo.png" alt="4life Logo" width={64} height={26} />
      </span>
      <p>2022</p>
      <br />
      <p>&nbsp;v{version || '0.0.0'} </p>
    </footer>
  );
};
