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
      </h1>
    </main>
  );
};
