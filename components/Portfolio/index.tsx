import Link from 'next/link';
import Image from 'next/image';
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
      <p>
        <span className={styles.commonTitle}>Age</span> 32 y.o.
        <br />
        <span className={styles.commonTitle}>City</span> Moscow
        <br />
        <span className={styles.commonTitle}>English</span> Upper Intermediate
      </p>

      <div className={styles.milestone}>
        <h2>Since 2021</h2>
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
            Strata is a full product life-cycle engineering company with some projects. My project
            is gmb.io website and Praxis fitness video trainig platform for North American users. I
            refactored an existing codebase and fixed CI/CD process.
          </p>
          <p>
            The actual stack: <b>NextJS</b>
            &nbsp;(react, redux-saga, styled-components, formik) as front and <b>NestJS</b> for
            rest-api (typescript, postgresSQL, typeorm, auth0). Video files uploads using AWS
            microservices (AWS Lambda + AWS Transcribe) with MUX video service. Host on EC2 and
            autodeploy via github actions. Also admin panel based on react-admin.
          </p>
        </div>
      </div>

      <div className={styles.milestone}>
        <h2>2018-2021</h2>
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
            For example, I written some additional browser extensions:
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
            I&apos;ve been studying at Moscow State Mining University at the Faculty of Information
            Systems. Trained in the direction of the university as a C# WPF programmer. Also
            developed webistes on PHP. In 2013 graduated in Software Engineer.
          </p>
        </div>
      </div>
    </main>
  );
};
