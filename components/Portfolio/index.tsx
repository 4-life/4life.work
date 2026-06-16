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

      <div className={styles.profile}>
        <h3>Pavel Ovchinnikov</h3>
        <p className={styles.subtitle}>Full-Stack Web Developer</p>
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

      <div className={styles.section}>
        <p className={styles.sectionLabel}>My examples</p>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <a
              href="https://meshintex.com"
              target="_blank"
              rel="noreferrer"
              className={styles.projectLink}
            >
              <Image src="/icons/external-link.svg" alt="Meshintex" width={20} height={20} />
              Meshintex
            </a>
            <span className={styles.projectStack}>Nextjs, React, Tailwind</span>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://github.com/4-life/hello-world"
              target="_blank"
              rel="noreferrer"
              className={styles.projectLink}
            >
              <Image src="/icons/git.svg" alt="Github" width={20} height={20} />
              GraphQL boilerplate
            </a>
            <span className={styles.projectStack}>TypeGraphQL, TypeORM, Apollo, NextJS</span>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://github.com/4-life/ad-dashboard"
              target="_blank"
              rel="noreferrer"
              className={styles.projectLink}
            >
              <Image src="/icons/git.svg" alt="Github" width={20} height={20} />
              AD Dashboard
            </a>
            <span className={styles.projectStack}>Vite, React, Sass</span>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://play.google.com/store/apps/details?id=io.nwave.splacing2&hl=en_US"
              target="_blank"
              rel="noreferrer"
              className={styles.projectLink}
            >
              <Image src="/icons/play.svg" alt="Google Play" width={20} height={20} />
              PWA Mobile app
            </a>
            <span className={styles.projectStack}>Ionic, Angular, Google Maps API</span>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://github.com/4-life/lambda-digital-client"
              target="_blank"
              rel="noreferrer"
              className={styles.projectLink}
            >
              <Image src="/icons/git.svg" alt="Github" width={20} height={20} />
              NFT Marketplace
            </a>
            <span className={styles.projectStack}>React, GraphQL, Sass</span>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://chat.4life.work/"
              target="_blank"
              rel="noreferrer"
              className={styles.projectLink}
            >
              <Image src="/icons/external-link.svg" alt="Group chat" width={20} height={20} />
              Group chat app
            </a>
            <span className={styles.projectStack}>React, Socket.io, MUI, GCP, e2e tests</span>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://github.com/4-life/storybook-boilerplate"
              target="_blank"
              rel="noreferrer"
              className={styles.projectLink}
            >
              <Image src="/icons/git.svg" alt="Github" width={20} height={20} />
              Storybook boilerplate
            </a>
            <span className={styles.projectStack}>Storybook, NPM, React, Sass</span>
          </div>
        </div>
      </div>

      <div className={styles.intro}>
        <p>
          Full-stack web developer with 10+ years of experience building web and mobile
          applications. Comfortable across the entire stack — from database design and backend APIs
          to frontend UIs. 
        </p>
        <p>My recent achievements:</p>
        <ul className="achievements-list">
          <li>
            IoT service (website + dashboard) in 20 hours from scratch to prod (CRUD, SEO, charts,
            sensor map, CI/CD, SOC2 ready) — meshintex.com
          </li>
          <li>
            ERP/CMMS system in 2 business days from scratch to prod (inventory, invoices, orders,
            payment processing, CI/CD, ghcr)
          </li>
        </ul>
        <p>
          I have a deep expertise in <b>React</b> (hooks, RSC) with <b>Next.js</b> for full-stack
          and SSR/SSG/ISR workflows. <b>Vue</b> experience including <b>Nuxt</b>. Production{' '}
          <b>Angular</b> apps with <b>RxJS</b>, reactive forms. Solid state management across
          ecosystems (<b>Redux Toolkit</b>, <b>Zustand</b>) on the React side; <b>Vuex</b> for Vue;{' '}
          <b>NgRx</b> for Angular. Graphics work using <b>SVG</b> (animations, data viz, custom UI)
          and <b>Canvas</b> (real-time rendering, image manipulation). Real-time UX via sockets and
          SSE. Styling & UI: CSS-in-JS, <b>Tailwind</b>, SCSS/CSS Modules, fluid typography, custom
          animation with <b>Framer Motion</b> and CSS transitions. Built component libraries using{' '}
          <b>Storybook</b>. Use <b>Vite</b>, <b>Webpack</b>. Experienced optimizing bundle size by
          code splitting, tree-shaking, lazy loading, and analyzing bundle output. Testing: Unit and
          integration tests with <b>Mocha</b>, <b>Jest</b>/<b>Vitest</b>. E2E with <b>Cypress</b>{' '}
          and <b>Puppeteer</b>. Visual regression testing.
        </p>
        <p>
          Develop APIs, data models, and system architecture. Production experience with high-load
          systems built on microservices — including an SNS/SQS + Lambda pipeline processing 30k
          health-check requests per minute. <b>PostgreSQL</b> as the primary relational database —
          schema design, query optimization, indexing strategies, migrations. ORM experience with{' '}
          <b>TypeORM</b> and <b>Sequelize</b> across multiple production codebases. <b>DynamoDB</b>{' '}
          for high-performance, low-latency workloads. Builds APIs in REST (with <b>OpenAPI</b>/
          <b>Swagger</b> schemas as the contract) and <b>GraphQL</b> (schema design, resolvers,
          subscriptions). Production experience with multiple auth approaches: <b>OpenID</b>,{' '}
          <b>Auth0</b>, <b>AWS Amplify</b> (Cognito-based auth), and <b>next-auth</b> with different
          providers.
        </p>
        <p>
          <b>AWS</b> (S3, EC2, Lambda, Cognito, SNS, RDS, CloudFront) and <b>Google Cloud</b>. CI/CD
          pipelines, automated testing, infrastructure-as-code. Experienced deploying and scaling
          services in cloud-native environments.
        </p>
        <p>
          Shipped production mobile apps using <b>React Native</b>, <b>Flutter</b>, and <b>Ionic</b>{' '}
          — native-quality experiences from a shared codebase.
        </p>
        <p>
          Maps and geospatial integrations (<b>Google Maps</b>, <b>Mapbox</b>, <b>Leaflet</b>) in
          production.
        </p>
        <p>
          Mentors and leads developers formally and informally. Fluent with AI-assisted development
          tools with a clear methodology for using them to ship faster without losing quality or
          security. Reviews teammates&apos; code to catch bugs and keep quality high. Writes clear
          docs, branching policies, and linting rules. Good at detecting issues early using the
          terminal, curl, logs, and native database queries.
        </p>
      </div>

      <div className={styles.timeline}>
        <div className={styles.milestone}>
          <div className={styles.milestoneLeft}>
            <h2>
              2022<span className={styles.month}>.07</span> -{' '}
              <span className={styles['to-date']}>to date</span>
            </h2>
          </div>
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
              At Kupsilla I worked on two client projects: <b>Strateos</b>, a cloud lab automation
              platform, and a <b>Genetic Science</b> research application.
            </p>
            <p>
              Conducted <b>technical interviews</b> for junior and mid-level candidates, performed{' '}
              <b>code reviews</b>, and <b>mentored</b> developers to keep code quality high and
              support team growth.
            </p>
            <p>
              <b>Strateos</b> – A <b>Cloud Lab Automation-as-a-Service</b> platform where users
              remotely run real <b>chemical reactions via robotic systems</b>.
            </p>
            <ul>
              <li className={styles.improvementItem}>
                <p>
                  Improved scalability and independent deployability of a large React codebase,
                  measured by separate release cycles per team, by re-architecting the frontend into{' '}
                  <b>microfrontends</b> using <b>React</b>, <b>TypeScript</b>, <b>SCSS</b>, and{' '}
                  <b>Storybook</b>.<span className={styles.impactLabel}>↑ Scalability</span>
                </p>
              </li>
              <li className={styles.improvementItem}>
                <p>
                  Increased development speed across teams, measured by reduced duplication of UI
                  work, by building shared UI libraries and publishing them to a private{' '}
                  <b>NPM registry</b> used by all microfrontend modules.
                  <span className={styles.impactLabel}>↑ Dev Speed</span>
                </p>
              </li>
              <li className={styles.improvementItem}>
                <p>
                  Built a complex chemical reaction constructor — a heavy custom UI component that
                  lets users visually design lab reactions — and packaged it as a standalone NPM
                  module to keep the main app lightweight and maintainable.
                  <span className={styles.impactLabel}>↑ Maintainability</span>
                </p>
              </li>
            </ul>
            <p>
              <b>Genetic Science</b> – A web application for searching and visualizing scientific
              parameters related to <b>human genes</b>.
            </p>
            <ul>
              <li className={styles.improvementItem}>
                <p>
                  Reduced initial page load time for data-heavy genomic pages by implementing{' '}
                  <b>SSR</b> and enabling <b>gzip compression</b> on API responses.{' '}
                  <span className={styles.impactLabel}>↑ Performance</span>
                </p>
              </li>
              <li className={styles.improvementItem}>
                <p>
                  Kept AWS infrastructure costs within the free tier, measured by zero hosting
                  spend, by deploying on <b>AWS Amplify</b> and managing build-minute usage within
                  free quota limits. <span className={styles.impactLabel}>↓ Cost</span>
                </p>
              </li>
              <li className={styles.improvementItem}>
                <p>
                  Built a complex interactive view combining a data plot and a collapsible rows
                  table in one synchronized layout using <b>nivo.rocks</b>, improving data
                  exploration for researchers. <span className={styles.impactLabel}>↑ UX</span>
                </p>
              </li>
              <li className={styles.improvementItem}>
                <p>
                  Enabled smooth collaboration across the team, measured by a consistent CI/CD flow
                  for all developers, by setting up <b>AWS Amplify</b> with <b>Amazon Cognito</b>{' '}
                  (Google OAuth), linting, testing, and a <b>GitHub branching policy</b> from
                  scratch. <span className={styles.impactLabel}>↑ Team Flow</span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.milestone}>
          <div className={styles.milestoneLeft}>
            <h2>
              2021<span className={styles.month}>.05</span> - 2022
              <span className={styles.month}>.07</span>
            </h2>
          </div>
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
              At Strata I worked on <b>gmb.io</b> and <b>Praxis</b> — a fitness video training
              platform for North American users. Stack: <b>Next.js</b>, <b>NestJS</b>,{' '}
              <b>PostgreSQL</b>, <b>TypeORM</b>, <b>Auth0</b>, <b>AWS Lambda</b>, <b>MUX</b>.
            </p>
            <ul>
              <li className={styles.improvementItem}>
                <p>
                  Improved video streaming quality across a wide range of devices, measured by
                  reduced buffering and format errors, by implementing automatic platform detection
                  that selects the optimal video codec and resolution for each client.{' '}
                  <span className={styles.impactLabel}>↑ Video Quality</span>
                </p>
              </li>
              <li className={styles.improvementItem}>
                <p>
                  Reduced the maintenance cost of the video upload pipeline, measured by the number
                  of AWS services needed to operate it, by simplifying the microservice architecture
                  and removing redundant steps.{' '}
                  <span className={styles.impactLabel}>↓ Ops Cost</span>
                </p>
              </li>
            </ul>
            <p className={styles.flowLabel}>Previous flow</p>
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
            <p className={styles.flowLabel}>Simplified flow</p>
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
              Also maintained an admin panel built with <b>react-admin</b>.
            </p>
          </div>
        </div>

        <div className={styles.milestone}>
          <div className={styles.milestoneLeft}>
            <h2>
              2018<span className={styles.month}>.07</span> - 2021
              <span className={styles.month}>.04</span>
            </h2>
          </div>
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
              At Nwave, an IoT company building smart parking sensors for UK clients, I worked as a
              Full Stack Web Developer on both frontend and backend systems managing{' '}
              <b>20,000 IoT devices</b>.
            </p>
            <ul>
              <li className={styles.improvementItem}>
                <p>
                  Built a <b>REST API</b> service handling full CRUD operations for 20,000 devices,
                  achieving <b>99% test coverage</b>, by implementing it with <b>AWS Lambda</b>,{' '}
                  <b>Node.js/TypeScript</b>, <b>PostgreSQL</b> (<b>PostGIS</b>),{' '}
                  <b>AWS API Gateway</b>, and <b>AWS Cognito</b>, tested with <b>Mocha</b>,{' '}
                  <b>Chai</b>, and the <b>AWS SDK</b>.{' '}
                  <span className={styles.impactLabel}>↑ Reliability</span>
                </p>
              </li>
              <li className={styles.improvementItem}>
                <p>
                  Improved infrastructure stability and enabled repeatable environment deployments,
                  measured by one-command infrastructure setup, by adopting <b>AWS CDK</b> as
                  infrastructure-as-code — replacing manual cloud configuration with
                  version-controlled, reproducible stacks.{' '}
                  <span className={styles.impactLabel}>↑ DevOps</span>
                </p>
              </li>
              <li className={styles.improvementItem}>
                <p>
                  Improved rendering performance of 20,000 map markers in the <b>SPlace PWA</b>{' '}
                  mobile app, eliminating lag on low-end devices, by implementing marker clustering,
                  removing unnecessary recalculations, and optimizing the <b>Ionic/Angular</b>{' '}
                  rendering pipeline. <span className={styles.impactLabel}>↑ Performance</span>
                </p>
              </li>
            </ul>
            <p>
              Also developed and maintained an admin dashboard for monitoring sensor statuses, built
              with <b>React</b>, <b>Redux-Saga</b>, <b>TypeScript</b>, <b>Material-UI</b>,{' '}
              <b>AWS Amplify</b>, and the <b>Google Maps API</b>. The app had full unit and
              end-to-end test coverage, integrated with <b>Bitbucket CI/CD</b> and <b>Sentry</b>.
            </p>
            <p className={styles.flowLabel}>Architecture diagram</p>
            <div className={styles.flowImage}>
              <a href={dmFlow.src} target="_blank" rel="noreferrer">
                <Image src={dmFlow} alt="dm" width={400} height={370} layout="responsive" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.milestone}>
          <div className={styles.milestoneLeft}>
            <h2>
              2017<span className={styles.month}>.05</span> - 2018
              <span className={styles.month}>.06</span>
            </h2>
          </div>
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
              At AdGuard, one of the most popular ad blockers, I contributed to both the main
              product and additional browser extensions, written in <b>JavaScript (ES6)</b>:
            </p>
            <ul>
              <li>
                <p>
                  An extension that helps users read website content hidden behind ad-blocker
                  detection walls (not deployed, available in a{' '}
                  <a
                    href="https://github.com/AdguardTeam/Recovery"
                    target="_blank"
                    rel="noreferrer"
                  >
                    repository
                  </a>
                  ).
                </p>
              </li>
              <li>
                <p>
                  Contributions to <b>AdGuard Assistant</b> (
                  <a
                    href="https://github.com/AdguardTeam/AdguardAssistant"
                    target="_blank"
                    rel="noreferrer"
                  >
                    repository
                  </a>
                  ).
                </p>
              </li>
            </ul>
            <p>
              Also worked on the front-end of the{' '}
              <a href="https://adguard.com" target="_blank" rel="noreferrer">
                AdGuard
              </a>{' '}
              website using <b>Vue</b>, <b>Vuex</b>, and <b>PostCSS</b>.
            </p>
          </div>
        </div>

        <div className={styles.milestone}>
          <div className={styles.milestoneLeft}>
            <h2>
              2015<span className={styles.month}>.05</span> - 2017
              <span className={styles.month}>.05</span>
            </h2>
          </div>
          <div className={styles.text}>
            <p>
              Worked as a Web Developer for several companies, building and maintaining websites
              using <b>PHP</b>, <b>WordPress</b>, <b>JavaScript</b>, and <b>jQuery</b>. Started
              working with modern JavaScript frameworks, including <b>AngularJS</b> (Angular 1), and
              built single-page applications. Gained experience with real-time features using{' '}
              <b>WebSockets</b> and created interactive <b>SVG</b> animations for various projects.
              Automated build and deployment processes using <b>Grunt</b> and <b>Gulp</b>, which
              improved development consistency across environments.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
