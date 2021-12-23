import Image from 'next/image';

import HeroTitle from '../components/heroTitle/heroTitle';

import Helmet from '../components/helmet';
import Layout from '../components/layout';

import { Logo } from '../styles/styled-pages/styled-index.js';

import { Article, Content } from '../styles/styled-pages/styled-post';

export default function Home() {
  return (
    <Layout>
      <Helmet title="The Lair" />

      <Logo>
        <Image src="/logo-white.png" width="66" height="66" alt="" />
      </Logo>

      <Article homepage>
        <Content className="inner-wrapper" homepage>
          <h2>Hello World... 🗺</h2>
          <p>
            ...I’m almost ready to return, finally. Meanwhile, welcome to my{' '}
            <a
              href="https://www.google.com/search?q=digital+garden&oq=digital+garden&aqs=chrome..69i57j0i512l9.2023j0j7&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              digital garden
            </a>{' '}
            🪴 – have a look around.
          </p>
          <blockquote>
            <p>
              One can have no smaller or greater mastery than mastery of oneself.{' '}
              <strong>― Leonardo da Vinci</strong>
            </p>
          </blockquote>
          <p
            style={{
              fontSize: '1.3rem',
              fontStyle: 'italic',
              fontFamily: 'var(--font-mono)',
              color: 'var(--grey-200)',
              fontWeight: 'bold',
              textAlign: 'left',
            }}
          >
            posted Dec. 8th 2021
          </p>
        </Content>
      </Article>

      <HeroTitle />
    </Layout>
  );
}
