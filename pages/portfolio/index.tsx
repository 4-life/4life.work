import Footer from '../../components/Footer';
import Head from '../../components/Head';
import Portfolio from '../../components/Portfolio';

export default ({ version }) => {
  return (
    <div className="bg">
      <Head title="Portfolio" />
      <Portfolio />
      <Footer version={version} />
    </div>
  );
};

export function getServerSideProps() {
  return { props: { version: process.env.npm_package_version } };
}
