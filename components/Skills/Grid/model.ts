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
      id: 'aws',
      gridImage: ['libs/aws.png'],
      copy: 'Microservices',
      story:
        'I have production expirence with Amazon Web Services such as S3, EC2, Lambda, Cognito, Amplify, IAM, SNS, RDS and Kinesis.\n\nAlso I had migration experience from a monolith to AWS microservices.\n\n In the most cases I use AWS CDK to deploy project',
      color: '#04273a',
      textColor: '#ffffff',
      scale: 0.7,
      url: 'aws.amazon.com/',
      theme: themeDefault,
    },
    {
      id: 'ionic',
      gridImage: ['libs/ionic.png'],
      copy: 'Ionic',
      story:
        'I developed two hybrid mobile apps for Android. Apps use Google Maps for positioning sensors. I added code-push to deploy updates.\n\nOne app released on Google Play',
      color: '#dddddd',
      textColor: '#4e8ef7',
      scale: 0.7,
      url: 'ionicframework.com/',
      theme: 'white',
    },
    {
      id: 'js',
      gridImage: ['libs/js.png'],
      copy: 'JavaScript',
      story:
        'I use the last features of JS (ES6) such as DOM manipulating (without jQuery), async/await, modules etc.\n\nI know dynamic typing, how a garbage collector works, how to profile code in a browser console etc',
      color: '#f1ee00',
      textColor: '#000000',
      scale: 0.7,
      url: 'tc39.es/',
      theme: 'white',
    },
    {
      id: 'postgres',
      gridImage: ['libs/postgres.png'],
      copy: 'PostgresSQL',
      story:
        'The most of my projects use PostgresSQL database. I use pgadmin4 for manual access to DB, simple library pg-promise for NodeJS and popular ORMs: TypeORM and Sequelize',
      color: '#336791',
      textColor: '#ffffff',
      scale: 0.7,
      url: 'postgresql.org/',
    },
    {
      id: 'angular',
      gridImage: ['libs/angular.png'],
      copy: 'AngularJS',
      story: 'I have some projects on AngularJS, for example Ionic apps use AngularJS',
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
        'I have some projects on NodeJS. Some of this project use Express or NestJS. In some cases I use NodeJS in AWS Lambda as RestApi service',
      color: '#303030',
      textColor: '#ffffff',
      scale: 0.7,
      url: 'nodejs.org/',
    },
    {
      id: 'github',
      gridImage: ['libs/github.png'],
      copy: 'CI/CD',
      story: 'I always try to use CI/CD automation such as Github Actions or Bitbucket Pipeline',
      color: '#002f67',
      textColor: '#ffffff',
      scale: 0.7,
      url: 'github.com/',
    },
    {
      id: 'react',
      gridImage: ['libs/react.png'],
      copy: 'React',
      story: 'The last 3 years I use React on a front-end',
      color: '#222',
      textColor: '#00d8ff',
      scale: 0.7,
      url: 'facebook.github.io/react/',
    },
    {
      id: 'nextjs',
      gridImage: ['libs/next.png'],
      copy: 'NextJS',
      story: 'Current website based on NextJS',
      color: '#fff',
      textColor: '#333',
      scale: 0.7,
      url: 'nextjs.org/',
      theme: 'white',
    },
    {
      id: 'redux',
      gridImage: ['libs/redux.png'],
      copy: 'State Management',
      story: 'For a state management system in the most cases I use Saga',
      color: '#555555',
      textColor: '#999999',
      scale: 0.7,
      url: 'redux-saga.js.org/',
    },
    {
      id: 'mocha',
      gridImage: ['libs/mocha.png'],
      copy: 'Testing',
      story:
        'I always try to write code with tests. I use TestCafe for e2e testing and Mocha + Chai for unit and integrational testing',
      color: '#ffffff',
      textColor: '#333333',
      scale: 0.7,
      url: 'mochajs.org/',
      theme: 'white',
    },
    {
      id: 'typescript',
      gridImage: ['libs/typescript.png'],
      copy: 'Typescript',
      story:
        "I can't imagine Javascript code without typing sysytem. A lot of bugs can be avoided just using strict types. I use Typescript in any kind of project",
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
      color: '#cccccc',
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
