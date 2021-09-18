import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Spacer from '../../components/spacer';
import Date from '../../components/date';

import { Article, Content } from '../../pages-styled/post-styled';

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
      <Spacer size={160} axis="vertical" />
      <Article>
        <h1>{postData.title}</h1>
        <Date dateString={postData.date} />
        <Content
          className="inner-wrapper"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </Article>
    </Layout>
  );
}
