import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';

import styles from './styles.module.scss';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={styles.article}>
        <h1>{postData.title}</h1>
        <Date dateString={postData.date} />
        <div
          className={`inner-wrapper ${styles.content}`}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}
