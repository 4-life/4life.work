import Link from 'next/link';
import Image from 'next/image';
import styles from './Portfolio.module.css';

import oldFlow from '../../public/images/aws-flow/old.png';
import newFlow from '../../public/images/aws-flow/new.png';
import dmFlow from '../../public/images/aws-flow/dm.png';

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

      <h3>Pavel Ovchinnikov</h3>
      <p>
        <span>Full-Stack web developer</span>
        <br />
        <span className={styles.commonTitle}>Age</span> 35 y.o.
        <br />
        <span className={styles.commonTitle}>City</span> Moscow
        <br />
        <span className={styles.commonTitle}>English</span> B+
      </p>

      <div className={styles.milestone}>
        <div className={styles.text}>
          <p>Work examples:</p>
          <p>
            <a href="https://github.com/4-life/chat-io" target="_blank" rel="noreferrer" className={styles.iconLink}>
              <Image src="/icons/git.svg" alt="Github" width={20} height={20} />
              Group chat app
            </a>
            &nbsp;(React, Socket.io, CRA, MUI, tests)
          </p>
          <p>
            <a href="https://github.com/4-life/backend-ts" target="_blank" rel="noreferrer" className={styles.iconLink}>
              <Image src="/icons/git.svg" alt="Github" width={20} height={20} />
              Rest-Api service
            </a>
            &nbsp;(Express, PostgreSQL, Sequelize, tests)
          </p>
          <p>
            <a
              href="https://github.com/4-life/storybook-boilerplate"
              target="_blank"
              rel="noreferrer"
              className={styles.iconLink}
            >
              <Image src="/icons/git.svg" alt="Github" width={20} height={20} />
              Storybook boilerplate
            </a>
            &nbsp;(Storybook, React, Sass)
          </p>
          <p>
            <a href="https://github.com/4-life/nft-marketplace" target="_blank" rel="noreferrer" className={styles.iconLink}>
              <Image src="/icons/git.svg" alt="Github" width={20} height={20} />
              NFT Marketplace
            </a>
            &nbsp;(React, Sass)
          </p>
          <p>
            <a href="https://github.com/4-life/ad-dashboard" target="_blank" rel="noreferrer" className={styles.iconLink}>
              <Image src="/icons/git.svg" alt="Github" width={20} height={20} />
              AD Dashboard
            </a>
            &nbsp;(Vite, React, Sass)
          </p>
          <p>
            <a href="https://play.google.com/store/apps/details?id=io.nwave.splacing2&hl=en_US" target="_blank" rel="noreferrer" className={styles.iconLink}>
              <Image src="/icons/play.svg" alt="Github" width={20} height={20} />
              PWA Mobile app
            </a>
            &nbsp;(Ionic, Angular)
          </p>
        </div>
      </div>

      <div className={styles.milestone}>
        <h2>
          2022<span className={styles.month}>.07</span> -{' '}
          <span className={styles['to-date']}>to date</span>
        </h2>
        <div className={styles.text}>
          <p>
            <a
              href="https://kupsilla.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.iconLink}
            >
              <Image src="/images/companies/kupsilla.png" alt="Kupsilla" width={20} height={22} />
              <span>Kupsilla LLC</span>
            </a>
          </p>
          <p>
            At Kupsilla, I worked on high-impact client projects including <b>Strateos</b>, a
            pioneer in lab automation, and a <b>Genetic Science</b> research platform.
          </p>
          <p>
            <b>Strateos Project</b> – Contributed to the development of a cutting-edge{' '}
            <b>Cloud Lab Automation-as-a-Service</b> platform that enables users to remotely run
            real-world <b>chemical reactions via automated robotics</b>.
          </p>
          <ul>
            <li>
              <p>
                Designed and developed user dashboards for managing lab automation processes using{' '}
                <b>React</b>, <b>TypeScript</b>, <b>SCSS</b>, and <b>Storybook</b>.
              </p>
            </li>
            <li>
              <p>
                Re-architected the large front-end codebase into <b>microfrontends</b> to improve
                scalability and maintainability.
              </p>
            </li>
            <li>
              <p>
                Created and maintained <b>shared UI libraries</b> distributed via a private NPM
                registry for consistency across teams and faster development cycles.
              </p>
            </li>
          </ul>
          <p>
            <b>Genetic Science Project</b> – Led front-end development for a web application that
            allows users to <b>search and visualize scientific parameters related to human genes</b>
            .
          </p>
          <ul>
            <li>
              <p>
                Built interactive, high-performance tables, plots, and graphs using{' '}
                <b>nivo.rocks</b>, optimized for handling large genomic datasets.
              </p>
            </li>
            <li>
              <p>
                Chose <b>Server-Side Rendering (SSR)</b> architecture to significantly improve load
                times, especially for data-heavy pages.
              </p>
            </li>
            <li>
              <p>
                Implemented performance tuning strategies to ensure smooth user interactions,
                including virtualization and efficient state management.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.milestone}>
        <h2>
          2021<span className={styles.month}>.05</span> - 2022
          <span className={styles.month}>.07</span>
        </h2>
        <div className={styles.text}>
          <p>
            <a
              href="https://www.strata.co.jp/"
              target="_blank"
              rel="noreferrer"
              className={styles.iconLink}
            >
              <Image src="/images/companies/strata.png" alt="Strata" width={30} height={30} />
              <span>Strata K.K.</span>
            </a>
          </p>
          <p>
            I worked at Strata, a full product life-cycle engineering company, on multiple projects
            including the <b>gmb.io</b> website and <b>Praxis</b>, a fitness video training platform
            targeted at North American users.
          </p>
          <p>
            The technology stack included <b>Next.js</b> (with <b>React</b>, <b>Redux-Saga</b>,{' '}
            <b>Styled-Components</b>, and <b>Formik</b>) for both the frontend and backend, and{' '}
            <b>NestJS</b> on the server side, using <b>TypeScript</b>, <b>PostgreSQL</b>, and{' '}
            <b>TypeORM</b>. User authentication was handled via <b>Auth0</b>. The system supported
            video uploads through <b>AWS Lambda</b> and <b>AWS Transcribe</b>, integrated with the{' '}
            <b>MUX</b> video streaming service. Applications were hosted on <b>AWS EC2</b> with
            automated deployment via <b>GitHub Actions</b>.
          </p>
          <p>
            The <b>gmb.io</b> platform hosts a large library of training videos. I improved video
            delivery by optimizing playback performance, including automatic selection of the best
            video resolution and codecs based on the user&apos;s device and browser capabilities.
            This significantly enhanced the streaming experience across a wide range of clients.
          </p>
          <p>
            Additionally, I refactored and stabilized the existing codebase, resolved issues in the
            CI/CD pipeline, and simplified the generation of closed captions using AWS services.
          </p>
          <p>The old flow:</p>
          <div className={styles.flowImage}>
            <a href={oldFlow.src} target="_blank" rel="noreferrer">
              <Image
                src={oldFlow}
                alt="Old AWS flow"
                width={750}
                height={390}
                layout="responsive"
              />
            </a>
          </div>
          <p>Refactored flow:</p>
          <div className={styles.flowImage}>
            <a href={newFlow.src} target="_blank" rel="noreferrer">
              <Image
                src={newFlow}
                alt="New AWS flow"
                width={475}
                height={350}
                layout="responsive"
              />
            </a>
          </div>
          <p>
            Also i maintain admin panel on <b>react-admin</b>.
          </p>
        </div>
      </div>

      <div className={styles.milestone}>
        <h2>
          2018<span className={styles.month}>.07</span> - 2021
          <span className={styles.month}>.04</span>
        </h2>
        <div className={styles.text}>
          <p>
            <a
              href="https://www.nwave.io/"
              target="_blank"
              rel="noreferrer"
              className={styles.iconLink}
            >
              <Image src="/images/companies/nwave.png" alt="Nwave" width={30} height={30} />
              <span>Nwave Technologies Ltd.</span>
            </a>
          </p>
          <p>
            I worked at Nwave as a Full Stack Web Developer. Nwave develops IoT solutions,
            specializing in the automation of parking bays using smart parking sensors that collect
            and transmit data in real time. The company primarily serves clients in the UK.
          </p>
          <p>
            At Nwave, I developed and maintained SPlace - progressive web application (<b>PWA</b>)
            using <b>TypeScript</b> for installing, checking, and calibrating parking sensors on a
            map. This application were built with <b>Ionic 3</b> and later migrated to{' '}
            <b>Ionic 4/5</b>. Key features included a built-in <b>QR code scanner</b>, integration
            with a third-party calibration tool, <b>local storage</b> for configuration, performance
            optimization for displaying a large number of map markers, and location search using the{' '}
            <b>Google Maps API</b>. Authentication was implemented using <b>AWS Amplify</b>, and the
            app was published on{' '}
            <a
              href="https://play.google.com/store/apps/details?id=io.nwave.splacing2&hl=en_US"
              target="_blank"
              rel="noreferrer"
            >
              Google Play
            </a>
            .
          </p>
          <p>
            I also developed and supported an admin dashboard web application for monitoring and
            managing sensor statuses. The tech stack included <b>React</b>, <b>Redux-Saga</b>,{' '}
            <b>TypeScript</b>, <b>Material-UI</b>, <b>Moment.js</b>, <b>Lodash</b>,{' '}
            <b>AWS Amplify</b>, and the <b>Google Maps API</b>. It was a single-page application
            (SPA) with <b>unit</b> and <b>end-to-end tests</b>, integrated with{' '}
            <b>Bitbucket CI/CD</b> and <b>Sentry</b> for logging. The site was hosted on{' '}
            <b>AWS S3</b>.
          </p>
          <p>
            Additionally, I participated in migrating the backend from a legacy system to AWS
            microservices. I implemented a <b>REST API</b> microservice for device management using{' '}
            <b>AWS Lambda</b>, written in <b>Node.js</b> with <b>TypeScript</b>. The database was{' '}
            <b>PostgreSQL</b> accessed via <b>pg-promise</b>, with geospatial operations handled by{' '}
            <b>PostGIS</b>. <b>AWS API Gateway</b> managed the REST routes, and <b>AWS Cognito</b>{' '}
            was used for user authentication. Deployment was automated using the <b>AWS CDK</b>. I
            also implemented comprehensive <b>unit</b> and <b>e2e tests</b> using <b>Mocha</b>,{' '}
            <b>Chai</b>, and the <b>AWS SDK</b>, achieving 99% code coverage.
          </p>
          <p>Scheme of my work:</p>
          <div className={styles.flowImage}>
            <a href={dmFlow.src} target="_blank" rel="noreferrer">
              <Image src={dmFlow} alt="dm" width={400} height={370} layout="responsive" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.milestone}>
        <h2>
          2017<span className={styles.month}>.05</span> - 2018
          <span className={styles.month}>.06</span>
        </h2>
        <div className={styles.text}>
          <p>
            <a
              href="https://adguard.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.iconLink}
            >
              <Image src="/images/companies/adguard.png" alt="Adguard" width={30} height={30} />
              <span>AdGuard</span>
            </a>
          </p>
          <p>
            I worked at Adguard, one of the most popular ad blockers, where I contributed to both
            the main product and additional browser extensions. I developed several browser
            extensions using <b>JavaScript (ES6)</b>, including:
          </p>
          <ul>
            <li>
              <p>
                An extension that helps users read website content hidden behind ad blocker
                detection (not deployed, available in a &nbsp;
                <a href="https://github.com/AdguardTeam/Recovery" target="_blank" rel="noreferrer">
                  repository
                </a>
                ).
              </p>
            </li>
            <li>
              <p>
                Contributions to the development of <b>Adguard Assistant</b> (
                <a
                  href="https://github.com/AdguardTeam/AdguardAssistant"
                  target="_blank"
                  rel="noreferrer"
                >
                  repository
                </a>
                )
              </p>
            </li>
          </ul>
          <p>
            In addition, I worked on the front-end of the{' '}
            <a href="https://adguard.com" target="_blank" rel="noreferrer">
              Adguard
            </a>{' '}
            website using <b>Vue</b>, <b>Vuex</b>, and <b>PostCSS</b>.
          </p>
        </div>
      </div>

      <div className={styles.milestone}>
        <h2>
          2013<span className={styles.month}>.05</span> - 2017
          <span className={styles.month}>.05</span>
        </h2>
        <div className={styles.text}>
          <p>
            I worked as a Web Developer for several companies, where I was responsible for creating
            and maintaining websites using <b>PHP</b>, <b>WordPress</b>, <b>JavaScript</b>, and{' '}
            <b>jQuery</b>. During this time, I began working with modern JavaScript frameworks,
            including <b>AngularJS</b> (Angular 1), and developed single-page applications (SPAs). I
            also gained experience with real-time features using <b>WebSockets</b> and implemented
            interactive <b>SVG</b> animations for various projects. Additionally, I automated build
            and deployment processes using <b>Grunt</b> and <b>Gulp</b>, which improved development
            efficiency and consistency across environments.
          </p>
        </div>
      </div>

      <div className={styles.milestone}>
        <h2>
          2008<span className={styles.month}>.09</span> - 2013
          <span className={styles.month}>.09</span>
        </h2>
        <div className={styles.text}>
          <p>
            I studied at Moscow State Mining University – Faculty of Information Systems. Degree:
            Specialist in Software Engineering.
          </p>
          <ul>
            <li>
              <p>
                Completed a five-year Specialist program, equivalent to a combined Bachelor&apos;s
                and Master&apos;s level education.
              </p>
            </li>
            <li>
              <p>
                Focused on software development, with specialization in C# and WPF desktop
                application programming.
              </p>
            </li>
            <li>
              <p>Developed various web projects using PHP, HTML, CSS, and MySQL.</p>
            </li>
            <li>
              <p>
                Gained a strong foundation in algorithms, databases, and system architecture through
                coursework and lab work.
              </p>
            </li>
            <li>
              <p>Graduated with a Specialist degree in Software Engineering</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
