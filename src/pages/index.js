import Image from 'next/image';

import Helmet from '../components/helmet';
import Layout from '../components/layout';
import Spacer from '../components/spacer';

import heroImage from '/public/night.jpg';

import { TitleWrapper, Title, SubTitle, Logo } from '../styles/styled-pages/styled-index.js';

import { Article, Content } from '../styles/styled-pages/styled-post';

export default function Home() {
  return (
    <Layout>
      <Helmet title="The Lair" />
      <TitleWrapper>
        <SubTitle>SEIZE the NIGHT</SubTitle>
        <Title>NIGHTIZM</Title>
      </TitleWrapper>

      <Logo>
        <Image src="/logo-white.png" width="66" height="66" alt="" />
      </Logo>

      <Article>
        <Content className="inner-wrapper">
          <h2>Hello...</h2>
          <p>...I’m almost ready, I promise. Have a look around in the meantime.</p>
          <blockquote>
            <p>
              One can have no smaller or greater mastery than mastery of oneself.{' '}
              <strong>― Leonardo da Vinci**</strong>
            </p>
          </blockquote>
          <time style={{ textAlign: 'left', color: 'var(--blue)' }}>2021/12/08</time>
        </Content>
      </Article>

      <Spacer axis="vertical" size="40" />
    </Layout>
  );
}
