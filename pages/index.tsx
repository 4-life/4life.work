import Footer from '../components/Footer';
import Home from '../components/Home';
import Head from '../components/Head';

// eslint-disable-next-line no-console
console.log(
  '%c       ',
  'font-size: 300px; background: url(http://4life.work/logo.png) no-repeat;',
);

export default () => {
  return (
    <div className="bg">
      <Head />
      <Home />
      <Footer />
    </div>
  );
};
