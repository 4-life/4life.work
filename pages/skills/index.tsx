import Head from '../../components/Head';
import Skills from '../../components/Skills';

export default ({ version }) => {
  return (
    <>
      <Head title="My skills" />
      <Skills version={version} />
    </>
  );
};

export function getServerSideProps() {
  return { props: { version: process.env.npm_package_version } };
}
