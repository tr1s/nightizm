import Image from 'next/image';
import Layout from '../components/layout';
import Helmet from '../components/helmet';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

import {
  Wrapper,
  Logo,
  Posts,
  Post,
  PostLink,
  PostTitle,
  PostDescription,
} from '../styles/styled-pages/styled-writings';

export default function Blog({ allPostsData }) {
  const publishedPosts = allPostsData.filter((post) => post.published === true);

  return (
    <Layout>
      <Helmet
        title="Writings"
        description="A list of blog posts exploring the thoughts of Nightizm."
      />

      <Wrapper>
        <div className="double-header">
          <h1 className="title">WRITINGS</h1>
          <h1 className="subtitle">ON THE WALL</h1>
        </div>

        <Logo>
          <Image src="/logo-white.png" width="66" height="66" alt="" />
        </Logo>

        <Posts>
          {publishedPosts.map(({ id, date, title, excerpt }) => {
            return (
              <Post key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`} passHref>
                  <PostLink>
                    <small>
                      <Date dateString={date} blogList />
                    </small>
                    <PostTitle>{title}</PostTitle>
                    <PostDescription>{excerpt}</PostDescription>
                  </PostLink>
                </Link>
              </Post>
            );
          })}
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
