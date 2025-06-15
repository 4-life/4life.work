import Image from 'next/image';
import Nav from '@/components/Nav';
import SoundButton from '@/components/SoundButton';
import Theme from '@/components/SoundButton/types';
import styles from './Home.module.css';

export default (): JSX.Element => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <SoundButton theme={Theme.black} />
      </div>
      <Nav />
      <h1 className={styles.title}>
        My name is <i>Pavel</i> <br /> I&apos;m Full-stack web developer from Kazakhstan
        <br />
        <div className={styles.titleLinks}>
          <a href="mailto:ezmvib4nk@mozmail.com" title="Email me" rel="noreferrer">
            <Image src="/icons/email.svg" alt="Email" width={25} height={25} />
          </a>
          <a
            href="https://t.me/js4life"
            title="Write me in Telegram"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/icons/tg.svg" alt="Telegram" width={25} height={25} />
          </a>
          <a
            href="https://github.com/4-life/"
            title="My Github Account"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/icons/git.svg" alt="Github" width={25} height={25} />
          </a>
          <a
            href="http://linkedin.com/in/js4life"
            title="My Linkedin Account"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/icons/linkedin.svg" alt="Linkedin" width={25} height={25} />
          </a>
        </div>
      </h1>
    </main>
  );
};
