import Footer from '../components/Footer';
import Home from '../components/Home';
import Head from '../components/Head';

// eslint-disable-next-line no-console
console.log(
  '%c       ',
  'font-size: 300px; background: url(https://4life.work/images/logo.png) no-repeat;',
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
