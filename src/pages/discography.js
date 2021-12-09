import DiscographyComponent from '../components/discography/';
import Layout from '../components/layout';
import Albums from '../components/albums/';

export default function Discography() {
  return (
    <Layout>
      <DiscographyComponent />
      <Albums />
    </Layout>
  );
}
