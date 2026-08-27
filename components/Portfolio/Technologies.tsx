import styles from './Portfolio.module.css';

type Technology = {
  name: string;
  file?: string;
};

const TECH_GROUPS: { title: string; items: Technology[] }[] = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', file: 'javascript' },
      { name: 'TypeScript', file: 'typescript' },
      { name: 'Python', file: 'python' },
      { name: 'Java', file: 'java' },
      { name: 'PHP', file: 'php' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', file: 'react' },
      { name: 'Vue.js', file: 'vuejs' },
      { name: 'AngularJS', file: 'angularjs' },
      { name: 'Sass', file: 'sass' },
      { name: 'Tailwind CSS', file: 'tailwindcss' },
      { name: 'MUI', file: 'mui' },
      { name: 'TanStack', file: 'tanstack' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Next.js', file: 'nextjs' },
      { name: 'Node.js', file: 'nodejs' },
      { name: 'NestJS', file: 'nestjs' },
      { name: 'GraphQL', file: 'graphql' },
      { name: 'Apollo', file: 'apollo' },
      { name: 'Swagger', file: 'swagger' },
      { name: 'TypeORM', file: 'typeorm' },
      { name: 'Sequelize', file: 'sequelize' },
      { name: 'WebSockets' },
    ],
  },
  {
    title: 'Databases & Caching',
    items: [
      { name: 'PostgreSQL', file: 'postgresql' },
      { name: 'Redis', file: 'redis' },
      { name: 'Database Migrations' },
      { name: 'Query Optimization' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS', file: 'aws' },
      { name: 'GCP', file: 'gcp' },
      { name: 'Docker', file: 'docker' },
      { name: 'Git', file: 'git' },
      { name: 'Infrastructure as Code' },
      { name: 'Automated Deployments' },
      { name: 'GHCR' },
    ],
  },
  {
    title: 'AI & Automation',
    items: [
      { name: 'Claude', file: 'claude' },
      { name: 'Grok', file: 'grok' },
      { name: 'Codex', file: 'codex' },
      { name: 'LangChain' },
      { name: 'MCP' },
      { name: 'RAG' },
      { name: 'AI Agents' },
    ],
  },
  {
    title: 'Mobile',
    items: [
      { name: 'Ionic', file: 'ionic' },
      { name: 'Capacitor', file: 'capacitor' },
      { name: 'React Native', file: 'reactnative' },
    ],
  },
  {
    title: 'Tools & Collaboration',
    items: [
      { name: 'Sentry', file: 'sentry' },
      { name: 'Storybook', file: 'storybook' },
      { name: 'Playwright', file: 'playwright' },
      { name: 'Unit Testing' },
      { name: 'Integration Testing' },
      { name: 'Test Automation' },
      { name: 'Linting' },
    ],
  },
  {
    title: 'Architecture & Engineering',
    items: [
      { name: 'Microservices' },
      { name: 'Microfrontends' },
      { name: 'CI/CD' },
      { name: 'Serverless' },
      { name: 'High-Load Systems' },
      { name: 'API Design' },
      { name: 'System Design' },
    ],
  },
  {
    title: 'Visualization & Maps',
    items: [
      { name: 'Google Maps', file: 'googlemaps' },
      { name: 'Mapbox', file: 'mapbox' },
      { name: 'SVG' },
      { name: 'Charts' },
    ],
  },
];

export default (): JSX.Element => (
  <div className={styles.techSection}>
    <p className={styles.sectionLabel}>Technologies</p>
    {TECH_GROUPS.map((group) => (
      <div key={group.title} className={styles.techGroup}>
        <p className={styles.techGroupTitle}>{group.title}: </p>
        <div className={styles.techBadges}>
          {group.items.map((tech) => (
            <span key={tech.name} className={styles.techChip}>
              {tech.file && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={`/images/badges/${tech.file}.svg`} alt="" height={14} loading="lazy" />
              )}
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);
