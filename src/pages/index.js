import Head from 'next/head'; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/Layout';

import { Main } from './styles/index-styled';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home() {
  return (
    <Layout>
      <Main>
        <div className="double-header">
          <h1 className="title">SEIZE the NIGHT</h1>
          <h1 className="subtitle">NIGHTIZM</h1>
          <p>what the fuck</p>
        </div>
      </Main>
    </Layout>
  );
}
