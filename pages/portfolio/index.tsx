import Footer from '../../components/Footer';
import Head from '../../components/Head';
import Portfolio from '../../components/Portfolio';

export default () => {
  return (
    <div className="bg">
      <Head title="Portfolio" />
      <Portfolio />
      <Footer />
    </div>
  );
};
