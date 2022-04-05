import Link from 'next/link';
import styles from './Portfolio.module.css';

export default () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.h1}>Portfolio</h1>
        <span className={styles.homeLink}>
          <Link href="/">Home</Link>
        </span>
      </div>

      <h3>Pavel Ovchinnikov</h3>
      <h4>Full Stack Web Developer</h4>
      <h4>Moscow</h4>
      <h4>32 y.o.</h4>
      <h4>English: Upper Intermediate</h4>

      <div className={styles.milestone}>
        <h2>Since 2021</h2>
        <div className={styles.text}>
          <p>Company: Strata K.K.</p>
          <a href="https://www.strata.co.jp/" target="_blank" rel="noreferrer">
            strata.co.jp
          </a>
          <p>
            Basically working with the legacy code of the site gmb.io. Refactoring an existing
            system. The site is a fitness video training platform for North American users. Stack:
            nextjs (react, redux-saga, styled-components, formik) as front and nestjs for rest-api
            (typescript, postgresSQL, typeorm, auth0). Video files are loaded in a bundle of
            microservices MUX + AWS Lambda + AWS Transcribe. Host on EC2 and autodeploy via github
            actions. Also admin support on react-admin.
          </p>
        </div>
      </div>

      <div className={styles.milestone}>
        <h2>2018-2021</h2>
        <div className={styles.text}>
          <p>Company: Nwave Technologies Ltd</p>
          <a href="https://www.nwave.io/" target="_blank" rel="noreferrer">
            nwave.io
          </a>
          <p>I&apos;ve been working at Nwave as a Full Stack Web Developer.</p>
          <p>
            Nwave is developing solutions in IoT, and in particular the automation of parking bays
            with parking sensors, gather the collection of data from sensors in real time. Main
            customers from England.
          </p>
          <p>
            I developed and supported two PWA mobile applications for installing, checking and
            calibrating parking sensors on a map. PWA applications on Ionic 3, and then they were
            migrated to Ionic 4. The applications had a built-in QR code scanner, communication with
            a third-party device calibration application, local storage of settings, thinning out a
            large number of markers on the map, and searching for locations by address using Google
            Maps Api. Authorisation by AWS Amplify. Typescript as a main language.
          </p>
          <p>
            Also I&apos;ve been developing and supporting the admin website with dashboard for
            monitoring the status of sensors and managing them. Stack: React, Redux-saga,
            Typescript, Material-UI, Momentjs, Lodash, AWS Amplify, Google Maps Api. It was a SPA
            website with unit tests, e2e tests, bitbucket CI/CD and Sentry logging. The website is
            hosted on AWS S3. The backend was also migrated from an old legacy to AWS microservices.
            My part was to create a RestAPI Device Management microservice on AWS Lambda to manage a
            list of sensors. Lambda is implemented on NodeJS with Typescript, database - PostgreSQL
            through the pg-promise library. Interaction with geodata of sensors in the database is
            implemented using the PostGIS library. RestAPI routes are managed by AWS ApiGateway.
            Access Management - AWS&nbsp;Cognito. The deployment was automated by AWS CDK.
            Implemented unit and e2e tests for API via AWS SDK + mocha + chai.
          </p>
        </div>
      </div>

      <div className={styles.milestone}>
        <h2>2017-2018</h2>
        <div className={styles.text}>
          <p>Company: AdGuard</p>
          <a href="hhttps://adguard.com//" target="_blank" rel="noreferrer">
            adguard.com
          </a>
          <p>
            I&apos;ve been working in Adguard. This company develop ad blocker. I written some
            browser extensions:
          </p>
          <ul>
            <li>
              Extension that helps you to see a website content when it blocks a content for all who
              have enabled ad blocker (not deployed,&nbsp;
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
            &nbsp;website Front-End on Vue.
          </p>
        </div>
      </div>

      <div className={styles.milestone}>
        <h2>2013-2017</h2>
        <div className={styles.text}>
          <p>
            I&apos;ve been working in different companies as a Web Developer. I&apos;ve been written
            websites using PHP, Wordpress, JavaScript, jQuery. I started use frameworks such as
            Angular 1 as a SPA. I had some projects with websockets and SVG animation. I also
            automated processes in Grunt and Gulp.
          </p>
        </div>
      </div>

      <div className={styles.milestone}>
        <h2>2008-2013</h2>
        <div className={styles.text}>
          <p>
            I studied at Moscow State Mining University at the Faculty of Information Systems.
            Trained in the direction of the university as a C# WPF programmer. Also developed
            webistes on PHP. In 2013 graduated in Software Engineer.
          </p>
        </div>
      </div>
    </main>
  );
};
