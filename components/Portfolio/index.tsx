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
              <Image src="/images/homeIcon.png" alt="Home" width={25} height={25} />
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
          <p>Code examples of my work:</p>
          <p>
            <a href="https://github.com/4-life/chat-io" target="_blank" rel="noreferrer">
              Simple chat app
            </a>
            &nbsp;(Typescript, React, Redux-saga, Socket.io, CRA, MUI, tests)
          </p>
          <p>
            <a href="https://github.com/4-life/backend-ts" target="_blank" rel="noreferrer">
              Rest-Api service
            </a>
            &nbsp;(Typescript, Express, PostgreSQL, Sequelize, tests)
          </p>
          <p>
            <a href="https://github.com/4-life/4life.work" target="_blank" rel="noreferrer">
              My Website
            </a>
            &nbsp;(NextJS, React)
          </p>
          <p>
            <a href="https://github.com/4-life/nft-marketplace" target="_blank" rel="noreferrer">
              NFT Marketplace
            </a>
            &nbsp;(Typescript, React, Sass)
          </p>
          <p>
            <a
              href="https://github.com/4-life/storybook-boilerplate"
              target="_blank"
              rel="noreferrer"
            >
              Storybook boilerplate
            </a>
            &nbsp;(Storybook, Typescript, React, Sass)
          </p>
        </div>
      </div>

      <div className={styles.milestone}>
        <h2>
          2022<span className={styles.month}>.07</span> - to date
        </h2>
        <div className={styles.text}>
          <p>
            <a href="https://strateos.com/" target="_blank" rel="noreferrer">
              <span>
                <Image src="/images/companies/strateos.png" alt="Strata" width={30} height={30} />
              </span>
              <span>Strateos</span>
            </a>
          </p>
          <p>
            Strateos reimagined the laboratory as a smart data generation center with the industry’s
            first Cloud Lab Automation-as-a-Service Platform.
          </p>
          <p>
            I develop user dashboard related to lab automation processes. The actual stack:{' '}
            <b>Storybook</b>, <b>TypeScript</b>, <b>SCSS</b>.
          </p>
        </div>
      </div>

      <div className={styles.milestone}>
        <h2>
          2021<span className={styles.month}>.05</span> - 2022
          <span className={styles.month}>.07</span>
        </h2>
        <div className={styles.text}>
          <p>
            <a href="https://www.strata.co.jp/" target="_blank" rel="noreferrer">
              <span>
                <Image src="/images/companies/strata.png" alt="Strata" width={30} height={30} />
              </span>
              <span>Strata K.K.</span>
            </a>
          </p>
          <p>
            Strata is a full product life-cycle engineering company with several projects. My
            project is <i>gmb.io</i> website and Praxis fitness video training platform for North
            American users.
          </p>
          <p>
            The actual stack: <b>NextJS (react, redux-saga, styled-components, formik)</b> as a
            front-end and back-end with <b>NestJS (typescript, postgresSQL, typeorm, auth0)</b>.
            Video files uploads using AWS microservices (<b>AWS Lambda + AWS Transcribe</b>) with
            &nbsp;<b>MUX</b> video service. Host on <b>EC2</b> and autodeploy via&nbsp;
            <b>Github Actions</b>. User authorisation based on <b>Auth0</b>.
          </p>
          <p>
            I refactored an existing codebase and fixed CI/CD process. For example i simplifyed
            generating closed captions for videos in AWS:
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
            <a href="https://www.nwave.io/" target="_blank" rel="noreferrer">
              <span>
                <Image src="/images/companies/nwave.png" alt="Nwave" width={30} height={30} />
              </span>
              <span>Nwave Technologies Ltd.</span>
            </a>
          </p>
          <p>I&apos;ve been working at Nwave as a Full Stack Web Developer.</p>
          <p>
            Nwave is developing solutions in IoT, and in particular the automation of parking bays
            with parking sensors, gather the collection of data from sensors in real time. Main
            customers from England.
          </p>
          <p>
            I developed and supported two PWA mobile applications on <b>Typescript</b> for
            installing, checking and calibrating parking sensors on a map. PWA applications on&nbsp;
            <b>Ionic 3</b>, and then they were migrated to <b>Ionic 4/5</b>. The applications had a
            built-in QR code scanner, communication with a third-party device calibration
            application, local storage of settings, thinning out a large number of markers on the
            map, and searching for locations by address using <b>Google Maps Api</b>. Authorisation
            based on <b>AWS Amplify</b>.
          </p>
          <p>
            Also I&apos;ve been developing and supporting the admin website with dashboard for
            monitoring statuses of sensors and managing them. The stack: <b>React</b>,&nbsp;
            <b>Redux-saga</b>, <b>Typescript</b>, <b>Material-UI</b>, <b>Momentjs</b>, <b>Lodash</b>
            ,&nbsp;<b>AWS Amplify</b>, <b>Google Maps Api</b>. It was a SPA website with unit and
            e2e tests, <b>Bitbucket CI/CD</b> and <b>Sentry</b> logging. The website is hosted
            on&nbsp;<b>AWS S3.</b> The backend was also migrated from an old legacy to <b>AWS</b>
            &nbsp;microservices. My part was to create a RestAPI Device Management microservice
            on&nbsp;<b>AWS Lambda</b> to manage a list of sensors. <b>Lambda</b> is implemented
            on&nbsp;<b>NodeJS</b> with <b>Typescript</b>, database - <b>PostgreSQL</b>
            &nbsp;through the <b>pg-promise</b> library. Interaction with geodata of sensors in the
            database is implemented using the <b>PostGIS</b> library. RestAPI routes are managed by
            &nbsp;<b>AWS ApiGateway</b>. User Access Management - <b>AWS Cognito</b>. The deployment
            was automated by <b>AWS CDK</b>. Implemented unit and e2e tests for API via&nbsp;
            <b>AWS SDK + mocha + chai</b> with 99% code coverage. Here is scheme of my part:
          </p>
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
            <a href="https://adguard.com/" target="_blank" rel="noreferrer">
              <span>
                <Image src="/images/companies/adguard.png" alt="Adguard" width={30} height={30} />
              </span>
              <span>AdGuard</span>
            </a>
          </p>
          <p>
            Adguard is one of the most popular ad blocker. Also Adguard develop another extensions.
            For example, I written some additional browser extensions using <b>JavaScript (ES6)</b>:
          </p>
          <ul>
            <li>
              Extension that helps to read a website content when it blocks a view for all who have
              enabled ad blocker (extension not deployed,&nbsp;
              <a href="https://github.com/AdguardTeam/Recovery" target="_blank" rel="noreferrer">
                repository
              </a>
              ).
            </li>
            <li>
              Part in developing Adguard Assistant (
              <a
                href="https://github.com/AdguardTeam/AdguardAssistant"
                target="_blank"
                rel="noreferrer"
              >
                repository
              </a>
              )
            </li>
          </ul>
          <p>
            Also i developed&nbsp;
            <a href="https://adguard.com" target="_blank" rel="noreferrer">
              Adguard
            </a>
            &nbsp;website Front-End on <b>Vue</b>, <b>Vuex</b> and <b>PostCSS</b>.
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
            I&apos;ve been working in different companies as a Web Developer. I&apos;ve been written
            websites using <b>PHP</b>, <b>Wordpress</b>, <b>JavaScript</b>, <b>jQuery</b>. I started
            use frameworks such as <b>Angular 1</b> and developed SPA. I had some projects with
            websockets and SVG animation. I also automated app deployment and building processes
            by&nbsp;<b>Grunt</b> and <b>Gulp</b>.
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
            I&apos;ve been studying at Moscow State Mining University at the Faculty of Information
            Systems. Trained in the direction of the university as a <b>C#</b> <b>WPF</b>
            &nbsp;programmer. Also developed webistes on <b>PHP</b>. In 2013 graduated in Software
            Engineer.
          </p>
        </div>
      </div>
    </main>
  );
};
