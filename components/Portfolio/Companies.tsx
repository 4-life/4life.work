import Image from 'next/image';
import styles from './Portfolio.module.css';

import oldFlow from '../../public/images/aws-flow/old.png';
import newFlow from '../../public/images/aws-flow/new.png';
import dmFlow from '../../public/images/aws-flow/dm.png';

export default (): JSX.Element => (
  <div className={styles.timeline}>
    <div className={styles.milestone}>
      <div className={styles.milestoneLeft}>
        <h2>
          2026<span className={styles.month}>.05</span> -{' '}
          <span className={styles['to-date']}>to date</span>
        </h2>
      </div>
      <div className={styles.text}>
        <p>
          <a
            href="https://meshintex.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.iconLink}
          >
            <Image src="/images/companies/meshintex.png" alt="Meshintex" width={28} height={28} />
            <span>Meshintex, Inc.</span>
          </a>
        </p>
        <p>
          At Meshintex, I built a dashboard that works for any kind of IoT setup, with a backend API
          that takes in live sensor data and designed the data-processing architecture to scale to
          thousands of connected sensors using asynchronous queues and background processing (
          <b>SNS/SQS</b> + <b>Lambda</b>). It shows real-time charts and maps with lots of markers
          on them using <b>MapBox</b>. The API and dashboard are highly customizable and scalable
          supporting different sensor configurations. Security was a priority the whole way through.
        </p>
        <p>
          Implemented an <b>MCP</b>-based AI service for automated <b>CI/CD</b> error resolution.
          The service receives <b>Sentry</b> errors and <b>CI/CD</b> test failures, uses the{' '}
          <b>Claude AI API</b> to analyze errors, retrieves relevant application documentation from{' '}
          <b>Confluence</b>, and attempts to implement a fix in a dedicated <b>Git</b> branch. Also
          MCP creates <b>Jira</b> tickets with the error description, proposed fix, and links to the
          branch and documentation. Implemented configurable retry limits and cost controls to
          prevent excessive AI API usage and runaway automated attempts. Once the pipeline succeeds,
          the changes are pushed to the branch for developer review, keeping humans in the loop
          before merging.
        </p>
        <ul>
          <li className={styles.improvementItem}>
            <p>
              Kept the map view smooth with large numbers of sensors on screen, measured by lag-free
              pan and zoom, by implementing marker clustering.
              <span className={styles.impactLabel}>↑ Performance</span>
            </p>
          </li>
          <li className={styles.improvementItem}>
            <p>
              Kept ingestion fast and stable under bursty sensor traffic, measured by zero dropped
              readings during spikes, by buffering incoming messages through an <b>SQS</b> queue
              ahead of processing.
              <span className={styles.impactLabel}>↑ Performance</span>
            </p>
          </li>
          <li className={styles.improvementItem}>
            <p>
              Built role-based auth across the dashboard and API. Hardened the app against{' '}
              <b>XSS/CSRF</b>, and <b>SSRF</b> — sanitizing/escaping rendered input, validating
              request origins, and restricting outbound requests from the server.
              <span className={styles.impactLabel}>↑ Security</span>
            </p>
          </li>
        </ul>
        <p>
          Also designed the full architecture for{' '}
          <a
            href="https://xn--wxa.digital/"
            target="_blank"
            rel="noreferrer"
            className={styles.inlineLink}
          >
            <Image
              src="/images/companies/lambda-digital.png"
              alt="Lambda Digital"
              width={14}
              height={14}
            />
            Lambda Digital
          </a>
          , a crypto payment service. Each chain gets watched by its own container, which picks up
          transactions and sends webhooks to merchants — built with security in mind. On top of that
          sits a <b>GraphQL API</b> backed by <b>PostgreSQL</b>. Everything runs in <b>Docker</b>{' '}
          and gets built and deployed automatically from one infra repo that manages all the
          containers. Developed AI assistant bot with <b>RAG</b> and <b>LangChain</b> to help
          merchants with their questions and issues.
        </p>
        <ul>
          <li className={styles.improvementItem}>
            <p>
              Made each blockchain integration independently deployable and restartable, measured by
              one chain&apos;s outage never affecting the others, by running a dedicated watcher
              container per chain (<b>EVM</b>, <b>TRON</b>, <b>TON</b>, etc), orchestrated from a
              single infra repo with health checks and per-service memory limits.{' '}
              <span className={styles.impactLabel}>↑ Reliability</span>
            </p>
          </li>
          <li className={styles.improvementItem}>
            <p>
              Ensured merchant webhooks aren&apos;t lost or duplicated under load, measured by
              consistent delivery during chain re-syncs, by moving webhook dispatch into a dedicated
              worker backed by a <b>BullMQ</b>/<b>Redis</b> queue instead of firing requests inline.{' '}
              <span className={styles.impactLabel}>↑ Reliability</span>
            </p>
          </li>
          <li className={styles.improvementItem}>
            <p>
              Cut manual deploy steps to zero, measured by every push building and shipping on its
              own, by wiring up CI/CD that builds each service&apos;s Docker image and publishes it
              to <b>GHCR</b> for the whole container fleet.
              <span className={styles.impactLabel}>↑ Dev Speed</span>
            </p>
          </li>
          <li className={styles.improvementItem}>
            <p>
              Optimized AI bot under free-tier limits by implementing caching and using the{' '}
              <b>Grok</b> model, reducing redundant API requests and overall usage while maintaining
              a responsive user experience.
              <span className={styles.impactLabel}>↓ Cost</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.milestone}>
      <div className={styles.milestoneLeft}>
        <h2>
          2022<span className={styles.month}>.07</span> - 2026
          <span className={styles.month}>.05</span>
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
          At Kupsilla I worked on a cloud chemical lab automation platform, and a human genetic
          research application.
        </p>
        <p>
          Conducted <b>technical interviews</b> for junior and mid-level candidates, performed{' '}
          <b>code reviews</b>, and <b>mentored</b> developers to keep code quality high and support
          team growth.
        </p>
        <p>
          Created a{' '}
          <a
            href="https://github.com/4-life/hello-world"
            target="_blank"
            rel="noreferrer"
            className={styles.inlineLink}
          >
            <Image src="/icons/git.svg" alt="GitHub" width={14} height={14} />
            GraphQL boilerplate
          </a>{' '}
          to fast develop MVPs of any complexity quickly with a focus on scalability. Its key
          feature is a single source of truth for all layers (backend, frontend, database/ORM,
          swagger/playground)
        </p>
        <p>
          Worked with <b>Python</b> and <b>Java</b>. While they are not my primary langs, I have
          used them for application development, integrations, and maintaining existing projects.
        </p>
        <p>
          <b>Strateos</b> – A <b>Cloud Lab Automation-as-a-Service</b> platform where users remotely
          run real <b>chemical reactions via robotic systems</b>.
        </p>
        <ul>
          <li className={styles.improvementItem}>
            <p>
              Improved scalability and independent deployability of a large React codebase, measured
              by separate release cycles per team, by re-architecting the frontend into{' '}
              <b>microfrontends</b> using <b>React</b>, <b>TypeScript</b>, <b>SCSS</b>, and{' '}
              <b>Storybook</b>.<span className={styles.impactLabel}>↑ Scalability</span>
            </p>
          </li>
          <li className={styles.improvementItem}>
            <p>
              Increased development speed across teams, measured by reduced duplication of UI work,
              by building shared UI libraries and publishing them to a private <b>NPM registry</b>{' '}
              used by all microfrontend modules.
              <span className={styles.impactLabel}>↑ Dev Speed</span>
            </p>
          </li>
          <li className={styles.improvementItem}>
            <p>
              Built a complex chemical reaction constructor — a heavy custom UI component that lets
              users visually design lab reactions — and packaged it as a standalone NPM module to
              keep the main app lightweight and maintainable.
              <span className={styles.impactLabel}>↑ Maintainability</span>
            </p>
          </li>
        </ul>
        <p>
          <a
            href="https://genscience.com/genr8r/"
            target="_blank"
            rel="noreferrer"
            className={styles.inlineLink}
          >
            <Image src="/icons/external-link.svg" alt="GeneScience" width={14} height={14} />
            GeneScience
          </a>{' '}
          – A web application for searching, analyzing, and visualizing scientific parameters
          related to human genes. I designed the application architecture and developed complex data
          visualization components capable of handling large datasets and data-intensive rendering.
        </p>
        <p>
          Built the application using <b>Next.js</b> with SSR, <b>React</b>, <b>TanStack Query</b>,{' '}
          <b>TanStack Table</b>, and <b>SVG</b>-based visualizations. Implemented efficient data
          loading and pagination, optimized database queries and data access patterns, and improved
          rendering performance for complex visualizations and large datasets.
        </p>
        <ul>
          <li className={styles.improvementItem}>
            <p>
              Reduced initial page load time for data-heavy genomic pages by implementing <b>SSR</b>{' '}
              and enabling <b>gzip compression</b> on API responses.{' '}
              <span className={styles.impactLabel}>↑ Performance</span>
            </p>
          </li>
          <li className={styles.improvementItem}>
            <p>
              Kept AWS infrastructure costs within the free tier, measured by zero hosting spend, by
              deploying on <b>AWS Amplify</b> and managing build-minute usage within free quota
              limits. <span className={styles.impactLabel}>↓ Cost</span>
            </p>
          </li>
          <li className={styles.improvementItem}>
            <p>
              Built a complex interactive view combining a data plot and a collapsible rows table in
              one synchronized layout using <b>nivo.rocks</b>, improving data exploration for
              researchers. <span className={styles.impactLabel}>↑ UX</span>
            </p>
          </li>
          <li className={styles.improvementItem}>
            <p>
              Enabled smooth collaboration across the team, measured by a consistent CI/CD flow for
              all developers, by setting up <b>AWS Amplify</b> with <b>Amazon Cognito</b> (Google
              OAuth), linting, testing, and a <b>GitHub branching policy</b> from scratch.{' '}
              <span className={styles.impactLabel}>↑ Team Flow</span>
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
          At Strata I worked on a{' '}
          <a href="https://gmb.io/" target="_blank" rel="noreferrer">
            video training
          </a>{' '}
          platform for North American users. Stack: <b>Next.js</b>, <b>NestJS</b>, <b>PostgreSQL</b>
          , <b>TypeORM</b>, <b>Auth0</b>, <b>AWS Lambda</b>, <b>MUX</b>.
        </p>
        <ul>
          <li className={styles.improvementItem}>
            <p>
              Improved video streaming quality across a wide range of devices, measured by reduced
              buffering and format errors, by implementing automatic platform detection that selects
              the optimal video codec and resolution for each client.{' '}
              <span className={styles.impactLabel}>↑ Video Quality</span>
            </p>
          </li>
          <li className={styles.improvementItem}>
            <p>
              Reduced the maintenance cost of the video upload pipeline, measured by the number of
              AWS services needed to operate it, by simplifying the microservice architecture and
              removing redundant steps. <span className={styles.impactLabel}>↓ Ops Cost</span>
            </p>
          </li>
        </ul>
        <p className={styles.flowLabel}>Previous flow</p>
        <div className={styles.flowImage}>
          <a href={oldFlow.src} target="_blank" rel="noreferrer">
            <Image src={oldFlow} alt="Old AWS flow" width={750} height={390} layout="responsive" />
          </a>
        </div>
        <p className={styles.flowLabel}>Simplified flow</p>
        <div className={styles.flowImage}>
          <a href={newFlow.src} target="_blank" rel="noreferrer">
            <Image src={newFlow} alt="New AWS flow" width={475} height={350} layout="responsive" />
          </a>
        </div>
        <p>
          Maintained and enhanced an admin panel built with <b>React Admin</b>, improving
          application performance and optimizing data-intensive workflows. Refactored existing code
          and architecture, upgraded core libraries and dependencies, resolved compatibility issues,
          and introduced improvements to maintainability, stability, and overall user experience.
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
          At Nwave, an IoT company building smart parking sensors for UK clients, I worked as a Full
          Stack Web Developer on both frontend and backend systems managing{' '}
          <b>20,000 IoT devices</b>.
        </p>

        <p>
          I designed and developed a new REST API service for device management, using{' '}
          <b>PostgreSQL</b> on <b>AWS RDS</b>, <b>API Gateway</b>, <b>AWS Lambda</b>,{' '}
          <b>Amazon SNS</b>, <b>CloudWatch</b>, <b>Swagger/OpenAPI</b>, and automated client code
          generation. I designed the infrastructure and deployment pipeline using <b>AWS CDK</b>{' '}
          with <b>TypeScript</b>, supporting multiple environments and automated deployments. I also
          analyzed infrastructure costs and optimized the architecture using the AWS Pricing
          Calculator to reduce operational expenses.
        </p>
        <p>
          On the frontend, I developed an administrative dashboard for managing IoT devices and
          monitoring sensor statistics using <b>React</b>, <b>React Charts</b>, and{' '}
          <b>Google Maps</b>. I also upgraded the company&apos;s mobile application to the latest{' '}
          <b>Ionic</b> version and migrated the app to <b>Capacitor</b>.
        </p>
        <ul>
          <li className={styles.improvementItem}>
            <p>
              Built a <b>REST API</b> service handling full CRUD operations for 20,000 devices,
              achieving <b>99% test coverage</b>, by implementing it with <b>AWS Lambda</b>,{' '}
              <b>Node.js/TypeScript</b>, <b>PostgreSQL</b> (<b>PostGIS</b>), <b>AWS API Gateway</b>,
              and <b>AWS Cognito</b>, tested with <b>Mocha</b>, <b>Chai</b>, and the <b>AWS SDK</b>.{' '}
              <span className={styles.impactLabel}>↑ Reliability</span>
            </p>
          </li>
          <li className={styles.improvementItem}>
            <p>
              Improved infrastructure stability and enabled repeatable environment deployments,
              measured by one-command infrastructure setup, by adopting <b>AWS CDK</b> as
              infrastructure-as-code — replacing manual cloud configuration with version-controlled,
              reproducible stacks. <span className={styles.impactLabel}>↑ DevOps</span>
            </p>
          </li>
          <li className={styles.improvementItem}>
            <p>
              Improved rendering performance of 20,000 map markers in the{' '}
              <a
                href="https://play.google.com/store/apps/details?id=io.nwave.splacing2&hl=en_US"
                target="_blank"
                rel="noreferrer"
                className={styles.inlineLink}
              >
                <Image src="/icons/play.svg" alt="Google Play" width={14} height={14} />
                <b>SPlace PWA</b>
              </a>{' '}
              mobile app, eliminating lag on low-end devices, by implementing marker clustering,
              removing unnecessary recalculations, and optimizing the <b>Ionic/Angular</b> rendering
              pipeline. <span className={styles.impactLabel}>↑ Performance</span>
            </p>
          </li>
        </ul>
        <p className={styles.flowLabel}>Architecture diagram that I developed</p>
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
          At AdGuard, one of the most popular ad blockers, I contributed to both the main product
          and additional browser extensions, written in <b>JavaScript (ES6)</b>:
        </p>
        <ul>
          <li>
            <p>
              An extension that helps users read website content hidden behind ad-blocker detection
              walls (not deployed, available in a{' '}
              <a href="https://github.com/AdguardTeam/Recovery" target="_blank" rel="noreferrer">
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
          Worked as a Web Developer for several companies, building and maintaining websites using{' '}
          <b>PHP</b>, <b>WordPress</b>, <b>JavaScript</b>, and <b>jQuery</b>. Started working with
          modern JavaScript frameworks, including <b>AngularJS</b> (Angular 1), and built
          single-page applications. Gained experience with real-time features using{' '}
          <b>WebSockets</b> and created interactive <b>SVG</b> animations for various projects.
          Automated build and deployment processes using <b>Grunt</b> and <b>Gulp</b>, which
          improved development consistency across environments.
        </p>
      </div>
    </div>
  </div>
);
