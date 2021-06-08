import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/Date';

import { Wrapper, Posts, PostTitle, PostDescription, Post } from './styles/writings-styled';

export default function Blog({ allPostsData }) {
  const publishedPosts = allPostsData.filter((post) => post.published === true);

  return (
    <Layout>
      <Wrapper className="inner-wrapper">
        <div className="double-header">
          <h1 className="title">WRITINGS</h1>
          <h1 className="subtitle">ON THE WALL</h1>
        </div>

        <Posts>
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <Post key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>
                  <small>
                    <Date dateString={date} blogList />
                  </small>
                  <PostTitle>{title}</PostTitle>
                  <PostDescription>{excerpt}</PostDescription>
                </a>
              </Link>
            </Post>
          ))}
        </Posts>
      </Wrapper>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
