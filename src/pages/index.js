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
          <h1 style={{ color: 'var(--black-200)' }}>~ ?! ~</h1>
          <h2>Hello... World 🌙 🗺</h2>
          <p>
            ...I’m almost ready to return, I promise. Meanwhile, welcome to my{' '}
            <a
              href="https://www.google.com/search?q=digital+garden&oq=digital+garden&aqs=chrome..69i57j0i512l9.2023j0j7&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              digital garden
            </a>{' '}
            💻 🪴 have a look around...
          </p>
          <blockquote>
            <p>
              One can have no smaller or greater mastery than mastery of oneself.{' '}
              <strong>― Leonardo da Vinci**</strong>
            </p>
          </blockquote>
          <p
            style={{
              fontSize: '1.6rem',
              fontStyle: 'italic',
              fontFamily: 'var(--font-body)',
              color: 'var(--grey-200)',
              fontWeight: 'bold',
              textAlign: 'left',
            }}
          >
            2021<span style={{ color: 'var(--grey-300)' }}> ~ </span>12
            <span style={{ color: 'var(--grey-300)' }}> ~ </span>08
          </p>
        </Content>
      </Article>

      <HeroTitle />
    </Layout>
  );
}
