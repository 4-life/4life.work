import Image from 'next/image';
import Nav from '../Nav';
import SoundButton, { Theme } from '../SoundButton';
import styles from './Home.module.css';

export default () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <SoundButton theme={Theme.black} />
      </div>
      <Nav />
      <h1 className={styles.title}>
        My name is <i>Pavel</i> <br /> I&apos;m Fillstack Web Developer from Moscow
        <br />
        <a href="mailto:qwe@qwe.qw" title="Email me" rel="noreferrer">
          <Image src="/images/email.png" alt="Email" width={28} height={20} />
        </a>
        <a href="telegram" title="Chat in Telegram" target="_blank" rel="noreferrer">
          <Image src="/images/telegram.png" alt="Telegram" width={25} height={25} />
        </a>
        <a href="github" title="My Github Account" target="_blank" rel="noreferrer">
          <Image src="/images/github.png" alt="Github" width={25} height={25} />
        </a>
      </h1>
    </main>
  );
};
