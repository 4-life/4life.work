type Xy = { x: number; y: number };

export const themeDefault = 'default';
export const themeWhite = 'white';

export type SkillModel = {
  id: string;
  gridImage: string[];
  copy: string;
  story: string;
  color: string;
  textColor: string;
  scale: number;
  url: string;
  theme?: typeof themeDefault | typeof themeWhite;
  corners?: Xy[];
  positionX?: number;
  positionY?: number;
  image?: HTMLImageElement;
};

const model: { content: SkillModel[]; layout: number[] } = {
  content: [
    {
      id: 'js',
      gridImage: ['libs/js.png'],
      copy: 'JavaScript',
      story:
        'Advanced knowledge of JavaScript (ES6+) with solid experience in asynchronous programming, API integration, modular architecture, and performance optimization.\n\nWrite clean, efficient, and well-structured code.',
      color: '#f1ee00',
      textColor: '#000000',
      scale: 0.7,
      url: 'tc39.es/',
      theme: 'white',
    },
    {
      id: 'ionic',
      gridImage: ['libs/ionic.png'],
      copy: 'Ionic',
      story:
        'Built two hybrid Android apps using Ionic and AngularJS, with Google Maps integration for sensor positioning. Added CodePush for over-the-air updates.\n\nOne app was published on Google Play.',
      color: '#b8d3ff',
      textColor: '#4e8ef7',
      scale: 0.7,
      url: 'ionicframework.com/',
      theme: 'white',
    },
    {
      id: 'me',
      gridImage: ['me.png'],
      copy: '',
      story:
        'Hi, I\'m Pavel\n\nFull-stack web developer with 10+ years of experience building web and mobile applications.\n\nComfortable across the entire stack — from database design and backend APIs to frontend UIs. Check out my portfolio for selected projects.',
      color: '#fff',
      textColor: '#000000',
      scale: 1,
      url: '4life.work/portfolio',
      theme: 'white',
    },
    {
      id: 'postgres',
      gridImage: ['libs/postgres.png'],
      copy: 'PostgresSQL',
      story:
        'PostgreSQL is my go-to database. I use pgAdmin 4 for manual access, pg-promise for lightweight Node.js queries, and TypeORM or Sequelize as ORMs depending on the project.',
      color: '#336791',
      textColor: '#ffffff',
      scale: 0.7,
      url: 'postgresql.org/',
    },
    {
      id: 'angular',
      gridImage: ['libs/angular.png'],
      copy: 'AngularJS',
      story:
        'Used AngularJS in several projects, including Ionic mobile apps. Familiar with directives, services, and the MVC pattern that shaped my early approach to frontend architecture.',
      color: '#b4b4b4',
      textColor: '#c4473a',
      scale: 0.7,
      url: 'angularjs.org/',
    },
    {
      id: 'nodejs',
      gridImage: ['libs/nodejs.png'],
      copy: 'NodeJS',
      story:
        'My primary backend runtime. I build REST APIs with Express for lightweight services and NestJS for structured, enterprise-scale projects.\n\nAlso use Node.js in AWS Lambda for serverless endpoints.',
      color: '#303030',
      textColor: '#ffffff',
      scale: 0.7,
      url: 'nodejs.org/',
    },
    {
      id: 'github',
      gridImage: ['libs/github.png'],
      copy: 'CI/CD',
      story:
        'Integrate CI/CD into every project. Use GitHub Actions for GitHub-hosted repos and Bitbucket Pipelines for Bitbucket. Automate linting, testing, building, and deployments on every push.',
      color: '#002f67',
      textColor: '#ffffff',
      scale: 0.7,
      url: 'github.com/',
    },
    {
      id: 'react',
      gridImage: ['libs/react.png'],
      copy: 'React',
      story:
        'My main frontend framework for the past several years. Work with hooks, context, and Redux for state management. Also use React Query for server state and component libraries like MUI.',
      color: '#222',
      textColor: '#00d8ff',
      scale: 0.7,
      url: 'react.dev/',
    },
    {
      id: 'nextjs',
      gridImage: ['libs/next.png'],
      copy: 'NextJS',
      story:
        'My preferred React framework for production web apps — this website is built with Next.js. Use it for SSR, SSG, and API routes, deploying via Vercel or self-hosted setups.',
      color: '#adadadff',
      textColor: '#333',
      scale: 0.7,
      url: 'nextjs.org/',
      theme: 'white',
    },
    {
      id: 'aws',
      gridImage: ['libs/aws.png'],
      copy: 'Microservices',
      story:
        'Production experience with AWS: S3, EC2, Lambda, Cognito, Amplify, IAM, SNS, RDS and Kinesis.\n\nMigrated a monolith architecture to AWS microservices. Use AWS CDK for infrastructure as code and deployments.',
      color: '#04273a',
      textColor: '#ffffff',
      scale: 0.7,
      url: 'aws.amazon.com/',
      theme: themeDefault,
    },
    {
      id: 'mocha',
      gridImage: ['libs/mocha.png'],
      copy: 'Tests',
      story:
        'Testing is part of my regular development workflow. I write unit and integration tests using Mocha + Chai, and implement end-to-end testing with TestCafe to ensure reliability and production stability.',
      color: '#493449ff',
      textColor: '#ffffff',
      scale: 0.7,
      url: 'mochajs.org/',
      theme: 'default',
    },
    {
      id: 'typescript',
      gridImage: ['libs/typescript.png'],
      copy: 'Typescript',
      story: `Can't imagine a JavaScript project without a type system. Strict typing prevents entire categories of bugs at compile time. Use TypeScript across the full stack \u2014 Node.js backends, React frontends, and mobile apps.`,
      color: '#007acc',
      textColor: '#ffffff',
      scale: 0.7,
      url: 'typescriptlang.org/',
    },
    {
      id: 'vue',
      gridImage: ['libs/vue.png'],
      copy: 'Vue',
      story: 'I created one production website using Vue',
      color: '#e8fff9',
      textColor: '#435466',
      scale: 0.7,
      url: 'vuejs.org/',
    },
  ],
  layout: [
    // eslint-disable-next-line prettier/prettier
    143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132,
    100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 131,
    101, 64, 63, 62, 61, 60, 59, 58, 57, 56, 89, 130,
    102, 65, 36, 35, 34, 33, 32, 31, 30, 55, 88, 129,
    103, 66, 37, 16, 15, 14, 13, 12, 29, 54, 87, 128,
    104, 67, 38, 17, 4, 3, 2, 11, 28, 53, 86, 127,
    105, 68, 39, 18, 5, 0, 1, 10, 27, 52, 85, 126,
    106, 69, 40, 19, 6, 7, 8, 9, 26, 51, 84, 125,
    107, 70, 41, 20, 21, 22, 23, 24, 25, 50, 83, 124,
    108, 71, 42, 43, 44, 45, 46, 47, 48, 49, 82, 123,
    109, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 122,
    110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121
  ],
};

export default model;
