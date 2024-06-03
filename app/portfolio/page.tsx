import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default (): JSX.Element => {
  return (
    <div className="bg">
      <Portfolio />
      <Footer />
    </div>
  );
};
