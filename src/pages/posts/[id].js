import Link from 'next/link';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';

import { Article, Title, Content, Back } from '../../styles/styled-pages/styled-post';

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
      <Article>
        <Title>{postData.title}</Title>
        <Date dateString={postData.date} />
        <Content
          className="inner-wrapper"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </Article>

      <Content className="inner-wrapper">
        <Link href="/writings" passHref>
          <Back>
            <h3>
              🔙 Head back to the <span>list of writings</span>.
            </h3>
          </Back>
        </Link>
      </Content>
    </Layout>
  );
}
