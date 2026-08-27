import styles from './Portfolio.module.css';

const KEYWORD_GROUPS: { title: string; items: string[] }[] = [
  {
    title: 'Job titles',
    items: [
      'Senior Software Engineer',
      'Senior Full-Stack Engineer',
      'Backend Engineer',
      'Product Engineer',
      'IoT Software Engineer',
      'AI Application Engineer',
    ],
  },
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
  },
  {
    title: 'Frameworks',
    items: [
      'React',
      'Next.js',
      'Angular',
      'Vue.js',
      'Node.js',
      'NestJS',
      'Ionic',
      'React Native',
      'React Admin',
    ],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'PostGIS', 'DynamoDB', 'Redis', 'TypeORM', 'Drizzle ORM'],
  },
  {
    title: 'Cloud',
    items: [
      'AWS',
      'Lambda',
      'RDS',
      'API Gateway',
      'S3',
      'SNS',
      'SQS',
      'Cognito',
      'Amplify',
      'CloudWatch',
      'AWS CDK',
    ],
  },
  {
    title: 'Architecture',
    items: [
      'Distributed Systems',
      'Microservices',
      'Serverless',
      'Event-Driven Architecture',
      'High-Load Systems',
      'IoT',
      'API Design',
      'System Design',
    ],
  },
  {
    title: 'AI',
    items: ['Claude', 'Grok', 'LLM APIs', 'RAG', 'LangChain', 'MCP'],
  },
  {
    title: 'Domains',
    items: ['Browser Extensions', 'Web3', 'Crypto'],
  },
  {
    title: 'Contact',
    items: [
      'Email: hello@4life.work',
      'Telegram: https://t.me/js4life',
      'LinkedIn: http://linkedin.com/in/4-life',
      'GitHub: https://github.com/4-life/',
    ],
  },
];

export default (): JSX.Element => (
  <div className={styles.visuallyHidden}>
    {KEYWORD_GROUPS.map((group) => (
      <p key={group.title}>
        {group.title}: {group.items.join(', ')}
      </p>
    ))}
  </div>
);
