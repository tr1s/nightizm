import Head from 'next/head'; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/layout';

import styles from './index.module.scss';

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
      <section className={styles.main}>
        <div className="double-header">
          <h1 className="title">SEIZE the NIGHT</h1>
          <h1 className="subtitle">NIGHTIZM</h1>
        </div>
      </section>
    </Layout>
  );
}
