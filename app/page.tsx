import Skills from '@/components/Skills';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About me',
};

export default (): JSX.Element => {
  return <Skills version={process.env.version || 'unknown'} />;
};
