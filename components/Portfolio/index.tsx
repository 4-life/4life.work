import Link from 'next/link';
import Image from 'next/image';
import styles from './Portfolio.module.css';
import Technologies from './Technologies';
import HiddenKeywords from './HiddenKeywords';
import Companies from './Companies';

export default (): JSX.Element => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.h1}>Portfolio</h1>
        <span className={styles.homeLink}>
          <Link href="/" passHref>
            <span className={styles.homeIcon}>
              <Image src="/icons/home.svg" alt="Home" width={25} height={25} />
            </span>
            Home
          </Link>
        </span>
      </div>

      <div className={styles.profile}>
        <Image
          src="/images/avatar.png"
          alt="Pavel Ovchinnikov"
          width={96}
          height={96}
          className={styles.avatar}
        />
        <div className={styles.profileInfo}>
          <h3>Pavel Ovchinnikov</h3>
          <p className={styles.subtitle}>
            Senior Software Engineer | Full-Stack · Backend · IoT · Cloud · AI
          </p>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <span className={styles.commonTitle}>Based in</span>
              <span className={styles.metaValue}>Georgia (PE)</span>
            </span>
            <span className={styles.metaItem}>
              <span className={styles.commonTitle}>English</span>
              <span className={styles.metaValue}>B2</span>
            </span>
            <span className={styles.metaItem}>
              <span className={styles.commonTitle}>Education</span>
              <span className={styles.metaValue}>B.S. Computer Science</span>
            </span>
            <span className={styles.metaItem}>
              <a href="mailto:hello@4life.work" className={styles.contactLink} title="Email">
                <Image src="/icons/email.svg" alt="Email" width={20} height={20} />
              </a>
              <a
                href="https://t.me/js4life"
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
                title="Telegram"
              >
                <Image src="/icons/tg.svg" alt="Telegram" width={20} height={20} />
              </a>
              <a
                href="http://linkedin.com/in/4-life"
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
                title="LinkedIn"
              >
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </a>
              <a
                href="https://github.com/4-life/"
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
                title="Github"
              >
                <Image src="/icons/git.svg" alt="Github" width={20} height={20} />
              </a>
            </span>
            <span className={styles.metaItem}>
              <a href="/Pavel Ovchinnikov cv.pdf" download className={styles.downloadBtn}>
                ↓ Download CV
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.intro}>
        <p>
          Senior Software Engineer with 10+ years of experience building production web
          applications, backend services, PWA/mobile, IoT platforms, and high load systems.
          Experienced across the full software lifecycle, from system architecture and APIs to
          frontend applications, databases, cloud infrastructure, and CI/CD.
        </p>
        <p>
          My background includes frontend, backend and mobile frameworks, API and communication
          patterns, relational and NoSQL databases, ORMs, cloud platforms and managed services,
          containerization and orchestration, CI/CD and infrastructure automation, authentication
          and authorization systems, caching and messaging, testing, monitoring, and observability.
          I have worked on both product and enterprise systems, including complex data platforms and
          applications handling large datasets.
        </p>
        <p>
          Currently focused on applying this engineering experience to AI-powered products and
          modern software systems, combining established software engineering practices with
          emerging AI technologies.
        </p>
        <p>
          Mentors and leads developers formally and informally. Reviews teammates&apos; code to
          catch bugs and keep quality high. Writes clear docs, branching policies, and linting
          rules. Good at detecting issues early using the terminal, curl, logs, and native database
          queries.
        </p>
      </div>

      <Technologies />

      <HiddenKeywords />

      <Companies />
    </main>
  );
};
